import React from "react";

const MeshGradientBackground = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div
      className="relative min-h-screen w-full overflow-x-hidden"
      style={{
        // PERBAIKAN: Warna 70% dan 100% diterangkan menjadi warna emas pastel/krem yang jauh lebih soft
        background: "linear-gradient(to bottom, #FFFDF5 0%, #FDF5DB 30%, #F6E6B9 70%, #ECD599 100%)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* SVG Noise Filter */}
      <svg className="hidden">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
        </filter>
      </svg>

      {/* ─── FLOATING AMBIENT ORBS ─── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {/* Orb 1: Sisi Kanan Atas */}
        <div
          className="absolute top-[5%] -right-[10%] w-[600px] h-[600px] rounded-full opacity-60 blur-[130px]"
          style={{ background: "radial-gradient(circle, #FFEAA7 0%, transparent 70%)" }}
        />

        {/* Orb 2: Sisi Kiri Tengah (Warna diterangkan & opacity diturunkan sedikit) */}
        <div
          className="absolute top-[45%] -left-[10%] w-[700px] h-[700px] rounded-full opacity-40 blur-[150px]"
          style={{ background: "radial-gradient(circle, #E3BC7A 0%, transparent 70%)" }}
        />

        {/* Orb 3: Sisi Bawah Tengah/Kanan (Warna jauh lebih terang & soft untuk area Footer) */}
        <div
          className="absolute bottom-[-5%] right-[10%] w-[800px] h-[800px] rounded-full opacity-30 blur-[150px]"
          style={{ background: "radial-gradient(circle, #D9AE5C 0%, transparent 70%)" }}
        />

        {/* Grain tekstur (opacity diturunkan sedikit agar lebih bersih) */}
        <div
          className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
          style={{ filter: "url(#noiseFilter)" }}
        ></div>
      </div>

      {/* Konten Utama */}
      <div className="relative z-10 w-full flex flex-col min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default MeshGradientBackground;
