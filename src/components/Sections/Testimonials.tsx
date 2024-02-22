"use client";
import React from "react";
import { motion, useScroll } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/css/navigation';
// Import Swiper styles
import "swiper/css";
import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import {
  ArrowLeftCircle,
  ArrowRightCircle,
  LocateIcon,
  LucideLocate,
  Map,
  MapPin,
} from "lucide-react";

const Testimonials = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <>
      <div className="flex flex-col items-start w-full py-20 relative">
        <motion.div className="flex flex-col items-center justify-between gap-5 pb-20 w-full">
          <motion.h2
            className="text-5xl font-bold"
            whileInView={{ y: 0 }}
            initial={{ y: -100 }}
            transition={{ duration: 1 }}
          >
            Few smiles and comment
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-xl"
            whileInView={{ y: 0 }}
            initial={{ y: -100 }}
            transition={{ duration: 1 }}
          >
            Real estate farm that makes your dreams true.
          </motion.p>
        </motion.div>
        <div className="w-full relative">
          <div className="flex items-center">
            <Swiper
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 1,
                },
              }}
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              navigation={{
                prevEl: ".swiper-button-prev-test",
                nextEl: ".swiper-button-next-test",
              }}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
            >
              <SwiperSlide className="flex flex-col items-center justify-center w-full">
                <div className="flex flex-row items-center justify-center w-full gap-10">
                  <div className="md:w-1/2 w-full">
                    <Image
                      src="/images/testimonial_1.png"
                      alt="Testimonials"
                      width={455}
                      height={350}
                      className="rounded-md shadow-md"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center gap-5">
                    <Image
                      src="/images/quote_icon.png"
                      alt="Testimonials"
                      width={50}
                      height={27}
                    />
                    <h2 className="text-4xl font-bold">
                      Dream house isn&apos;t dream anymore
                    </h2>
                    <p className="text-muted-foreground text-2xl">
                      Semper arcu mauris aliquam lacus. Massa erat vitae
                      ultrices pharetra scelerisque. Ipsum, turpis facilisis
                      tempor pulvinar.
                    </p>
                    <div>
                      <p className="font-semibold text-2xl">John Doe</p>
                      <p className="text-muted-foreground">Artist</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex flex-col items-center justify-center w-full">
                <div className="flex flex-row items-center justify-center w-full gap-10">
                  <div className="md:w-1/2 w-full">
                    <Image
                      src="/images/testimonial_1.png"
                      alt="Testimonials"
                      width={455}
                      height={350}
                      className="rounded-md shadow-md"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center gap-5">
                    <Image
                      src="/images/quote_icon.png"
                      alt="Testimonials"
                      width={50}
                      height={27}
                    />
                    <h2 className="text-4xl font-bold">
                      Dream house isn&apos;t dream anymore
                    </h2>
                    <p className="text-muted-foreground text-2xl">
                      Semper arcu mauris aliquam lacus. Massa erat vitae
                      ultrices pharetra scelerisque. Ipsum, turpis facilisis
                      tempor pulvinar.
                    </p>
                    <div>
                      <p className="font-semibold text-2xl">John Doe</p>
                      <p className="text-muted-foreground">Artist</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex flex-col items-center justify-center w-full">
                <div className="flex flex-row items-center justify-center w-full gap-10">
                  <div className="md:w-1/2 w-full">
                    <Image
                      src="/images/testimonial_1.png"
                      alt="Testimonials"
                      width={455}
                      height={350}
                      className="rounded-md shadow-md"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center gap-5">
                    <Image
                      src="/images/quote_icon.png"
                      alt="Testimonials"
                      width={50}
                      height={27}
                    />
                    <h2 className="text-4xl font-bold">
                      Dream house isn&apos;t dream anymore
                    </h2>
                    <p className="text-muted-foreground text-2xl">
                      Semper arcu mauris aliquam lacus. Massa erat vitae
                      ultrices pharetra scelerisque. Ipsum, turpis facilisis
                      tempor pulvinar.
                    </p>
                    <div>
                      <p className="font-semibold text-2xl">John Doe</p>
                      <p className="text-muted-foreground">Artist</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex flex-col items-center justify-center w-full">
                <div className="flex flex-row items-center justify-center w-full gap-10">
                  <div className="md:w-1/2 w-full">
                    <Image
                      src="/images/testimonial_1.png"
                      alt="Testimonials"
                      width={455}
                      height={350}
                      className="rounded-md shadow-md"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center gap-5">
                    <Image
                      src="/images/quote_icon.png"
                      alt="Testimonials"
                      width={50}
                      height={27}
                    />
                    <h2 className="text-4xl font-bold">
                      Dream house isn&apos;t dream anymore
                    </h2>
                    <p className="text-muted-foreground text-2xl">
                      Semper arcu mauris aliquam lacus. Massa erat vitae
                      ultrices pharetra scelerisque. Ipsum, turpis facilisis
                      tempor pulvinar.
                    </p>
                    <div>
                      <p className="font-semibold text-2xl">John Doe</p>
                      <p className="text-muted-foreground">Artist</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <div className="flex items-center flex-row gap-5 justify-center my-20">
                <motion.div
                  className="swiper-button-prev-test"
                  whileInView={{ x: 0 }}
                  initial={{ x: 100 }}
                  transition={{ duration: 1 }}
                >
                  <ArrowLeftCircle size={30} />
                </motion.div>
                <motion.div
                  className="swiper-button-next-test"
                  whileInView={{ x: 0 }}
                  initial={{ x: 100 }}
                  transition={{ duration: 1 }}
                >
                  <ArrowRightCircle size={30} />
                </motion.div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
