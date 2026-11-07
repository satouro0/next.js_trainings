"use client";

import Carint_header from "../components/carint_header";
import Carint_nav from "../components/carint_nav";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Carint_footer from "../components/carint_footer";
import Image from "next/image";

const reveal = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
};

export default function page() {
  return (
    <div>
        <Carint_header/>
        <Carint_nav/>
      <div
        id="about"
        className="overflow-hidden bg-white px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20"
      >
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="order-2 min-w-0 lg:order-1"
          >
            <h2 className="mb-4 text-3xl font-bold text-black sm:text-4xl">
              About <span className="text-cyan-600">Us</span>
            </h2>
            <p className="mb-7 text-sm leading-6 text-gray-800 sm:text-base">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&apos;t look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn&apos;t anything embarrassing
              hidden in the middle of text. All
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex min-h-12 items-center justify-center bg-cyan-600 px-8 py-3 text-white transition-colors hover:bg-cyan-700"
            >
              Read More
            </motion.a>
          </motion.div>

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative order-1 mx-auto w-full max-w-xl lg:order-2"
          >
            <div className="absolute -inset-3 bg-sky-950 sm:-inset-4 lg:-left-6 lg:-right-6" />
            <Image
              src="/lots-of-ship.jpg"
              alt="Cargo ship at a commercial shipping port"
              width={900}
              height={600}
              className="relative z-10 h-auto max-h-112 w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
      <Carint_footer/>
    </div>
  )
}
