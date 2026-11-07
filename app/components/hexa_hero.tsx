"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { map } from "zod";

const categories = [
  {
    title: "Women",
    subtitle: "Best Clothes For Women",
    description: "Discover the latest styles for women.",
    href: "/womens",
    image: "/hexa_hero_1.jpg",
  },
  {
    title: "Men",
    subtitle: "Best Clothes For Men",
    description: "Explore modern clothing and everyday essentials.",
    href: "/mens",
    image: "/hexa_hero_2.jpg",
  },
  {
    title: "Kids",
    subtitle: "Best Clothes For Kids",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "/kids",
    image: "/hexa_hero_3.jpg",
  },
  {
    title: "Accessories",
    subtitle: "Best Trend Accessories",
    description: "Complete your look with our latest accessories.",
    href: "/accessories",
    image: "/hexa_hero_4.jpg",
  },
];

function CategoryCard({ title, subtitle, description, href, image }) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      className="group relative min-h-60 overflow-hidden bg-neutral-300"
    >
      <Image
      fill
        src={image}
        alt={""}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/50" />

      <motion.div
        variants={{
          rest: { y: 0 },
          hover: { y: -12 },
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 z-10 flex flex-col items-center justify-center p-5 text-center text-white"
      >
        <h2 className="text-2xl font-bold">{title}</h2>

        <p className="mt-4 text-base italic">{subtitle}</p>
      </motion.div>

      <motion.div
        variants={{
          rest: { y: "100%" },
          hover: { y: 0 },
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="absolute inset-x-4 bottom-4 z-20 flex flex-col items-center justify-center bg-neutral-900/90 px-4 py-6 text-center text-white"
      >
        <p className="text-sm leading-6">{description}</p>

        <Link
          href={href}
          className="mt-5 inline-block border border-white px-6 py-3 text-sm font-semibold transition-colors hover:bg-white hover:text-neutral-900"
        >
          Discover More
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default function Hexa_hero() {
  return (
    <section className="w-full border-b border-dashed border-neutral-200  px-4 py-10 md:px-6 md:py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-2">
        <motion.div
          initial="rest"
          whileHover="hover"
          className="group relative min-h-96 overflow-hidden bg-neutral-300 lg:min-h-full"
        >
          <Image
          fill
            src="/hexa_bigass.jpg"
            alt="Hexashop collection"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 transition-colors duration-300 group-hover:bg-black/60" />

          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center text-white">
            <motion.h1
              variants={{
                rest: { y: 0 },
                hover: { y: -8 },
              }}
              className="text-3xl font-bold md:text-5xl"
            >
              We Are Hexashop
            </motion.h1>

            <p className="mt-5 text-base italic md:text-lg">
              Awesome, clean &amp; creative HTML5 Template
            </p>

            <Link
              href="/shop"
              className="mt-8 border border-white px-7 py-4 text-sm font-semibold transition-colors hover:bg-white hover:text-neutral-900"
            >
              Purchase Now!
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}
