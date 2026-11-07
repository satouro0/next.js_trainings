import React from "react";

export default function StarbucksNav() {
  return (
    <div className="text-white">
      <nav className="flex gap-100justify-between">
        <div className="gap-10 justify-around">
          <ul className="flex gap-5">
            <h1>😍</h1>
            <li>MENU</li>
            <li>REWARDS</li>
            <li>GIFT CARDS</li>
          </ul>
        </div>
        <div className="flex gap-5">
          <p>🍆 find a store</p>
          <button className="rounded-lg bg-white text-black px-2">Sign in</button>
          <button>Join now</button>
        </div>
      </nav>
    </div>
  );
}
