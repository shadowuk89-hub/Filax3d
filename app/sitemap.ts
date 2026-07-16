import type { MetadataRoute } from "next";
import { categories } from "./catalog/catalog-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = "https://shadowuk89-hub.github.io/Filax3d";
  return [{
    url: `${origin}/`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
  }, ...Object.keys(categories).map((slug) => ({
    url: `${origin}/catalog/${slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))];
}
