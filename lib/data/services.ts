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
    id: "cleaning",
    title: "Cleaning Services",
    description:
      "Thorough, professional cleaning tailored to the unique needs of each client's home.",
    icon: "/icons/cleaning.svg",
    details: [
      "Deep cleaning and sanitization",
      "Kitchen and bathroom cleaning",
      "Vacuuming, mopping, and dusting",
      "Window and surface cleaning",
    ],
  },
];
