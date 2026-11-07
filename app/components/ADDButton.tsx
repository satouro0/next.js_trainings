"use client";

import { useState } from "react";

export default function AddButton() {
  const [add, setadd] = useState<number>(0);

  const handleClickAdd = () => {
    setadd(add + 1);
  };

  return (
    <div>
      <p className="text-white">{add}</p>
      <button className="bg-red-400 px-3 rounded" onClick={handleClickAdd}>
        add niga
      </button>

    </div>
  );
}


