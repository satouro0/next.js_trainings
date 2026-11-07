"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const teamMembers = [
  {
    id: 1,
    name: "Ragnar Lodbrok",
    role: "Product Caretaker",
    image: "/team-member-01.jpg",
  },
  {
    id: 2,
    name: "Ragnar Lodbrok",
    role: "Product Caretaker",
    image: "/team-member-02.jpg",
  },
  {
    id: 3,
    name: "Ragnar Lodbrok",
    role: "Product Caretaker",
    image: "/team-member-03.jpg",
  },
];

export default function Hexa_about_team() {
  return (
    <section className="border-b border-dashed border-neutral-200 bg-white px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center sm:mb-14"
        >
          <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">
            Our Amazing Team
          </h2>

          <p className="mt-3 text-xs italic leading-5 text-neutral-400 sm:text-sm">
            Details to details is what makes Hexashop different from the other themes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {teamMembers.map((member, index) => (
            <motion.article
              key={member.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group text-center"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-neutral-100">
                {member.image && (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}

                <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/40 group-hover:opacity-100">
                  <span className="text-sm font-semibold text-white">
                    Meet Our Team
                  </span>
                </div>
              </div>

              <h3 className="mt-5 text-lg font-bold text-neutral-900 sm:text-xl">
                {member.name}
              </h3>

              <p className="mt-1 text-xs italic text-neutral-400 sm:text-sm">
                {member.role}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}