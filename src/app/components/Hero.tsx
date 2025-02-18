"use client";

import CustomBtn from "./Reusables/CustomBtn";
import GradientTxt from "./Reusables/GradientTxt";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Profile } from "../../../types/Profile";
import { getProfile } from "../../../sanity/sanity-utils";
import { toast } from "react-toastify";

export default function Hero() {
  const MotionImage = motion(Image);
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profileData = await getProfile();
        setProfile(profileData);
      } catch (error) {
        toast.error("Failed to load profile data");
      }
    };

    fetchProfile();
  }, []);

  return (
    <section className="my-[80px] items-center gap-16 xl:flex">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="mb-4 text-[40px] font-bold leading-[110%] md:text-[68px] lg:text-[70px]">
          <GradientTxt tagName="span" txt="AI That Works Smarter," />
          So You Don’t Have To.
        </h1>

        <p className="mb-16 text-[19px] text-[#666] lg:text-[22px]">
          Hi! I'm Sania, an AI & ML Engineer specializing in AI automation, agentic workflows, and intelligent assistants. I build AI-driven systems that enhance decision-making and streamline operations—from virtual agents and autonomous workflows to smart SaaS applications—driving real-world impact. 🚀
        </p>

        <div className="mb-16 flex flex-col gap-4 md:flex-row xl:items-center">
          <CustomBtn txt="Book a call" className="w-[150px]" href="/#contact" />
          {profile?.resume && (
            <Link
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              download="Sania_Resume.pdf"
              className="group flex cursor-pointer items-center gap-2 text-lg font-bold"
            >
              <span>Download CV</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right transition-transform duration-500 group-hover:translate-x-3"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </Link>
          )}
        </div>
      </motion.div>

      {profile?.profileImage ? (
        <MotionImage
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          src={profile.profileImage}
          alt={profile.alt || "profile image"}
          width={400}
          height={400}
          className="mx-auto aspect-square w-[300px] rounded-full object-cover lg:w-[400px]"
          // priority
          // placeholder="blur"
          // blurDataURL="/placeholder.svg" // Replace with your placeholder image URL
        />
      ) : (
        <div className="mx-auto aspect-square w-[300px] animate-pulse rounded-full bg-gray-200 lg:w-[400px]" />
      )}
    </section>
  );
}