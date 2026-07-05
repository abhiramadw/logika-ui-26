"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      className="relative overflow-hidden min-h-screen flex items-center"
      style={{
        background:
          "linear-gradient(to right, #fffdf5 0%, #FFF7D2 40%, #f5e9c8 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        {/* Teks kiri */}
        <motion.div
          className="max-w-2xl flex flex-col gap-4"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className="font-black leading-none tracking-tight">
            <span className="block whitespace-nowrap text-6xl lg:text-7xl xl:text-8xl text-brown-dark">
              LOGIKA UI
            </span>
            <span className="block text-6xl lg:text-7xl xl:text-8xl text-brown-dark">
              2026
            </span>
          </h1>
          <p className="text-2xl lg:text-3xl xl:text-4xl italic text-brown font-medium leading-relaxed">
            Exploring Mathematics,<br />
            Revealing The Unknowns.
          </p>
        </motion.div>
      </div>

      {/* Maskot Nero — hidden di mobile */}
      <motion.div
        className="absolute hidden md:block right-0 bottom-0 w-[500px] h-[500px] lg:w-[680px] lg:h-[680px]"
        style={{ right: "-40px", bottom: "-20px" }}
        initial={{ opacity: 0, scale: 0.5, y: 60 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.3,
          type: "spring",
          stiffness: 120,
        }}
      >
        <Image
          src="/images/NERO.png"
          alt="Nero - Maskot LOGIKA UI 2026"
          fill
          className="object-contain object-right-top"
          priority
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
