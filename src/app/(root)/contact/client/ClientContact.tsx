"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser"; // Import EmailJS
import FadeUp from "@/animations/FadeUp";

function hasEmptyStrings(obj: any) {
  return Object.values(obj).some((value) => value === "");
}

export default function ClientContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleFormUpdate = function (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async function (e: FormEvent) {
    e.preventDefault();
    if (hasEmptyStrings(formData)) return toast.info("Please fill all fields");

    try {
      setIsSending(true);
      toast.info("Sending message, please wait...");

      // Initialize EmailJS
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string);

      // Send email using EmailJS
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        formData,
      );

      toast.success("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSending(false);
    } catch (error: any) {
      setIsSending(false);
      toast.error("Error sending message, please try again!");
    }
  };

  return (
    <section id="contact">
      <FadeUp tag="div">
        <div className="container text-white mx-auto mt-[80px] flex flex-col justify-between gap-10 px-5 pt-5 lg:px-20 xl:flex-row">
          <div className="xl:w-[40%]">
            <h2 className="text-[37px] font-bold md:text-[56px]">Get in touch</h2>
            <p className="mb-10 mt-8 text-lg text-[#CACACAFF] md:text-xl">
              Have a project in mind? Looking to partner or work together? Reach
              out through the form and I'll get back to you in the next 48 hours.
            </p>
            <Link
              href="mailto:officialayo540@gmail.com"
              className="mb-4 flex items-center gap-2 text-xl font-bold text-[#CACACAFF]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#CACACAFF"
                className="bi bi-envelope"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
              </svg>
              <span>saniasadaqat3526@gmail.com</span>
            </Link>
          </div>

          <form
            onSubmit={(e) => handleFormSubmit(e)}
            className="max-w-[655px] xl:w-[60%]"
          >
            <div className="mb-6 flex flex-col gap-4 md:flex-row">
              <div className="w-full">
                <label htmlFor="Name" className="font-bold">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  aria-label="Name"
                  required
                  className="mt-4 w-full bg-[#f2f6f7] py-[28px] pl-[24px] pr-[12px] text-[#333] outline-none md:py-[20px]"
                  onChange={(e) => handleFormUpdate(e)}
                />
              </div>

              <div className="w-full">
                <label htmlFor="Email" className="font-bold">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  name="email"
                  value={formData.email}
                  aria-label="Email"
                  required
                  className="mt-4 w-full bg-[#f2f6f7] py-[28px] pl-[24px] pr-[12px] text-[#333] outline-none md:py-[20px]"
                  onChange={(e) => handleFormUpdate(e)}
                />
              </div>
            </div>

            <div className="mb-6 w-full">
              <label htmlFor="Subject" className="font-bold">
                Subject
              </label>
              <input
                type="text"
                placeholder="Enter the subject"
                name="subject"
                value={formData.subject}
                aria-label="Subject"
                required
                className="mt-4 w-full bg-[#f2f6f7] py-[28px] pl-[24px] pr-[12px] text-[#333] outline-none md:py-[20px]"
                onChange={(e) => handleFormUpdate(e)}
              />
            </div>

            <div className="mb-6 w-full">
              <label htmlFor="message" className="font-bold">
                Tell me a bit more what you're looking for?
              </label>
              <textarea
                cols={30}
                rows={10}
                className="mt-4 w-full bg-[#f2f6f7] py-[28px] pl-[24px] pr-[12px] text-[#333] outline-none md:py-[20px]"
                name="message"
                value={formData.message}
                aria-label="message"
                required
                placeholder="Enter your message here..."
                onChange={(e) => handleFormUpdate(e)}
              />
            </div>

            <div className="relative h-[60px] w-[200px] bg-gradient-to-r from-orange-400 via-red-500 to-purple-600">
              <motion.button
                initial={{ right: "8px", bottom: "8px" }}
                whileHover={{ right: 0, bottom: 0 }}
                disabled={isSending}
                aria-label={isSending ? "Sending message" : "Send message"}
                className="absolute h-[60px] w-[200px] bg-white text-lg font-medium text-black"
              >
                {isSending ? "Submitting..." : "Submit Now!"}
              </motion.button>
            </div>
          </form>
        </div>
      </FadeUp>
    </section>
  );
}