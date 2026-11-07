"use client";

import Image from "next/image";
import React from "react";

export default function Inance() {
  return (
    <div className="w-full min-h-screen bg-blue-100 text-gray-800">
      <div className="bg-black text-white flex justify-between px-5 py-2 text-sm">
        <div>📞 Call: +01 1234567890</div>
        <div>📧 Email: demo@gmail.com</div>
      </div>
      <div className="bg-blue-100">
        <div className="flex justify-between items-center px-5 md:px-20 py-5">
          <h1 className="text-2xl font-bold text-indigo-700">INANCE</h1>
          <div className="hidden md:flex gap-10">
            <div className="text-indigo-700">Home</div>
            <div>About</div>
            <div>Services</div>
            <div>Contact Us</div>
          </div>
          <div className="md:hidden text-2xl">☰</div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center px-5 md:px-20 pt-10 pb-16">
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start py-10">
            <h1 className="text-4xl md:text-5xl font-bold text-indigo-700">
              Repair and
              <br />
              Maintenance
              <br />
              Services
            </h1>
            <p className="mt-6 max-w-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui harum
              voluptatem adipisci. Quos molestiae saepe dicta nobis pariatur,
              tempora iusto, ad possimus soluta hic praesentium mollitia
              consequatur beatae, aspernatur culpa.
            </p>
            <button className="bg-orange-500 text-white px-10 py-4 mt-7 rounded-md hover:bg-orange-600 transition">
              CONTACT US
            </button>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-end">
            <Image
              src="/slider-img.png"
              width={500}
              height={600}
              alt="Technician"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </div>
      <div className="bg-blue-100 px-5 md:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="group bg-white shadow-lg flex flex-col justify-center items-center py-12 transition hover:bg-orange-500">
            <div className="text-6xl group-hover:scale-110 transition">🛠️</div>
            <h2 className="text-xl text-indigo-700 group-hover:text-white mt-5">
              REPAIR
            </h2>
          </div>
          <div className="bg-orange-500 flex flex-col justify-center items-center py-12 text-white">
            <div className="text-6xl">🏠</div>
            <h2 className="text-xl mt-5">IMPROVE</h2>
          </div>
          <div className="group bg-white shadow-lg flex flex-col justify-center items-center py-12 transition hover:bg-orange-500">
            <div className="text-6xl group-hover:scale-110 transition">🔧</div>
            <h2 className="text-xl text-indigo-700 group-hover:text-white mt-5">
              MAINTAIN
            </h2>
          </div>
        </div>
      </div>
      <div className="bg-white px-5 md:px-20 py-20">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold">ABOUT US</h1>
            <p className="mt-5 max-w-xl leading-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised. There are many variations of
              passages of Lorem Ipsum available, but the majority have suffered
              alteration in some form, by injected humour, or randomised.
            </p>
            <button className="bg-indigo-700 text-white px-10 py-4 mt-7 hover:bg-indigo-800 transition">
              READ MORE
            </button>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/about-img.jpg"
              width={600}
              height={450}
              alt="About us"
              className="w-full max-w-xl"
            />
          </div>
        </div>
      </div>
      <div className="bg-blue-100 px-5 md:px-20 py-20">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="hidden md:flex w-full md:w-1/2 justify-center">
            <Image
              src="/professional-img.png"
              width={550}
              height={550}
              alt="Professional home service"
              className="w-full max-w-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold text-indigo-700">
              WE PROVIDE PROFESSIONAL
              <br />
              HOME SERVICES.
            </h1>
            <p className="mt-6 max-w-xl">
              Randomised words which don't look even slightly believable. If you
              are going to use a passage of Lorem Ipsum, you need to be sure
              there isn't anything embarrassing hidden in the middle of text.
              All randomised words which don't look even slightly believable.
            </p>
            <button className="bg-orange-500 text-white px-10 py-4 mt-7 hover:bg-orange-600 transition">
              READ MORE
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white px-5 md:px-20 py-20">
        <h1 className="text-3xl font-bold text-center">OUR SERVICES</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          <div className="bg-white shadow-md border border-gray-200 p-8 text-center hover:shadow-xl transition">
            <div className="text-5xl">🛠️</div>
            <h2 className="font-bold text-xl mt-5">Maintenance</h2>
            <p className="mt-3">
              When looking at its layout. The point of using Lorem Ipsum is that
              it has a more-or-less normal.
            </p>
          </div>
          <div className="bg-white shadow-md border border-gray-200 p-8 text-center hover:shadow">
            <div className="text-5xl">🔌</div>
            <h2 className="font-bold text-xl mt-5">Electrical</h2>
            <p className="mt-3">
              When looking at its layout. The point of using Lorem Ipsum is that
              it has a more-or-less normal.
            </p>
          </div>
          <div className="bg-white shadow-md border border-gray-200 p-8 text-center hover:shadow-xl transition">
            <div className="text-5xl">🚰</div>
            <h2 className="font-bold text-xl mt-5">Plumbing</h2>
            <p className="mt-3">
              When looking at its layout. The point of using Lorem Ipsum is that
              it has a more-or-less normal.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <button className="bg-blue-700 text-white px-10 py-4 hover:bg-blue-800 transition">
            VIEW MORE
          </button>
        </div>
      </div>
      <div className="bg-white px-5 md:px-20 py-20">
        <h1 className="text-3xl font-bold text-center">WHAT OUR CLIENTS SAY</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="bg-white shadow-md border border-gray-200 p-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-5">
                <Image
                  src="/client1.jpg"
                  width={90}
                  height={90}
                  alt="Client"
                  className="rounded-full"
                />
                <div>
                  <h2 className="font-medium">Jorch morik</h2>
                  <div className="text-orange-400">★★★★★</div>
                </div>
              </div>
              <div className="text-3xl">❝</div>
            </div>
            <p className="mt-6">
              Chunks as necessary, making this the first true generator on the
              Internet. It uses a dictionary of over 200 Latin words, combined
              with a handful of model sentence structures, to generate Lorem
              Ipsum.
            </p>
          </div>
          <div className="bg-white shadow-md border border-gray-200 p-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-5">
                <Image
                  src="/client2.jpg"
                  width={90}
                  height={90}
                  alt="Client"
                  className="rounded-full"
                />
                <div>
                  <h2 className="font-medium">Jorch morik</h2>
                  <div className="text-orange-400">★★★★★</div>
                </div>
              </div>
              <div className="text-3xl">❝</div>
            </div>
            <p className="mt-6">
              Chunks as necessary, making this the first true generator on the
              Internet. It uses a dictionary of over 200 Latin words, combined
              with a handful of model sentence structures, to generate Lorem
              Ipsum.
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-5 mt-8">
          <button className="bg-blue-700 text-white w-12 h-12">←</button>
          <button className="bg-blue-700 text-white w-12 h-12">→</button>
        </div>
      </div>
      <div className="bg-white px-5 md:px-20 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h1 className="text-3xl font-bold">CONTACT US</h1>
            <div className="flex flex-col gap-4 mt-8">
              <input
                type="text"
                placeholder="Name"
                className="border border-gray-200 shadow-sm px-5 py-4"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="border border-gray-200 shadow-sm px-5 py-4"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-200 shadow-sm px-5 py-4"
              />
              <textarea
                placeholder="Message"
                className="border border-gray-200 shadow-sm px-5 py-8"
              />
              <button className="bg-blue-700 text-white px-10 py-4 rounded-md   hover:bg-blue-800 transition">
                SEND
              </button>
            </div>
          </div>
          <div className="w-full min-h-80 bg-gray-300 flex justify-center items-center">
            <div className="text-center">
              <div className="text-5xl">📍</div>
              <p className="mt-3">Google Maps</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-950 text-white px-5 md:px-20 py-16">
        <h2 className="text-xl font-bold text-center">GET IN TOUCH</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12 text-center">
          <div>
            <div className="bg-blue-600 w-14 h-14 rounded-full flex justify-center items-center mx-auto text-xl">
              📍
            </div>
            <p className="mt-5">Lorem Ipsum is simply dummy text</p>
          </div>
          <div>
            <div className="bg-blue-600 w-14 h-14 rounded-full flex justify-center items-center mx-auto text-xl">
              📞
            </div>
            <p className="mt-5">+02 1234567890</p>
          </div>
          <div>
            <div className="bg-blue-600 w-14 h-14 rounded-full flex justify-center items-center mx-auto text-xl">
              ✉️
            </div>
            <p className="mt-5">niga@gmail.com</p>
          </div>
        </div>
        <h2 className="text-xl font-bold text-center mt-12">FOLLOW US</h2>
        <div className="flex justify-center gap-5 mt-5 text-xl">
          <div>f</div>
          <div>𝕏</div>
          <div>▶</div>
          <div>◎</div>
        </div>
        <div className="border-t border-gray-500 mt-12 pt-6 text-center text-sm">
          © 2026 All Rights Reserved By Free Html Templates
        </div>
      </div>
    </div>
  );
}

