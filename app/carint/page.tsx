"use client";

import React from "react";
import Carint_header from "../components/carint_header";
import Carint_nav from "../components/carint_nav";
import Carint_footer from "../components/carint_footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { Plane, Ship, Truck, TrainFront } from "lucide-react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const reveal = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
};

const serviceHover = {
  y: -6,
  transition: { duration: 0.25 },
};

export default function Page() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <Carint_header />
      <Carint_nav />

      <div className="relative min-h-[75vh] w-full overflow-hidden sm:min-h-screen lg:min-h-screen">
        <Swiper
          className="absolute inset-0 h-full w-full"
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={0}
          loop
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
        >
          <SwiperSlide>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/slider-bg.jpg')" }}
            />
            <div className="absolute inset-0 bg-black/65" />
            <div className="relative z-10 mx-auto flex min-h-[75vh] w-full max-w-7xl items-center px-5 py-16 sm:min-h-screen sm:px-8 lg:px-10">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-2xl text-white"
              >
                <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                  WE PROVIDE BEST
                  <br />
                  TRANSPORT SERVICE
                </h1>
                <p className="mb-7 max-w-xl text-sm leading-relaxed sm:text-base">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
                  magnam, voluptates distinctio, officia architecto tenetur
                  debitis hic aspernatur libero commodi atque fugit adipisci,
                  blanditiis quidem dolorum odit voluptas? Voluptate, eveniet?
                </p>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex min-h-12 items-center justify-center bg-cyan-600 px-8 py-3 text-white transition-colors hover:bg-cyan-700"
                >
                  Get A Quote
                </motion.a>
              </motion.div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/slider-bg.jpg')" }}
            />
            <div className="absolute inset-0 bg-black/65" />
            <div className="relative z-10 mx-auto flex min-h-[75vh] w-full max-w-7xl items-center px-5 py-16 sm:min-h-screen sm:px-8 lg:px-10">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-2xl text-white"
              >
                <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                  FAST AND SAFE
                  <br />
                  CARGO DELIVERY
                </h1>
                <p className="mb-7 max-w-xl text-sm leading-relaxed sm:text-base">
                  We provide reliable transportation and logistics services for
                  your business. Our team works hard to deliver your cargo
                  safely and on time.
                </p>
                <motion.a
                  href="#services"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex min-h-12 items-center justify-center bg-cyan-600 px-8 py-3 text-white transition-colors hover:bg-cyan-700"
                >
                  Our Services
                </motion.a>
              </motion.div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/slider-bg.jpg')" }}
            />
            <div className="absolute inset-0 bg-black/65" />
            <div className="relative z-10 mx-auto flex min-h-[75vh] w-full max-w-7xl items-center px-5 py-16 sm:min-h-screen sm:px-8 lg:px-10">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-2xl text-white"
              >
                <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                  YOUR TRUSTED
                  <br />
                  TRANSPORT PARTNER
                </h1>
                <p className="mb-7 max-w-xl text-sm leading-relaxed sm:text-base">
                  From road freight to air and cargo transport, we offer
                  solutions to help keep your deliveries moving.
                </p>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex min-h-12 items-center justify-center bg-cyan-600 px-8 py-3 text-white transition-colors hover:bg-cyan-700"
                >
                  Contact Us
                </motion.a>
              </motion.div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div
        id="services"
        className="w-full bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20"
      >
        <div className="mx-auto w-full max-w-7xl">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-8 sm:mb-11"
          >
            <h2 className="mb-2 text-2xl font-bold text-black sm:text-3xl">
              Our <span className="text-cyan-600">Services</span>
            </h2>
            <p className="max-w-4xl text-sm leading-6 text-gray-800 sm:text-base">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:gap-7">
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              whileHover={serviceHover}
              className="flex min-w-0 flex-col items-start gap-4 rounded-md bg-gray-50 p-5 transition-shadow hover:shadow-lg sm:flex-row sm:gap-6 sm:p-6"
            >
              <Plane
                className="h-12 w-12 shrink-0 text-cyan-600 sm:h-14 sm:w-14"
                strokeWidth={2}
              />
              <div className="min-w-0 flex-1">
                <h3 className="mb-2 text-lg font-bold text-black">
                  AIR TRANSPORT
                </h3>
                <p className="mb-4 text-sm leading-6 text-gray-800 sm:text-base">
                  fact that a reader will be distracted by the readable content
                  of a page when looking at its layout. The point of using
                </p>
                <a
                  href="#contact"
                  className="font-medium text-gray-900 transition-colors hover:text-cyan-600"
                >
                  Read More
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              whileHover={serviceHover}
              className="flex min-w-0 flex-col items-start gap-4 rounded-md bg-gray-50 p-5 transition-shadow hover:shadow-lg sm:flex-row sm:gap-6 sm:p-6"
            >
              <Ship
                className="h-12 w-12 shrink-0 text-cyan-600 sm:h-14 sm:w-14"
                strokeWidth={2}
              />
              <div className="min-w-0 flex-1">
                <h3 className="mb-2 text-lg font-bold text-black">
                  CARGO TRANSPORT
                </h3>
                <p className="mb-4 text-sm leading-6 text-gray-800 sm:text-base">
                  fact that a reader will be distracted by the readable content
                  of a page when looking at its layout. The point of using
                </p>
                <a
                  href="#contact"
                  className="font-medium text-gray-900 transition-colors hover:text-cyan-600"
                >
                  Read More
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              whileHover={serviceHover}
              className="flex min-w-0 flex-col items-start gap-4 rounded-md bg-gray-50 p-5 transition-shadow hover:shadow-lg sm:flex-row sm:gap-6 sm:p-6"
            >
              <Truck
                className="h-12 w-12 shrink-0 text-cyan-600 sm:h-14 sm:w-14"
                strokeWidth={2}
              />
              <div className="min-w-0 flex-1">
                <h3 className="mb-2 text-lg font-bold text-black">
                  TRUCKS TRANSPORT
                </h3>
                <p className="mb-4 text-sm leading-6 text-gray-800 sm:text-base">
                  fact that a reader will be distracted by the readable content
                  of a page when looking at its layout. The point of using
                </p>
                <a
                  href="#contact"
                  className="font-medium text-gray-900 transition-colors hover:text-cyan-600"
                >
                  Read More
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              whileHover={serviceHover}
              className="flex min-w-0 flex-col items-start gap-4 rounded-md bg-gray-50 p-5 transition-shadow hover:shadow-lg sm:flex-row sm:gap-6 sm:p-6"
            >
              <TrainFront
                className="h-12 w-12 shrink-0 text-cyan-600 sm:h-14 sm:w-14"
                strokeWidth={2}
              />
              <div className="min-w-0 flex-1">
                <h3 className="mb-2 text-lg font-bold text-black">
                  TRAIN TRANSPORT
                </h3>
                <p className="mb-4 text-sm leading-6 text-gray-800 sm:text-base">
                  fact that a reader will be distracted by the readable content
                  of a page when looking at its layout. The point of using
                </p>
                <a
                  href="#contact"
                  className="font-medium text-gray-900 transition-colors hover:text-cyan-600"
                >
                  Read More
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div
        id="about"
        className="overflow-hidden bg-white px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20"
      >
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="order-2 min-w-0 lg:order-1"
          >
            <h2 className="mb-4 text-3xl font-bold text-black sm:text-4xl">
              About <span className="text-cyan-600">Us</span>
            </h2>
            <p className="mb-7 text-sm leading-6 text-gray-800 sm:text-base">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&apos;t look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn&apos;t anything embarrassing
              hidden in the middle of text. All
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex min-h-12 items-center justify-center bg-cyan-600 px-8 py-3 text-white transition-colors hover:bg-cyan-700"
            >
              Read More
            </motion.a>
          </motion.div>

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative order-1 mx-auto w-full max-w-xl lg:order-2"
          >
            <div className="absolute -inset-3 bg-sky-950 sm:-inset-4 lg:-left-6 lg:-right-6" />
            <Image
              src="/lots-of-ship.jpg"
              alt="Cargo ship at a commercial shipping port"
              width={900}
              height={600}
              className="relative z-10 h-auto max-h-112 w-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      <div
        id="tracking"
        className="relative w-full overflow-hidden bg-sky-950 bg-cover bg-center px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
        style={{ backgroundImage: "url('/track-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative z-10 mx-auto w-full max-w-7xl"
        >
          <div className="max-w-xl">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Track Your Shipment
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-white sm:text-base">
              Iste reprehenderit maiores facilis saepe cumque molestias. Labore
              iusto excepturi, laborum aliquid pariatur veritatis autem,
              mollitia sint nesciunt hic error porro. Deserunt officia unde
              repellat beatae ipsum sed. Aperiam tempora consectetur voluptas
              magnam maxime asperiores quas similique repudiandae, veritatis
              reiciendis harum fuga atque.
            </p>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                const formData = new FormData(event.currentTarget);
                const trackingNumber = String(
                  formData.get("trackingNumber") || "",
                ).trim();
                if (trackingNumber) {
                  alert(
                    "Connect a shipment tracking service to look up this number.",
                  );
                }
              }}
              className="flex w-full flex-col gap-2 sm:flex-row sm:gap-0"
            >
              <input
                type="text"
                name="trackingNumber"
                required
                placeholder="Enter Your Tracking Number"
                aria-label="Tracking number"
                className="h-12 min-w-0 flex-1 bg-white px-4 text-gray-900 outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <motion.button
                whileHover={{ backgroundColor: "#087f91" }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="min-h-12 w-full shrink-0 bg-cyan-600 px-8 font-medium text-white sm:w-auto"
              >
                TRACK
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>

      <div className="overflow-hidden px-4 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-7xl"
        >
          <h2 className="mb-10 text-center text-3xl font-bold text-black sm:text-4xl">
            What says our <span className="text-cyan-600">Client</span>
          </h2>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
            }}
            className="client-swiper"
          >
            <SwiperSlide className="pb-12">
              <motion.div
                whileHover={{ y: -5 }}
                className="h-full px-3 py-4 text-center"
              >
                <p className="rounded-md border border-gray-200 bg-white p-6 text-sm leading-7 text-gray-700 shadow-sm sm:p-8 sm:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  quis dicta asperiores vel perspiciatis, est ut magnam
                  doloremque obcaecati neque quod deleniti, incidunt facilis
                  cumque. Facilis hic dolor incidunt esse!
                </p>
                <div className="mt-6 flex flex-col items-center">
                  <Image
                    src="/client-niga.png"
                    width={100}
                    height={100}
                    alt="Client portrait"
                    className="h-20 w-20 rounded-full object-cover ring-4 ring-cyan-100 sm:h-24 sm:w-24"
                  />
                  <h3 className="mt-4 font-bold text-black">adicscing</h3>
                  <p className="mt-1 text-sm text-cyan-600">magna</p>
                </div>
              </motion.div>
            </SwiperSlide>

            <SwiperSlide className="pb-12">
              <motion.div
                whileHover={{ y: -5 }}
                className="h-full px-3 py-4 text-center"
              >
                <p className="rounded-md border border-gray-200 bg-white p-6 text-sm leading-7 text-gray-700 shadow-sm sm:p-8 sm:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  quis dicta asperiores vel perspiciatis, est ut magnam
                  doloremque obcaecati neque quod deleniti, incidunt facilis
                  cumque. Facilis hic dolor incidunt esse!
                </p>
                <div className="mt-6 flex flex-col items-center">
                  <Image
                    src="/client-niga.png"
                    width={100}
                    height={100}
                    alt="Client portrait"
                    className="h-20 w-20 rounded-full object-cover ring-4 ring-cyan-100 sm:h-24 sm:w-24"
                  />
                  <h3 className="mt-4 font-bold text-black">adicscing</h3>
                  <p className="mt-1 text-sm text-cyan-600">magna</p>
                </div>
              </motion.div>
            </SwiperSlide>

            <SwiperSlide className="pb-12">
              <motion.div
                whileHover={{ y: -5 }}
                className="h-full px-3 py-4 text-center"
              >
                <p className="rounded-md border border-gray-200 bg-white p-6 text-sm leading-7 text-gray-700 shadow-sm sm:p-8 sm:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  quis dicta asperiores vel perspiciatis, est ut magnam
                  doloremque obcaecati neque quod deleniti, incidunt facilis
                  cumque. Facilis hic dolor incidunt esse!
                </p>
                <div className="mt-6 flex flex-col items-center">
                  <Image
                    src="/client-niga.png"
                    width={100}
                    height={100}
                    alt="Client portrait"
                    className="h-20 w-20 rounded-full object-cover ring-4 ring-cyan-100 sm:h-24 sm:w-24"
                  />
                  <h3 className="mt-4 font-bold text-black">adicscing</h3>
                  <p className="mt-1 text-sm text-cyan-600">magna</p>
                </div>
              </motion.div>
            </SwiperSlide>
          </Swiper>
        </motion.div>
      </div>

      <div id="contact" className="w-full px-5 py-12 sm:px-8 sm:py-16 lg:p-20">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <h1 className="text-3xl font-bold">CONTACT US</h1>
          <br />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.12 },
              },
            }}
            className="flex w-full flex-col space-y-6"
          >
            <motion.input
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              type="text"
              placeholder="Your Name"
              className="h-15 w-full border border-gray-300 text-black shadow sm:w-100"
            />

            <motion.input
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              type="number"
              placeholder="Phone Number"
              className="h-15 w-full border border-gray-300 text-black shadow sm:w-100"
            />

            <motion.input
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              type="email"
              placeholder="Email"
              className="h-15 w-full border border-gray-300 text-black shadow sm:w-100"
            />

            <motion.input
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              type="text"
              placeholder="Massage"
              className="h-30 w-full border border-gray-300 text-black shadow sm:w-100"
            />

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="button"
              className="w-full rounded-md bg-blue-600 px-8 py-3 text-left text-white transition-colors hover:bg-blue-700 sm:w-30"
            >
              SEND
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      <Carint_footer />
    </div>
  );
}
