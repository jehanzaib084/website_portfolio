import FadeUp from "@/animations/FadeUp";
import GradientTxt from "../Reusables/GradientTxt";
import ContactDetails from "./Contact/Contact";
import FAQ from "./FAQ/FAQ";
import ClientContact from "@/app/(root)/contact/client/ClientContact";

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="container mx-auto px-5 pt-5 lg:px-20">
        <FadeUp tag="div" className="py-20">
          <GradientTxt
            tagName="h2"
            txt="FAQ"
            className="mb-4 text-center text-[22px] font-bold tracking-[4px]"
          />
          <h3 className="laeding-[120%] text-center text-[36px] font-bold tracking-[0.5px] text-white md:text-[50px] xl:text-[54px]">
            Frequently Asked Questions
          </h3>
        </FadeUp>

        <FAQ />
        <FadeUp tag="div" className="pt-20">
          <ClientContact />
        </FadeUp>

        <ContactDetails />
      </div>
    </footer>
  );
}
