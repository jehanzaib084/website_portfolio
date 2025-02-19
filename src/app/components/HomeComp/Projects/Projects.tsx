import FadeUp from "@/animations/FadeUp";
import CustomBtn from "../../Reusables/CustomBtn";
import GradientTxt from "../../Reusables/GradientTxt";

export default function Projects() {
  return (
    <section className="mb-5 px-5 lg:px-20 mt-[40px]">
      <FadeUp
        tag="div"
        className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:gap-0"
      >
        <div>
          <GradientTxt
            tagName="h2"
            txt="PROJECTS"
            className="mb-4 text-center text-[22px] font-bold"
          />
          <h3 className="mx-auto text-white mb-10 max-w-[600px] text-[36px] font-bold leading-[120%] tracking-[0.5px] lg:text-[54px]">
            Innovative side projects
          </h3>
        </div>

        <CustomBtn
          txt="View all projects"
          className="w-[200px]"
          href="/projects"
        />
      </FadeUp>
    </section>
  );
}
