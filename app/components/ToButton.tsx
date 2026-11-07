"use client";

import { useState } from "react";

export default function ToButton() {
  const [to, setto] = useState<number>(1000);

  const handleClickto = () => {
    setto(to / 2);
  };

  return (
    <div>
      <p className="text-white">{to}</p>
      <button className="bg-blue-400 px-3 rounded" onClick={handleClickto}>
        dec niga
      </button>

    </div>
  );
}


