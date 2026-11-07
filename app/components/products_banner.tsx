"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hexa_product_banner() {
  return (
    <section className="relative flex min-h-80 items-center justify-center overflow-hidden bg-neutral-800 px-5 py-20 sm:min-h-96 md:min-h-100">
      <Image
        src="/products-page-heading.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-neutral-900/70" />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center text-white"
      >
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
          Single Product Page
        </h1>

        <p className="mt-5 text-sm font-semibold italic sm:text-base md:text-lg">
          Awesome &amp; Creative HTML CSS layout by TemplateMo
        </p>
      </motion.div>
    </section>
  );
}