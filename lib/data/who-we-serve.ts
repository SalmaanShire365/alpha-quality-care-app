export type WhoWeServeCategory = {
  id: string;
  title: string;
  description: string;
  examples: string[];
};

export const whoWeServeCategories: WhoWeServeCategory[] = [
  {
    id: "seniors",
    title: "Seniors & Older Adults",
    description:
      "We support older adults who want to maintain independence and quality of life in the comfort of their own homes.",
    examples: [
      "Aging in place support",
      "Companion care and social engagement",
      "Post-hospital recovery assistance",
      "Medication reminders",
    ],
  },
  {
    id: "individuals-with-disabilities",
    title: "Individuals with Disabilities",
    description:
      "Our caregivers assist adults with physical or developmental disabilities to live full, active lives.",
    examples: [
      "Daily living skills support",
      "Community participation",
      "Personal care and hygiene",
      "Transportation assistance",
    ],
  },
  {
    id: "families",
    title: "Families & Caregivers",
    description:
      "We partner with families who need reliable, professional support for their loved ones — giving them peace of mind.",
    examples: [
      "Respite care for family caregivers",
      "Coordination with healthcare teams",
      "Emergency backup care",
      "Ongoing care planning support",
    ],
  },
  {
    id: "medicaid",
    title: "Medicaid & State Program Recipients",
    description:
      "We work with clients enrolled in state-funded programs to provide covered, quality home care services.",
    examples: [
      "Medicaid waiver program services",
      "State-funded personal care",
      "Coordination with case managers",
      "Eligible service documentation",
    ],
  },
];
