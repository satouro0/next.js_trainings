"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaTimes, FaUser, FaSearch } from "react-icons/fa";

const navLinks = [
  { id: 1, title: "Home", href: "/" },
  { id: 2, title: "About", href: "/esigned_about" },
  { id: 3, title: "What we do", href: "/esigned_services" },
  { id: 4, title: "Portfolio", href: "/esigned_portfolio" },
  { id: 5, title: "Contact us", href: "/esigned_contact" },
];

export default function Esigned_nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="absolute inset-x-0 top-0 z-50 w-full bg-transparent text-white">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 sm:px-8 lg:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="relative z-50 text-2xl font-normal tracking-wide"
        >
          Esigned
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-6 lg:flex xl:gap-9">
          {navLinks.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`flex items-center gap-2 text-base transition-colors duration-300 hover:text-gray-300 ${
                pathname === item.href ? "font-semibold" : ""
              }`}
            >
              
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Desktop icons */}
        <div className="hidden items-center gap-6 lg:flex">
          <button
            type="button"
            aria-label="Account"
            className="transition-transform duration-300 hover:scale-110"
          >
            <FaUser size={18} />
          </button>

          <button
            type="button"
            aria-label="Search"
            className="transition-transform duration-300 hover:scale-110"
          >
            <FaSearch size={21} />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          className="relative z-50 p-1 text-2xl transition-transform duration-300 hover:scale-110 lg:hidden"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="absolute left-0 top-full flex w-full flex-col items-center gap-5 border-t border-white/10 bg-[#191919] px-6 py-7 lg:hidden"
          >
            {navLinks.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, delay: index * 0.06 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-3 text-base transition-colors duration-300 hover:text-gray-300 ${
                    pathname === item.href ? "font-semibold" : ""
                  }`}
                >
                  {item.title}
                </Link>
              </motion.div>
            ))}

            <div className="flex items-center gap-8 pt-1">
              <button
                type="button"
                aria-label="Account"
                className="text-lg transition-transform hover:scale-110"
              >
                <FaUser />
              </button>

              <button
                type="button"
                aria-label="Search"
                className="text-xl transition-transform hover:scale-110"
              >
                <FaSearch />
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}