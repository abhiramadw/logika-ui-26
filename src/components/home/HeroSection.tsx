"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden min-h-[65dvh] md:min-h-screen flex items-start pt-20 md:items-center md:pt-0 pb-0">
      {/* Glow lembut sebelumnya sudah dihapus agar menyatu dengan MeshGradientBackground utama */}

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        {/* Teks kiri/tengah */}
        <motion.div
          className="w-full md:w-auto max-w-2xl flex flex-col gap-4 relative z-10 text-center md:text-left items-center md:items-start mx-auto md:mx-0"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className="font-black leading-none tracking-tight">
            <span className="block whitespace-normal sm:whitespace-nowrap text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-brown-dark">
              LOGIKA UI
            </span>
            <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-brown-dark">
              2026
            </span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl italic text-brown font-medium leading-relaxed">
            Exploring Mathematics,<br />
            Revealing The Unknowns.
          </p>
        </motion.div>
      </div>

      {/* Maskot Nero — Mobile Version (Muncuk dari bawah, tegak) */}
      <motion.div
        className="absolute z-0 w-[280px] h-[280px] md:hidden 
          left-1/2 -translate-x-1/2 bottom-[10px]"
        style={{ transformOrigin: "bottom center" }}
        initial={{ opacity: 0, scale: 0.8, y: 100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          type: "spring",
          stiffness: 100,
          damping: 15,
        }}
      >
        <Image
          src="/images/NERO.png"
          alt="Nero - Maskot LOGIKA UI 2026"
          fill
          sizes="280px"
          className="object-contain object-bottom"
          priority
        />
      </motion.div>

      {/* Maskot Nero — Desktop Version (Posisi original, miring, dari kanan) */}
      <motion.div
        className="absolute z-0 hidden md:block md:w-[450px] md:h-[450px] lg:w-[1000px] lg:h-[1000px] 
          md:-right-[100px] lg:-right-[350px] md:-bottom-[50px] lg:-bottom-[150px]"
        style={{ transformOrigin: "bottom center" }}
        initial={{ opacity: 0, scale: 0.8, x: 200, rotate: -25 }}
        animate={{ opacity: 1, scale: 1, x: 0, rotate: -25 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          type: "spring",
          stiffness: 100,
          damping: 15,
        }}
      >
        <Image
          src="/images/NERO.png"
          alt="Nero - Maskot LOGIKA UI 2026"
          fill
          sizes="(max-width: 1024px) 450px, 1000px"
          className="object-contain object-right-top"
          priority
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;