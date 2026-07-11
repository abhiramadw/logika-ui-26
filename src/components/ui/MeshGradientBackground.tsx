"use client";

import React from "react";

const MeshGradientBackground = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div
      className="relative min-h-screen w-full"
      style={{
        // Menggunakan gambar webp bawaan desainer sebagai background utama
        backgroundImage: "url('/images/homepage.webp')",
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
