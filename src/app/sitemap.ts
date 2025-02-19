import { MetadataRoute } from "next";
import { getProjects } from "../../sanity/sanity-utils";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getProjects();

  // static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: process.env.NEXT_PUBLIC_LIVE_URL as string,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },

    {
      url: `${process.env.NEXT_PUBLIC_LIVE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  // dynamic project pages
  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${process.env.NEXT_PUBLIC_LIVE_URL}/projects/${project.slug}`,
    lastModified: new Date(project._createdAt),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticPages, ...projectPages];
}