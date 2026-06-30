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

    const transporter = createTransport();

    await transporter.sendMail({
      from: `"${name}" <${SMTP_USER}>`,
      replyTo: email,
      to: CONTACT_EMAIL,
      subject: `New contact from ${name} — made-in-haiphong.com`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message.replace(/\n/g, "<br>")}</p>`,
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
