"use client";

import Carint_header from "../components/carint_header";
import Carint_nav from "../components/carint_nav";
import { motion } from "framer-motion";
import { Plane, Ship, Truck, TrainFront } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Carint_footer from "../components/carint_footer";

const reveal = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
};

const serviceHover = {
  y: -6,
  transition: { duration: 0.25 },
};

export default function page() {
  return (
    <div>
      <Carint_header />
      <Carint_nav />
      <div
        id="services"
        className="w-full bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20"
      >
        <div className="mx-auto w-full max-w-7xl">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-8 sm:mb-11"
          >
            <h2 className="mb-2 text-2xl font-bold text-black sm:text-3xl">
              Our <span className="text-cyan-600">Services</span>
            </h2>
            <p className="max-w-4xl text-sm leading-6 text-gray-800 sm:text-base">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:gap-7">
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              whileHover={serviceHover}
              className="flex min-w-0 flex-col items-start gap-4 rounded-md bg-gray-50 p-5 transition-shadow hover:shadow-lg sm:flex-row sm:gap-6 sm:p-6"
            >
              <Plane
                className="h-12 w-12 shrink-0 text-cyan-600 sm:h-14 sm:w-14"
                strokeWidth={2}
              />
              <div className="min-w-0 flex-1">
                <h3 className="mb-2 text-lg font-bold text-black">
                  AIR TRANSPORT
                </h3>
                <p className="mb-4 text-sm leading-6 text-gray-800 sm:text-base">
                  fact that a reader will be distracted by the readable content
                  of a page when looking at its layout. The point of using
                </p>
                <a
                  href="#contact"
                  className="font-medium text-gray-900 transition-colors hover:text-cyan-600"
                >
                  Read More
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              whileHover={serviceHover}
              className="flex min-w-0 flex-col items-start gap-4 rounded-md bg-gray-50 p-5 transition-shadow hover:shadow-lg sm:flex-row sm:gap-6 sm:p-6"
            >
              <Ship
                className="h-12 w-12 shrink-0 text-cyan-600 sm:h-14 sm:w-14"
                strokeWidth={2}
              />
              <div className="min-w-0 flex-1">
                <h3 className="mb-2 text-lg font-bold text-black">
                  CARGO TRANSPORT
                </h3>
                <p className="mb-4 text-sm leading-6 text-gray-800 sm:text-base">
                  fact that a reader will be distracted by the readable content
                  of a page when looking at its layout. The point of using
                </p>
                <a
                  href="#contact"
                  className="font-medium text-gray-900 transition-colors hover:text-cyan-600"
                >
                  Read More
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              whileHover={serviceHover}
              className="flex min-w-0 flex-col items-start gap-4 rounded-md bg-gray-50 p-5 transition-shadow hover:shadow-lg sm:flex-row sm:gap-6 sm:p-6"
            >
              <Truck
                className="h-12 w-12 shrink-0 text-cyan-600 sm:h-14 sm:w-14"
                strokeWidth={2}
              />
              <div className="min-w-0 flex-1">
                <h3 className="mb-2 text-lg font-bold text-black">
                  TRUCKS TRANSPORT
                </h3>
                <p className="mb-4 text-sm leading-6 text-gray-800 sm:text-base">
                  fact that a reader will be distracted by the readable content
                  of a page when looking at its layout. The point of using
                </p>
                <a
                  href="#contact"
                  className="font-medium text-gray-900 transition-colors hover:text-cyan-600"
                >
                  Read More
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              whileHover={serviceHover}
              className="flex min-w-0 flex-col items-start gap-4 rounded-md bg-gray-50 p-5 transition-shadow hover:shadow-lg sm:flex-row sm:gap-6 sm:p-6"
            >
              <TrainFront
                className="h-12 w-12 shrink-0 text-cyan-600 sm:h-14 sm:w-14"
                strokeWidth={2}
              />
              <div className="min-w-0 flex-1">
                <h3 className="mb-2 text-lg font-bold text-black">
                  TRAIN TRANSPORT
                </h3>
                <p className="mb-4 text-sm leading-6 text-gray-800 sm:text-base">
                  fact that a reader will be distracted by the readable content
                  of a page when looking at its layout. The point of using
                </p>
                <a
                  href="#contact"
                  className="font-medium text-gray-900 transition-colors hover:text-cyan-600"
                >
                  Read More
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Carint_footer/>
    </div>
  );
}
