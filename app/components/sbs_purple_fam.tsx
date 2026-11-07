"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Sbs_purple_fam() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="relative w-full overflow-hidden bg-[#390bd6] px-6 py-16 text-white sm:px-10 sm:py-20 lg:px-16 lg:py-24"
      >
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 md:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative z-10"
          >
            <h2 className="mb-8 max-w-md text-4xl font-bold leading-tight sm:text-5xl">
              About
              <br />
              Skating
              <br />
              school
            </h2>

            <p className="mb-6 max-w-xl text-sm leading-7 sm:text-base sm:leading-8">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alterationThere are many
              variatioThere are many variations of passages of Lorem Ipsum
              available, but the majority have suffered alterationThere are many
              variationsThere are many variations
            </p>

            <motion.a
              href="#contact"
              whileHover={{ x: 6 }}
              whileTap={{ scale: 0.96 }}
              className="inline-block text-base font-bold text-white transition-opacity hover:opacity-80"
            >
              READ MORE
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-xl self-end"
          >
            <Image
              src="/purple-fam.png"
              alt="Children and adults learning to skate"
              width={650}
              height={550}
              priority={false}
              className="h-auto w-full object-contain object-bottom"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
