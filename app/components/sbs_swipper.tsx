
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    title: ["Skating", "Board", "School"],
    description: "Discover your passion for skateboarding.",
  },
  {
    title: ["Learn", "Skateboard", "Tricks"],
    description: "Learn new skills and improve your skateboarding.",
  },
  {
    title: ["Ride With", "Confidence", "Every Day"],
    description: "Build confidence and enjoy every ride.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut" as const,
    },
  },
};
const cardText =
  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration. There are many variations.";

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div id="home" className="min-h-screen overflow-x-clip bg-white">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          slidesPerView={1}
          loop
          speed={850}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            prevEl: ".hero-prev",
            nextEl: ".hero-next",
          }}
          pagination={{
            clickable: true,
          }}
          onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
          className="skating-swiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="grid min-h-[80vh] grid-cols-1 items-center gap-7 py-8 sm:min-h-[85vh] sm:py-12 md:min-h-[calc(100vh-5rem)] md:grid-cols-2 md:gap-5 lg:gap-8">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate={activeSlide === index ? "visible" : "hidden"}
                  className="relative z-10 order-2 min-w-0 md:order-1"
                >
                  <motion.div
                    variants={itemVariants}
                    className="mb-8 flex flex-col items-start gap-2 sm:mb-12"
                  >
                    <motion.span
                      initial={{ width: 0 }}
                      animate={{ width: "6rem" }}
                      transition={{ duration: 0.7, delay: 0.2 }}
                      className="h-4 rounded-full bg-orange-600"
                    />
                    <motion.span
                      initial={{ width: 0 }}
                      animate={{ width: "5rem" }}
                      transition={{ duration: 0.7, delay: 0.4 }}
                      className="h-4 rounded-full bg-violet-700"
                    />
                  </motion.div>

                  <motion.h1
                    variants={itemVariants}
                    className="text-5xl font-extrabold leading-tight tracking-tight text-neutral-800 sm:text-6xl lg:text-7xl xl:text-8xl"
                  >
                    {slide.title.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </motion.h1>

                  <motion.p
                    variants={itemVariants}
                    className="mt-5 max-w-md text-sm leading-7 text-neutral-600 sm:text-base"
                  >
                    {slide.description}
                  </motion.p>

                  <motion.a
                    variants={itemVariants}
                    href="#skating"
                    whileHover={{
                      x: 8,
                      color: "#fa3211",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-7 inline-flex py-2 text-sm font-extrabold text-neutral-800 sm:mt-9"
                  >
                    READ MORE
                  </motion.a>
                </motion.div>

                <div className="relative order-1 flex min-h-64 min-w-0 items-center justify-center sm:min-h-80 md:order-2 md:min-h-0">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.7, rotate: -15 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: 0,
                    }}
                    transition={{
                      duration: 0.9,
                      ease: "easeOut",
                    }}
                    className="absolute right-2 top-1/2 aspect-square w-4/5 -translate-y-1/2 rounded-full bg-violet-700 sm:right-5 md:right-0"
                  />

                  <motion.div
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "linear",
                    }}
                    className="skating-dots absolute inset-0"
                  />

                  <motion.div
                    initial={{ opacity: 0, x: 35, y: 25 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      y: [0, -8, 0],
                    }}
                    transition={{
                      opacity: { duration: 0.7, delay: 0.2 },
                      x: { duration: 0.7 },
                      y: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                    className="relative z-10 w-full"
                  >
                    <Image
                      src="/two_minors.png"
                      alt="Skateboarders performing tricks"
                      width={750}
                      height={650}
                      priority={index === 0}
                      className="mx-auto h-auto max-h-80 w-full object-contain sm:max-h-96 lg:max-h-136"
                    />
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative z-20 flex gap-3 pb-8 md:-mt-20 md:pb-10"
        >
          <motion.button
            type="button"
            aria-label="Previous slide"
            whileHover={{
              scale: 1.1,
              backgroundColor: "#fa3211",
            }}
            whileTap={{ scale: 0.88 }}
            className="hero-prev flex size-14 cursor-pointer items-center justify-center rounded-full bg-violet-700 text-lg text-white shadow-md transition-colors sm:size-16"
          >
            <FaArrowLeft />
          </motion.button>

          <motion.button
            type="button"
            aria-label="Next slide"
            whileHover={{
              scale: 1.1,
              backgroundColor: "#fa3211",
            }}
            whileTap={{ scale: 0.88 }}
            className="hero-next flex size-14 cursor-pointer items-center justify-center rounded-full bg-violet-700 text-lg text-white shadow-md transition-colors sm:size-16"
          >
            <FaArrowRight />
          </motion.button>
        </motion.div>
      </div>

      <div
        id="skating"
        className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-x-7 gap-y-5 px-5 pb-16 pt-5 sm:grid-cols-2 sm:px-8 sm:pb-20 lg:grid-cols-3 lg:px-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -8, transition: { duration: 0.25 } }}
          className="flex min-h-80 flex-col items-center rounded-xl bg-orange-600 px-7 py-9 text-center text-white shadow-sm transition-shadow hover:shadow-xl sm:min-h-96 sm:px-8 sm:py-10"
        >
          <motion.div
            whileHover={{ rotate: -10, scale: 1.15 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="mb-5 text-6xl"
          >
            <span>🏃</span>
          </motion.div>
          <h2 className="mb-6 text-2xl font-extrabold">Skateboard</h2>
          <p className="max-w-xs text-base leading-7">{cardText}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          whileHover={{ y: -8, transition: { duration: 0.25 } }}
          className="flex min-h-80 flex-col items-center rounded-xl bg-violet-700 px-7 py-9 text-center text-white shadow-sm transition-shadow hover:shadow-xl sm:min-h-96 sm:px-8 sm:py-10"
        >
          <motion.div
            whileHover={{ rotate: 10, scale: 1.15 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="mb-5 text-6xl"
          >
            🛹
          </motion.div>
          <h2 className="mb-6 text-2xl font-extrabold">Skateboard</h2>
          <p className="max-w-xs text-base leading-7">{cardText}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.24 }}
          whileHover={{ y: -8, transition: { duration: 0.25 } }}
          className="flex min-h-80 flex-col items-center rounded-xl bg-orange-600 px-7 py-9 text-center text-white shadow-sm transition-shadow hover:shadow-xl sm:col-span-2 sm:min-h-96 sm:px-8 sm:py-10 lg:col-span-1"
        >
          <motion.div
            whileHover={{ rotate: -10, scale: 1.15 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="mb-5 text-6xl"
          >
            🛼
          </motion.div>
          <h2 className="mb-6 text-2xl font-extrabold">Skateboard</h2>
          <p className="max-w-xs text-base leading-7">{cardText}</p>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          whileHover={{ x: 5 }}
          className="text-sm font-extrabold text-neutral-900 transition-colors hover:text-orange-600"
        >
          READ MORE
        </motion.a>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          whileHover={{ x: 5 }}
          className="text-sm font-extrabold text-neutral-900 transition-colors hover:text-orange-600"
        >
          READ MORE
        </motion.a>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          whileHover={{ x: 5 }}
          className="text-sm font-extrabold text-neutral-900 transition-colors hover:text-orange-600"
        >
          READ MORE
        </motion.a>
      </div>      
    </div>
  );
}
