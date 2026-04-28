import type { Metadata } from "next";
import WhoWeServeSection from "@/components/sections/WhoWeServeSection";
import { whoWeServeCategories } from "@/lib/data";

export const metadata: Metadata = {
  title: "Who We Serve",
  description:
    "Alpha Quality Care supports seniors, individuals with disabilities, families, and Medicaid program recipients with compassionate home care.",
};

export default function WhoWeServePage() {
  return (
    <WhoWeServeSection
      heading="Who We Serve"
      subheading="We provide care for a wide range of individuals and families — meeting people where they are with personalized, professional support."
      categories={whoWeServeCategories}
    />
  );
}
