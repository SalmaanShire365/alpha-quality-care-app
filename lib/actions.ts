"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function submitContactForm(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const phone = formData.get("phone")?.toString().trim();
  const subject = formData.get("subject")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!name || !email || !message) {
    return { status: "error", message: "Name, email, and message are required." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  try {
    await resend.emails.send({
      from: "Alpha Quality Care <contact@alphaqualitycare.com>",
      to: ["info@alphaqualitycare.com"],
      replyTo: email,
      subject: subject ? `Contact Form: ${subject}` : `Contact Form: Message from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : null,
        ``,
        `Message:`,
        message,
      ]
        .filter((line) => line !== null)
        .join("\n"),
    });

    return { status: "success", message: "Thank you! We'll be in touch shortly." };
  } catch {
    return {
      status: "error",
      message: "Something went wrong. Please try again or call us directly.",
    };
  }
}
