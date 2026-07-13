"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type CSSProperties, type ReactElement } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowRight } from "lucide-react";

type TimelineCell = {
  event: string;
  date: string;
  colSpan?: number;
};

const accTimelineRows: TimelineCell[][] = [
  [
    { event: "Early Bird Registration", date: "13 - 23 Juli 2026", colSpan: 1 },
    { event: "Batch 1 Registration", date: "24 Juli - 30 Agustus 2026", colSpan: 2 },
    { event: "Batch 2 Registration", date: "31 Agustus - 2 Oktober 2026", colSpan: 1 },
  ],
  [
    { event: "Registrasi Ulang Semifinalis", date: "11 November - 13 November 2026", colSpan: 1 },
    { event: "Submisi Babak Penyisihan", date: "11 Oktober - 30 Oktober 2026", colSpan: 2 },
    { event: "Grand Opening & Technical Meeting", date: "10 Oktober 2026", colSpan: 1 },
  ],
  [
    { event: "Technical Meeting Final", date: "14 November 2026", colSpan: 1 },
    { event: "Submisi Berkas Final", date: "14 - 19 November 2026", colSpan: 1 },
    { event: "Babak Final", date: "21 November 2026", colSpan: 1 },
    { event: "Grand Closing", date: "22 November 2026", colSpan: 1 },
  ],
];

const CONNECTOR_COLOR = "#b21e13";
const RADIUS = "22px";

const TimelineRow = ({
  cells,
  rowIndex,
}: {
  cells: TimelineCell[];
  rowIndex: number;
}) => {
  const config = [
    { uTurn: null, lineLeft: "12.5%", lineWidth: "87.5%" },
    { uTurn: "right", lineLeft: "0%", lineWidth: "100%" },
    { uTurn: "left", lineLeft: "0%", lineWidth: "87.5%" },
  ][rowIndex];

  let currentGridCol = 0;
  const cellElements: ReactElement[] = [];
  const dotElements: ReactElement[] = [];

  cells.forEach((cell, i) => {
    const span = cell.colSpan || 1;
    const centerCol = currentGridCol + span / 2;
    const leftPos = `${(centerCol / 4) * 100}%`;

    cellElements.push(
      <div key={i} className={`text-center px-1 sm:px-2 ${span === 2 ? 'col-span-2' : 'col-span-1'}`}>
        <p className="font-bold text-[16px] sm:text-[17px] md:text-sm text-[#5C2B14] mb-1">
          {cell.event}
        </p>
        <p className="text-[14px] sm:text-[15px] md:text-sm text-[#8A5A44]">
          {cell.date}
        </p>
      </div>
    );

    dotElements.push(
      <div
        key={`dot-${i}`}
        className="absolute w-3 h-3 rounded-full"
        style={{
          backgroundColor: CONNECTOR_COLOR,
          left: leftPos,
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    );

    currentGridCol += span;
  });

  return (
    <div className="relative">
      {config.uTurn && (
        <div
          className="absolute z-0"
          style={{
            top: "-4px",
            bottom: "0px",
            width: "50px",
            ...(config.uTurn === "right"
              ? {
                right: "-50px",
                borderTop: `4px solid ${CONNECTOR_COLOR}`,
                borderRight: `4px solid ${CONNECTOR_COLOR}`,
                borderBottom: `4px solid ${CONNECTOR_COLOR}`,
                borderTopRightRadius: RADIUS,
                borderBottomRightRadius: RADIUS,
              }
              : {
                left: "-50px",
                borderTop: `4px solid ${CONNECTOR_COLOR}`,
                borderLeft: `4px solid ${CONNECTOR_COLOR}`,
                borderBottom: `4px solid ${CONNECTOR_COLOR}`,
                borderTopLeftRadius: RADIUS,
                borderBottomLeftRadius: RADIUS,
              }),
          }}
        />
      )}

      <div
        className={`grid grid-cols-4 ${rowIndex === 0 ? "pt-4" : "pt-12"
          } pb-6 z-10 relative`}
      >
        {cellElements}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[4px] z-20">
        <div
          className="absolute top-0 bottom-0"
          style={{
            backgroundColor: CONNECTOR_COLOR,
            left: config.lineLeft,
            width: config.lineWidth,
          }}
        />
        {dotElements}
      </div>
    </div>
  );
};

const RibbonTails = ({ colorLeft = "#992f28", colorRight = "#cb401d" }: { colorLeft?: string; colorRight?: string }) => (
  <svg
    className="absolute left-1/2 -translate-x-1/2 -bottom-4 z-0"
    width="40"
    height="28"
    viewBox="0 0 40 28"
    fill="none"
  >
    <path d="M6 0 L15 0 L19 26 L3 18 Z" fill={colorLeft} />
    <path d="M34 0 L25 0 L21 26 L37 18 Z" fill={colorRight} />
  </svg>
);

const btnStyle: CSSProperties = {
  background: "radial-gradient(circle at 50% 50%, #bd3c0c, #330e00)",
  border: "1px solid #e3b05c",
  boxShadow: "0 0 12px rgba(189,60,12,0.6), 0 0 24px rgba(189,60,12,0.3)",
  borderRadius: "8px",
  padding: "10px 18px",
  color: "#faf5e2",
  fontFamily: "inherit",
  fontSize: "14px",
  fontWeight: "bold",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "4px",
};

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

const prizeAmountGradientStyle = {
  background: "linear-gradient(90deg, #fffcdf, #ffeb94, #ffedd2)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
} as const;

export default function ACCPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    { q: "Siapa saja yang boleh mendaftar ACC?", a: "ACC terbuka untuk seluruh mahasiswa aktif S1/D4/D3/D2/D1 sederajat di Indonesia pada tahun ajaran 2026/2027 dari berbagai universitas yang tertarik dengan ilmu aktuaria. Tidak ada batasan khusus, semua bisa ikut serta dalam acara ini!" },
    { q: "Berapa jumlah anggota dalam satu tim?", a: "Satu tim terdiri dari 2-3 orang anggota." },
    { q: "Apakah peserta dari perguruan tinggi berbeda boleh membentuk satu tim?", a: "Ya, peserta dari perguruan tinggi berbeda diperbolehkan membentuk tim, selama masing-masing masih tercatat sebagai mahasiswa aktif." },
    { q: "Apakah peserta boleh mengikuti DSC atau UEC juga?", a: "Boleh. Namun jika lolos final lebih dari satu lomba, peserta harus memilih satu lomba saja untuk maju ke final." },
    { q: "Apakah ACC diselenggarakan secara online atau offline?", a: "ACC dilaksanakan secara hybrid. Babak penyisihan diselenggarakan secara daring, sedangkan babak final diselenggarakan secara luring di Universitas Indonesia." },
  ];

  return (
    <div className="min-h-screen font-montserrat text-brown-dark pt-24 pb-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

        {/* HERO SECTION */}
        <section className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="font-serif font-bold leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-[56px] xl:text-6xl" style={titleGradientStyle}>
              <span className="sm:hidden">Actuarial Case Competition (ACC)</span>
              <span className="hidden sm:block">
                Actuarial Case<br />Competition (ACC)
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-[22px] font-montserrat font-normal text-justify leading-relaxed" style={descGradientStyle}>
              Actuarial Case Competition (ACC) merupakan kompetisi aktuaria tim berskala nasional yang menantang peserta untuk mengembangkan kemampuan analisis, pemodelan, dan penyelesaian masalah berbasis ilmu aktuaria terhadap studi kasus nyata yang relevan.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="https://ristek.link/RegistrasiACCLOGIKAUI2026" target="_blank" rel="noopener noreferrer" style={btnStyle}>
                REGISTER NOW <Plus size={14} />
              </Link>
              <Link href="https://ristek.link/GuidebookACCLOGIKAUI2026" target="_blank" rel="noopener noreferrer" style={btnStyle}>
                SEE GUIDEBOOK <ArrowRight size={14} />
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <Image
                src="/images/ACC_Logo.png"
                alt="ACC Logo"
                fill
                sizes="(max-width: 768px) 288px, 384px"
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* TIMELINE SECTION */}
        <section className="space-y-12">
          <h2 className="text-center font-bold font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[82px]" style={titleGradientStyle}>
            Timeline
          </h2>

          {/* Desktop Timeline */}
          <div className="relative max-w-5xl mx-auto px-16 sm:px-20 lg:px-24 hidden md:block">
            <div className="relative">
              {accTimelineRows.map((cells, rowIndex) => (
                <TimelineRow key={rowIndex} cells={cells} rowIndex={rowIndex} />
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden mt-10 ml-4 relative border-l-[3px] border-[#b21e13]">
            {accTimelineRows.flatMap((row, rowIndex) => rowIndex % 2 === 1 ? [...row].reverse() : row).map((item, i) => (
              <div key={i} className="mb-8 pl-6 relative">
                {/* Dot */}
                <div className="absolute w-3 h-3 rounded-full bg-[#b21e13] -left-[7.5px] top-2" />
                <p className="font-bold text-[17px] text-[#5C2B14] mb-1 leading-tight">
                  {item.event}
                </p>
                <p className="text-[15px] text-[#8A5A44]">
                  {item.date}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* HADIAH PEMENANG SECTION */}
        <section className="space-y-12 max-w-4xl mx-auto text-center">
          <h2 className="text-center font-bold font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[82px]" style={titleGradientStyle}>
            Hadiah Pemenang
          </h2>
          <div className="flex flex-col items-center gap-6 pb-2">
            <div className="w-full sm:w-[360px] flex items-center justify-start bg-[#330e00] text-cream rounded-full pl-2 pr-6 py-2 shadow-xl border border-gold/30">
              <div className="relative shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFDF00] to-[#D4AF37] flex items-center justify-center text-[#330e00] font-serif font-bold text-xl shadow-inner border-2 border-white/20 relative z-10">1</div>
                <RibbonTails />
              </div>
              <span className="flex-1 text-center font-bold text-base md:text-lg pr-2" style={prizeAmountGradientStyle}>Rp 2.000.000,00 + Piala</span>
            </div>
            <div className="flex flex-col md:flex-row gap-6 w-full justify-center items-center">
              <div className="w-full sm:w-[360px] flex items-center justify-start bg-[#330e00] text-cream rounded-full pl-2 pr-6 py-2 shadow-xl border border-gold/30">
                <div className="relative shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E0E0E0] to-[#A0A0A0] flex items-center justify-center text-[#330e00] font-serif font-bold text-xl shadow-inner border-2 border-white/20 relative z-10">2</div>
                  <RibbonTails />
                </div>
                <span className="flex-1 text-center font-bold text-base md:text-lg pr-2" style={prizeAmountGradientStyle}>Rp 1.500.000,00 + Piala</span>
              </div>
              <div className="w-full sm:w-[360px] flex items-center justify-start bg-[#330e00] text-cream rounded-full pl-2 pr-6 py-2 shadow-xl border border-gold/30">
                <div className="relative shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#CD7F32] to-[#8B4513] flex items-center justify-center text-[#330e00] font-serif font-bold text-xl shadow-inner border-2 border-white/20 relative z-10">3</div>
                  <RibbonTails />
                </div>
                <span className="flex-1 text-center font-bold text-base md:text-lg pr-2" style={prizeAmountGradientStyle}>Rp 1.000.000,00 + Piala</span>
              </div>
            </div>
          </div>
          <div className="text-sm md:text-base text-[#73410d] font-medium max-w-3xl mx-auto leading-relaxed pt-6 text-center space-y-2">
            <p>Seluruh peserta yang mengikuti Babak Penyisihan ACC akan mendapatkan e-sertifikat keikutsertaan.</p>
            <p>Semifinalis dan finalis akan menerima sertifikat yang dibagikan saat Grand Closing LOGIKA UI 2026.</p>
            <p>Setiap finalis juga akan mendapatkan medali.</p>
          </div>
        </section>

        {/* TESTIMONIAL SECTION */}
        <section className="flex flex-col-reverse md:flex-row items-center gap-12 max-w-5xl mx-auto">
          <div className="w-full md:w-1/3 flex flex-col items-center gap-4">
            <div className="w-full aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl border-4 border-gold/30">
              <Image
                src="/images/ACC_Testimoni_JuaraI_2025.jpg"
                alt="Tim Valuators, Juara 1 ACC LOGIKA UI 2025"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="text-center">
              <p className="font-bold text-lg text-[#330e00]">Tim Valuators</p>
              <p className="text-base text-[#73410d]">Universitas Gadjah Mada</p>
              <p className="text-base text-[#73410d]">Juara 1 ACC LOGIKA UI 2025</p>
            </div>
          </div>
          <div className="w-full md:w-2/3 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold font-serif" style={titleGradientStyle}>
              Apa Kata Mereka <br /> Tentang ACC?
            </h2>
            <blockquote
              className="text-base md:text-lg font-medium leading-relaxed text-justify"
              style={descGradientStyle}
            >
              &quot;ACC LOGIKA UI 2025 jadi pengalaman yang seru dan berkesan buat tim kami karena selama kompetisi kami <i>nggak cuma </i> ditantang untuk berpikir dan menyelesaikan <i>case</i>, tapi juga belajar kerja sama dan adaptasi di bawah <i>pressure</i>. <i>Case</i>nya juga terasa sangat relevan dengan dunia industri aktuaria, jadi kami bisa mendapat gambaran bagaimana proses analisis dan pengambilan keputusan dilakukan dalam situasi yang lebih realistis. Selain dapat pengalaman baru, kami juga senang bisa ketemu dan belajar dari peserta-peserta lain yang keren. Buat teman-teman yang masih ragu ikut tahun ini, menurut kami jangan takut untuk coba karena selain jadi ajang untuk mengembangkan diri, kompetisi seperti ini juga bisa jadi pengalaman yang sangat <i>worth it </i> dan menyenangkan.&quot;
            </blockquote>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto pt-8">
          <div className="w-full md:w-1/3 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold font-serif" style={titleGradientStyle}>
              General FAQ
            </h2>
            <p className="text-sm md:text-base text-[#73410d] font-medium leading-relaxed text-justify">
              Kami telah merangkum beberapa pertanyaan yang sering diajukan oleh peserta terkait acara LOGIKA UI 2026. Jika kamu tidak menemukan jawaban yang kamu cari di bawah ini, silakan hubungi kami melalui kontak resmi yang tersedia.
            </p>
          </div>
          <div className="w-full md:w-2/3 space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border-b border-[#330e00]/20 pb-4"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                  className="w-full flex justify-between items-center text-left py-2 hover:text-gold transition-colors"
                >
                  <span className="font-bold text-[#330e00] text-sm md:text-base pr-2">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 shrink-0 text-[#330e00] transition-transform duration-300 ${openFAQ === idx ? 'rotate-45' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
                <AnimatePresence>
                  {openFAQ === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pt-2 text-sm text-[#73410d] leading-relaxed text-justify">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
