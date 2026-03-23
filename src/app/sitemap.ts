import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const headersList = require("next/headers").headers();
  const host = headersList.get("host") || "localhost:3000";
  const protocol = host.includes("localhost") ? "http" : "https";
  const baseUrl = `${protocol}://${host}`;

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date("2025-09-03T00:00:00Z"),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/product`,
      lastModified: new Date("2025-09-01T00:00:00Z"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/cognitive-sql`,
      lastModified: new Date("2025-08-28T00:00:00Z"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/agents`,
      lastModified: new Date("2025-08-28T00:00:00Z"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date("2025-08-20T00:00:00Z"),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/docs/`,
      lastModified: new Date("2025-08-30T00:00:00Z"),
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/`,
      lastModified: new Date("2025-08-31T00:00:00Z"),
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2025-08-10T00:00:00Z"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2025-08-10T00:00:00Z"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
