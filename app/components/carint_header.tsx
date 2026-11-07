import React from "react";
import { FaLocationArrow, FaMailBulk, FaPhone } from "react-icons/fa";

export default function Carint_nav() {
  return (
    <div className="text-white">
      <nav>
        <div className="bg-indigo-950 flex p-3 justify-between">
          <div className="flex items-center">
            <div className="bg-white p-2 rounded-full text-teal-500"><FaPhone /></div>
            Call: 080302026
          </div>
          <div className="flex items-center">
            <div className="bg-white p-2 rounded-full text-teal-500"><FaMailBulk /></div>
            Email: demo@gmail.com
          </div>
          <div className="flex items-center">
            <div className="bg-white p-2 rounded-full text-teal-500"><FaLocationArrow /></div>
            Location
          </div>
        </div>
      </nav>
    </div>
  );
}
