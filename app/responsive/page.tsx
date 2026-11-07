import Link from 'next/link';
import React from 'react'

export default function page() {
  const navlinks = [
  { id: 1, title: "home", href: "/" },
  { id: 2, title: "contact", href: "/p_contact" },
  { id: 3, title: "price", href: "/p_price" },
];
  
    return (
    <div>
      <nav className='space-x-10 hidden sm:flex text-white'>
        {navlinks.map((item) => (
            <Link key={item.id} href={item.href}>
                {item.title}
            </Link>
        ))}
      </nav>
    </div>
  )
}
