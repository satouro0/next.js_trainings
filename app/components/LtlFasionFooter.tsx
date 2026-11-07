"use client";
import React from 'react'
import { FaHeart, FaInstagram, FaShoppingBasket, FaSkype, FaUser, FaWhatsapp, FaYoutube } from "react-icons/fa";

export default function LtlFasionFooter() {
  return (
    <div>
        <div className="bg-black mt-10 pb-25 text-slate-600 pt-10 justify-around md:pl-10 md:pr-50 flex md:flex-row">
          <div className="flex flex-col gap-y-5">
            <h1 className="font-bold text-4xl">Little <span className="text-white">Fashion</span></h1>
            <h2>Copyright © 2022 <b>Little Fashion</b></h2>
            <h3>Designed by Jeffery</h3>
          </div>
          <div className="flex flex-col gap-y-5">
            <h1 className="text-white font-bold text-4xl">Sitemap</h1>
            <div className="flex flex-col gap-y-2">
              <h1 className="hover:text-white"><a href="">Story</a></h1>
              <h1 className="hover:text-white"><a href="">Privacy Policy</a></h1>
              <h1 className="hover:text-white"><a href="">Contact</a></h1>
            </div>
          </div>
          <div className="flex flex-col gap-y-2 md:pt-15">
            <h1 className="hover:text-white"><a href="">Products</a></h1>
            <h1 className="hover:text-white"><a href="">FAQs</a></h1>
          </div>
          <div className="flex flex-col gap-y-5">
            <h1 className="text-white font-bold text-4xl">Social</h1>
            <div className="text-[19px] flex flex-row gap-x-3">
              <h1 className="hover:text-white"><a href=""><FaYoutube/></a></h1>
              <h1 className="hover:text-white"><a href=""><FaWhatsapp/></a></h1>
              <h1 className="hover:text-white"><a href=""><FaInstagram/></a></h1>
              <h1 className="hover:text-white"><a href=""><FaSkype/></a></h1>
            </div>
          </div>
      </div>
    </div>
  )
}
