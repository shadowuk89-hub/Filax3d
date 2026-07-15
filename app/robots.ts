import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://filax3d-studio.shadowuk89.chatgpt.site/sitemap.xml",
  };
}
