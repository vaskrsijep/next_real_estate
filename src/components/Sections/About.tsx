"use client";
import Image from "next/image";
import React from "react";
import { motion, useScroll  } from "framer-motion";

const About = () => {
    const { scrollYProgress } = useScroll();
  return (
    <motion.div className="flex md:flex-row flex-col items-center justify-between py-20 gap-20">
      <motion.div  whileInView={{ x: 0 }} initial={{ x: -100 }}
      transition={{ duration: 3 }}>
        <Image
          src="/images/left_bg.png"
          alt="about"
          width={445}
          height={500}
          className="rounded-lg box-shadow shadow-md hover:scale-105 transition duration-300 cursor-pointer"
        />
      </motion.div>
      <motion.div className="flex flex-col items-start gap-10 max-w-xl">
        <motion.h2 className="text-5xl font-bold text-[#1E3240]" whileInView={{ y: 0 }} initial={{ y: -100 }}
      transition={{ duration: 1 }}
        >Award winning real estate company in Dubai</motion.h2>
        <motion.p className="text-muted-foreground text-xl" whileInView={{ y: 0 }} initial={{ y: -100 }}
      transition={{ duration: 1.5 }}>
          We are an award winning real estate company in Dubai. We are an award
          winning real estate company in Dubai.
        </motion.p>
        <motion.div className="flex flex-row items-center gap-10 justify-between">
          <motion.div className="flex flex-col items-start gap-3" whileInView={{ y: 0 }} initial={{ y: -100 }}
      transition={{ duration: 1 }}>
            <span className="text-muted-foreground uppercase text-sm">Previous projects</span>
            <p className="text-5xl font-semibold">34+</p>
          </motion.div>
          <motion.div className="flex flex-col items-start gap-3" whileInView={{ y: 0 }} initial={{ y: -100 }}
      transition={{ duration: 1.5 }}>
            <span className="text-muted-foreground uppercase text-sm">Years experience</span>
            <p className="text-5xl font-semibold">20y</p>
          </motion.div>
          <motion.div className="flex flex-col items-start gap-3" whileInView={{ y: 0 }} initial={{ y: -100 }}
      transition={{ duration: 2 }}>
            <span className="text-muted-foreground uppercase text-sm">Ongoing projects</span>
            <p className="text-5xl font-semibold">12</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
