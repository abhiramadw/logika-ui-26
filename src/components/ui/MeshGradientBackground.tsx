"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MeshGradientBackground = ({ children }: { children?: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#FCF8E8]">
      {/* 
        SVG Noise Filter 
        We use an inline SVG to create the grainy texture which makes the gradient look premium and complex.
      */}
      <svg className="hidden">
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
      </svg>

      {/* The Animated Mesh Gradient Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* We use CSS custom animations and mix-blend modes if needed, or simply radial gradients */}
        {/* Soft, silk-like wavy gradients on the left and bottom */}
        <div className="absolute top-[-10%] left-[-20%] w-[100%] h-[120%] opacity-70"
          style={{
            backgroundImage: `
              radial-gradient(ellipse at 20% 50%, rgba(245, 230, 200, 0.6) 0%, transparent 60%),
              radial-gradient(ellipse at 50% 80%, rgba(250, 235, 215, 0.8) 0%, transparent 70%),
              radial-gradient(ellipse at 0% 100%, rgba(235, 215, 185, 0.7) 0%, transparent 60%),
              radial-gradient(ellipse at 30% 10%, rgba(255, 250, 240, 0.9) 0%, transparent 50%)
            `,
            filter: "blur(50px)",
            animation: mounted ? "mesh-movement 25s ease-in-out infinite alternate" : "none",
          }}
        ></div>

        {/* Floating Glowing Orbs to enhance the gradient effect */}
        {mounted && (
          <>
            {/* Top Right Orb */}
            <motion.div
              className="absolute top-[10%] right-[20%] w-[300px] h-[300px] rounded-full bg-[#fca5a5] opacity-30 mix-blend-multiply blur-[80px]"
              animate={{
                x: [0, 50, -20, 0],
                y: [0, -30, 40, 0],
                scale: [1, 1.2, 0.9, 1],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Bottom Left Orb */}
            <motion.div
              className="absolute top-[40%] left-[10%] w-[400px] h-[400px] rounded-full bg-[#fbbf24] opacity-40 mix-blend-multiply blur-[100px]"
              animate={{
                x: [0, -40, 30, 0],
                y: [0, 50, -20, 0],
                scale: [1, 0.8, 1.1, 1],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            />
            {/* Center Orb */}
            <motion.div
              className="absolute top-[60%] right-[30%] w-[250px] h-[250px] rounded-full bg-[#fcd34d] opacity-40 mix-blend-multiply blur-[70px]"
              animate={{
                x: [0, 30, -50, 0],
                y: [0, -40, 20, 0],
                scale: [1, 1.3, 0.8, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 5,
              }}
            />
          </>
        )}

        {/* Distinct vertical peach/orange streaks on the right, matching the image exactly */}
        <div className="absolute top-0 right-0 w-[40%] h-full flex justify-end opacity-80 pointer-events-none mix-blend-multiply" style={{ transform: "skewX(-5deg)" }}>
          {/* Streaks of varying opacity and color to simulate folded silk/light */}
          <div className="w-[15%] h-full bg-gradient-to-r from-transparent via-[rgba(240,215,190,0.4)] to-transparent blur-[10px]"></div>
          <div className="w-[20%] h-full bg-gradient-to-r from-transparent via-[rgba(235,205,175,0.5)] to-transparent blur-[15px]"></div>
          <div className="w-[25%] h-full bg-gradient-to-r from-transparent via-[rgba(245,225,200,0.6)] to-transparent blur-[20px] mr-[5%]"></div>
          <div className="w-[20%] h-full bg-gradient-to-r from-transparent via-[rgba(230,200,165,0.5)] to-transparent blur-[12px] mr-[2%]"></div>
        </div>

        {/* Noise overlay - tweaked frequency for finer grain, opacity reduced for less intense sand effect */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.25] mix-blend-overlay"
          style={{ filter: "url(#noiseFilter)" }}
        ></div>

        {/* Bottom fade to blend perfectly with the footer's top color (#f7e8c3) */}
        <div className="absolute bottom-0 left-0 w-full h-[400px] bg-gradient-to-t from-[#f7e8c3] via-[rgba(247,232,195,0.7)] to-transparent pointer-events-none"></div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes mesh-movement {
          0% { transform: scale(1) translate(0, 0) rotate(0deg); }
          33% { transform: scale(1.1) translate(2%, 2%) rotate(1deg); }
          66% { transform: scale(1.05) translate(-2%, 4%) rotate(-1deg); }
          100% { transform: scale(1) translate(0, 0) rotate(0deg); }
        }
      `}} />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default MeshGradientBackground;
