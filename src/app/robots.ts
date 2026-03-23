import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // `headers()` gives you access to request headers
  const headersList = require("next/headers").headers();
  const host = headersList.get("host") || "localhost:3000";
  const protocol = host.includes("localhost") ? "http" : "https";
  const baseUrl = `${protocol}://${host}`;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
