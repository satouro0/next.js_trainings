
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SbsVideo() {
  return (
    <div className="w-full overflow-hidden bg-white px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-7xl"
      >
        <h2 className="text-center text-3xl font-bold text-[#292929] sm:text-4xl lg:text-5xl">
          Skating Video
        </h2>

        <p className="mx-auto mt-5 max-w-4xl text-center text-sm leading-7 text-[#292929] sm:text-base">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered
        </p>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="min-w-0"
          >
            <div className="relative w-full">
              <Image
                src="/sakt1.png"
                alt="Girl skating on a skateboard"
                width={500}
                height={600}
                className="h-auto w-full object-contain"
              />
            </div>

            <a
              href="#"
              className="mt-5 inline-block text-sm font-bold text-[#292929] transition-colors hover:text-[#f3310b]"
            >
              SEE MORE
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{ y: -6 }}
            className="min-w-0"
          >
            <div className="relative w-full">
              <Image
                src="/sakt2.png"
                alt="Skater performing a skateboard trick"
                width={500}
                height={600}
                className="h-auto w-full object-contain"
              />
            </div>

            <a
              href="#"
              className="mt-5 inline-block text-sm font-bold text-[#292929] transition-colors hover:text-[#f3310b]"
            >
              SEE MORE
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -6 }}
            className="min-w-0 sm:col-span-2 lg:col-span-1"
          >
            <div className="relative w-full">
              <Image
                src="/sakt3.png"
                alt="Boy skating on a skateboard"
                width={500}
                height={600}
                className="h-auto w-full object-contain"
              />
            </div>

            <a
              href="#"
              className="mt-5 inline-block text-sm font-bold text-[#292929] transition-colors hover:text-[#f3310b]"
            >
              SEE MORE
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
