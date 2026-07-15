import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{
    url: "https://filax3d-studio.shadowuk89.chatgpt.site",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
  }];
}
