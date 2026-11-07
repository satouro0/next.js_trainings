"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import Themetoggle from "./Theme-toggle";


const pages = [
  { name: "About Us", href: "/hexa_about" },
  { name: "Products", href: "/hexa_products" },
  { name: "Single Product", href: "/hexa_single_product" },
  { name: "Contact Us", href: "/contact" },
];

const features = [
  { name: "yaaaaaaaaa", href: "/cart" },
  { name: "yaaaaaaaa", href: "/checkout" },
  { name: "yaaaaaaa", href: "/wishlist" },
  { name: "yaaaaaa", href: "/account" },
];

const links = [
  { name: "Home", href: "/" },
  { name: "Men's", href: "/hexa_men" },
  { name: "Women's", href: "/hexa_women" },
  { name: "Kid's", href: "/hexa_kids" },
];

export default function Hexa_nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState("");

  const renderDropdown = (title, items) => (
    <div className="relative group">
      <button className="flex items-center gap-2 py-3 text-sm font-semibold text-neutral-800  transition-colors hover:text-neutral-500">
        {title}
        <FaChevronDown className="text-xs transition-transform duration-300 group-hover:rotate-180" />
      </button>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="invisible absolute left-0 top-full z-50 w-52 translate-y-2 border border-neutral-100  py-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
      >
        {items.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="block px-5 py-3 text-sm text-neutral-700 transition-colors hover:bg-neutral-100 hover:pl-7"
          >
            {item.name}
          </Link>
        ))}
      </motion.div>
    </div>
  );

  const renderMobileDropdown = (title, items) => (
    <div className="w-full border-b border-neutral-200">
      <button
        onClick={() =>
          setMobileDropdown(mobileDropdown === title ? "" : title)
        }
        className="flex w-full items-center justify-between py-4 text-left text-sm font-semibold"
      >
        {title}
        <motion.span
          animate={{ rotate: mobileDropdown === title ? 180 : 0 }}
        >
          <FaChevronDown className="text-xs" />
        </motion.span>
      </button>

      <AnimatePresence>
        {mobileDropdown === title && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            {items.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 pl-4 text-sm text-neutral-600 transition-colors hover:text-black"
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <header className="top-0 bg-white  z-50 w-full border-b border-dashed border-neutral-200 sticky">
      <div className="mx-auto flex min-h-24 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center bg-neutral-800 text-2xl font-bold text-white [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]">
            H
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-widest text-neutral-800">
              HEXASHOP
            </h1>
            <p className="mt-1 text-xs tracking-widest text-neutral-500">
              ONLINE SHOPPING
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-neutral-800 bg-white transition-colors hover:text-neutral-400"
            >
              {link.name}
            </Link>
          ))}

          {renderDropdown("Pages", pages)}
          {renderDropdown("Features", features)}

          <Link
            href="/explore"
            className="py-3 text-sm font-semibold text-neutral-800 transition-colors hover:text-neutral-400"
          >
            Explore
          </Link>
          <Themetoggle/>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex h-11 w-11 items-center justify-center border border-neutral-200 text-lg text-neutral-800 lg:hidden"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 top-full w-full overflow-hidden border-b border-neutral-200 bg-white px-6 shadow-lg lg:hidden"
          >
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-neutral-200 py-4 text-sm font-semibold text-neutral-800"
              >
                {link.name}
              </Link>
            ))}

            {renderMobileDropdown("Pages", pages)}
            {renderMobileDropdown("Features", features)}

            <Link
              href="/explore"
              onClick={() => setMenuOpen(false)}
              className="block py-4 text-sm font-semibold text-neutral-800"
            >
              Explore
            </Link>
            
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}