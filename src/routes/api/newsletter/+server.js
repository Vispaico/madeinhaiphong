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
    const { email: subscriberEmail, hp } = body;

    // Honeypot trap: if filled, silently reject as spam
    if (hp) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { "content-type": "application/json" },
      });
    }

    if (!subscriberEmail) {
      return new Response(JSON.stringify({ error: "Email is required." }), {
        status: 400,
        headers: { "content-type": "application/json" },
      });
    }

    const transporter = createTransport();

    await transporter.sendMail({
      from: `"Made in Haiphong" <${SMTP_USER}>`,
      to: CONTACT_EMAIL,
      subject: "New newsletter subscriber — made-in-haiphong.com",
      text: `New subscriber: ${subscriberEmail}`,
      html: `<p><strong>New newsletter subscriber:</strong></p><p>${subscriberEmail}</p>`,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  } catch (err) {
    console.error("Newsletter signup error:", err);
    return new Response(JSON.stringify({ error: "Failed to subscribe. Please try again later." }), {
      status: 500,
      headers: { "content-type": "application/json" },
    });
  }
}
