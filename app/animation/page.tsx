"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function page() {
  const [show, setshow] = useState<boolean>(false);

  const handleclick = () => {
    setshow(true);
  };

  const Myanime = {
    Myhover: {
      textShadow: '0 0 20px white'
    }
  }

  return (
    <div className="text-white">
      {show && (
        <motion.h1
          className="text-center"
          initial={{ x: -700 }}
          animate={{ x: 0 }}
          transition={{ duration: 2, delay: 1, type: "spring", bounce: 2 }}
          whileTap={{ color: "red" }}
          whileHover='Myhover'
          variants={Myanime}
        >
          niga!
        </motion.h1>
      )}
      {show && (
        <motion.h1
          className="text-center"
          initial={{ x: 700 }}
          animate={{ x: 0 }}
          transition={{ duration: 2, delay: 1, type: "spring", bounce: 2 }}
          whileTap={{ color: "red" }}
          whileHover='Myhover'
          variants={Myanime}
        >
          niga!
        </motion.h1>
      )}
      {show && (
        <motion.h1
          className="text-center"
          initial={{ x: -700 }}
          animate={{ x: 0 }}
          transition={{ duration: 2, delay: 1, type: "spring", bounce: 2 }}
          whileTap={{ color: "red" }}
          whileHover='Myhover'
          variants={Myanime}
        >
          niga!
        </motion.h1>
      )}
      {show && (
        <motion.h1
          className="text-center"
          initial={{ x: 700 }}
          animate={{ x: 0 }}
          transition={{ duration: 2, delay: 1, type: "spring", bounce: 2 }}
          whileTap={{ color: "red" }}
          whileHover='Myhover'
          variants={Myanime}
        >
          niga!
        </motion.h1>
      )}
      {show && (
        <motion.h1
          className="text-center"
          initial={{ x: -700 }}
          animate={{ x: 0 }}
          transition={{ duration: 2, delay: 1, type: "spring", bounce: 2 }}
          whileTap={{ color: "red" }}
          whileHover='Myhover'
          variants={Myanime}
        >
          niga!
        </motion.h1>
      )}
      <button onClick={handleclick}>show</button>s
    </div>
  );
}
