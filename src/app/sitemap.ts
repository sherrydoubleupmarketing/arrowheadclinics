import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://atlantahappens.vercel.app",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://atlantahappens.vercel.app/#contactus",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://atlantahappens.vercel.app/#practiceArea",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
}