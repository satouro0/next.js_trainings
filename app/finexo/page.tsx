"use client";
import { motion } from "framer-motion";
import {
  FaChartLine,
  FaLock,
  FaSearch,
  FaUser,
  FaWallet,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-white">
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-900 via-indigo-950 to-[#08035a] text-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col px-6">
          <div className="flex min-h-20 items-center justify-between gap-8">
            <a href="#" className="text-2xl font-bold tracking-tight">
              Finexo
            </a>
            <div className="hidden items-center gap-9 text-sm font-medium md:flex">
              <a
                href="#"
                className="text-cyan-300 transition hover:text-cyan-200"
              >
                HOME
              </a>
              <a href="#about" className="transition hover:text-cyan-300">
                ABOUT
              </a>
              <a href="#services" className="transition hover:text-cyan-300">
                SERVICES
              </a>
              <a href="#why-us" className="transition hover:text-cyan-300">
                WHY US
              </a>
              <a href="#team" className="transition hover:text-cyan-300">
                TEAM
              </a>
              <a
                href="#login"
                className="flex items-center gap-1 transition hover:text-cyan-300"
              >
                <FaUser size={15} />
                LOGIN
              </a>
              <button className="transition hover:text-cyan-300">
                <FaSearch size={19} />
              </button>
            </div>
            <button className="rounded-md p-2 md:hidden">
              <div className="h-0.5 w-6 bg-white" />
              <div className="my-1.5 h-0.5 w-6 bg-white" />
              <div className="h-0.5 w-6 bg-white" />
            </button>
          </div>
          <div className="grid flex-1 items-center gap-8 py-12 md:grid-cols-2 md:py-16">
            <motion.div
              className="max-w-xl"
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="max-w-md text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl">
                CRYPTO
                <div>CURRENCY</div>
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-6 text-white/90 sm:text-base">
                Explicabo esse amet tempora quibusdam laudantium, laborum eaque
                magnam fugiat hic? Esse dicta aliquid error repudiandae earum
                suscipit fugiat molestias, veniam, vel architecto veritatis
                delectus repellat modi impedit sequi.
              </p>
              <a
                href="#services"
                className="mt-7 inline-flex bg-cyan-500 px-10 py-3 text-base font-semibold transition hover:bg-cyan-400"
              >
                Read More
              </a>
            </motion.div>
            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, x: 35 }}
              animate={{
                opacity: 1,
                x: 0,
                y: [0, -12, 0],
              }}
              transition={{
                opacity: {
                  duration: 2,
                },
                x: {
                  duration: 2,
                },
                y: {
                  duration: 20,
                  repeat: Infinity,
                },
              }}
            >
              <Image
                className="object-contain"
                width={500}
                height={200}
                src="/ultra_phone.png"
                alt="Cryptocurrency phone"
              />
            </motion.div>
          </div>
          <div className="flex items-center justify-center gap-2 pb-20">
            <div className="h-5 w-5 rounded-full bg-cyan-400" />
            <div className="h-3 w-3 rounded-full bg-white" />
            <div className="h-3 w-3 rounded-full bg-white" />
          </div>
        </div>
        <div className="absolute -bottom-16 left-1/2 h-40 w-full -translate-x-1/2 rounded-t-full bg-white" />
      </div>

      <div
        id="services"
        className="mx-auto w-full max-w-7xl px-6 py-20 sm:py-24"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our <div className="inline text-cyan-500">Services</div>
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-base text-gray-700">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration
          </p>
        </div>
        <div className="mt-12 grid gap-7 md:grid-cols-3">
          <motion.div
            className="flex min-h-72 flex-col items-center justify-center bg-gray-50 px-7 py-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="mb-4 flex h-20 w-20 items-center justify-center">
              <FaWallet size={70} />
            </div>
            <h3 className="text-xl font-bold">CURRENCY WALLET</h3>
            <p className="mt-2 max-w-sm text-base leading-6 text-gray-900">
              fact that a reader will be distracted by the readable content of a
              page when looking at its layout. The point of using
            </p>
            <a
              href="#"
              className="mt-4 text-base font-medium text-indigo-950 hover:text-cyan-500"
            >
              Read More
            </a>
          </motion.div>
          <motion.div
            className="flex min-h-72 flex-col items-center justify-center bg-gray-50 px-7 py-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <div className="mb-4 flex h-20 w-20 items-center justify-center">
              <FaLock size={70} />
            </div>
            <h3 className="text-xl font-bold">SECURITY STORAGE</h3>
            <p className="mt-2 max-w-sm text-base leading-6 text-gray-900">
              fact that a reader will be distracted by the readable content of a
              page when looking at its layout. The point of using
            </p>
            <a
              href="#"
              className="mt-4 text-base font-medium text-indigo-950 hover:text-cyan-500"
            >
              Read More
            </a>
          </motion.div>
          <motion.div
            className="flex min-h-72 flex-col items-center justify-center bg-gray-50 px-7 py-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            <div className="mb-4 flex h-20 w-20 items-center justify-center">
              <FaChartLine size={70} />
            </div>
            <h3 className="text-xl font-bold">EXPERT SUPPORT</h3>
            <p className="mt-2 max-w-sm text-base leading-6 text-gray-900">
              fact that a reader will be distracted by the readable content of a
              page when looking at its layout. The point of using
            </p>
            <a
              href="#"
              className="mt-4 text-base font-medium text-indigo-950 hover:text-cyan-500"
            >
              Read More
            </a>
          </motion.div>
        </div>
        <div className="mt-11 flex justify-center">
          <a
            href="#"
            className="bg-cyan-500 px-11 py-3 text-base font-semibold text-white transition hover:bg-cyan-400"
          >
            View All
          </a>
        </div>
      </div>

      <div id="about" className="bg-indigo-950 text-white p-6 sm:p-10">
        <div className="flex flex-col justify-center">
          <h1 className="font-extrabold text-2xl sm:text-3xl flex justify-center">
            About<span className="text-blue-300"> Us</span>
          </h1>
          <p className="flex justify-center text-center mt-2 text-sm sm:text-base max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora,
            ipsam sint. Nemo amet cumque.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8 mt-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <Image
              className="object-contain"
              width={600}
              height={200}
              src="/bitcoin_blue.png"
              alt="bitcoin"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            <h1 className="text-xl sm:text-2xl font-bold">WE ARE VENOM</h1>
            <p className="mt-4 text-sm sm:text-base leading-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&apos;t look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn&apos;t anything embarrassing
              hidden in the middle of text.
            </p>
            <p className="mt-4 text-sm sm:text-base leading-6">
              Molestiae odio earum non qui cumque provident voluptates,
              repellendus exercitationem, possimus at iste corrupti officiis
              unde alias eius ducimus reiciendis soluta eveniet. Nobis ullam ab
              omnis quasi expedita.
            </p>
            <button className="mt-6 bg-blue-400 px-6 py-2 rounded-2xl font-medium transition hover:bg-blue-300">
              Read More
            </button>
          </motion.div>
        </div>
      </div>

      <div
        id="why-us"
        className="p-6 sm:p-10 flex flex-col justify-center max-w-7xl mx-auto"
      >
        <h1 className="flex justify-center text-2xl sm:text-3xl font-bold">
          Why Choose Us
        </h1>
        <div className="mt-10 flex flex-col gap-12">
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="border-2 border-blue-950 p-2 rounded-full w-24 h-24 flex items-center justify-center">
              <Image width={80} height={80} src="/w1.png" alt="expert" />
            </div>
            <h2 className="font-bold text-xl mt-4">Expert Management</h2>
            <p className="mt-2 text-sm leading-6 text-gray-700 max-w-xl">
              Incidunt odit rerum tenetur alias architecto asperiores omnis
              cumque doloribus aperiam numquam! Eligendi corrupti, molestias
              laborum dolores quod nisi vitae voluptate ipsa?
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="border-2 border-blue-950 p-2 rounded-full w-24 h-24 flex items-center justify-center">
              <Image width={80} height={80} src="/w2.png" alt="secure" />
            </div>
            <h2 className="font-bold text-xl mt-4">Secure Investment</h2>
            <p className="mt-2 text-sm leading-6 text-gray-700 max-w-xl">
              Incidunt odit rerum tenetur alias architecto asperiores omnis
              cumque doloribus aperiam numquam! Eligendi corrupti, molestias
              laborum dolores quod nisi vitae voluptate ipsa?
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="border-2 border-blue-950 p-2 rounded-full w-24 h-24 flex items-center justify-center">
              <Image width={80} height={80} src="/w3.png" alt="instant" />
            </div>
            <h2 className="font-bold text-xl mt-4">Instant Trading</h2>
            <p className="mt-2 text-sm leading-6 text-gray-700 max-w-xl">
              Incidunt odit rerum tenetur alias architecto asperiores omnis
              cumque doloribus aperiam numquam! Eligendi corrupti, molestias
              laborum dolores quod nisi vitae voluptate ipsa?
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="border-2 border-blue-950 p-2 rounded-full w-24 h-24 flex items-center justify-center">
              <Image width={80} height={80} src="/w4.png" alt="happy" />
            </div>
            <h2 className="font-bold text-xl mt-4">Happy Customers</h2>
            <p className="mt-2 text-sm leading-6 text-gray-700 max-w-xl">
              Incidunt odit rerum tenetur alias architecto asperiores omnis
              cumque doloribus aperiam numquam! Eligendi corrupti, molestias
              laborum dolores quod nisi vitae voluptate ipsa?
            </p>
          </motion.div>
        </div>
      </div>

      <div id="team" className="bg-[#0a1a3a] py-16 sm:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-white">
            Our <span className="text-cyan-400">Team</span>
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <motion.div
              className="bg-[#0d2249] rounded-lg p-6 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white">
                <Image
                  src="/team-1.jpg"
                  alt="Joseph Brown"
                  width={112}
                  height={112}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-cyan-400">
                Joseph Brown
              </h3>
              <p className="text-sm text-gray-300">Marketing Head</p>
              <div className="mt-4 flex gap-3 text-white/70">
                <a href="#" className="hover:text-cyan-400 transition">
                  <FaFacebookF size={16} />
                </a>
                <a href="#" className="hover:text-cyan-400 transition">
                  <FaTwitter size={16} />
                </a>
                <a href="#" className="hover:text-cyan-400 transition">
                  <FaLinkedinIn size={16} />
                </a>
                <a href="#" className="hover:text-cyan-400 transition">
                  <FaInstagram size={16} />
                </a>
                <a href="#" className="hover:text-cyan-400 transition">
                  <FaYoutube size={16} />
                </a>
              </div>
            </motion.div>
            <motion.div
              className="bg-[#0d2249] rounded-lg p-6 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white">
                <Image
                  src="/team-2.jpg"
                  alt="Nancy White"
                  width={112}
                  height={112}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-cyan-400">
                Nancy White
              </h3>
              <p className="text-sm text-gray-300">Marketing Head</p>
              <div className="mt-4 flex gap-3 text-white/70">
                <a href="#" className="hover:text-cyan-400 transition">
                  <FaFacebookF size={16} />
                </a>
                <a href="#" className="hover:text-cyan-400 transition">
                  <FaTwitter size={16} />
                </a>
                <a href="#" className="hover:text-cyan-400 transition">
                  <FaLinkedinIn size={16} />
                </a>
                <a href="#" className="hover:text-cyan-400 transition">
                  <FaInstagram size={16} />
                </a>
                <a href="#" className="hover:text-cyan-400 transition">
                  <FaYoutube size={16} />
                </a>
              </div>
            </motion.div>
            <motion.div
              className="bg-[#0d2249] rounded-lg p-6 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white">
                <Image
                  src="/team-3.jpg"
                  alt="Earl Martinez"
                  width={112}
                  height={112}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-cyan-400">
                Earl Martinez
              </h3>
              <p className="text-sm text-gray-300">Marketing Head</p>
              <div className="mt-4 flex gap-3 text-white/70">
                <a href="#" className="hover:text-cyan-400 transition">
                  <FaFacebookF size={16} />
                </a>
                <a href="#" className="hover:text-cyan-400 transition">
                  <FaTwitter size={16} />
                </a>
                <a href="#" className="hover:text-cyan-400 transition">
                  <FaLinkedinIn size={16} />
                </a>
                <a href="#" className="hover:text-cyan-400 transition">
                  <FaInstagram size={16} />
                </a>
                <a href="#" className="hover:text-cyan-400 transition">
                  <FaYoutube size={16} />
                </a>
              </div>
            </motion.div>
            <motion.div
              className="bg-[#0d2249] rounded-lg p-6 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white">
                <Image
                  src="/team-4.jpg"
                  alt="Josephine Allard"
                  width={112}
                  height={112}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-cyan-400">
                Josephine Allard
              </h3>
              <p className="text-sm text-gray-300">Marketing Head</p>
              <div className="mt-4 flex gap-3 text-white/70">
                <a href="#" className="hover:text-cyan-400 transition">
                  <FaFacebookF size={16} />
                </a>
                <a href="#" className="hover:text-cyan-400 transition">
                  <FaTwitter size={16} />
                </a>
                <a href="#" className="hover:text-cyan-400 transition">
                  <FaLinkedinIn size={16} />
                </a>
                <a href="#" className="hover:text-cyan-400 transition">
                  <FaInstagram size={16} />
                </a>
                <a href="#" className="hover:text-cyan-400 transition">
                  <FaYoutube size={16} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="py-16 sm:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl sm:text-4xl font-bold">
            What says our <span className="text-cyan-500">Customers</span>
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <motion.div
              className="relative bg-white rounded-lg shadow-md p-6 pt-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute -top-8 left-6 w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow">
                <Image
                  src="/client1.jpg"
                  alt="Zen Court"
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute top-4 right-6 text-3xl text-gray-300 font-serif">
                “
              </div>
              <h3 className="font-bold text-lg text-indigo-950">Zen Court</h3>
              <p className="text-sm text-gray-500">magna aliqua. Ut</p>
              <p className="mt-3 text-sm leading-6 text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis
              </p>
            </motion.div>
            <motion.div
              className="relative bg-white rounded-lg shadow-md p-6 pt-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="absolute -top-8 left-6 w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow">
                <Image
                  src="/client2.jpg"
                  alt="LusDen"
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute top-4 right-6 text-3xl text-gray-300 font-serif">
                “
              </div>
              <h3 className="font-bold text-lg text-indigo-950">LusDen</h3>
              <p className="text-sm text-gray-500">magna aliqua. Ut</p>
              <p className="mt-3 text-sm leading-6 text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis
              </p>
            </motion.div>
          </div>
          <div className="mt-10 flex justify-center gap-2">
            <button className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 transition">
              <FaChevronLeft size={18} />
            </button>
            <button className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 transition">
              <FaChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#0a1a3a] text-white pt-14 pb-6 px-6">
        <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-5">Address</h3>
            <div className="flex items-start gap-3 mb-3 text-sm text-gray-300">
              <FaMapMarkerAlt size={16} className="mt-0.5 shrink-0" />
              <span>Location</span>
            </div>
            <div className="flex items-start gap-3 mb-3 text-sm text-gray-300">
              <FaPhone size={16} className="mt-0.5 shrink-0" />
              <span>Call +01 1234567890</span>
            </div>
            <div className="flex items-start gap-3 mb-5 text-sm text-gray-300">
              <FaEnvelope size={16} className="mt-0.5 shrink-0" />
              <span>demo@gmail.com</span>
            </div>
            <div className="flex gap-4 text-white/80">
              <a href="#" className="hover:text-cyan-400 transition">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="hover:text-cyan-400 transition">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="hover:text-cyan-400 transition">
                <FaLinkedinIn size={18} />
              </a>
              <a href="#" className="hover:text-cyan-400 transition">
                <FaInstagram size={18} />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-5">Info</h3>
            <p className="text-sm leading-6 text-gray-300">
              necessary, making this the first true generator on the Internet.
              It uses a dictionary of over 200 Latin words, combined with a
              handful
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-5">Links</h3>
            <div className="flex flex-col gap-2 text-sm text-gray-300">
              <a href="#" className="hover:text-cyan-400 transition">
                Home
              </a>
              <a href="#about" className="hover:text-cyan-400 transition">
                About
              </a>
              <a href="#services" className="hover:text-cyan-400 transition">
                Services
              </a>
              <a href="#why-us" className="hover:text-cyan-400 transition">
                Why Us
              </a>
              <a href="#team" className="hover:text-cyan-400 transition">
                Team
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-5">Subscribe</h3>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter email"
                className="bg-transparent border-b border-gray-500 py-2 text-sm text-white placeholder-gray-400 outline-none focus:border-cyan-400 transition"
              />
              <button className="bg-cyan-500 hover:bg-cyan-400 transition text-white font-semibold py-2.5 mt-2">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/10 text-center text-sm text-gray-400">
          © 2026 All Rights Reserved By Free Html Templates
        </div>
      </div>
    </div>
  );
}
