"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import GradientTxt from "../../Reusables/GradientTxt";
import CustomNav from "../../Reusables/CustomNav";
import type { Project } from "../../../../../types/Project";
import { useRouter } from "next/navigation";
import { getProjects } from "../../../../../sanity/sanity-utils";
import { toast } from "react-toastify";

export default function AnimatedSlide() {
  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>([]);
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    // Fetch projects
    const fetch = async function () {
      try {
        const projects = await getProjects();
        setProjects(projects);
      } catch (error) {
        toast.error("Failed to fetch projects. Please try again later.");
      }
    };

    fetch();
  }, []);

  const handleNavigation = function (slug: string) {
    router.push(`/projects/${slug}`);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="relative w-full">
      <Slider ref={sliderRef} {...settings}>
        {projects.length > 1 &&
          projects.map((project) => (
            <div
              key={project._id}
              className="group md:min-w-[400px] p-2"
              onClick={() => handleNavigation(project.slug)}
            >
              <div className="relative w-full aspect-[431/273] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.1]"
                />
              </div>
              <div className="bg-white dark:text-black p-10">
                <GradientTxt
                  txt={project.title}
                  className="text-[14px] font-bold tracking-[4px]"
                  tagName="h5"
                />
                <h4 className="my-6 truncate text-[19px] font-bold leading-[110%] transition-opacity duration-300 group-hover:opacity-50">
                  {project.tagline}
                </h4>
                <CustomNav
                  txt="View Project"
                  className="flex items-center gap-2 text-[14px] transition-opacity duration-300 group-hover:opacity-50"
                />
              </div>
            </div>
          ))}
      </Slider>

      <div className="absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 flex items-center gap-4">
        <div
          className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center bg-black border border-white"
          onClick={() => sliderRef.current?.slickPrev()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
            />
          </svg>
        </div>

        <div
          className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center bg-black border border-white"
          onClick={() => sliderRef.current?.slickNext()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}