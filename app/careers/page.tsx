import type { Metadata } from "next";
import CareersSection from "@/components/sections/CareersSection";
import { careerStats, careerInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the Alpha Quality Care team. We're looking for compassionate caregivers who want to make a real difference in people's lives.",
};

export default function CareersPage() {
  return (
    <CareersSection
      heading={careerInfo.heading}
      description={careerInfo.description}
      benefits={careerInfo.benefits}
      stats={careerStats}
      applyEmail={careerInfo.applyEmail}
      applyLabel={careerInfo.applyLabel}
    />
  );
}
