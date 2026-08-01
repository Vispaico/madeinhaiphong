import nodemailer from "nodemailer";

export const prerender = false;

const SMTP_HOST = process.env.SMTP_HOST || "smtp.hostinger.com";
const SMTP_PORT = parseInt(process.env.SMTP_PORT || "465");
const SMTP_USER = process.env.SMTP_USER || "hello@made-in-haiphong.com";
const SMTP_PASS = process.env.SMTP_PASS || "";
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "hello@made-in-haiphong.com";

function createTransport() {
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
}

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  try {
    const body = await request.json();
    const { name, email, message, hp } = body;

    // Honeypot trap: if filled, silently reject as spam
    if (hp) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { "content-type": "application/json" },
      });
    }

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Name, email, and message are required." }), {
        status: 400,
        headers: { "content-type": "application/json" },
      });
    }

    // Sanitize user input to prevent HTML injection in emails
    const sanitize = (str) => String(str).replace(/<[^>]*>/g, '');
    const safeName = sanitize(name).slice(0, 100);
    const safeEmail = String(email).replace(/[\r\n]/g, '').trim().slice(0, 320);
    const safeMessage = sanitize(message).slice(0, 5000);

    // Validate email format server-side
    if (!/.+@.+\..+/.test(safeEmail)) {
      return new Response(JSON.stringify({ error: "Invalid email address." }), {
        status: 400,
        headers: { "content-type": "application/json" },
      });
    }

    const transporter = createTransport();

    await transporter.sendMail({
      from: `"${safeName}" <${SMTP_USER}>`,
      replyTo: safeEmail,
      to: CONTACT_EMAIL,
      subject: `New contact from ${safeName} — made-in-haiphong.com`,
      text: `Name: ${safeName}\nEmail: ${safeEmail}\n\nMessage:\n${safeMessage}`,
      html: `<p><strong>Name:</strong> ${safeName}</p><p><strong>Email:</strong> ${safeEmail}</p><p><strong>Message:</strong></p><p>${safeMessage.replace(/\n/g, "<br>")}</p>`,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  } catch (err) {
    console.error("Contact form error:", err);
    return new Response(JSON.stringify({ error: "Failed to send message. Please try again later." }), {
      status: 500,
      headers: { "content-type": "application/json" },
    });
  }
}
