"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navlinks = [
  { id: 1, title: "home", href: "/" },
  { id: 2, title: "contact", href: "/p_contact" },
  { id: 3, title: "price", href: "/p_price" },
];
export default function Navbar() {
  const usepath = usePathname();
  return (
    <div>
      <nav className="text-center space-x-10 text-white">
        {navlinks.map((item) => ( 
          <Link
            key={item.id}
            href={item.href}
            className={usepath === item.href ? "bg-white text-black p-2 rounded-lg" : ""}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
