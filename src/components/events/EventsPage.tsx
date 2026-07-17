import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
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

const highlightBoxStyle: CSSProperties = {
  background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(222,142,82,0.215) 100%)",
  border: "1px solid rgba(134,0,0,0.215)",
  boxShadow: "2px 2px 6px rgba(0,0,0,0.2)",
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

type PhotoCollageProps = {
  eventLabel: string;
};

const PhotoCollage = ({ eventLabel }: PhotoCollageProps) => {
  const placeholderClass =
    "relative rounded-xl overflow-hidden border border-black/10 bg-neutral-300 flex items-center justify-center text-center px-2";

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-3 w-full max-w-sm mx-auto md:mx-0">
      <div className={`${placeholderClass} row-span-2 aspect-[3/4]`}>
        <span className="text-xs sm:text-sm font-semibold text-neutral-600">
          FOTO {eventLabel} 1
        </span>
      </div>
      <div className={`${placeholderClass} aspect-square`}>
        <span className="text-xs sm:text-sm font-semibold text-neutral-600">
          FOTO {eventLabel} 2
        </span>
      </div>
      <div className={`${placeholderClass} aspect-square`}>
        <span className="text-xs sm:text-sm font-semibold text-neutral-600">
          FOTO {eventLabel} 3
        </span>
      </div>
    </div>
  );
};

const highlights: { title: string; desc: string }[] = [
  {
    title: "Tur Departemen",
    desc: "Peserta diajak menjelajahi Departemen Matematika FMIPA UI melalui tur interaktif dengan kuis dan games menarik untuk mengenal lebih dekat lingkungan perkuliahan, fasilitas, serta kehidupan akademik sebagai mahasiswa Matematika, Statistika, atau Ilmu Aktuaria UI.",
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
    desc: "Seminar inspiratif yang menghadirkan dosen dan alumni Departemen Matematika FMIPA UI untuk membahas profil departemen, kurikulum, fasilitas departemen, peluang karir, serta pengalaman akademik dan profesional di bidang Matematika, Statistika, atau Ilmu Aktuaria.",
  },
];

const EventsPage = () => {
  return (
    <div className="min-h-screen font-montserrat text-brown-dark pt-24 pb-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

        {/* HERO SECTION */}
        <section className="text-center py-8 md:py-12">
          <h1
            className="font-serif italic font-bold text-6xl sm:text-7xl md:text-8xl"
            style={titleGradientStyle}
          >
            Events
          </h1>
        </section>

        {/* MATHVENTURE SECTION */}
        <section className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-5 w-full">
            <h2
              className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl"
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
                Aula Prof. Dr. Ir. Soemantri Brodjonegoro FMIPA UI dan Gedung D
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
              <Link href="#" style={btnStyle}>
                REGISTER FOR FREE <Plus size={12} />
              </Link>
              <Link href="#" style={btnStyle}>
                CHECK OUR POSTER <ArrowRight size={12} />
              </Link>
            </div>
          </div>
          <div className="flex-1 w-full flex justify-center md:justify-end">
            <PhotoCollage eventLabel="MATHVENTURE" />
          </div>
        </section>

        {/* EVENT HIGHLIGHTS SECTION */}
        <section className="space-y-10">
          <h2
            className="text-center font-serif font-bold text-4xl sm:text-5xl md:text-6xl"
            style={titleGradientStyle}
          >
            Event Highlights
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item) => (
              <div key={item.title} className="rounded-xl p-6 space-y-2" style={highlightBoxStyle}>
                <h3 className="font-serif font-bold text-lg text-brown-dark">
                  {item.title}
                </h3>
                <p className="text-sm text-brown text-justify leading-relaxed">
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
              className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl"
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
              <Link href="#" style={btnStyle}>
                REGISTER FOR FREE & OPEN FOR OTS SALE <Plus size={12} />
              </Link>
            </div>
          </div>
          <div className="flex-1 w-full flex justify-center md:justify-end">
            <PhotoCollage eventLabel="CAMPUS TOUR" />
          </div>
        </section>

        {/* LOGITALKS SECTION */}
        <section className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-5 w-full">
            <h2
              className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl"
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
              <Link href="#" style={btnStyle}>
                REGISTER FOR FREE & OPEN FOR OTS SALE <Plus size={12} />
              </Link>
            </div>
          </div>
          <div className="flex-1 w-full flex justify-center md:justify-end">
            <PhotoCollage eventLabel="LOGITALKS" />
          </div>
        </section>

      </div>
    </div>
  );
};

export default EventsPage;
