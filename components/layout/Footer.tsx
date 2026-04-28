import Link from "next/link";
import type { footerLinks as FooterLinksType, socialLinks as SocialLinksType } from "@/lib/data";

type FooterProps = {
  links: typeof FooterLinksType;
  socialLinks: typeof SocialLinksType;
  siteName: string;
  phone: string;
  email: string;
};

export default function Footer({ links, socialLinks, siteName, phone, email }: FooterProps) {
  return (
    <footer className="bg-brand-dark text-gray-400">
      <div className="container-inner py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-3">
            <span className="text-base font-bold text-white">{siteName}</span>
            <p className="text-sm leading-relaxed">
              Compassionate, professional home care services for individuals and families.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
              Quick Links
            </span>
            <ul className="flex flex-col gap-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-150 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
              Contact
            </span>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <a
                  href={`tel:${phone.replace(/\D/g, "")}`}
                  className="transition-colors duration-150 hover:text-white"
                >
                  {phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${email}`}
                  className="transition-colors duration-150 hover:text-white"
                >
                  {email}
                </a>
              </li>
            </ul>
            <div className="flex gap-4 pt-1">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-sm transition-colors duration-150 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-gray-600">
          © {new Date().getFullYear()} {siteName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
