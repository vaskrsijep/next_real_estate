"use client";
import React from "react";
import { motion, useScroll } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css/navigation';
// Import Swiper styles
import 'swiper/css';
import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { ArrowLeftCircle, ArrowRightCircle, LocateIcon, LucideLocate, Map, MapPin } from "lucide-react";


const Ongoing = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <>
    <div className="flex flex-col items-start w-full py-20">

      <motion.div className="flex flex-row items-center justify-between gap-5 py-5 w-full">
        <div className="flex flex-col items-start gap-5">
        <motion.h2 className="text-5xl font-bold" whileInView={{ y: 0 }} initial={{ y: -100 }}
      transition={{ duration: 1 }}>Ongoing projects</motion.h2>
        <motion.p className="text-muted-foreground text-xl" whileInView={{ y: 0 }} initial={{ y: -100 }}
      transition={{ duration: 1 }}>Projects ongoing in our real estate industry.</motion.p>
        </div>
        <div className="flex items-center gap-5">
        <motion.div className="swiper-button-prev" whileInView={{ x: 0 }} initial={{ x: 100 }}
      transition={{ duration: 1 }}><ArrowLeftCircle size={30} /></motion.div>
        <motion.div className="swiper-button-next" whileInView={{ x: 0 }} initial={{ x: 100 }}
      transition={{ duration: 1 }}><ArrowRightCircle size={30} /></motion.div>
        </div>
        </motion.div>
      <div className="w-full">
        <div className="flex items-center">
        <Swiper
        breakpoints={
          {
            320: {
              slidesPerView: 1
            },
            768: {
              slidesPerView: 2
            },
            1024: {
              slidesPerView: 3
            }
          }
        }
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={4}
      navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide className="flex flex-col items-center justify-center max-w-[350px] relative">
        <div className="flex flex-col items-center justify-center max-w-[350px] relative">
        <Image src="/images/ongoingpr1.png" alt="ongoing" objectFit="cover" width={700} height={300} className="rounded"/>
        <div className="flex flex-col items-center gap-3 justify-center bg-white absolute bottom-5 left-1/2 translate-x-[-50%] p-2 rounded-md shadow-md w-[300px]">
            <p className="text-2xl font-semibold">Vintage Villa</p>
            <p className="text-muted-foreground flex items-center gap-2"><MapPin size={20}/>Dubai, United Arab Emirates</p>
        </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-center justify-center max-w-[350px] relative">
        <div className="flex flex-col items-center justify-center max-w-[350px] relative">
        <Image src="/images/ongoingpr1.png" alt="ongoing" objectFit="cover" width={700} height={300} className="rounded"/>
        <div className="flex flex-col items-center gap-3 justify-center bg-white absolute bottom-5 left-1/2 translate-x-[-50%] p-2 rounded-md shadow-md w-[300px]">
            <p className="text-2xl font-semibold">Vintage Villa</p>
            <p className="text-muted-foreground flex items-center gap-2"><MapPin size={20}/>Dubai, United Arab Emirates</p>
        </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-center justify-center max-w-[350px] relative">
        <div className="flex flex-col items-center justify-center max-w-[350px] relative">
        <Image src="/images/ongoingpr1.png" alt="ongoing" objectFit="cover" width={700} height={300} className="rounded"/>
        <div className="flex flex-col items-center gap-3 justify-center bg-white absolute bottom-5 left-1/2 translate-x-[-50%] p-2 rounded-md shadow-md w-[300px]">
            <p className="text-2xl font-semibold">Vintage Villa</p>
            <p className="text-muted-foreground flex items-center gap-2"><MapPin size={20}/>Dubai, United Arab Emirates</p>
        </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-center justify-center max-w-[350px] relative">
        <div className="flex flex-col items-center justify-center max-w-[350px] relative">
        <Image src="/images/ongoingpr1.png" alt="ongoing" objectFit="cover" width={700} height={300} className="rounded"/>
        <div className="flex flex-col items-center gap-3 justify-center bg-white absolute bottom-5 left-1/2 translate-x-[-50%] p-2 rounded-md shadow-md w-[300px]">
            <p className="text-2xl font-semibold">Vintage Villa</p>
            <p className="text-muted-foreground flex items-center gap-2"><MapPin size={20}/>Dubai, United Arab Emirates</p>
        </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-center justify-center max-w-[350px] relative">
        <div className="flex flex-col items-center justify-center max-w-[350px] relative">
        <Image src="/images/ongoingpr1.png" alt="ongoing" objectFit="cover" width={700} height={300} className="rounded"/>
        <div className="flex flex-col items-center gap-3 justify-center bg-white absolute bottom-5 left-1/2 translate-x-[-50%] p-2 rounded-md shadow-md w-[300px]">
            <p className="text-2xl font-semibold">Vintage Villa</p>
            <p className="text-muted-foreground flex items-center gap-2"><MapPin size={20}/>Dubai, United Arab Emirates</p>
        </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-center justify-center max-w-[350px] relative">
        <div className="flex flex-col items-center justify-center max-w-[350px] relative">
        <Image src="/images/ongoingpr1.png" alt="ongoing" objectFit="cover" width={700} height={300} className="rounded"/>
        <div className="flex flex-col items-center gap-3 justify-center bg-white absolute bottom-5 left-1/2 translate-x-[-50%] p-2 rounded-md shadow-md w-[300px]">
            <p className="text-2xl font-semibold">Vintage Villa</p>
            <p className="text-muted-foreground flex items-center gap-2"><MapPin size={20}/>Dubai, United Arab Emirates</p>
        </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-center justify-center max-w-[350px] relative">
        <div className="flex flex-col items-center justify-center max-w-[350px] relative">
        <Image src="/images/ongoingpr1.png" alt="ongoing" objectFit="cover" width={700} height={300} className="rounded"/>
        <div className="flex flex-col items-center gap-3 justify-center bg-white absolute bottom-5 left-1/2 translate-x-[-50%] p-2 rounded-md shadow-md w-[300px]">
            <p className="text-2xl font-semibold">Vintage Villa</p>
            <p className="text-muted-foreground flex items-center gap-2"><MapPin size={20}/>Dubai, United Arab Emirates</p>
        </div>
        </div>
      </SwiperSlide>
      
    </Swiper>
        </div>
      </div>
    </div>
    </>
  );
};

export default Ongoing;
