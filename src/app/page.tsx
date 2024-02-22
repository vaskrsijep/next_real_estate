"use client"
import Heading from "@/components/Sections/Heading";
import Navbar from "@/components/Sections/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {motion} from "framer-motion";
import About from "@/components/Sections/About";
import Ongoing from "@/components/Sections/Ongoing";
import Testimonials from "@/components/Sections/Testimonials";
import Contact from "@/components/Sections/Contact";

export default function Home() {
  return (
      <>
      <header className="bg-[#AFD4E2] relative overflow-hidden z-0">
        <div className="max-w-7xl mx-auto z-50 px-5 md:px-0">
          <Navbar />
          <Heading />
        </div>
      </header>
      <div className="max-w-7xl mx-auto z-50 px-5 md:px-0 overflow-hidden">
      <About/>
      <Ongoing/>
      <Testimonials/>
      <Contact/>
      </div>
    </>
  );
}
