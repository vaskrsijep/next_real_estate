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
        <motion.h2 className="text-5xl font-bold">Ongoing projects</motion.h2>
        <motion.p className="text-muted-foreground text-xl">Projects ongoing in our real estate industry.</motion.p>
        </div>
        <div className="flex items-center gap-5">
        <div className="swiper-button-prev"><ArrowLeftCircle size={30} /></div>
        <div className="swiper-button-next"><ArrowRightCircle size={30} /></div>
        </div>
        </motion.div>
      <div className="w-full">
        <div className="flex items-center">
        <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={4}
      navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className="flex flex-col items-center justify-center w-[350px] overflow-hidden h-[500px]">
        <Image src="/images/ongoingpr1.png" alt="ongoing" width={300} height={300}/>
        <div className="flex flex-col items-center gap-3 justify-center bg-white b">
            <p className="text-2xl font-semibold">Vintage Villa</p>
            <p className="text-muted-foreground flex items-center gap-2"><MapPin size={20}/>Dubai, United Arab Emirates</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-center justify-center w-[350px] overflow-hidden h-[500px]">
        <Image src="/images/ongoingpr1.png" alt="ongoing" width={300} height={300}/>
        <div className="flex flex-col items-center gap-3 justify-center bg-white b">
            <p className="text-2xl font-semibold">Vintage Villa</p>
            <p className="text-muted-foreground flex items-center gap-2"><MapPin size={20}/>Dubai, United Arab Emirates</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-center justify-center w-[350px] overflow-hidden h-[500px]">
        <Image src="/images/ongoingpr1.png" alt="ongoing" width={300} height={300}/>
        <div className="flex flex-col items-center gap-3 justify-center bg-white b">
            <p className="text-2xl font-semibold">Vintage Villa</p>
            <p className="text-muted-foreground flex items-center gap-2"><MapPin size={20}/>Dubai, United Arab Emirates</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-center justify-center w-[350px] overflow-hidden h-[500px]">
        <Image src="/images/ongoingpr1.png" alt="ongoing" width={300} height={300}/>
        <div className="flex flex-col items-center gap-3 justify-center bg-white b">
            <p className="text-2xl font-semibold">Vintage Villa</p>
            <p className="text-muted-foreground flex items-center gap-2"><MapPin size={20}/>Dubai, United Arab Emirates</p>
        </div>
      </SwiperSlide>
      <SwiperSlide><Image src="/images/ongoingpr1.png" alt="ongoing" width={300} height={300}/>
        <div className="flex flex-col items-center gap-3 justify-center bg-white b">
            <p className="text-2xl font-semibold">Vintage Villa</p>
            <p className="text-muted-foreground flex items-center gap-2"><MapPin size={20}/>Dubai, United Arab Emirates</p>
        </div></SwiperSlide>
      <SwiperSlide><Image src="/images/ongoingpr2.png" alt="ongoing" width={300} height={300}/>
        <div className="flex flex-col items-center gap-3 justify-center bg-white b">
            <p className="text-2xl font-semibold">Vintage Villa</p>
            <p className="text-muted-foreground flex items-center gap-2"><MapPin size={20}/>Dubai, United Arab Emirates</p>
        </div></SwiperSlide>
      <SwiperSlide><Image src="/images/ongoingpr3.png" alt="ongoing" width={300} height={300}/>
        <div className="flex flex-col items-center gap-3 justify-center bg-white b">
            <p className="text-2xl font-semibold">Vintage Villa</p>
            <p className="text-muted-foreground flex items-center gap-2"><MapPin size={20}/>Dubai, United Arab Emirates</p>
        </div></SwiperSlide>
        <SwiperSlide><Image src="/images/ongoingpr1.png" alt="ongoing" width={300} height={300}/>
        <div className="flex flex-col items-center gap-3 justify-center bg-white b">
            <p className="text-2xl font-semibold">Vintage Villa</p>
            <p className="text-muted-foreground flex items-center gap-2"><MapPin size={20}/>Dubai, United Arab Emirates</p>
        </div></SwiperSlide>
    </Swiper>
        </div>
      </div>
    </div>
    </>
  );
};

export default Ongoing;
