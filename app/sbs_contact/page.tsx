"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SbsFooter from "../components/sbs_footer";
import Sbs_nav from "../components/sbs_nav";

const formVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const mapVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.15 },
  },
};

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
      <div className="w-full bg-[#fafafa] py-16 md:py-24">
        <Sbs_nav/>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-bold text-gray-900 text-center mb-12 md:mb-16"
        >
          Contact Us
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={formVariants}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name*"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-red-300 bg-white text-gray-800 placeholder:text-red-400/80 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number*"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-red-300 bg-white text-gray-800 placeholder:text-red-400/80 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-red-300 bg-white text-gray-800 placeholder:text-red-400/80 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
            />

            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-red-300 bg-white text-gray-800 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition appearance-none"
            >
              <option value="" disabled>
                Select Subject*
              </option>
              <option value="general">General Inquiry</option>
              <option value="support">Support</option>
              <option value="sales">Sales</option>
              <option value="other">Other</option>
            </select>

            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-red-300 bg-white text-gray-800 placeholder:text-red-400/80 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition resize-none"
            />

            <div>
              <button
                type="submit"
                className="px-10 py-3 bg-[#ff2d1a] text-white font-semibold text-sm tracking-wider rounded-lg hover:bg-[#e02615] transition-colors shadow-md hover:shadow-lg"
              >
                SEND
              </button>
            </div>
          </motion.form>

        </div>
      </div>
        <SbsFooter/>
    </div>
  );
}