"use client";

import Link from "next/link";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function carint_nav() {
  const carint_nav = [
    { id: 1, title: "HOME", href: "/carint" },
    { id: 2, title: "SERVICES", href: "/carint_services" },
    { id: 3, title: "ABOUT", href: "/carint_about" },
    { id: 4, title: "CONTACT US", href: "/carint_contact" },
    { id: 5, title: "LOGIN", href: "/carint_login" },
  ];
  const usepath = usePathname();
  return (
    <div className="flex flex-row justify-between px-2 py-4 bg-white">
      <h1 className="font-bold text-3xl hover:text-orange-500">
        <a href="">
          Carint
        </a>
      </h1>
      <nav className="text-center space-x-10  md:flex hidden">
        {carint_nav.map((item) => (
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
      <div className="text-slate-500 text-2xl flex gap-x-4">
        <h1 className="hover:text-orange-500">
          <a href=""></a>
        </h1>
        <h1 className="hover:text-orange-500">
          <a href="">
            <FaSearch/>
          </a>
        </h1>
      </div>
      </nav>
    </div>
  );
}
