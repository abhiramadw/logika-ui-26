"use client";

import React from "react";
import { usePathname } from "next/navigation";

const MeshGradientBackground = ({ children }: { children?: React.ReactNode }) => {
  const pathname = usePathname();
  const isCompetitionPage = pathname?.startsWith("/competitions");
  
  const bgImage = isCompetitionPage 
    ? "url('/images/BACKGROUND COMP PAGE.webp')" 
    : "url('/images/homepage.webp')";

  return (
    <div
      className="relative min-h-screen w-full"
      style={{
        // Menggunakan gambar webp bawaan desainer sebagai background utama
        backgroundImage: bgImage,
        backgroundRepeat: "no-repeat",
        // Menggunakan "cover" agar gambar ter-scale menutupi seluruh tinggi halaman (sampai footer)
        backgroundSize: "cover", 
        backgroundPosition: "top center",
        // Menambahkan warna fallback (emas sangat terang) jika gambar belum ter-load 
        // atau jika konten lebih panjang dari gambar
        backgroundColor: "#FFFDF5", 
      }}
    >
      {/* ─── MAIN CONTENT ─── */}
      <div className="relative z-10 w-full flex flex-col min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default MeshGradientBackground;
