"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "@/lib/actions";
import Button from "./Button";

const initialState: ContactFormState = { status: "idle", message: "" };

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  return (
    <form action={formAction} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-brand-dark">
            Full Name <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            disabled={isPending}
            className="input-field"
            placeholder="Jane Smith"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-brand-dark">
            Email Address <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            disabled={isPending}
            className="input-field"
            placeholder="jane@example.com"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-sm font-medium text-brand-dark">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            disabled={isPending}
            className="input-field"
            placeholder="(555) 000-0000"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="subject" className="text-sm font-medium text-brand-dark">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            disabled={isPending}
            className="input-field"
            placeholder="How can we help?"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-brand-dark">
          Message <span aria-hidden="true" className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          disabled={isPending}
          className="input-field resize-none"
          placeholder="Tell us about your care needs..."
        />
      </div>

      {state.status !== "idle" && (
        <div
          role="alert"
          className={`rounded-lg px-4 py-3 text-sm font-medium ${
            state.status === "success"
              ? "bg-brand-accentSoft text-green-800"
              : "bg-red-50 text-red-800"
          }`}
        >
          {state.message}
        </div>
      )}

      <Button type="submit" disabled={isPending} size="lg" className="self-start">
        {isPending ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}
