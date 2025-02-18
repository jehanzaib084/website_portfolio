import { Project } from "../../../../types/Project";
import { Metadata } from "next";
import { getProjects } from "../../../../sanity/sanity-utils";
import { toast } from "react-toastify";
import ProjectClient from "./ProjectClient";

export const metadata: Metadata = {
  title: "ML and AI Projects",
  description:
    "Explore my portfolio of ML and AI projects, showcasing my expertise in machine learning, artificial intelligence, and data science. Stay informed and inspired with my latest work.",
  openGraph: {
    description:
      "Explore my portfolio of ML and AI projects, showcasing my expertise in machine learning, artificial intelligence, and data science. Stay informed and inspired with my latest work.",
  },
};

export const revalidate = 3600;

export default async function Projects() {
  const projects: Project[] = await getProjects();

  if (!projects)
    toast.error("Error fetching articles, please try again later!");

  return <ProjectClient projects={projects} />;
}
