import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.atlantahappens.com/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://www.atlantahappens.com/es",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://www.atlantahappens.com/icon.ico",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7,
    }
  ];
}
