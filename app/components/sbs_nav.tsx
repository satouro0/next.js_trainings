"use client";

import Link from "next/link";
import React from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Sbs_nav() {
  const carint_nav = [
    { id: 1, title: "HOME", href: "/" },
    { id: 2, title: "ABOUT", href: "/sbs_about" },
    { id: 3, title: "SKATING", href: "/sbs_skating" },
    { id: 4, title: "SHOP", href: "/sbs_shop" },
    { id: 5, title: "CONTACT", href: "/sbs_contact" },
  ];
  const usepath = usePathname();
  return (
    <div className="flex flex-row justify-between p-10 bg-white">
      <Image
            src={"/sbs-logo.png"}
            width={100}
            height={10}
            alt="sbs_logo"
          ></Image>
      <nav className="text-center space-x-10  md:flex hidden items-center">
        <div className="text-center space-x-10">
            {carint_nav.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={
              usepath == item.href
                ? "border-b-2 bg-orange-600 text-white px-5 py-3 font_bold rounded-3xl"
                : "hover:bg-orange-600 hover:text-white hover:px-5 hover:py-3 hover:rounded-3xl"
            }
          >
            {item.title}
          </Link>
        ))}
        </div>
        
      </nav>
      <div className="flex space-x-10">
            <div>
                <FaUser/>
            </div>
            <div>
                <FaSearch/>
            </div>
        </div>
    </div>
  );
}
