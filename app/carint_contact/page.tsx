"use client";

import Carint_header from "../components/carint_header";
import Carint_nav from "../components/carint_nav";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Carint_footer from "../components/carint_footer";

export default function page() {
  return (
    <div>
        <Carint_header/>
        <Carint_nav/>
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
            <Carint_footer/>
    </div>
  )
}
