export type WhoWeServeCategory = {
  id: string;
  title: string;
  description: string;
  examples: string[];
};

export const whoWeServeCategories: WhoWeServeCategory[] = [
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
];
