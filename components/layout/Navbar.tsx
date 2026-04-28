"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { navLinks as NavLinksType } from "@/lib/data";

type NavbarProps = {
  links: typeof NavLinksType;
  siteName: string;
};

export default function Navbar({ links, siteName }: NavbarProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-border bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="container-inner flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-lg font-bold text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded"
        >
          {siteName}
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 ${
                  pathname === link.href
                    ? "text-brand-primary bg-brand-light"
                    : "text-brand-muted hover:text-brand-dark hover:bg-brand-light"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className="flex items-center justify-center rounded-md p-2 text-brand-muted hover:text-brand-dark hover:bg-brand-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`border-t border-brand-border bg-white md:hidden ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="container-inner flex flex-col gap-1 py-3">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors duration-150 ${
                  pathname === link.href
                    ? "bg-brand-light text-brand-primary"
                    : "text-brand-muted hover:bg-brand-light hover:text-brand-dark"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
