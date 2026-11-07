"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "swiper/css";
import Image from "next/image";

const products = [
  {
    name: "Classic Spring",
    price: "$120.00",
    rating: 5,
    image: "/kid-01.jpg",
  },
  {
    name: "Air Force 1 X",
    price: "$90.00",
    rating: 5,
    image: "/kid-02.jpg",
  },
  {
    name: "Love Nana '20",
    price: "$150.00",
    rating: 5,
    image: "/kid-03.jpg",
  },
  {
    name: "Classic Denim",
    price: "$110.00",
    rating: 5,
    image: "/kid-01.jpg",
  },
];

export default function Hexa_kids_latest() {
  return (
    <section className="relative w-full overflow-hidden border-b border-dashed border-neutral-200 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-14">
          <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl">
            Kid&apos;s Latest
          </h2>
          <p className="mt-1 text-sm italic text-neutral-400 md:text-base">
            Details to details is what makes Hexashop different from the other themes.
          </p>
        </div>

        <div className="relative">
          <button
            className="products-prev absolute left-0 top-1/2 z-20 flex h-12 w-12 -translate-x-5 -translate-y-1/2 items-center justify-center border border-neutral-500 bg-white text-neutral-600 transition-colors hover:bg-neutral-900 hover:text-white md:-translate-x-8"
            aria-label="Previous products"
          >
            <FaChevronLeft />
          </button>

          <button
            className="products-next absolute right-0 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 translate-x-5 items-center justify-center border border-neutral-500 bg-white text-neutral-600 transition-colors hover:bg-neutral-900 hover:text-white md:translate-x-8"
            aria-label="Next products"
          >
            <FaChevronRight />
          </button>

          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".products-prev",
              nextEl: ".products-next",
            }}
            slidesPerView={1}
            loop
            spaceBetween={24}
            speed={600}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="products-swiper"
          >
            {products.map((product) => (
              <SwiperSlide key={product.name}>
                <div className="group">
                  <div className="relative aspect-square overflow-hidden bg-neutral-100">
                   
                    <Image
                    fill
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    
                    />
                  </div>

                  <div className="mt-6 flex items-start justify-between gap-3">
                    <h3 className="text-xl font-bold text-neutral-800">
                      {product.name}
                    </h3>

                    <div className="flex shrink-0 gap-0.5 pt-1 text-sm text-neutral-800">
                      {Array.from({ length: product.rating }).map((_, index) => (
                        <FaStar key={index} />
                      ))}
                    </div>
                  </div>

                  <p className="mt-3 text-lg font-semibold text-neutral-400">
                    {product.price}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
