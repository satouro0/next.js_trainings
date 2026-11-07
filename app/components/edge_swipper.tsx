"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
];

const textVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Edgeswipper() {
  return (
    <section className="w-full overflow-hidden bg-gray-100">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={0}
        loop
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="edge-swiper w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="mx-auto flex min-h-[70vh] w-full max-w-7xl flex-col items-center justify-center gap-8 px-5 py-16 sm:px-8 md:min-h-[75vh] lg:flex-row lg:justify-between lg:gap-12 lg:px-12 lg:py-20">
              {/* Text content */}
              <motion.div
                key={`text-${slide.id}`}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="w-full text-center lg:max-w-xl lg:text-left"
              >
                <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
                  FOR ALL YOUR
                  <span className="block">FURNITURE NEEDS</span>
                </h1>

                <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-700 sm:text-base lg:mx-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  soluta facere minima cum nesciunt id ipsa laboriosam porro
                  alias expedita magnam cupiditate quasi at assumenda dolorum
                  odit, deserunt ipsum necessitatibus!
                </p>

                <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <Link
                      href="/edge_contact"
                      className="inline-flex min-h-12 w-full items-center justify-center border-2 border-orange-400 bg-orange-400 px-7 py-3 font-bold text-white transition-colors duration-300 hover:bg-white hover:text-orange-500 sm:w-auto"
                    >
                      Contact us
                    </Link>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <Link
                      href="/edge_about"
                      className="inline-flex min-h-12 w-full items-center justify-center border-2 border-blue-400 bg-blue-400 px-7 py-3 font-bold text-white transition-colors duration-300 hover:bg-white hover:text-blue-500 sm:w-auto"
                    >
                      About us
                    </Link>
                  </motion.div>
                </div>
              </motion.div>

              {/* Hero image */}
              <motion.div
                key={`image-${slide.id}`}
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src="/edge_two_ppl.png"
                    width={600}
                    height={600}
                    priority={slide.id === 1}
                    alt="People enjoying furniture shopping"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
                    className="h-auto w-full object-contain"
                  />
                </motion.div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .edge-swiper .swiper-pagination {
          bottom: 1.25rem;
        }

        .edge-swiper .swiper-pagination-bullet {
          width: 0.65rem;
          height: 0.65rem;
          background: #f97316;
          opacity: 0.4;
        }

        .edge-swiper .swiper-pagination-bullet-active {
          width: 1.5rem;
          border-radius: 9999px;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}