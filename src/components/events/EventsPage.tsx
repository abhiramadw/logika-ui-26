"use client";

import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, User, Plus, ArrowRight } from "lucide-react";

const titleGradientStyle = {
  background: "linear-gradient(135deg, #5d2009, #942e08, #864705)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
} as const;

const descGradientStyle = {
  background: "radial-gradient(circle at 0% 0%, #330e00, #73410d, #330e00)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
} as const;

const btnStyle: CSSProperties = {
  background: "radial-gradient(circle at 50% 50%, #bd3c0c, #330e00)",
  border: "1px solid #e3b05c",
  boxShadow: "0 0 12px rgba(189,60,12,0.6), 0 0 24px rgba(189,60,12,0.3)",
  borderRadius: "8px",
  padding: "8px 14px",
  color: "#faf5e2",
  fontFamily: "inherit",
  fontSize: "12px",
  fontWeight: "bold",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "4px",
};

const btnDisabledStyle: CSSProperties = {
  background: "linear-gradient(135deg, #9c9186, #78716c)",
  border: "1px solid #e3b05c",
  borderRadius: "8px",
  padding: "8px 14px",
  color: "#faf5e2",
  fontFamily: "inherit",
  fontSize: "12px",
  fontWeight: "bold",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  cursor: "not-allowed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "4px",
};

const highlightBoxStyle: CSSProperties = {
  background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(222,142,82,0.215) 100%)",
  border: "1px solid rgba(134,0,0,0.215)",
  borderRadius: "16px",
  boxShadow: "0 0 14px rgba(134,0,0,0.15)",
};

const highlightTitleGradientStyle: CSSProperties = {
  background: "linear-gradient(135deg, #330e00, #73410d, #330e00)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  filter: "drop-shadow(2px 2px 4px rgba(51,14,0,0.55))",
};

const highlightDescGradientStyle: CSSProperties = {
  background: "linear-gradient(135deg, #330e00, #73410d, #330e00)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

type InfoLineProps = {
  icon: ReactNode;
  children: ReactNode;
};

const InfoLine = ({ icon, children }: InfoLineProps) => (
  <div className="flex items-start gap-2">
    <span className="text-red-dark shrink-0 mt-0.5">{icon}</span>
    <span className="text-sm md:text-base text-brown font-medium">{children}</span>
  </div>
);

type PhotoItem = {
  src: string;
  alt: string;
};

type PhotoCollageProps = {
  eventLabel: string;
  photos?: PhotoItem[];
};

const PhotoCollage = ({ eventLabel, photos = [] }: PhotoCollageProps) => {
  const frameClass = "relative rounded-xl overflow-hidden border border-black/10";

  const renderSlot = (index: number, sizeClass: string) => {
    const photo = photos[index];

    return (
      <div className={`${frameClass} ${sizeClass}`}>
        {photo ? (
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="400px"
            quality={90}
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-neutral-300 flex items-center justify-center text-center px-2">
            <span className="text-xs sm:text-sm font-semibold text-neutral-600">
              FOTO {eventLabel} {index + 1}
            </span>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-3 w-full max-w-sm mx-auto md:mx-0">
      {renderSlot(0, "row-span-2 aspect-[3/4]")}
      {renderSlot(1, "aspect-square")}
      {renderSlot(2, "aspect-square")}
    </div>
  );
};

const highlights: { title: string; desc: string }[] = [
  {
    title: "Tur Departemen",
    desc: "Peserta diajak menjelajahi Departemen Matematika FMIPA UI melalui tur interaktif dengan kuis dan games menarik untuk mengenal lebih dekat lingkungan perkuliahan, fasilitas, serta kehidupan akademik sebagai mahasiswa matematika, statistika, dan ilmu aktuaria UI.",
  },
  {
    title: "Simulasi Kelas",
    desc: "Peserta merasakan pengalaman belajar layaknya mahasiswa Departemen Matematika FMIPA UI melalui sesi perkuliahan yang dipandu oleh asisten dosen secara interaktif sehingga memperoleh gambaran mengenai metode pembelajaran dan suasana kelas di perguruan tinggi.",
  },
  {
    title: "Mentoring",
    desc: "Sesi sharing session antara peserta MathVenture dengan mahasiswa Departemen Matematika FMIPA UI dalam berbagai pengalaman seputar kehidupan perkuliahan, organisasi, tips beradaptasi di dunia kampus, serta prospek studi dan karier.",
  },
  {
    title: "Math Talks",
    desc: "Seminar inspiratif yang menghadirkan dosen dan alumni Departemen Matematika FMIPA UI untuk membahas profil departemen, kurikulum, fasilitas departemen, peluang karir, serta pengalaman akademik dan profesional di bidang matematika, statistika, dan ilmu aktuaria.",
  },
];

const EventsPage = () => {
  return (
    <div className="min-h-screen font-montserrat text-brown-dark pt-24 pb-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

        {/* HERO SECTION */}
        <section className="relative py-20 md:py-32 flex flex-col md:flex-row items-center justify-center md:justify-start min-h-[50dvh] md:min-h-[70dvh]">
          <h1
            className="font-serif italic font-bold text-7xl sm:text-8xl md:text-9xl lg:text-[120px] xl:text-[150px] relative z-10 text-center md:text-left w-full mb-[280px] md:mb-0"
            style={titleGradientStyle}
          >
            Events
          </h1>

          {/* Maskot Nero — Mobile Version */}
          <motion.div
            className="absolute z-0 w-[380px] h-[380px] sm:w-[350px] sm:h-[350px] md:hidden 
              left-1/2 -translate-x-1/2 -bottom-[30px]"
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
              sizes="380px"
              className="object-contain object-bottom"
              priority
            />
          </motion.div>

          {/* Maskot Nero — Desktop Version */}
          <motion.div
            className="absolute z-0 hidden md:block md:w-[450px] md:h-[450px] lg:w-[850px] lg:h-[850px] 
              md:-right-[100px] lg:-right-[400px] md:-bottom-[150px] lg:-bottom-[200px]"
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
              sizes="(max-width: 1024px) 450px, 850px"
              className="object-contain object-right-top"
              priority
            />
          </motion.div>
        </section>

        {/* MATHVENTURE SECTION */}
        <section className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-5 w-full">
            <h2
              className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl text-center md:text-left"
              style={titleGradientStyle}
            >
              MathVenture
            </h2>
            <p className="text-base md:text-lg text-justify leading-relaxed" style={descGradientStyle}>
              Pre-event LOGIKA UI 2026 yang menghadirkan pengalaman eksplorasi
              interaktif di Departemen Matematika FMIPA UI melalui berbagai
              kegiatan yang menarik untuk mengenal lebih dekat dunia
              perkuliahan Matematika dari perspektif mahasiswa, alumni, dan
              dosen.
            </p>
            <div className="space-y-2">
              <InfoLine icon={<Calendar size={18} />}>
                Sabtu, 29 Agustus 2026 | 09.00–selesai
              </InfoLine>
              <InfoLine icon={<MapPin size={18} />}>
                Aula Prof. Dr. Soemantri Brodjonegoro FMIPA UI dan Gedung D
                FMIPA UI
              </InfoLine>
              <p className="font-bold text-brown-dark pt-2">Periode Registrasi</p>
              <InfoLine icon={<Calendar size={18} />}>
                3 Agustus s.d. 29 Agustus 2026
              </InfoLine>
              <p className="text-sm md:text-base font-semibold text-brown-dark pt-1">
                Terbuka untuk siswa/i SMA/sederajat, mahasiswa, dan umum secara
                GRATIS
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <button type="button" disabled aria-disabled="true" style={btnDisabledStyle} className="cursor-not-allowed">
                REGISTER FOR FREE <Plus size={12} />
              </button>
              <button type="button" disabled aria-disabled="true" style={btnDisabledStyle} className="cursor-not-allowed">
                CHECK OUR POSTER <ArrowRight size={12} />
              </button>
            </div>
          </div>
          <div className="flex-1 w-full flex justify-center md:justify-end">
            <PhotoCollage
              eventLabel="MATHVENTURE"
              photos={[
                { src: "/images/MathVenture_1.jpg", alt: "Peserta bertanya menggunakan mikrofon pada sesi MathVenture LOGIKA UI" },
                { src: "/images/MathVenture_2.jpg", alt: "Panitia memaparkan materi kepada peserta MathVenture LOGIKA UI" },
                { src: "/images/MathVenture_3.jpg", alt: "Sesi diskusi kelompok peserta MathVenture LOGIKA UI" },
              ]}
            />
          </div>
        </section>

        {/* EVENT HIGHLIGHTS SECTION */}
        <section className="space-y-10 pt-10 md:pt-4">
          <h2
            className="text-center font-serif font-bold text-4xl sm:text-5xl md:text-6xl"
            style={titleGradientStyle}
          >
            Event Highlights
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item) => (
              <div key={item.title} className="p-6 space-y-2" style={highlightBoxStyle}>
                <h3 className="font-serif font-bold text-xl md:text-2xl text-center italic" style={highlightTitleGradientStyle}>
                  {item.title}
                </h3>
                <p className="text-sm text-justify leading-relaxed" style={highlightDescGradientStyle}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CAMPUS TOUR SECTION */}
        <section className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-5 w-full">
            <h2
              className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl text-center md:text-left"
              style={titleGradientStyle}
            >
              Campus Tour
            </h2>
            <p className="text-base md:text-lg text-justify leading-relaxed" style={descGradientStyle}>
              Rangkaian kegiatan Main Event LOGIKA UI 2026 yang mengajak
              peserta untuk berkeliling menggunakan bis kuning di Universitas
              Indonesia untuk memperkenalkan peserta terkait lingkungan kampus
              serta gambaran seputar budaya keseharian mahasiswa UI.
            </p>
            <div className="space-y-2">
              <InfoLine icon={<Calendar size={18} />}>
                Minggu, 22 November 2026
              </InfoLine>
              <InfoLine icon={<Clock size={18} />}>
                08.30–selesai | 3 sesi
              </InfoLine>
              <InfoLine icon={<MapPin size={18} />}>
                Halte Bus Kuning FMIPA UI
              </InfoLine>
              <p className="font-bold text-brown-dark pt-2">Periode Registrasi</p>
              <InfoLine icon={<Calendar size={18} />}>
                Stay tuned on our instagram for more info!
              </InfoLine>
              <p className="text-sm md:text-base font-semibold text-brown-dark pt-1">
                Terbuka untuk siswa/i SMA/sederajat, mahasiswa, dan umum secara
                GRATIS
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <button type="button" disabled aria-disabled="true" style={btnDisabledStyle} className="cursor-not-allowed">
                REGISTER FOR FREE & OPEN FOR OTS SALE <Plus size={12} />
              </button>
            </div>
          </div>
          <div className="flex-1 w-full flex justify-center md:justify-end">
            <PhotoCollage
              eventLabel="CAMPUS TOUR"
              photos={[
                { src: "/images/CampusTour_1.jpg", alt: "Peserta berpose di depan Gedung Rektorat Universitas Indonesia saat Campus Tour LOGIKA UI" },
                { src: "/images/CampusTour_2.jpg", alt: "Peserta Campus Tour LOGIKA UI berfoto di depan tulisan UI Graduation" },
                { src: "/images/CampusTour_3.jpg", alt: "Rombongan peserta Campus Tour LOGIKA UI di dalam bis kuning (bikun) UI" },
              ]}
            />
          </div>
        </section>

        {/* LOGITALKS SECTION */}
        <section className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-5 w-full">
            <h2
              className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl text-center md:text-left"
              style={titleGradientStyle}
            >
              LogiTalks
            </h2>
            <p className="text-base md:text-lg text-justify leading-relaxed" style={descGradientStyle}>
              Rangkaian kegiatan Main Event LOGIKA UI 2026 yang menghadirkan
              talkshow bersama pembicara inspiratif seputar matematika dan
              pengembangan diri guna memperluas wawasan serta mengembangkan
              pola pikir adaptif dalam penerapan matematika ke keseharian
              hidup.
            </p>
            <div className="space-y-2">
              <InfoLine icon={<Calendar size={18} />}>
                Minggu, 22 November 2026
              </InfoLine>
              <InfoLine icon={<User size={18} />}>
                Guest speaker will be revealed soon
              </InfoLine>
              <p className="font-bold text-brown-dark pt-2">Periode Registrasi</p>
              <InfoLine icon={<Calendar size={18} />}>
                Stay tuned on our instagram for more info!
              </InfoLine>
              <p className="text-sm md:text-base font-semibold text-brown-dark pt-1">
                Terbuka untuk siswa/i SMA/sederajat, mahasiswa, dan umum secara
                GRATIS
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <button type="button" disabled aria-disabled="true" style={btnDisabledStyle} className="cursor-not-allowed">
                REGISTER FOR FREE & OPEN FOR OTS SALE <Plus size={12} />
              </button>
            </div>
          </div>
          <div className="flex-1 w-full flex justify-center md:justify-end">
            <PhotoCollage
              eventLabel="LOGITALKS"
              photos={[
                { src: "/images/LogiTalks_1.jpg", alt: "Peserta bertanya menggunakan mikrofon pada sesi LogiTalks LOGIKA UI" },
                { src: "/images/LogiTalks_2.jpg", alt: "Pembicara memaparkan materi pada sesi LogiTalks LOGIKA UI" },
                { src: "/images/LogiTalks_3.jpg", alt: "Suasana audiens memenuhi ruangan pada sesi LogiTalks LOGIKA UI" },
              ]}
            />
          </div>
        </section>

      </div>
    </div>
  );
};

export default EventsPage;
