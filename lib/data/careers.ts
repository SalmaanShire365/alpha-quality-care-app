export type Stat = {
  value: string;
  label: string;
};

export const careerStats: Stat[] = [
  { value: "50+", label: "Caregivers placed" },
  { value: "98%", label: "Client satisfaction rate" },
  { value: "5+", label: "Years in the community" },
  { value: "24/7", label: "Support for our staff" },
];

export const careerInfo = {
  heading: "Join Our Care Team",
  description:
    "We are always looking for compassionate, dedicated individuals who want to make a real difference in people's lives. Alpha Quality Care offers flexible schedules, competitive pay, and a supportive team environment.",
  benefits: [
    "Flexible scheduling",
    "Competitive hourly rates",
    "Paid training and certifications",
    "Supportive management team",
    "Opportunities for advancement",
  ],
  applyEmail: "careers@alphaqualitycare.com",
  applyLabel: "Apply Now",
};
