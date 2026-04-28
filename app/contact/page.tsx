import type { Metadata } from "next";
import ContactSection from "@/components/sections/ContactSection";
import { contactInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Alpha Quality Care. We're here to answer your questions and help you find the right care solution.",
};

export default function ContactPage() {
  return (
    <ContactSection
      heading="Contact Us"
      subheading="Have questions or ready to get started? Send us a message and we'll get back to you as soon as possible."
      phone={contactInfo.phone}
      email={contactInfo.email}
      address={contactInfo.address}
      hours={contactInfo.hours}
    />
  );
}
