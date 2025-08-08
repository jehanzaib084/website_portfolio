import type { Metadata } from "next";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Plus_Jakarta_Sans, Dancing_Script } from "next/font/google";
import { seoKeywords } from "./seoKeywords";


const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--plus-jakarta-display" });
const dancingScript = Dancing_Script({ subsets: ["latin"], variable: "--dancing-script" });


export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_LIVE_URL as string),
  keywords: seoKeywords,
  title: {
    default: "Home",
    template: "%s",
  },
  description:
    "Welcome to my professional portfolio repository! This project showcases my journey, skills, and projects as a fullstack developer. It serves as a central repository for all my work, experiences, and achievements in web development.",
  openGraph: {
    description:
      "Welcome to my professional portfolio repository! This project showcases my journey, skills, and projects as a fullstack developer. It serves as a central repository for all my work, experiences, and achievements in web development.",
    images: [
      new URL("/opengraphImg.png", process.env.NEXT_PUBLIC_LIVE_URL as string)
        .href,
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" sizes="32" />
      </head>
      <body className={`${plusJakarta.variable} ${dancingScript.variable}`} suppressHydrationWarning>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
