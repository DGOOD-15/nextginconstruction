import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://nextginconstruction.com",
      lastModified: new Date(),
    },
  ];
}
