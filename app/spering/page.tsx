"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Spering() {
  return (
    <div className="w-full overflow-hidden font-sans text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <div className="bg-gray-900 relative flex flex-col">
          <div className="flex justify-between items-center px-5 sm:px-8 lg:px-10 py-5">
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8">
                <div className="absolute top-0 left-0 w-6 h-6 border-2 border-white rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-2 border-teal-400 rounded-full"></div>
              </div>

              <h1 className="text-2xl font-bold">Spering</h1>
            </div>

            <div className="hidden lg:flex items-center gap-8">
              <div className="cursor-pointer hover:text-teal-400 transition">
                Home
              </div>

              <div className="cursor-pointer hover:text-teal-400 transition">
                About
              </div>

              <div className="cursor-pointer hover:text-teal-400 transition">
                Services
              </div>

              <div className="cursor-pointer hover:text-teal-400 transition">
                Contact Us
              </div>
            </div>

            <div className="lg:hidden flex flex-col gap-1.5">
              <div className="w-7 h-1 bg-white rounded"></div>
              <div className="w-7 h-1 bg-white rounded"></div>
              <div className="w-7 h-1 bg-white rounded"></div>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center px-5 sm:px-10 lg:px-16 py-16 lg:py-10">
            <div className="w-full max-w-xl text-center lg:text-left">
              <motion.h2
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-5xl lg:text-5xl font-extrabold leading-tight"
              >
                YOU CAN
                <br />
                HIRE FREELANCER
                <br />
                HERE
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 text-base sm:text-lg leading-7"
              >
                It is a long established fact that a reader will be distracted
                by the readable content of a page
              </motion.p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 mt-10">
                <motion.button
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-red-500 px-10 py-4 font-semibold"
                >
                  🏠 About Us
                </motion.button>

                <motion.button
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-gray-800 px-10 py-4"
                >
                  💼 Get A Quote
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-teal-500 min-h-[500px] lg:min-h-screen flex items-center justify-center relative">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full flex justify-center"
          >
            <Image
              src="/black_gurl.png"
              width={600}
              height={600}
              alt="Freelancer"
              className="w-4/5 sm:w-3/5 lg:w-3/4 h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute bottom-5 right-8 text-white font-semibold"
          >
            01
          </motion.div>
        </div>
      </div>

      <div className="bg-white text-black">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center items-center"
          >
            <Image
              src="/experience-img.jpg"
              width={600}
              height={500}
              alt="Freelancer working"
              className="w-full h-auto"
            />
          </motion.div>

          <div className="mt-10 lg:mt-0 lg:pl-10">
            <motion.h2
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl font-extrabold leading-tight"
            >
              BEST EXPERIENCED FREELANCER HERE
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg leading-7"
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <motion.button
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-500 text-white px-10 py-4 font-semibold"
              >
                📖 Read More
              </motion.button>

              <motion.button
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-900 text-white px-10 py-4 font-semibold"
              >
                💼 Hire
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-teal-500 text-white px-5 sm:px-10 lg:px-16 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl font-extrabold text-center"
          >
            CATEGORY
          </motion.h2>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-14 sm:gap-y-16 lg:gap-y-20 gap-x-8 lg:gap-x-20 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center text-center"
            >
              <div className="text-6xl sm:text-7xl">🎨</div>
              <h3 className="text-lg sm:text-xl mt-4">Design & Arts</h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="text-6xl sm:text-7xl">💻</div>
              <h3 className="text-lg sm:text-xl mt-4">Web Development</h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="text-6xl sm:text-7xl">🔎</div>
              <h3 className="text-lg sm:text-xl mt-4">SEO Marketing</h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center text-center"
            >
              <div className="text-6xl sm:text-7xl">🎬</div>
              <h3 className="text-lg sm:text-xl mt-4">Video Editing</h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col items-center text-center"
            >
              <div className="text-6xl sm:text-7xl">🚀</div>
              <h3 className="text-lg sm:text-xl mt-4">Logo Design</h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              <div className="text-6xl sm:text-7xl">🎮</div>
              <h3 className="text-lg sm:text-xl mt-4">Game Design</h3>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="bg-white text-black">
        <div className="max-w-6xl mx-auto px-5 sm:px-10 py-16 sm:py-20 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <Image
              src="/about-img_copy.jpg"
              width={600}
              height={400}
              alt="About Spering Company"
              className="w-full max-w-xl h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center max-w-4xl mx-auto mt-8"
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              ABOUT SPERING COMPANY
            </h2>

            <p className="mt-4 text-sm sm:text-base leading-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If youThere are many variations of passages
              of Lorem Ipsum available, but the majority have suffered
              alteration in some form, by injected humour, or randomised words
              which don't look even slightly believable.
            </p>

            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-500 text-white px-10 py-3 mt-8"
            >
              Read More
            </motion.button>
          </motion.div>
        </div>
      </div>

      <div className="bg-white text-black">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center max-w-6xl mx-auto px-5 sm:px-10 py-16 sm:py-20 lg:py-24 gap-12">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -70 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl font-extrabold"
            >
              WORK FREELANCER HAS DONE
            </motion.h2>

            <div className="mt-8 space-y-5">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-5"
              >
                <div className="w-16 h-16 rounded-full bg-teal-500 flex items-center justify-center text-2xl">
                  💰
                </div>

                <div>
                  <p className="text-red-500 font-bold">$250 Million</p>
                  <h3 className="text-xl font-bold">Paid to Freelancers</h3>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="flex items-center gap-5"
              >
                <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center text-2xl">
                  🧾
                </div>

                <div>
                  <p className="text-red-500 font-bold">2 Million</p>
                  <h3 className="text-xl font-bold">Paid Invoices</h3>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center gap-5"
              >
                <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center text-2xl">
                  💵
                </div>

                <div>
                  <p className="text-red-500 font-bold">700,000</p>
                  <h3 className="text-xl font-bold">Worldwide Freelancer</h3>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="flex items-center gap-5"
              >
                <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center text-2xl">
                  😊
                </div>

                <div>
                  <p className="text-red-500 font-bold">98%</p>
                  <h3 className="text-xl font-bold">
                    Customer
                    <br />
                    Satisfaction Rate
                  </h3>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="flex justify-center"
          >
            <Image
              src="/freelance-img.jpg"
              width={600}
              height={500}
              alt="Freelancers working"
              className="w-full max-w-xl h-auto"
            />
          </motion.div>
        </div>
      </div>

      <div className="bg-white text-black">
        <div className="max-w-4xl mx-auto px-5 sm:px-10 py-16 sm:py-20 lg:py-24">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl font-extrabold text-center"
          >
            TESTIMONIAL
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-12"
          >
            <div className="bg-white shadow-lg px-8 sm:px-14 py-8 sm:py-10 text-center">
              <h3 className="text-xl sm:text-2xl font-bold">John Hissong</h3>

              <p className="mt-4 text-sm sm:text-base leading-6">
                passages of Lorem Ipsum available, but the majority have
                suffered alteration in some form, by injected humour, or
                randomised words which don't look even slightly believable. If
                youThere are many variations of passages of Lorem Ipsum
                available, but the majority have suffered alteration in some
                form.
              </p>

              <div className="text-4xl font-bold mt-4">“</div>
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-1/2 -left-4 sm:-left-6 -translate-y-1/2 w-12 h-12 rounded-full bg-gray-900 text-white text-2xl"
            >
              ←
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-1/2 -right-4 sm:-right-6 -translate-y-1/2 w-12 h-12 rounded-full bg-gray-900 text-white text-2xl"
            >
              →
            </motion.button>
          </motion.div>
        </div>
      </div>

      <motion.footer
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gray-900 text-white"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14 sm:py-16">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12">
                <div className="absolute top-0 left-0 w-10 h-10 border-4 border-white rounded-full flex items-center justify-center">
                  <div className="w-7 h-7 border-4 border-teal-400 rounded-full"></div>
                </div>

                <div className="absolute bottom-0 right-0 w-7 h-7 border-4 border-teal-400 rounded-full"></div>
              </div>

              <h2 className="text-3xl font-bold">Spering</h2>
            </div>

            <div className="flex items-center gap-5 text-2xl">
              <motion.div whileHover={{ y: -5 }}>📘</motion.div>

              <motion.div whileHover={{ y: -5 }}>🐦</motion.div>

              <motion.div whileHover={{ y: -5 }}>💼</motion.div>

              <motion.div whileHover={{ y: -5 }}>📷</motion.div>

              <motion.div whileHover={{ y: -5 }}>▶️</motion.div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mt-16">
            <div>
              <h3 className="text-lg font-bold mb-6">USEFUL LINK</h3>

              <div className="space-y-2 text-base">
                <div className="hover:text-teal-400 transition cursor-pointer">
                  Home
                </div>

                <div className="hover:text-teal-400 transition cursor-pointer">
                  About
                </div>

                <div className="hover:text-teal-400 transition cursor-pointer">
                  Work
                </div>

                <div className="hover:text-teal-400 transition cursor-pointer">
                  Category
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">OFFICES</h3>

              <p className="text-base leading-6">
                Readable content of a page when looking at its layout readable
                content of a page when looking at its layout
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">INFORMATION</h3>

              <p className="text-base leading-6">
                Readable content of a page when looking at its layout readable
                content of a page when looking at its layout
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">NEWSLETTER</h3>

              <input
                type="email"
                placeholder="Email"
                className="w-full bg-white text-gray-800 px-3 py-3 outline-none"
              />

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-red-500 px-8 py-3 mt-4 font-semibold"
              >
                SUBSCRIBE
              </motion.button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 text-center sm:text-left">
            <motion.div
              whileHover={{ y: -5 }}
              className="flex items-center justify-center sm:justify-start gap-4"
            >
              <div className="text-2xl">📍</div>

              <p>Location</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="flex items-center justify-center sm:justify-start gap-4"
            >
              <div className="text-2xl">✉️</div>

              <p>demo@gmail.com</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="flex items-center justify-center sm:justify-start gap-4"
            >
              <div className="text-2xl">📞</div>

              <p>Call +01 1234567890</p>
            </motion.div>
          </div>
        </div>
      </motion.footer>

      <div className="bg-white text-gray-900 text-center py-6 px-5">
        <p className="text-sm sm:text-base">
          © 2026 All Rights Reserved By Free Html Templates
        </p>
      </div>
    </div>
  );
}
