export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
};

export const services: Service[] = [
  {
    id: "personal-care",
    title: "Personal Care & Hygiene",
    description:
      "Dignified assistance with daily personal care routines to support independence and well-being.",
    icon: "/icons/adl.svg",
    details: [
      "Bathing and grooming assistance",
      "Dressing and personal hygiene",
      "Mobility and transfer support",
      "Toileting and incontinence care",
    ],
  },
  {
    id: "home-management",
    title: "Home Management",
    description:
      "Reliable household support so clients can enjoy a safe, clean, and comfortable living environment.",
    icon: "/icons/home-management.svg",
    details: [
      "Light housekeeping and laundry",
      "Meal planning and preparation",
      "Grocery shopping and errands",
      "Home organization and safety checks",
    ],
  },
  {
  id: "behavioral-support",
  title: "Behavioral Observation & Support",
  description:
    "Attentive behavioral support that promotes safety, emotional well-being, and clear communication of needs during daily activities.",
  icon: "/icons/adl.svg",
  details: [
    "Behavioral observation and documentation",
    "Redirection and de-escalation techniques",
    "Support during challenging behaviors",
    "Encouraging communication of needs and preferences",
    "Promoting positive routines and engagement",
  ],
}
];
