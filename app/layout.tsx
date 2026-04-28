import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { navLinks, footerLinks, socialLinks, siteMetadata, contactInfo } from "@/lib/data";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: {
    default: siteMetadata.name,
    template: `%s | ${siteMetadata.name}`,
  },
  description: siteMetadata.description,
  metadataBase: new URL(siteMetadata.url),
  openGraph: {
    type: "website",
    siteName: siteMetadata.name,
    description: siteMetadata.description,
    images: [{ url: siteMetadata.ogImage }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-[family-name:var(--font-geist-sans)]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-primary focus:text-white focus:rounded focus:top-4 focus:left-4"
        >
          Skip to main content
        </a>
        <Navbar links={navLinks} siteName={siteMetadata.name} />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer
          links={footerLinks}
          socialLinks={socialLinks}
          siteName={siteMetadata.name}
          phone={contactInfo.phone}
          email={contactInfo.email}
        />
      </body>
    </html>
  );
}
