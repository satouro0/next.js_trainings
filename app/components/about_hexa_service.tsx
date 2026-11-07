"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

const services = [
  {
    title: "Synther Vaporware",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore, et dolore quis ipsum suspend.",
    image: "/service-01.jpg",
  },
  {
    title: "Locavore Squidward",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore, et dolore quis ipsum suspend.",
    image: "/service-02.jpg",
  },
  {
    title: "Health Gothfam",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore, et dolore quis ipsum suspend.",
    image: "/service-03.jpg",
  },
];

const contactDetails = [
  {
    title: "Store Location:",
    lines: ["Sunny Isles Beach, FL", "33160, United States"],
  },
  {
    title: "Work Hours:",
    lines: ["07:30 AM - 9:30 PM", "Daily"],
  },
  {
    title: "Phone:",
    lines: ["010-020-0340"],
  },
  {
    title: "Email:",
    lines: ["info@company.com"],
  },
  {
    title: "Office Location:",
    lines: ["North Miami Beach"],
  },
  {
    title: "Social Media:",
    lines: ["Facebook, Instagram,", "Behance, Linkedin"],
  },
];

export default function Hexa_about_services() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <section className="border-b border-dashed border-neutral-200 bg-white px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">
              Our Services
            </h2>

            <p className="mt-3 text-xs italic leading-5 text-neutral-400 sm:text-sm">
              Details to details is what makes Hexashop different from the other themes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-5 text-center shadow-[0_0_15px_rgba(0,0,0,0.08)] sm:p-6"
              >
                <h3 className="text-xl font-bold text-neutral-900">
                  {service.title}
                </h3>

                <p className="mx-auto mt-4 max-w-xs text-xs leading-5 text-neutral-800 sm:text-sm">
                  {service.description}
                </p>

                <div className="relative mt-5 aspect-video overflow-hidden bg-neutral-100">
                  {service.image && (
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
            <h2 className="max-w-2xl text-2xl font-bold leading-relaxed text-neutral-900 sm:text-3xl">
              By Subscribing To Our Newsletter You Can Get 30% Off
            </h2>

            <p className="mt-1 text-xs italic leading-5 text-neutral-400 sm:text-sm">
              Details to details is what makes Hexashop different from the other themes.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <input
                type="text"
                name="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Your Name"
                aria-label="Your Name"
                required
                className="h-10 min-w-0 flex-1 border border-neutral-400 px-3 text-xs italic outline-none focus:border-neutral-900"
              />

              <input
                type="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Your Email Address"
                aria-label="Your Email Address"
                required
                className="h-10 min-w-0 flex-1 border border-neutral-400 px-3 text-xs italic outline-none focus:border-neutral-900"
              />

              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="flex h-10 w-10 shrink-0 items-center justify-center bg-neutral-800 text-white transition-colors hover:bg-neutral-600"
              >
                <FaPaperPlane />
              </button>
            </form>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:col-span-4">
            {contactDetails.map((detail) => (
              <div key={detail.title}>
                <h3 className="text-sm font-bold text-neutral-900">
                  {detail.title}
                </h3>

                {detail.lines.map((line) => (
                  <p
                    key={line}
                    className="text-xs leading-5 text-neutral-400 sm:text-sm"
                  >
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}