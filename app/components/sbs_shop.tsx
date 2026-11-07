"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const textVariants = {
  hidden: { opacity: 0, x: 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function SbsSkateShop() {
  return (
    <div className="w-full bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={imageVariants}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-120 aspect-square">
              <div
                className="absolute inset-0 bg-[#ff2d1a]"
                style={{
                  borderRadius: "62% 38% 58% 42% / 52% 48% 55% 45%",
                  boxShadow: "0 30px 60px -15px rgba(255, 45, 26, 0.4)",
                }}
              />
              <div
                className="absolute -inset-6 opacity-25 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #ff2d1a 1.6px, transparent 1.6px)",
                  backgroundSize: "16px 16px",
                  borderRadius: "62% 38% 58% 42% / 52% 48% 55% 45%",
                  maskImage:
                    "radial-gradient(ellipse 85% 85% at 50% 50%, black 35%, transparent 72%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse 85% 85% at 50% 50%, black 35%, transparent 72%)",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12">
                <Image
                  src="/shop.png"
                  alt="Skate shop products"
                  width={400}
                  height={400}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={textVariants}
            className="flex flex-col justify-center text-center lg:text-left"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-[1.1] mb-6">
              Our Skate
              <br />
              Shop
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration. There are many
              variations of passages of Lorem Ipsum available, but the majority
              have suffered alteration. There are many variations.
            </p>
            <div>
              <Link
                href="#products"
                className="inline-block text-sm font-bold tracking-widest text-gray-900 border-b-2 border-gray-900 pb-1 hover:text-[#ff2d1a] hover:border-[#ff2d1a] transition-colors duration-300"
              >
                BUY NOW
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}