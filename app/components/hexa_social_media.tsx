"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram, FaPaperPlane } from "react-icons/fa";

const socialImages = [
  { id: 1, image: "/instagram-01.jpg" },
  { id: 2, image: "/instagram-02.jpg" },
  { id: 3, image: "/instagram-03.jpg" },
  { id: 4, image: "/instagram-04.jpg" },
  { id: 5, image: "/instagram-05.jpg" },
  { id: 6, image: "/instagram-06.jpg" },
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

export default function Esigned_social() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault();
  }

  return (
    <>
      <div className="border-b border-dashed border-neutral-200 px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14">
            <h2 className="text-3xl font-bold text-neutral-900">
              Social Media
            </h2>
            <p className="mt-1 text-sm italic text-neutral-400">
              Details to details is what makes Hexashop different from the other themes.
            </p>
          </div>

          <div className="grid grid-cols-2 overflow-hidden sm:grid-cols-3 md:grid-cols-6">
            {socialImages.map((item) => (
              <motion.a
                key={item.id}
                href="#"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-square overflow-hidden bg-neutral-200"
              >
                {item.image && (
                  <Image
                    src={item.image}
                    alt={`Social media image ${item.id}`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 16.67vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}

                <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/30 group-hover:opacity-100">
                  <FaInstagram className="text-3xl text-white" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <div className=" px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <h2 className="max-w-3xl text-3xl font-bold leading-relaxed text-neutral-900 md:text-4xl">
              By Subscribing To Our Newsletter You Can Get 30% Off
            </h2>

            <p className="mt-1 text-sm italic text-neutral-400">
              Details to details is what makes Hexashop different from the other themes.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <input
                type="text"
                name="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Your Name"
                aria-label="Your Name"
                required
                className="h-11 min-w-0 flex-1 border border-neutral-400 px-4 text-sm italic outline-none transition-colors focus:border-neutral-900"
              />

              <input
                type="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Your Email Address"
                aria-label="Your Email Address"
                required
                className="h-11 min-w-0 flex-1 border border-neutral-400 px-4 text-sm italic outline-none transition-colors focus:border-neutral-900"
              />

              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="flex h-11 w-11 shrink-0 items-center justify-center bg-neutral-800 text-white transition-colors hover:bg-neutral-600"
              >
                <FaPaperPlane />
              </button>
            </form>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2 lg:col-span-4">
            {contactDetails.map((detail) => (
              <div key={detail.title}>
                <h3 className="mb-1 text-base font-bold text-neutral-900">
                  {detail.title}
                </h3>

                {detail.lines.map((line) => (
                  <p
                    key={line}
                    className="text-sm leading-6 text-neutral-400"
                  >
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
