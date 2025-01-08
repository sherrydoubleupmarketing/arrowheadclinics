import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.arrowhead-clinic.com/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://www.arrowhead-clinic.com/icon.ico",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7,
    }
  ];
}
