"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const blogPosts = [
  {
    image: "/b1.jpg",
    title: "Look even slightly believable. If you are",
    description:
      "alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  },
  {
    image: "/b3.jpg",
    title: "Anything embarrassing hidden in the middle",
    description:
      "alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  },
  {
    image: "/b3.jpg",
    title: "Molestias magni natus dolores odio commodi. Quaerat!",
    description:
      "alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  },
];

export default function Edge_LatestBlog() {
  return (
    <section className="w-full bg-white px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center text-2xl font-bold text-black sm:mb-12 sm:text-3xl"
        >
          LATEST BLOG
        </motion.h2>

        <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="overflow-hidden bg-white shadow-md transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="p-5">
                <h3 className="text-base font-bold leading-snug text-black sm:text-lg">
                  {post.title}
                </h3>

                <p className="mt-2 text-sm leading-5 text-gray-700">
                  {post.description}
                </p>

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-4 inline-flex min-h-10 items-center justify-center bg-[#67b5bd] px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-[#4c9fa8]"
                >
                  Read More
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
