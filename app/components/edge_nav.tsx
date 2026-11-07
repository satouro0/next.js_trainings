"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaUser, FaBars, FaTimes } from "react-icons/fa";

export default function Sbs_nav() {
  const carint_nav = [
    { id: 1, title: "HOME", href: "/" },
    { id: 2, title: "ABOUT", href: "/edge_about" },
    { id: 3, title: "FURNITURES", href: "/edge_furnitures" },
    { id: 4, title: "BLOG", href: "/edge_blog" },
    { id: 5, title: "CONTACT US", href: "/edge_contact" },
  ];

  const usepath = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navVariants = {
    hidden: { opacity: 0, y: -15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const isActive = (href) => usepath === href;

  const linkClass = (href) =>
    `inline-flex items-center justify-center rounded-full px-4 py-3 text-sm font-medium transition-colors duration-300 ${
      isActive(href)
        ? "bg-orange-600 text-white"
        : "text-gray-800 hover:bg-orange-600 hover:text-white"
    }`;

  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="relative z-50 w-full bg-white shadow-sm"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.04 }} className="shrink-0">
          <Link
            href="/"
            className="text-xl font-bold tracking-wide text-gray-900 sm:text-2xl"
          >
            EDGECUT
          </Link>
        </motion.div>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-2 lg:flex xl:gap-4">
          {carint_nav.map((item, index) => (
            <motion.div
              key={item.id}
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.08, duration: 0.35 }}
            >
              <Link href={item.href} className={linkClass(item.href)}>
                {item.title}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden shrink-0 items-center gap-5 text-gray-700 lg:flex">
          <motion.a
            href="/login"
            whileHover={{ scale: 1.05, color: "#ea580c" }}
            className="flex items-center gap-2 text-sm"
          >
            LOGIN
            <FaUser />
          </motion.a>

          <motion.button
            type="button"
            aria-label="Search"
            whileHover={{ scale: 1.15, color: "#ea580c" }}
            whileTap={{ scale: 0.9 }}
            className="p-2"
            onClick={() => {
              window.location.href = "/search";
            }}
          >
            <FaSearch />
          </motion.button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-4 lg:hidden">
          <Link
            href="/login"
            aria-label="Login"
            className="p-2 text-gray-700"
          >
            <FaUser />
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            className="rounded-md p-2 text-xl text-gray-800 transition-colors hover:bg-orange-50 hover:text-orange-600"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-gray-100 bg-white lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
              {carint_nav.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.06, duration: 0.25 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? "bg-orange-600 text-white"
                        : "text-gray-800 hover:bg-orange-50 hover:text-orange-600"
                    }`}
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}

              <div className="mt-2 flex items-center justify-between border-t border-gray-100 pt-4">
                <span className="text-sm text-gray-500">Find what you need</span>
                <motion.a
                  href="/search"
                  whileTap={{ scale: 0.9 }}
                  aria-label="Search"
                  className="rounded-full bg-orange-600 p-3 text-white transition-colors hover:bg-orange-700"
                >
                  <FaSearch />
                </motion.a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}