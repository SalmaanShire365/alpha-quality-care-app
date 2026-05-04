"use server";

import nodemailer from "nodemailer";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function submitContactForm(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  console.log("🔥 submitContactForm triggered");

  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const phone = formData.get("phone")?.toString().trim();
  const subject = formData.get("subject")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!name || !email || !message) {
    return {
      status: "error",
      message: "Name, email, and message are required.",
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      status: "error",
      message: "Please enter a valid email address.",
    };
  }

  try {
    // Create transporter (Gmail SMTP)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"Alpha Quality Care" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // send to yourself
      replyTo: email,
      subject: subject || `New Contact Form Message from ${name}`,
      text: `
New Contact Message

----------------------

Name: ${name}
Email: ${email}
Phone: ${phone || "N/A"}
Subject: ${subject || "N/A"}

Message:
${message}
      `,
    });

    console.log("📨 Email sent successfully");

    return {
      status: "success",
      message: "Message sent successfully! We'll get back to you soon.",
    };
  } catch (err) {
    console.error("❌ Email send error:", err);

    return {
      status: "error",
      message: "Failed to send message. Please try again later.",
    };
  }
}