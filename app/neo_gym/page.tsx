"use client";

import Image from "next/image";
import React from "react";

export default function Neogym() {
  return (
    <div className="text-white">
      <div className="bg-red-900">
        <div className="w-full flex justify-between items-center px-10 py-7">
          <h1 className="text-2xl font-bold">NEOGYM</h1>

          <div className="flex gap-14 font-bold">
            <div>HOME</div>
            <div>WHY US?</div>
            <div>TRAINERS</div>
            <div>CONTACT US</div>
            <div className="text-2xl">🔍</div>
          </div>
        </div>

        <div className="min-h-screen flex flex-col justify-center items-center text-center">
          <h3 className="text-3xl font-bold">FITNESS</h3>

          <br />

          <h2 className="text-4xl font-bold">TRAINING</h2>

          <br />

          <h1 className="text-6xl font-bold">NEOGYM</h1>

          <br />

          <p className="max-w-4xl text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <button className="border border-white px-10 py-4 mt-10 rounded-2xl">
            CONTACT US
          </button>

          <div className="flex gap-3 mt-12 text-2xl">
            <div>⚪</div>
            <div>⚪</div>
            <div>⚪</div>
            <div>⚪</div>
            <div>⚪</div>
          </div>
        </div>
      </div>

      <div className="w-full min-h-screen bg-blue-950 px-10 py-24">
        <h1 className="text-4xl font-bold text-center">WHY CHOOSE US</h1>

        <div className="w-14 h-1 bg-red-500 mx-auto mt-3"></div>

        <div className="grid grid-cols-4 gap-10 mt-20">
          <div className="text-center">
            <div className="text-6xl">🏋️</div>

            <h2 className="text-xl font-bold mt-6">QUALITY EQUIPMENT</h2>

            <p className="mt-4 text-lg">
              The pain itself is a love, the adipiscing elite is pursued, but I
              give it in this way at the right time.
            </p>
          </div>

          <div className="text-center">
            <div className="text-6xl">🥤</div>

            <h2 className="text-xl font-bold mt-6">NUTRITION</h2>

            <p className="mt-4 text-lg">
              The pain itself is a love, the adipiscing elite is pursued, but I
              give it in this way at the right time.
            </p>
          </div>

          <div className="text-center">
            <div className="text-6xl">🏃</div>

            <h2 className="text-xl font-bold mt-6">HEALTHY DIET PLAN</h2>

            <p className="mt-4 text-lg">
              The pain itself is a love, the adipiscing elite is pursued, but I
              give it in this way at the right time.
            </p>
          </div>

          <div className="text-center">
            <div className="text-6xl">⏱️</div>

            <h2 className="text-xl font-bold mt-6">SPORTS TRAINING</h2>

            <p className="text-lg">
              The pain itself is a love, the adipiscing elite is pursued, but I
              give it in this way at the right time.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-red-900 mx-auto justify-center items-center p-20">
        <h1 className="text-2xl text-center">HEALTHY MIND AND HEALTHY BODY</h1>

        <br />
        <br />

        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          doloremque sit quam atque repellendus, corporis accusamus mollitia eos
          fuga modi tenetur quisquam delectus ipsum, dolor doloribus incidunt ex
          a dolorum? Ex, quam accusamus. Non deserunt aut magnam ullam, numquam
          dolore totam facere ducimus sint suscipit odit obcaecati aliquam nobis
          delectus possimus laudantium illo.
        </p>

        <div className="flex justify-center">
          <button className="border border-white px-10 py-4 mt-10 rounded-2xl">
            READ MORE
          </button>
        </div>
      </div>

      <div className="bg-blue-950 p-20">
        <h1 className="text-2xl font-bold text-center">OUR GYM TRAINERS</h1>

        <br />
        <br />

        <div className="grid grid-cols-3 gap-10">
          <div className="text-center">
            <h1 className="font-bold mb-5">MR. SINS</h1>

            <Image
              src="/trainer_nigger.png"
              width={350}
              height={350}
              alt="Gym trainer"
              className="rounded-3xl mx-auto"
            />
          </div>

          <div className="text-center">
            <h1 className="font-bold mb-5">MR. SINS</h1>

            <Image
              src="/trainer_nigger.png"
              width={350}
              height={350}
              alt="Gym trainer"
              className="rounded-3xl mx-auto"
            />
          </div>

          <div className="text-center">
            <h1 className="font-bold mb-5">MR. SINS</h1>

            <Image
              src="/trainer_nigger.png"
              width={350}
              height={350}
              alt="Gym trainer"
              className="rounded-3xl mx-auto"
            />
          </div>
        </div>
      </div>

      <div className="bg-purple-950">
        <div className="grid grid-cols-2">
          <div>
            <Image
              src="/tearin'_ass.png"
              width={700}
              height={600}
              alt="Gym"
              className="w-full h-full"
            />
          </div>

          <div className="p-10">
            <h1 className="text-4xl font-bold">CONTACT US</h1>

            <div className="w-16 h-1 bg-pink-500 mt-3 mb-10"></div>

            <div className="flex flex-col gap-8">
              <input
                type="text"
                placeholder="Name"
                className="p-5 text-black text-lg bg-white"
              />

              <input
                type="email"
                placeholder="Email"
                className="p-5 text-black text-lg bg-white"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="p-5 text-black text-lg bg-white"
              />

              <textarea
                placeholder="Message"
                className="p-5 text-black text-lg bg-white h-36"
              ></textarea>

              <div className="flex justify-end">
                <button className="bg-red-500 px-16 py-5 text-lg font-bold">
                  SEND
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 py-20">
        <div className="grid grid-cols-3 text-center">
          <div>
            <div className="text-5xl">📍</div>

            <p className="text-xl mt-6">Location</p>
          </div>

          <div>
            <div className="text-5xl">📞</div>

            <p className="text-xl mt-6">+02 1234567890</p>
          </div>

          <div>
            <div className="text-5xl">✉️</div>

            <p className="text-xl mt-6">demo@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="bg-white text-black py-8 text-center">
        <p className="text-lg">
          © 2020 All Rights Reserved. Design by Free HTML Templates
        </p>
      </div>
    </div>
  );
}

/////////////

// import React from "react";
// import { motion } from "framer-motion";

// export default function Neogym() {
//   return (
//     <div className="text-white">

//       <div className="bg-red-900">

//         <div className="w-full flex justify-between items-center px-10 py-7">

//           <motion.h1
//             className="text-2xl font-bold"
//             initial={{ x: -100, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             NEOGYM
//           </motion.h1>

//           <motion.div
//             className="flex gap-14 font-bold"
//             initial={{ x: 100, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             <div>HOME</div>
//             <div>WHY US?</div>
//             <div>TRAINERS</div>
//             <div>CONTACT US</div>
//             <div className="text-2xl">🔍</div>
//           </motion.div>

//         </div>

//         <div className="min-h-screen flex flex-col justify-center items-center text-center">

//           <motion.h3
//             className="text-3xl font-bold"
//             initial={{ y: -100, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.7 }}
//           >
//             FITNESS
//           </motion.h3>

//           <br />

//           <motion.h2
//             className="text-4xl font-bold"
//             initial={{ x: -100, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.7, delay: 0.2 }}
//           >
//             TRAINING
//           </motion.h2>

//           <br />

//           <motion.h1
//             className="text-6xl font-bold"
//             initial={{ y: 100, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//           >
//             NEOGYM
//           </motion.h1>

//           <br />

//           <motion.p
//             className="max-w-4xl text-lg"
//             initial={{ y: 80, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//             aliquip ex ea commodo consequat.
//           </motion.p>

//           <motion.button
//             className="border border-white px-10 py-4 mt-10"
//             initial={{
//               y: 80,
//               opacity: 0,
//               borderRadius: 0
//             }}
//             animate={{
//               y: 0,
//               opacity: 1,
//               borderRadius: 20
//             }}
//             transition={{
//               duration: 0.8,
//               delay: 0.6
//             }}
//             whileHover={{
//               scale: 1.1,
//               borderRadius: 50
//             }}
//           >
//             CONTACT US
//           </motion.button>

//           <motion.div
//             className="flex gap-3 mt-12 text-2xl"
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.8 }}
//           >
//             <div>⚪</div>
//             <div>⚪</div>
//             <div>⚪</div>
//             <div>⚪</div>
//             <div>⚪</div>
//           </motion.div>

//         </div>
//       </div>

//       <div className="w-full min-h-screen bg-blue-950 px-10 py-24">

//         <motion.h1
//           className="text-4xl font-bold text-center"
//           initial={{ y: -80, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//         >
//           WHY CHOOSE US
//         </motion.h1>

//         <motion.div
//           className="w-14 h-1 bg-red-500 mx-auto mt-3"
//           initial={{ scaleX: 0 }}
//           whileInView={{ scaleX: 1 }}
//           transition={{ duration: 0.7 }}
//         >
//         </motion.div>

//         <div className="grid grid-cols-4 gap-10 mt-20">

//           <motion.div
//             className="text-center"
//             initial={{ x: -100, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             <div className="text-6xl">🏋️</div>

//             <h2 className="text-xl font-bold mt-6">
//               QUALITY EQUIPMENT
//             </h2>

//             <p className="mt-4 text-lg">
//               The pain itself is a love, the adipiscing elite is pursued, but I
//               give it in this way at the right time.
//             </p>
//           </motion.div>

//           <motion.div
//             className="text-center"
//             initial={{ y: 100, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.1 }}
//           >
//             <div className="text-6xl">🥤</div>

//             <h2 className="text-xl font-bold mt-6">
//               NUTRITION
//             </h2>

//             <p className="mt-4 text-lg">
//               The pain itself is a love, the adipiscing elite is pursued, but I
//               give it in this way at the right time.
//             </p>
//           </motion.div>

//           <motion.div
//             className="text-center"
//             initial={{ y: -100, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             <div className="text-6xl">🏃</div>

//             <h2 className="text-xl font-bold mt-6">
//               HEALTHY DIET PLAN
//             </h2>

//             <p className="mt-4 text-lg">
//               The pain itself is a love, the adipiscing elite is pursued, but I
//               give it in this way at the right time.
//             </p>
//           </motion.div>

//           <motion.div
//             className="text-center"
//             initial={{ x: 100, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//           >
//             <div className="text-6xl">⏱️</div>

//             <h2 className="text-xl font-bold mt-6">
//               SPORTS TRAINING
//             </h2>

//             <p className="text-lg">
//               The pain itself is a love, the adipiscing elite is pursued, but I
//               give it in this way at the right time.
//             </p>
//           </motion.div>

//         </div>
//       </div>

//     </div>
//   );
// }
