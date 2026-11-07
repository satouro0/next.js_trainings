"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 0,
    name: "Michale",
    quote:
      "humour, or randomised words which don't look even slightly believable. If you are",
    avatar: "👨‍🦱",
    color: "bg-[#ff2d1a]",
    textColor: "text-white",
    quoteColor: "text-white/60",
  },
  {
    id: 1,
    name: "Disol",
    quote:
      "humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure",
    avatar: "👨",
    color: "bg-white",
    textColor: "text-gray-900",
    quoteColor: "text-gray-300",
    elevated: true,
  },
  {
    id: 2,
    name: "Jone Lo",
    quote:
      "humour, or randomised words which don't look even slightly believable. If you are",
    avatar: "👨‍💻",
    color: "bg-[#ff2d1a]",
    textColor: "text-white",
    quoteColor: "text-white/60",
  },
];

const cardVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 90 : -90,
    opacity: 0,
    scale: 0.92,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 90 : -90,
    opacity: 0,
    scale: 0.92,
    transition: { duration: 0.3 },
  }),
};

export default function SbsTestimonials() {
  const [active, setActive] = useState(1);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setActive((prev) => {
      const next = prev + newDirection;
      if (next < 0) return testimonials.length - 1;
      if (next >= testimonials.length) return 0;
      return next;
    });
  };

  return (
    <div className="w-full bg-[#4b1dff] py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-bold text-white text-center mb-16 md:mb-20"
        >
          Testimonial
        </motion.h2>

        <div className="relative">
          <div className="hidden md:grid md:grid-cols-3 gap-5 lg:gap-8 items-end">
            {testimonials.map((item, index) => {
              const isCenter = index === 1;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 48 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.12 }}
                  className={`relative ${isCenter ? "md:-mt-8 md:mb-4 z-10" : ""}`}
                >
                  <div
                    className={`relative rounded-2xl p-7 sm:p-8 ${item.color} ${
                      isCenter
                        ? "shadow-2xl shadow-black/25 scale-[1.06]"
                        : "shadow-lg"
                    }`}
                  >
                    <div className="absolute -top-9 left-1/2 -translate-x-1/2">
                      <div className="w-18 h-18 rounded-full bg-white flex items-center justify-center text-3xl shadow-md border-[5px] border-white">
                        {item.avatar}
                      </div>
                    </div>
                    <div className="pt-10 text-center">
                      <h3 className={`text-xl font-bold mb-3 ${item.textColor}`}>
                        {item.name}
                      </h3>
                      <div
                        className={`text-5xl font-serif leading-none mb-3 ${item.quoteColor}`}
                      >
                        “
                      </div>
                      <p
                        className={`text-sm leading-relaxed ${
                          isCenter ? "text-gray-600" : "text-white/90"
                        }`}
                      >
                        {item.quote}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="md:hidden relative min-h-75">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 flex justify-center"
              >
                <div
                  className={`relative w-full max-w-sm rounded-2xl p-8 ${testimonials[active].color} shadow-xl`}
                >
                  <div className="absolute -top-9 left-1/2 -translate-x-1/2">
                    <div className="w-18 h-18 rounded-full bg-white flex items-center justify-center text-3xl shadow-md border-[5px] border-white">
                      {testimonials[active].avatar}
                    </div>
                  </div>
                  <div className="pt-10 text-center">
                    <h3
                      className={`text-xl font-bold mb-3 ${testimonials[active].textColor}`}
                    >
                      {testimonials[active].name}
                    </h3>
                    <div
                      className={`text-5xl font-serif leading-none mb-3 ${testimonials[active].quoteColor}`}
                    >
                      “
                    </div>
                    <p
                      className={`text-sm leading-relaxed ${
                        testimonials[active].elevated
                          ? "text-gray-600"
                          : "text-white/90"
                      }`}
                    >
                      {testimonials[active].quote}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="flex justify-center mt-14 md:mt-16">
          <div className="flex rounded-full overflow-hidden shadow-lg">
            <button
              onClick={() => paginate(-1)}
              className="w-12 h-12 bg-[#ff2d1a] text-white flex items-center justify-center hover:bg-[#e02615] transition-colors"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => paginate(1)}
              className="w-12 h-12 bg-[#ff2d1a] text-white flex items-center justify-center hover:bg-[#e02615] transition-colors border-l border-white/20"
              aria-label="Next testimonial"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}