"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaBehance,
  FaQuoteLeft,
} from "react-icons/fa";

const socialLinks = [
  { name: "Facebook", href: "https://facebook.com", icon: FaFacebookF },
  { name: "Twitter", href: "https://twitter.com", icon: FaTwitter },
  { name: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedinIn },
  { name: "Behance", href: "https://behance.net", icon: FaBehance },
];

export default function Hexa_about_header() {
  return (
    <>
      <section className="relative flex min-h-72 items-center justify-center overflow-hidden bg-neutral-800 px-5 py-20 md:min-h-96">
        <Image
          src="/about-us-page-heading.jpg"
          alt="niga"
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
          <h1 className="text-3xl font-bold md:text-5xl">
            About Our Company
          </h1>

          <p className="mt-5 text-sm font-semibold italic md:text-base">
            Awesome, clean &amp; creative HTML5 Template
          </p>
        </motion.div>
      </section>

      <section className="bg-white px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative min-h-72 overflow-hidden bg-neutral-100 sm:min-h-96"
          >
            <Image
              src="/about-left-image.jpg"
              alt="Hexashop retail store"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl">
              About Us &amp; Our Skills
            </h2>

            <p className="mt-6 text-sm leading-6 text-neutral-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod kon tempor incididunt ut labore.
            </p>

            <div className="my-6 flex items-start gap-4">
              <FaQuoteLeft className="mt-1 shrink-0 text-3xl text-neutral-900" />

              <blockquote className="text-sm italic leading-6 text-neutral-900">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod kon tempor incididunt ut labore.
              </blockquote>
            </div>

            <p className="text-sm leading-6 text-neutral-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod kon tempor incididunt ut labore et dolore magna aliqua ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>

            <div className="my-7 border-t border-dashed border-neutral-200" />

            <div className="flex flex-wrap gap-2">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <motion.a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={name}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 text-sm text-white transition-colors hover:bg-neutral-500"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}