"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaShoppingBasket, FaUser } from "react-icons/fa";

export default function LtlFasionnav() {
  const headerNav = [
    { id: 1, title: "home", href: "/little_fashion" },
    { id: 2, title: "Story", href: "/little_fashion_story" },
    { id: 3, title: "Products", href: "/fashion_products" },
    { id: 4, title: "FAQs", href: "/fashion_FAQs" },
    { id: 5, title: "Contact", href: "/fashion_contact" },
  ];
  const usepath = usePathname();
  return (
    <div>
      <div className="flex flex-row justify-around md:my-6 my-5">
        {" "}
        {/* Header */}
        <h1 className="font-bold text-3xl hover:text-orange-500">
          <a href="">
            <span className="text-orange-500">Little</span> Fashion
          </a>
        </h1>
        <nav className="text-center space-x-10 md:flex hidden">
          {headerNav.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={
                usepath == item.href
                  ? "border-b-2 text-orange-400 py-1 "
                  : "hover:text-orange-400 hover:border-slate-300 hover:border-b-2 py-1 text-[18px] text-slate-600"
              }
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="text-slate-500 text-2xl flex gap-x-4">
          <h1 className="hover:text-orange-500">
            <a href="">
              <FaShoppingBasket />
            </a>
          </h1>
          <h1 className="hover:text-orange-500">
            <a href="">
              <FaUser />
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
}
