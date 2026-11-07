"use client";

import { useState } from "react";

export default function TimesButton() {
  const [time, settime] = useState<number>(2);

  const handleClicktime = () => {
    settime(time * 2);
  };

  return (
    <div>
      <p className="text-white">{time}</p>
      <button className="bg-red-400 px-3 rounded" onClick={handleClicktime}>
        add niga
      </button>

    </div>
  );
}


