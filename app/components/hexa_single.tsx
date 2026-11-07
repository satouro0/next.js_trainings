"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

export default function Hexa_single_product() {
  const [quantity, setQuantity] = useState(1);
  const [cartMessage, setCartMessage] = useState("");

  const price = 75;
  const total = quantity * price;

  function addToCart() {
    setCartMessage(`Added ${quantity} New Green Jacket(s) to your cart.`);
  }

  return (
    <section className="bg-white px-5 py-10 sm:px-8 sm:py-14 lg:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-8">
        <div className="flex flex-col gap-6 lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative aspect-video w-full overflow-hidden bg-neutral-100"
          >
            <Image
              src="/single-product-01.jpg"
              alt="New Green Jacket product view"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 67vw"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative aspect-video w-full overflow-hidden bg-neutral-100"
          >
            <Image
              src="/single-product-02.jpg"
              alt="New Green Jacket worn by a model"
              fill
              sizes="(max-width: 1024px) 100vw, 67vw"
              className="object-cover"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-4"
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <h2 className="text-xl font-bold text-neutral-900 sm:text-2xl">
              New Green Jacket
            </h2>

            <div
              className="flex gap-0.5 pt-1 text-sm text-neutral-900"
              aria-label="5 out of 5 stars"
            >
              {Array.from({ length: 5 }).map((_, index) => (
                <FaStar key={index} />
              ))}
            </div>
          </div>

          <p className="mt-2 text-lg text-neutral-400">$75.00</p>

          <div className="my-6 border-t border-neutral-200" />

          <p className="text-sm leading-6 text-neutral-400 sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod kon tempor incididunt ut labore.
          </p>

          <div className="my-7 flex items-start gap-4">
            <FaQuoteLeft className="mt-1 shrink-0 text-3xl text-neutral-900" />

            <blockquote className="text-sm italic leading-6 text-neutral-900 sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod smod.
            </blockquote>
          </div>

          <div className="border-t border-neutral-200" />

          <div className="flex flex-wrap items-center justify-between gap-4 py-7">
            <h3 className="text-lg font-bold text-neutral-400">
              No. of Orders
            </h3>

            <div className="flex h-10 items-center border border-neutral-200">
              <button
                type="button"
                onClick={() => {
                  setQuantity((current) => Math.max(1, current - 1));
                  setCartMessage("");
                }}
                disabled={quantity <= 1}
                aria-label="Decrease quantity"
                className="h-full w-10 border-r border-neutral-200 transition-colors hover:bg-neutral-100 disabled:cursor-not-allowed disabled:text-neutral-300"
              >
                -
              </button>

              <span
                aria-live="polite"
                className="flex h-full w-9 items-center justify-center text-sm"
              >
                {quantity}
              </span>

              <button
                type="button"
                onClick={() => {
                  setQuantity((current) => current + 1);
                  setCartMessage("");
                }}
                aria-label="Increase quantity"
                className="h-full w-10 border-l border-neutral-200 transition-colors hover:bg-neutral-100"
              >
                +
              </button>
            </div>
          </div>

          <div className="border-t border-neutral-200" />

          <div className="flex flex-wrap items-center justify-between gap-5 py-7">
            <p className="text-xl font-bold text-neutral-400">
              Total: ${total.toFixed(2)}
            </p>

            <button
              type="button"
              onClick={addToCart}
              className="border border-neutral-900 px-6 py-3 text-sm text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white"
            >
              Add To Cart
            </button>
          </div>

          {cartMessage && (
            <p
              role="status"
              className="text-sm text-neutral-600"
            >
              {cartMessage}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}