"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import Esigned_nav from "./Esigned_nav";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    heading: "WEB AGENCY",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  },
  {
    id: 2,
    heading: "CREATIVE DESIGN",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  },
  {
    id: 3,
    heading: "DIGITAL SOLUTIONS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  },
];

export default function Esigned_header() {
  return (
    <div className="relative isolate w-full overflow-hidden bg-white">
      <div className="relative min-h-screen w-full overflow-hidden bg-[#191919] text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/html_niga.jpg"
            alt="a"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-0 bg-linear-to-br from-black/40 via-transparent to-black/30" /> */}
        </div>

        <Esigned_nav />

        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={0}
          loop
          speed={700}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          className="esigned-hero-swiper relative z-10 min-h-screen w-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="flex min-h-screen w-full items-center justify-center px-5 pb-32 pt-32 sm:px-8 sm:pb-36 sm:pt-36">
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="mx-auto flex w-full max-w-5xl flex-col items-center text-center"
                >
                  <motion.h2
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mb-3 text-2xl font-normal sm:text-3xl md:text-4xl"
                  >
                    WELCOME TO
                  </motion.h2>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="mb-6 text-4xl font-normal tracking-wide sm:text-5xl md:text-6xl lg:text-7xl"
                  >
                    {slide.heading}
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mb-10 max-w-4xl text-sm leading-7 text-white sm:text-base md:text-lg"
                  >
                    {slide.description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Link
                      href="/esigned_contact"
                      className="inline-flex min-h-12 min-w-48 items-center justify-center rounded-full rounded-br-none bg-white px-8 py-3 text-base text-black transition-colors duration-300 hover:bg-gray-200"
                    >
                      Contact us
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}