import type { MetadataRoute } from "next";
import { siteMetadata } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteMetadata.url;
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/who-we-serve`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/careers`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
  ];
}
