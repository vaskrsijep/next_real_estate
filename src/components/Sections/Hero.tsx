"use client";
import React from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
const Heading = () => {
  return (
    <div className="flex flex-col items-start gap-5">
      <motion.div className="flex flex-col items-start gap-5 max-w-2xl right-0 md:py-40 py-20">
        <motion.h1
          className="md:text-7xl text-5xl font-bold text-[#1E3240] tracking-normal leading-snug"
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -1000 }}
          transition={{ duration: 0.5 }}
        >
          A home is built with love and dreams
        </motion.h1>
        <motion.p
          className="text-lg text-[#1E3240] tracking-normal leading-snug "
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -1000 }}
          transition={{ duration: 1 }}
        >
          Real estate farm that makes your dreams true. We are an award winning real estate company in Dubai.
          We are an award winning real estate company in Dubai.
        </motion.p>
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -1000 }}
          transition={{ duration: 0.5 }}
          className="py-5 flex gap-5"
        >
          <Button variant="default" size={"lg"}>Our Projects</Button>
          <Button variant="outline" size={"lg"}>Contact Us</Button>
        </motion.div>
      </motion.div>
      <div>
        <motion.div
          className="absolute right-0 -bottom-28 -z-10 blur-sm lg:blur-none"
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 1000 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/images/house.png"
            alt="hero"
            width={500}
            height={50}
            className="hidden md:flex"
          />
          <Image
            src="/images/house2.png"
            alt="hero"
            width={500}
            height={50}
            className="md:hidden flex"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Heading;
