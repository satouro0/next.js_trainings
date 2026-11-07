"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const furniture = [
  {
    name: "BROWN CHAIR DESIGN",
    price: "100.00",
    image: "/f1.png",
  },
  {
    name: "DOUBLE BED DESIGN",
    price: "200.00",
    image: "/f2.png",
  },
  {
    name: "HOUSE CHAIR DESIGN",
    price: "200.00",
    image: "/f3.png",
  },
  {
    name: "BROWN TABLE DESIGN",
    price: "100.00",
    image: "/f4.png",
  },
  {
    name: "BLUE CHAIR DESIGN",
    price: "200.00",
    image: "/f5.png",
  },
  {
    name: "BROWN TABLE DESIGN",
    price: "200.00",
    image: "/f6.png",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function Edge_Furniture() {
  return (
    <section className="w-full bg-white px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold text-black sm:text-3xl">
            OUR FURNITURE
          </h2>
          <p className="mt-2 max-w-4xl text-sm leading-6 text-black sm:text-base">
            which don't look even slightly believable. If you are going to use
            a passage of Lorem Ipsum, you need to be sure there isn't an
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7"
        >
          {furniture.map((item, index) => (
            <motion.article
              key={`${item.name}-${index}`}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="overflow-hidden rounded bg-[#f5f8f8] p-4 transition-shadow duration-300 hover:shadow-lg sm:p-5"
            >
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-2 transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="flex items-center justify-between gap-3 pt-3">
                <h3 className="text-sm font-medium text-black">
                  {item.name}
                </h3>
              </div>

              <div className="mt-2 flex items-center justify-between gap-3">
                <p className="text-sm text-black">
                  <span className="mr-1 text-[#67b5bd]">$</span>
                  {item.price}
                </p>

                <a
                  href="#contact"
                  className="shrink-0 text-xs font-medium text-[#67b5bd] transition-colors hover:text-[#f53612] sm:text-sm"
                >
                  BUY NOW
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}