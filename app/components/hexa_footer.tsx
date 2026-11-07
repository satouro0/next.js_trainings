"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaBehance } from "react-icons/fa";

const footerColumns = [
  {
    title: "Shopping & Categories",
    links: [
      { name: "Men's Shopping", href: "/mens" },
      { name: "Women's Shopping", href: "/womens" },
      { name: "Kid's Shopping", href: "/kids" },
    ],
  },
  {
    title: "Useful Links",
    links: [
      { name: "Homepage", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Help", href: "/help" },
      { name: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Help & Information",
    links: [
      { name: "Help", href: "/help" },
      { name: "FAQ's", href: "/faq" },
      { name: "Shipping", href: "/shipping" },
      { name: "Tracking ID", href: "/tracking" },
    ],
  },
];

const socialLinks = [
  { name: "Facebook", href: "https://facebook.com", icon: FaFacebookF },
  { name: "Twitter", href: "https://twitter.com", icon: FaTwitter },
  { name: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedinIn },
  { name: "Behance", href: "https://behance.net", icon: FaBehance },
];

export default function Hexa_footer() {
  return (
    <footer className="bg-neutral-800 px-5 py-12 text-white md:px-8 md:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <Link href="/" className="mb-6 inline-flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center bg-white text-2xl font-bold text-neutral-800 [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]">
                H
              </div>

              <div>
                <h2 className="text-xl font-bold tracking-widest">
                  HEXASHOP
                </h2>
                <p className="mt-1 text-xs tracking-widest">
                  ONLINE SHOPPING
                </p>
              </div>
            </Link>

            <address className="not-italic text-sm leading-6 text-white">
              <p>16501 Collins Ave, Sunny Isles Beach,</p>
              <p>FL 33160, United States</p>
              <a
                href="mailto:hexashop@company.com"
                className="mt-3 block transition-colors hover:text-neutral-400"
              >
                hexashop@company.com
              </a>
              <a
                href="tel:0100200340"
                className="mt-3 block transition-colors hover:text-neutral-400"
              >
                010-020-0340
              </a>
            </address>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-5 text-base font-bold">
                {column.title}
              </h3>

              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-white transition-colors duration-200 hover:text-neutral-400"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-neutral-600 pt-8 text-center">
          <p className="text-sm leading-6">
            Copyright © 2022 HexaShop Co., Ltd. All Rights Reserved.
          </p>

          <p className="mt-1 text-sm">
            Design:{" "}
            <a
              href="https://templatemo.com"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-200 transition-colors hover:text-white"
            >
              TemplateMo
            </a>
          </p>

          <div className="mt-7 flex items-center justify-center gap-6">
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={name}
                className="text-xl text-cyan-100 transition-transform duration-200 hover:-translate-y-1 hover:text-white"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}