
"use client";

import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Carint_footer() {
  return (
    <footer className="w-full">
      <div className="bg-[#06263a] px-6 py-10 text-white sm:px-10 lg:px-12 lg:py-12">
        <div className="mx-auto grid w-full max-w-285 grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="mb-6 text-2xl font-semibold">Address</h3>

            <div className="flex flex-col gap-4 text-base">
              <a
                href="#contact"
                className="flex items-center gap-3 transition-colors hover:text-[#0b9bb0]"
              >
                <FaMapMarkerAlt />
                <span>Location</span>
              </a>

              <a
                href="tel:+011234567890"
                className="flex items-center gap-3 transition-colors hover:text-[#0b9bb0]"
              >
                <FaPhoneAlt />
                <span>Call +01 1234567890</span>
              </a>

              <a
                href="mailto:demo@gmail.com"
                className="flex items-center gap-3 transition-colors hover:text-[#0b9bb0]"
              >
                <FaEnvelope />
                <span>demo@gmail.com</span>
              </a>
            </div>

            <div className="mt-7 flex items-center gap-3 text-[23px]">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="transition-colors hover:text-[#0b9bb0]"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://twitter.com"
                aria-label="Twitter"
                className="transition-colors hover:text-[#0b9bb0]"
              >
                <FaTwitter />
              </a>

              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="transition-colors hover:text-[#0b9bb0]"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="transition-colors hover:text-[#0b9bb0]"
              >
                <FaInstagram />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="mb-5 text-2xl font-semibold">Info</h3>

            <p className="max-w-70 text-base leading-6">
              necessary, making this the first true generator on the Internet.
              It uses a dictionary of over 200 Latin words, combined with a
              handful
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="mb-5 text-2xl font-semibold">Links</h3>

            <div className="flex flex-col items-start gap-4 text-base">
              <a
                href="/carint"
                className="transition-colors hover:text-[#0b9bb0]"
              >
                Home
              </a>

              <a
                href="#about"
                className="transition-colors hover:text-[#0b9bb0]"
              >
                About
              </a>

              <a
                href="#services"
                className="transition-colors hover:text-[#0b9bb0]"
              >
                Services
              </a>

              <a
                href="#contact"
                className="transition-colors hover:text-[#0b9bb0]"
              >
                Contact Us
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="mb-6 text-2xl font-semibold">Subscribe</h3>

            <form
              onSubmit={(event) => {
                event.preventDefault();
              }}
              className="w-full"
            >
              <input
                type="email"
                required
                placeholder="Enter email"
                aria-label="Email address"
                className="mb-4 h-10 w-full border-0 border-b border-white bg-transparent px-1 text-base text-white outline-none placeholder:text-white focus:border-[#0b9bb0]"
              />

              <button
                type="submit"
                className="min-h-11 w-full bg-[#0b9bb0] px-5 py-3 text-base text-white transition-colors hover:bg-[#087f91]"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <div className="flex min-h-18.5 items-center justify-center bg-white px-4 py-5 text-center">
        <p className="text-sm text-[#06263a] sm:text-base">
          © 2026 All Rights Reserved By Free Html Templates
        </p>
      </div>
    </footer>
  );
}
