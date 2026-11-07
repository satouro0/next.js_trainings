"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Page() {
  const [open, setOpen] = useState(false);

  const products = [
    {
      name: "Birthstone Diamond Bracelet",
      price: "$85.00",
      image:
        "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=700&q=80",
    },
    {
      name: "Gold Jewel Topaz Earrings",
      price: "$90.00",
      image:
        "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=700&q=80",
    },
    {
      name: "Gold Stillness Pearl Hoops",
      price: "$85.00",
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=700&q=80",
    },
    {
      name: "Pearl and Crystal Necklace",
      price: "$120.00",
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=700&q=80",
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f6f3] text-[#111b27]">
      <div className="flex h-9 items-center justify-between bg-[#222] px-[6%] text-xs text-gray-300">
        <div>Free shipping on orders over $50</div>

        <div className="hidden sm:block">Simple jewelry. Everyday style.</div>
      </div>

      <div className="relative z-50 flex min-h-[82px] items-center justify-between bg-[#111b26] px-[6%] text-white">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <motion.div
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eca84e] text-xl"
            animate={{ rotate: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            💎
          </motion.div>

          <div className="font-serif text-3xl">Ornato</div>
        </motion.div>

        <div
          className={`absolute left-0 top-[82px] w-full bg-[#111b26] px-[6%] py-5 md:static md:flex md:w-auto md:items-center md:gap-10 md:bg-transparent md:p-0 ${
            open ? "block" : "hidden"
          }`}
        >
          <div className="cursor-pointer py-2 text-[#eca84e]">
            Home <div className="inline-block">⌄</div>
          </div>

          <div className="cursor-pointer py-2 transition hover:text-[#eca84e]">
            Shop <div className="inline-block">⌄</div>
          </div>

          <div className="cursor-pointer py-2 transition hover:text-[#eca84e]">
            Pages <div className="inline-block">⌄</div>
          </div>

          <div className="cursor-pointer py-2 transition hover:text-[#eca84e]">
            Contact
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative hidden sm:block">
            <div className="flex items-center gap-1">❤️ Wishlist</div>

            <div className="absolute -right-3 -top-3 flex h-4 w-4 items-center justify-center rounded-full bg-[#eca84e] text-[10px] text-[#111b26]">
              3
            </div>
          </div>

          <div className="hidden lg:block">👤 My account</div>

          <motion.div
            whileHover={{ scale: 1.08 }}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#eca84e] text-lg text-[#111b26]"
          >
            🔍
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.08 }}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#eca84e] text-lg text-[#111b26]"
          >
            🛒
          </motion.div>

          <div
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#26323d] text-lg md:hidden"
          >
            {open ? "❌" : "☰"}
          </div>
        </div>
      </div>

      <div className="relative min-h-[520px] overflow-hidden bg-[#777777] md:min-h-[600px]">
        <motion.div
          className="relative z-10 max-w-6xl px-[6%] pb-20 pt-24 md:pt-32"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="script-font mb-3 text-4xl text-[#eca84e] md:text-5xl">
            Simple & Elegant
          </div>

          <div className="serif-font max-w-6xl text-5xl leading-[0.98] tracking-[-2px] text-white sm:text-6xl md:text-7xl lg:text-8xl">
            GLAMOROUS & ELEGANT
            <div>GEMSTONE JEWELRY</div>
          </div>

          <motion.div
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="mt-9 w-fit cursor-pointer bg-[#eca84e] px-7 py-4 text-base text-[#111b26]"
          >
            💎 SHOP THIS COLLECTION
          </motion.div>
        </motion.div>
      </div>

      <div className="relative z-20 px-[4%] md:-mt-9 md:px-[6%]">
        <div className="grid shadow-[0_12px_35px_rgba(0,0,0,0.10)] md:grid-cols-2">
          <motion.div
            className="bg-white px-7 py-12 md:px-14 md:py-16"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="script-font mb-3 text-3xl text-[#eca84e]">
              Simple & Elegant
            </div>

            <div className="serif-font mb-6 text-4xl md:text-5xl">
              LUXURY COLLECTION
            </div>

            <div className="max-w-2xl text-lg leading-7 text-[#626b76]">
              We will bring the breathe of our experience and industry knowledge
              to help you succeed
            </div>

            <motion.div
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="mt-9 w-fit cursor-pointer border border-[#111b26] bg-white px-7 py-4 text-base"
            >
              ✨ READ MORE
            </motion.div>
          </motion.div>

          <motion.div
            className="relative overflow-hidden bg-[#fff7eb] px-6 py-20 text-center md:px-10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative z-10 flex flex-wrap items-center justify-center gap-2.5">
              <div className="serif-font text-4xl md:text-5xl">UP TO</div>

              <div className="serif-font text-5xl font-bold text-[#eca84e] md:text-6xl">
                60%
              </div>

              <div className="serif-font text-4xl md:text-5xl">OFF</div>
            </div>

            <div className="relative z-10 mt-4 text-xl text-[#4e5660] md:text-2xl">
              Discount All Store
            </div>

            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="relative z-10 mx-auto mt-8 w-fit cursor-pointer bg-[#eca84e] px-7 py-4 text-base"
            >
              🛍️ SHOP NOW
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="bg-white px-[6%] py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <motion.div
            className="relative mx-auto h-[430px] w-full max-w-[560px] sm:h-[500px]"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute left-[10%] top-0 h-[72%] w-[65%] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=800&q=80"
                alt="Jewelry"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute left-[30%] top-[42%] h-[58%] w-[55%] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80"
                alt="Jewelry detail"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute left-[28%] top-[15%] h-[70%] w-[48%] border border-[#eca84e]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="script-font text-3xl text-[#eca84e] md:text-4xl">
              About Us
            </div>

            <div className="serif-font mt-3 text-4xl leading-tight md:text-5xl">
              EXPLORING THE BEAUTY OF ADORNMENTS
            </div>

            <div className="mt-7 max-w-xl text-base leading-7 text-[#69727c] md:text-lg">
              At Ornato, we create gemstone jewelry that captures unique
              personality and elegance. Our dedicated craftsmen bring decades of
              specialized expertise, shaping selected materials into timeless
              works of art that celebrate life's most precious moments.
            </div>

            <motion.div
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-8 w-fit cursor-pointer bg-[#eca84e] px-7 py-4 text-sm tracking-wide"
            >
              READ MORE
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="bg-[#fffaf0] px-[6%] py-24 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <div className="script-font text-3xl text-[#eca84e]">
              New Arrivals
            </div>

            <div className="serif-font mt-3 text-4xl leading-tight md:text-5xl">
              BRILLIANT DESIGN AND UNIQUE ELEGANCE
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="group cursor-pointer overflow-hidden border border-[#e4e0d8] bg-white shadow-sm transition-shadow duration-300 hover:shadow-[0_15px_35px_rgba(0,0,0,0.14)]"
              >
                <div className="relative h-[290px] overflow-hidden">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5 }}
                  />

                  <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/10" />

                  <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 translate-y-3 gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm shadow"
                    >
                      👁️
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm shadow"
                    >
                      ❤️
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm shadow"
                    >
                      🛒
                    </motion.div>
                  </div>
                </div>

                <div className="p-5">
                  <div className="serif-font text-lg leading-6">
                    {product.name}
                  </div>

                  <div className="mt-3 text-base font-bold text-[#111b27]">
                    {product.price}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white px-[6%] py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="relative h-[350px] overflow-hidden md:h-[430px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1600&q=80"
              alt="Fine gold collection"
              className="h-full w-full object-cover"
            />

            <div className="absolute left-[8%] top-[55%] h-[180px] w-[230px] overflow-hidden border-4 border-white md:h-[245px] md:w-[320px]">
              <img
                src="https://images.unsplash.com/photo-1619119069152-a2b331eb392a?auto=format&fit=crop&w=700&q=80"
                alt="Gold jewelry"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            className="mx-auto grid max-w-5xl items-center gap-8 pt-24 md:grid-cols-[280px_1fr] md:pl-[8%]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div />

            <div className="max-w-2xl text-base leading-7 text-[#626b76] md:text-lg">
              Our signature fine gold collection is thoughtfully curated to
              highlight your natural allure without overwhelming your personal
              aesthetic.
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
