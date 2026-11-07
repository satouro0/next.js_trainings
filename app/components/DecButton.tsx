"use client";

import { useState } from "react";

export default function DecButton() {
  const [dec, setdec] = useState<number>(1000);

  const handleClickdec = () => {
    setdec(dec - 1);
  };

  return (
    <div>
      <p className="text-white">{dec}</p>
      <button className="bg-blue-400 px-3 rounded" onClick={handleClickdec}>
        dec niga
      </button>

    </div>
  );
}


