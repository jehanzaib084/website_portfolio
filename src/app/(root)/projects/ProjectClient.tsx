"use client";

import Image from "next/image";
import { ProjectSkeleton } from "./projectSkeleton";
import GradientTxt from "@/app/components/Reusables/GradientTxt";
import CustomNav from "@/app/components/Reusables/CustomNav";
import Link from "next/link";
import { Project } from "../../../../types/Project";
import { useState } from "react";
import { ProjectPagination } from "./ProjectPagination";

export default function ProjectClient({ projects }: { projects: Project[] }) {
  const [currentPage, setCurrentPage] = useState(0);
  const jobsPerPage = 4;

  // Calculate pagination values
  const offset = currentPage * jobsPerPage;
  const currentProjects = projects.slice(offset, offset + jobsPerPage);
  const pageCount = Math.ceil(projects.length / jobsPerPage);

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  return (
    <section className="py-10 md:py-20 bg-black">
      <div className="container mx-auto grid gap-32 px-5 lg:px-20">
        {!projects.length ? (
          <ProjectSkeleton />
        ) : (
          <>
            {currentProjects.map((project) => (
              <Link key={project._id} href={`/projects/${project.slug}`}>
                <div className="group relative flex flex-col md:flex-row md:items-center md:justify-center">
                  {/* Image Container */}
                  <div className="relative overflow-hidden w-full md:w-[500px] lg:w-[600px]">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      width={600}
                      height={400}
                      priority
                      className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-300 group-hover:scale-[1.1]"
                    />
                  </div>

                  {/* Content Box */}
                  <div className="relative md:absolute bg-white p-6 md:p-8 lg:p-10 w-full 
                    md:w-[90%] lg:w-[500px] 
                    -mt-10 md:mt-0 
                    md:left-[50%] lg:left-[55%] xl:left-[60%]
                    md:top-1/2 md:-translate-y-1/2">
                    <GradientTxt
                      tagName="h6"
                      txt={project.tagline}
                      className="text-sm font-bold tracking-[4px] md:text-base"
                    />
                    <h2 className="my-4 md:my-6 text-2xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
                      {project.title}
                    </h2>
                    <CustomNav
                      txt="View Project"
                      className="flex items-center gap-2 text-sm md:text-base text-black mt-4"
                    />
                  </div>
                </div>
              </Link>
            ))}

            <div className="mt-20">
              <ProjectPagination
                pageCount={pageCount}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            </div>
          </>
        )}
      </div>
    </section>
  );
}