import type { Metadata } from "next";
import ServicesSection from "@/components/sections/ServicesSection";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Alpha Quality Care's full range of home care services including personal care, home management, and professional cleaning.",
};

export default function ServicesPage() {
  return (
    <ServicesSection
      heading="Our Services"
      subheading="We offer a full range of professional home care services designed to support independence, dignity, and quality of life."
      services={services}
    />
  );
}
