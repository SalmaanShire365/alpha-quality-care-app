export type SocialLink = {
  platform: string;
  href: string;
  label: string;
};

export const contactInfo = {
  phone: "(612)-583-8529",
  email: "alphaqualitycare1@gmail.com",
  address: "1020 E 146th St, Ste 107, Burnsville, MN, 55337",
  hours: "Monday – Friday: 8am – 6pm",
};

export const socialLinks: SocialLink[] = [
  {
    platform: "facebook",
    href: "https://facebook.com/alphaqualitycare",
    label: "Facebook",
  },
  {
    platform: "linkedin",
    href: "https://linkedin.com/company/alphaqualitycare",
    label: "LinkedIn",
  },
];
