"use client"
import { Facebook, Github, Instagram, Mail, MapPin, Phone, PinIcon, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#1E3240] text-white pb-10 pt-5">
      <div className="flex sm:flex-row flex-col items-center justify-between sm:gap-0 sm:px-5 md:px-0 sm:max-w-7xl mx-auto sm:py-10">
        <div className="sm:w-1/2 p-10 flex items-start justify-between gap-5">
          <div className="flex flex-col items-start gap-5 sm:w-1/2">
            <h5 className="text-xl font-bold">Lugar</h5>
            <ul className="text-md text-muted-foreground flex items-start flex-col gap-3">
              <li className="flex items-center justify-center flex-row gap-2"><MapPin/> 2118 Thornridge Cir. Dubai, UAE 35624</li>
              <li className="flex items-center justify-center flex-row gap-2"><Phone /> +33 415 65356 - 9</li>
              <li className="flex items-center justify-center flex-row gap-2"><Mail />panicvaskrsije@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="sm:w-1/2 p-10 flex items-start justify-between gap-5">
          <div className="flex flex-col items-start gap-5 w-1/3">
            <h5 className="text-xl font-bold">Quick Links</h5>
            <ul className="text-md font-medium text-muted-foreground flex items-start flex-col gap-3">
              <li className="flex items-center justify-center flex-row gap-2">Home</li>
              <li className="flex items-center justify-center flex-row gap-2">About</li>
              <li className="flex items-center justify-center flex-row gap-2">Project</li>
              <li className="flex items-center justify-center flex-row gap-2">Contact</li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-5 w-1/3">
            <h5 className="text-xl font-bold">Legal Links</h5>
            <ul className="text-md font-medium text-muted-foreground flex items-start flex-col gap-3">
              <li className="flex items-center justify-center flex-row gap-2">Terms</li>
              <li className="flex items-center justify-center flex-row gap-2">Conditions</li>
              <li className="flex items-center justify-center flex-row gap-2">Policy</li>
              <li className="flex items-center justify-center flex-row gap-2">Privacy</li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-5 w-1/3">
            <h5 className="text-xl font-bold">Blogs</h5>
            <ul className="text-md font-medium text-muted-foreground flex items-start flex-col gap-3">
              <li className="flex items-center justify-center flex-row gap-2">New Project</li>
              <li className="flex items-center justify-center flex-row gap-2">Design of projects</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-5">
        <p className="text-md font-semibold">Copyright © 2024 Lugar.</p>
        <div className="flex items-center justify-center gap-5 cursor-pointer text-muted-foreground">
          <Facebook
            className="hover:text-white hover:scale-125 hover:rotate-6 transition duration-300"
            size={25}
          />
          <Twitter
            className="hover:text-white hover:scale-125 hover:rotate-6 transition duration-300"
            size={25}
          />
          <Instagram
            className="hover:text-white hover:scale-125 hover:rotate-6 transition duration-300"
            size={25}
          />
          <Github
            className="hover:text-white hover:scale-125 hover:rotate-6 transition duration-300"
            size={25}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
