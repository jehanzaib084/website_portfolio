"use client";

import GradientTxt from "../Reusables/GradientTxt";
import Image from "next/image";
import FadeUp from "@/animations/FadeUp";
import { useEffect, useState } from "react";
import type { Services } from "../../../../types/Services";
import { getServices } from "../../../../sanity/sanity-utils";
import { toast } from "react-toastify";

export default function Services() {
  const [services, setServices] = useState<Services[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async function () {
      try {
        const services = await getServices();
        setServices(services);
      } catch (error) {
        toast.error("Failed to fetch services. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <section id="services" className="mb-[80px] min-h-[600px]">
      <FadeUp tag="div" className="mb-16">
        <GradientTxt
          tagName="h2"
          txt="SERVICES"
          className="mb-4 text-center text-[22px] font-bold"
        />
        <h3 className="mx-auto mb-10 max-w-[800px] text-center text-[36px] font-bold leading-[120%] tracking-[0.5px] lg:text-[54px]">
          Code that solves problems, one product at a time.
        </h3>
      </FadeUp>

      <FadeUp
        tag="div"
        className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
      >
        {isLoading ? (
          // Skeleton loader with same dimensions as content
          Array(3).fill(null).map((_, index) => (
            <div key={index} className="min-h-[300px] animate-pulse">
              <div className="h-[70px] w-[70px] bg-gray-200 dark:bg-gray-700" />
              <div className="my-4 h-[24px] w-3/4 bg-gray-200 dark:bg-gray-700" />
              <div className="mb-4 h-[60px] w-full bg-gray-200 dark:bg-gray-700" />
              <div className="space-y-3">
                {Array(3).fill(null).map((_, i) => (
                  <div key={i} className="h-[20px] w-full bg-gray-200 dark:bg-gray-700" />
                ))}
              </div>
            </div>
          ))
        ) : (
          services.map((service) => (
            <div key={service._id} className="min-h-[300px]">
              <div className="relative h-[70px] w-[70px]">
                <Image
                  src={service.icon}
                  alt={service.alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <h4 className="my-4 mb-6 text-[19px] font-bold leading-[110%] lg:mt-10">
                {service.title}
              </h4>
              <p className="mb-4 leading-[22px] text-[#EEEEEE]">
                {service.description}
              </p>
              <ul className="inline-flex flex-col gap-3 pl-5 md:pl-0">
                {service.lists.map((list, i) => (
                  <li key={i} className="list-disc font-bold">
                    {list}
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}
      </FadeUp>
    </section>
  );
}