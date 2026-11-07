"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Edge_AboutUs() {
  return (
    <section className="w-full px-4 py-8 sm:px-6 sm:py-12 lg:px-9">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 bg-[#f7f8f8] px-5 py-8 sm:px-8 sm:py-10 md:gap-10 lg:grid-cols-2 lg:px-12 lg:py-12">
        <motion.div
          initial={{ opacity: 0, x: -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto aspect-5/3 w-full max-w-lg"
        >
          <Image
            src="/one_girl.png"
            alt="A person relaxing on a sofa at home"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="min-w-0"
        >
          <h2 className="text-2xl font-bold text-black sm:text-3xl">
            ABOUT US
          </h2>

          <p className="mt-4 text-sm leading-6 text-gray-800 sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            dolorem eum consequuntur ipsam repellat dolor soluta aliquid
            laborum, eius odit consectetur vel quasi in quidem, eveniet ab est
            corporis tempore.
          </p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="mt-6 inline-flex min-h-11 items-center justify-center bg-[#67b5bd] px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-[#4c9fa8]"
          >
            Read More
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}