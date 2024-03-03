import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { motion, useScroll  } from "framer-motion";
const Contact = () => {
  return (
    <div className="sm:py-10 py-6 bg-gray-50 rounded-xl p-10 shadow-lg my-20 mx-1">
      <div className="flex flex-row items-center justify-between">
        <motion.div className="w-1/2 md:flex hidden" whileInView={{ y: 0 }} initial={{ y: 500 }}
      transition={{ duration: 2 }}>
          <Image
            src="/images/contact_image.png"
            alt="contact"
            width={500}
            height={500}
            className="rounded-md shadow-md"
          />
        </motion.div>
        <div className="md:w-1/2 w-full">
          <div className="flex flex-col gap-3 pb-5">
            <motion.h2 className="text-5xl font-bold" whileInView={{ y: 0 }} initial={{ y: -100 }}
      transition={{ duration: 1 }}>Contact us</motion.h2>
            <motion.p className="text-xl text-muted-foreground mb-10" whileInView={{ y: 0 }} initial={{ y: -100 }}
      transition={{ duration: 1 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </motion.p>
            <div className="w-full flex flex-col items-start gap-3">
              <motion.div className="flex sm:flex-row flex-col items-center justify-between gap-5 w-full" whileInView={{ x: 0 }} initial={{ x: -100 }}
      transition={{ duration: 1 }}>
                <div className="w-full">
                  {/* <label htmlFor="name" className="text-lg font-semibold my-3">
                    First Name
                  </label> */}
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="w-full border border-gray-200 rounded-none p-4 my-3"
                    placeholder="John"
                  />
                </div>
                <div className="w-full">
                  {/* <label htmlFor="name" className="text-lg font-semibold my-3">
                    Last Name
                  </label> */}
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="w-full border border-gray-200 rounded-none p-4 my-3"
                    placeholder="Doe"
                  />
                </div>
              </motion.div>
              <motion.div className="flex sm:flex-row flex-col items-center justify-between gap-5 w-full" whileInView={{ x: 0 }} initial={{ x: -100 }}
      transition={{ duration: 1.5 }}>
                <div className="w-full">
                  {/* <label htmlFor="name" className="text-lg font-semibold my-3">
                    Email Address
                  </label> */}
                  <input
                    type="email"
                    name="email"
                    id="name"
                    className="w-full border border-gray-200 rounded-none p-4 my-3"
                    placeholder="nYcJt@example.com"
                  />
                </div>
                <div className="w-full">
                  {/* <label htmlFor="name" className="text-lg font-semibold my-3">
                    Phone Number
                  </label> */}
                  <input
                    type="tel"
                    name="name"
                    id="name"
                    className="w-full border border-gray-200 rounded-none p-4 my-3"
                    placeholder="+00381......"
                  />
                </div>
              </motion.div>
              <span className="divide-y-2 " />
              <motion.div className="flex sm:flex-row flex-col items-center justify-between gap-5 w-full" whileInView={{ x: 0 }} initial={{ x: -100 }}
      transition={{ duration: 2 }}>
                <textarea
                  name="description"
                  id="name"
                  className="w-full border border-gray-200 rounded-none p-4 my-3"
                  placeholder="Description"
                  rows={5}
                  cols={5}
                  maxLength={500}
                />
              </motion.div>
              <motion.div whileInView={{ x: 0 }} initial={{ x: -100 }}
      transition={{ duration: 0.5 }}>

              <Button type="submit" variant="default" size={"xl"} className="text-lg">Get a quote</Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
