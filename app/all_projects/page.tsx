"use client"

import Link from "next/link";
import React from "react";
import Themetoggle from "../components/Theme-toggle";
import Logout from "../components/logout";

export default function page() {
  return (
    <div className="m-10">
      <div>
        <Themetoggle/>
      </div>
      <div>
        <h1 className="text-2xl">Lessons :-</h1>
      </div>
      <br />
      <br />
      <div className="flex  gap-5 flex-wrap">
        <Link href={"/border"} className="bg-white text-black p-2 rounded-xl">
          border
        </Link>
        <Link href={"/flex"} className="bg-white text-black p-2 rounded-xl">
          flex
        </Link>
        <Link href={"/p_home"} className="bg-white text-black p-2 rounded-xl">
          header
        </Link>
        <Link href={"/position"} className="bg-white text-black p-2 rounded-xl">
          position
        </Link>
        <Link href={"/grid  "} className="bg-white text-black p-2 rounded-xl">
          grid
        </Link>
        <Link
          href={"/responsive  "}
          className="bg-white text-black p-2 rounded-xl"
        >
          responsive
        </Link>
        <Link
          href={"/animation  "}
          className="bg-white text-black p-2 rounded-xl"
        >
          animation
        </Link>
        <Link href={"/aos  "} className="bg-white text-black p-2 rounded-xl">
          aos
        </Link>
        <Link href={"/api  "} className="bg-white text-black p-2 rounded-xl">
          api
        </Link>
        <Link
          href={"/swipper  "}
          className="bg-white text-black p-2 rounded-xl"
        >
          swipper
        </Link>
        <Link href={"/zod  "} className="bg-white text-black p-2 rounded-xl">
          zod
        </Link>
        <Link
          href={"/counter(strike)  "}
          className="bg-white text-black p-2 rounded-xl"
        >
          counter(strike)
        </Link>
        <Link
          href={"/login"}
          className="bg-white text-black p-2 rounded-xl"
        >
          login
        </Link>
        <Link
          href={"/api_routing"}
          className="bg-white text-black p-2 rounded-xl"
        >
          api routing
        </Link>
      </div>
      <br />
      <br />
      <div className="text-2xl">
        <h1>projects :-</h1>
      </div>
      <br />
      <br />
      <div className="flex  gap-5 flex-wrap">
        <Link href={"/unichat"} className="bg-white text-black p-2 rounded-xl">
          unichat
        </Link>
        <Link
          href={"/simple_login"}
          className="bg-white text-black p-2 rounded-xl"
        >
          simple login page
        </Link>
        <Link
          href={"/login_forum"}
          className="bg-white text-black p-2 rounded-xl"
        >
          login forum
        </Link>
        <Link
          href={"/facebook_login"}
          className="bg-white text-black p-2 rounded-xl"
        >
          facebook login
        </Link>
        <Link
          href={"/instrument"}
          className="bg-white text-black p-2 rounded-xl"
        >
          Instrument
        </Link>
        <Link href={"/monogram"} className="bg-white text-black p-2 rounded-xl">
          monogram
        </Link>
        <Link href={"/podia"} className="bg-white text-black p-2 rounded-xl">
          podia
        </Link>
        <Link
          href={"/starbucks"}
          className="bg-white text-black p-2 rounded-xl"
        >
          starbucks
        </Link>

        <Link href={"/neo_gym"} className="bg-white text-black p-2 rounded-xl">
          neo gym
        </Link>
        <Link href={"/inance"} className="bg-white text-black p-2 rounded-xl">
          INANCE
        </Link>
        <Link href={"/spering"} className="bg-white text-black p-2 rounded-xl">
          spering
        </Link>
        <Link href={"/ornato"} className="bg-white text-black p-2 rounded-xl">
          ornato
        </Link>

        <Link href={"/finexo"} className="bg-white text-black p-2 rounded-xl">
          finexo
        </Link>
        <Link
          href={"/little_fashion"}
          className="bg-white text-black p-2 rounded-xl"
        >
          little fashion
        </Link>
        <Link href={"/carint"} className="bg-white text-black p-2 rounded-xl">
          carint
        </Link>
        <Link href={"/sbs"} className="bg-white text-black p-2 rounded-xl">
          sbs
        </Link>
        <Link href={"/edgecut"} className="bg-white text-black p-2 rounded-xl">
          edgecut
        </Link>
        <Link href={"/Esigned"} className="bg-white text-black p-2 rounded-xl">
          Esigned
        </Link>
        <Link href={"/hexa"} className="bg-white text-black p-2 rounded-xl">
          hexa shop
        </Link>
      </div>
      <br />
      <hr />
      <br />
       <Logout/>
    </div>
  );
}