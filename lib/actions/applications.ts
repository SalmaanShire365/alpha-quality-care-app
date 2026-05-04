"use server";

import nodemailer from "nodemailer";

export type ApplicationState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function submitApplication(
  _prev: ApplicationState,
  formData: FormData
): Promise<ApplicationState> {
  console.log("🔥 submitApplication triggered");

  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const phone = formData.get("phone")?.toString().trim();
  const shift = formData.get("shift")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!name || !email) {
    return {
      status: "error",
      message: "Name and email are required.",
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    const shiftLabels: Record<string, string> = {
      day: "Day Shift",
      evening: "Evening Shift",
      night: "Night Shift",
      overnight: "Overnight",
      weekend: "Weekend Only",
      flexible: "Flexible / Any",
    };

    const readableShift = shift ? shiftLabels[shift] : "Not specified";

    await transporter.sendMail({
      from: `"Alpha Quality Care" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // send to yourself
      replyTo: email,
      subject: `New Applicant: ${name}`,
      text: `
New Job Application

Name: ${name}
Email: ${email}
Phone: ${phone || "N/A"}
Preferred Shift: ${readableShift}

Message:
${message || "N/A"}
      `,
    });

    return {
      status: "success",
      message: "Application submitted successfully!",
    };
  } catch (err) {
    console.error("Email error:", err);

    return {
      status: "error",
      message: "Failed to send email. Check server logs.",
    };
  }
}