import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://launch-to-space.vercel.app";

const legalPages = ["privacy-policy", "cookie-policy", "legal-notice", "terms-and-conditions"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-08-28");

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      images: [`${baseUrl}/opengraph-image`],
    },
    ...legalPages.map((slug) => ({
      url: `${baseUrl}/legal/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.4,
    })),
  ];
}
