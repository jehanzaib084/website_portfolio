"use client";

import Image from "next/image";
import profImage from "../../../../../../public/test_image.jpg";
import profImage2 from "../../../../../../public/test_image.jpg";
import profImage3 from "../../../../../../public/test_image.jpg";
import profImage4 from "../../../../../../public/test_image.jpg";
import GradientTxt from "../../../Reusables/GradientTxt";
import FadeUp from "@/animations/FadeUp";
import { motion } from "framer-motion";

export default function ProfileInfo() {
  return (
    <section id="about">
      <FadeUp
        tag="div"
        className="mb-20 flex flex-col items-start justify-between gap-4 lg:flex-row"
      >
        <div>
          <GradientTxt
            txt="FULLSTACK DEVELOPER"
            className="text-[22px] font-bold tracking-[4px]"
            tagName="h5"
          />
          <h2 className="mb-4 mt-2 text-[40px] font-bold leading-[120%] tracking-[0.5px] md:text-[54px]">
            That's me!
          </h2>
        </div>
        <p className="text-[19px] leading-[40px] text-[#EEEEEE] md:text-[22px] lg:max-w-[50%]">
          Over the past 4 years, I've collaborated with a diverse range of
          clients, from startups to established businesses. I bring a passion
          for creating seamless digital experiences and solving complex problems
          through code.
        </p>
      </FadeUp>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid xl:grid-cols-4 gap-4 xl:h-[600px]"
      >
        <Image
          src={profImage4}
          alt="image"
          width={600}
          height={400}
          className="col-span-2 w-full h-full xl:col-start-2 xl:col-end-4 xl:row-start-1 xl:row-end-3 object-cover"
        />
        <Image
          src={profImage3}
          alt="image"
          width={300}
          height={200}
          className="col-span-1 w-full h-full xl:col-span-1 xl:col-start-4 xl:row-start-1 xl:row-end-2 object-cover"
        />
        <Image
          src={profImage2}
          alt="image"
          width={300}
          height={200}
          className="col-span-1 w-full h-full xl:col-span-1 xl:col-start-4 xl:row-start-2 xl:row-end-3 object-cover"
        />
        <Image
          src={profImage}
          alt="image"
          width={300}
          height={600}
          className="col-span-2 w-full h-full xl:col-span-1 xl:col-start-1 xl:row-span-2 xl:row-start-1 xl:row-end-3 object-cover"
        />
      </motion.div>
    </section>
  );
}
