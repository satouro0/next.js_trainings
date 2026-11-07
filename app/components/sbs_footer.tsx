
"use client";

import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function SbsFooter() {
  return (
    <footer id="contact" className="w-full overflow-hidden bg-white text-[#303030]">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-6 py-12 sm:px-10 sm:py-16 lg:grid-cols-3 lg:gap-12 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-b border-[#f53212] pb-8 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-10"
        >
          <h2 className="mb-5 text-2xl font-bold sm:text-3xl">
            Contact Us
          </h2>

          <div className="flex flex-col gap-4 text-sm sm:text-base">
            <a
              href="#location"
              className="flex items-center gap-4 transition-colors hover:text-[#f53212]"
            >
              <FaMapMarkerAlt className="shrink-0 text-[#4010d9]" />
              <span>Locations</span>
            </a>

            <a
              href="tel:+011234567890"
              className="flex items-center gap-4 transition-colors hover:text-[#f53212]"
            >
              <FaPhone className="shrink-0 text-[#4010d9]" />
              <span>Call +01 1234567890</span>
            </a>

            <a
              href="mailto:demo@gmail.com"
              className="flex items-center gap-4 transition-colors hover:text-[#f53212]"
            >
              <FaEnvelope className="shrink-0 text-[#4010d9]" />
              <span>demo@gmail.com</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-2"
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
            <div>
              <h2 className="mb-5 text-2xl font-bold sm:text-3xl">
                Newsletter
              </h2>

              <form
                onSubmit={(event) => event.preventDefault()}
                className="flex flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  aria-label="Newsletter email"
                  required
                  className="min-w-0 w-full border border-gray-100 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#f53212] sm:text-base"
                />

                <button
                  type="submit"
                  className="shrink-0 rounded-lg bg-[#f53212] px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-[#d9270c] sm:px-8"
                >
                  SUBSCRIBE
                </button>
              </form>

              <h2 className="mb-4 mt-6 text-2xl font-bold sm:text-3xl">
                Useful Link
              </h2>

              <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm sm:gap-x-8 sm:text-base">
                <a className="transition-colors hover:text-[#f53212]">
                  Home
                </a>
                <a href="#about" className="transition-colors hover:text-[#f53212]">
                  About
                </a>
                <a href="#skating" className="transition-colors hover:text-[#f53212]">
                  Skating
                </a>
                <a href="#shop" className="transition-colors hover:text-[#f53212]">
                  Shop
                </a>
                <a href="#contact" className="transition-colors hover:text-[#f53212]">
                  Contact Us
                </a>
              </nav>
            </div>

            <div className="flex flex-col gap-5 md:items-end md:pt-12">
              <div className="flex flex-wrap items-center gap-2">
                <motion.a
                  whileHover={{ y: -4, scale: 1.08 }}
                  href="https://www.facebook.com/"
                  aria-label="Facebook"
                  className="flex size-9 items-center justify-center rounded-full bg-[#333333] text-white transition-colors hover:bg-[#4010d9]"
                >
                  <FaFacebookF />
                </motion.a>

                <motion.a
                  whileHover={{ y: -4, scale: 1.08 }}
                  href="https://www.twitter.com/"
                  aria-label="Twitter"
                  className="flex size-9 items-center justify-center rounded-full bg-[#333333] text-white transition-colors hover:bg-[#4010d9]"
                >
                  <FaTwitter />
                </motion.a>

                <motion.a
                  whileHover={{ y: -4, scale: 1.08 }}
                  href="https://www.linkedin.com/"
                  aria-label="LinkedIn"
                  className="flex size-9 items-center justify-center rounded-full bg-[#333333] text-white transition-colors hover:bg-[#4010d9]"
                >
                  <FaLinkedinIn />
                </motion.a>

                <motion.a
                  whileHover={{ y: -4, scale: 1.08 }}
                  href="https://www.instagram.com/"
                  aria-label="Instagram"
                  className="flex size-9 items-center justify-center rounded-full bg-[#333333] text-white transition-colors hover:bg-[#4010d9]"
                >
                  <FaInstagram />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-[#f53212] px-4 py-5 text-center text-sm text-white sm:text-base"
      >
        © 2020 All Rights Reserved. Design by Free html Templates
      </motion.div>
    </footer>
  );
}
