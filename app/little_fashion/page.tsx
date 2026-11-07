"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaHeart, FaInstagram, FaShoppingBasket, FaSkype, FaUser, FaWhatsapp, FaYoutube } from "react-icons/fa";
import LtlFasionFooter from "../components/LtlFasionFooter";
import LtlFasionnav from "../components/LtlFasionnav";


export default function LtlFasion1() {
  const usepath = usePathname();
  return (
    <div className="">
      
      <LtlFasionnav/>

      <div className="bg-[url('/litlfasion1.png')] bg-cover text-white flex flex-col pl-5 md:pl-25 py-20 md:pt-70 md:py-40 md:gap-y-10 gap-y-5 ">
        {" "}
        {/* P1 */}
        <h1 className="md:text-6xl text-5xl font-bold">Cool Fashion</h1>
        <p className="md:text-[23px] text-[17px] pr-19 md:pr-160 ">
          Little fashion template comes with total 8 HTML pages provided by
          Epstine Website.
        </p>
        <button className="py-4 px-5 rounded-3xl md:w-60 w-50 font-bold bg-black hover:bg-orange-500 text[18px] md:text-[20px]">
          <a href="">Lean More About Us</a>
        </button>
      </div>{" "}
      {/* Body 2 */}
      <div className="md:my-20 flex flex-col md:gap-y-10">
        <h2 className="font-bold text-5xl text-center">
          Get Started With <span className="text-orange-500">Little</span>{" "}
          Fashion
        </h2>
        <div className="flex md:flex-row gap-y-12 flex-col justify-around pt-10 md:pl-0 gap-x-10 md:px-15">
          <div className="text-slate-400 text-[20px]  pl-10 justify-center flex flex-col">
            <h1 className="border-l-slate-400 border-l-2 py-1 hover:text-orange-500 hover:border-l-orange-500 md:pl-1 ">
              <a href="">Introduction</a>
            </h1>
            <h1 className="border-l-slate-400 md:w-36 border-l-2 py-1 hover:text-orange-500 hover:border-l-orange-500 md:pl-1 ">
              <a href="">How we Work?</a>
            </h1>
            <h1 className=" border-l-2 py-1 text-orange-500 border-l-orange-500 md:pl-1">
              <a href="">Capabilites</a>
            </h1>
          </div>
          <Image
            src={"/litlfasion2.jpeg"}
            alt="little fashion 2"
            height={20}
            width={500}
          />
          <div className="md:flex hidden md:flex-col pl-2 md:p-0 md:gap-y-5 gap-y-3 md:pr-20">
            <h1 className="text-4xl font-bold">Life at Studio</h1>
            <p className="text-[19px] text-slate-400">
              Over three years in business, We’ve had the chance to work on a
              variety of projects, with companies
            </p>
            <p className="text-[19px] text-slate-400">
              Custom work is branding, web design, UI/UX design
            </p>
            <h3 className="text-[14px] py-2 font-bold text-slate-400 hover:text-orange-500">
              <a href="">
                WORK WITH US <span className="">{"-->"}</span>
              </a>
            </h3>
          </div>
        </div>
      </div>
      {/* Body3 */}
      <div className="bg-[rgb(209,237,248)] flex md:flex-row md:pl-40 mt-20 md:gap-x-10 flex-col items-center">
        <div className="flex flex-col gap-y-4 py-14 md:p-0 pl-8 md:gap-y-7 justify-center">
          <h1 className="font-bold text-4xl">
            <span className="text-orange-400">Retail</span> shop owners
          </h1>
          <p className="text-2xl text-slate-600">
            Credits go to Unsplash and FreePik websites for images used in this
            Little Fashion by Epstine.
          </p>
          <h3 className="text-[14px] py-2 font-bold text-slate-500 hover:text-orange-500">
            <a href="">
              EXPLORE PRODUCTS <span className="">{"-->"}</span>
            </a>
          </h3>
        </div>
        <Image
          src={"/litlfasion3.jpg"}
          alt="litle fastion 3"
          height={10}
          width={650}
        />
      </div>
      {/* Body 4 */}
      <div className="mt-15 flex flex-col gap-y-10">
        <h1 className="text-6xl text-center font-bold hover:text-orange-500">Featured Products</h1>
        <div className="flex flex-row justify-around md:px-40">
          <div className="flex flex-col gap-y-3">
            <div className="bg-[url('/litlfasion_p1.jpeg')] hover:shadow-2xl hover:shadow-slate-400 bg-cover flex flex-row pb-70 px-3 w-80 pt-4 justify-between ">
              <h1 className="bg-white p-2">New Arrival</h1>
              <h1 className="text-white hover:text-orange-400"><a href=""><FaHeart/></a></h1>
            </div>
            <div className="flex flex-row justify-between px-2">
              <h2 className="text-xl font-bold hover:text-orange-500"><a href="">Tree Pot</a></h2>
              <h2 className="text-slate-600">$25</h2>
            </div>
            <h3 className="text-slate-600">Original package design from house</h3>
          </div>
          <div className="flex flex-col gap-y-3">
            <div className="bg-[url('/litlfasion_p2.jpeg')] bg-contain flex hover:shadow-2xl hover:shadow-slate-400 flex-row pb-70 px-3 w-80 pt-4 justify-between ">
              <h1 className="bg-white p-2">Low Price</h1>
              <h1 className="text-white hover:text-orange-400"><a href=""><FaHeart/></a></h1>
            </div>
            <div className="flex flex-row justify-between px-2">
              <h2 className="text-xl font-bold hover:text-orange-400"><a href="">Fashion Set</a></h2>
              <h2 className="text-slate-600">$35</h2>
            </div>
            <h3 className="text-slate-600">Custom package </h3>
          </div>
          <div className="flex flex-col gap-y-3">
            <div className="bg-[url('/litlfasion_p3.jpeg')] bg-contain flex  hover:shadow-2xl hover:shadow-slate-400 flex-row pb-70 px-3 w-80 pt-4 justify-between ">
              <h1 className="bg-white p-2">Juice Drinks</h1>
              <h1 className="text-white hover:text-orange-400"><a href=""><FaHeart/></a></h1>
            </div>
            <div className="flex flex-row justify-between px-2">
              <h2 className="text-xl font-bold hover:text-orange-400"><a href="">Juice Drinks</a></h2>
              <h2 className="text-slate-600">$45</h2>
            </div>
            <h3 className="text-slate-600">Nature made another world</h3>
          </div>
        </div>
        <div className="text-center md:justify-center md:flex">
          <h2 className="text-slate-600 border-b-2 w-38 font-bold text-[14px] hover:text-orange-500 border-slate-600 "><a href="">VIEW ALL PRODUCTS</a></h2>
        </div>
      </div>
      <LtlFasionFooter/>
    </div>
  );
}
