"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type TimelineCell = {
  event: string;
  date: string;
  colSpan?: number;
};

const ascTimelineRows: TimelineCell[][] = [
  [
    { event: "Early Bird Registration", date: "13–23 Juli 2026", colSpan: 1 },
    { event: "Batch 1 Registration", date: "24 Juli–30 Agustus 2026", colSpan: 2 },
    { event: "Batch 2 Registration", date: "31 Agustus–2 Oktober 2026", colSpan: 1 },
  ],
  [
    { event: "Registrasi Ulang Semifinalis", date: "24 Oktober–09 November 2026", colSpan: 1 },
    { event: "Babak Penyisihan", date: "17 Oktober 2026", colSpan: 1 },
    { event: "Uji Coba Platform", date: "13–16 Oktober 2026", colSpan: 1 },
    { event: "Grand Opening & Technical Meeting", date: "10 Oktober 2026", colSpan: 1 },
  ],
  [
    { event: "Technical Meeting Semifinal & Final", date: "14 November 2026", colSpan: 1 },
    { event: "Babak Semifinal", date: "21 November 2026", colSpan: 1 },
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
  const cellElements: any[] = [];
  const dotElements: any[] = [];

  cells.forEach((cell, i) => {
    const span = cell.colSpan || 1;
    const centerCol = currentGridCol + span / 2;
    const leftPos = `${(centerCol / 4) * 100}%`;

    cellElements.push(
      <div key={i} className={`text-center px-1 sm:px-2 ${span === 2 ? 'col-span-2' : 'col-span-1'}`}>
        <p className="font-bold text-[12px] sm:text-[13px] md:text-sm text-[#5C2B14] mb-1">
          {cell.event}
        </p>
        <p className="text-[10px] sm:text-[11px] md:text-xs text-[#8A5A44]">
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

export default function ASCPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    { q: "Siapa saja yang boleh mendaftar ASC?", a: "ASC terbuka untuk seluruh siswa SMA/sederajat di Indonesia pada tahun ajaran 2026/2027." },
    { q: "Materi apa saja yang diujikan pada ASC?", a: "Materi ASC mencakup konsep-konsep dasar hingga terapan dalam ilmu aktuaria. Cakupan lengkap dapat dilihat pada guidebook yang disediakan" },
    { q: "Apakah tersedia modul pembelajaran untuk ASC?", a: "Ya, kami menyediakan modul pembelajaran yang berisi seluruh cakupan materi sebagai panduan belajar peserta sebelum pelaksanaan lomba." },
    { q: "Apakah peserta bisa mendaftar ASC bersamaan dengan lomba lain?", a: "Ya, hal tersebut diperbolehkan. Peserta dapat mendaftar ASC bersamaan dengan MIC, MTC, maupun SEC. Akan tetapi, khusus untuk MIC, ASC, dan SEC, apabila peserta lolos ke babak semifinal (final untuk SEC) pada ketiga cabang tersebut atau dua di antaranya, peserta hanya dapat memilih salah satu kompetisi untuk dilanjutkan ke babak berikutnya." },
    { q: "Apakah ASC diselenggarakan secara online atau offline?", a: "ASC dilaksanakan secara hybrid. Babak penyisihan diselenggarakan secara daring, sedangkan babak semifinal dan final diselenggarakan secara luring di Universitas Indonesia." },
    { q: "Perangkat apa saja yang dibutuhkan untuk babak penyisihan?", a: "Peserta membutuhkan dua perangkat, yaitu laptop untuk pengerjaan soal di platform lomba dan gawai (HP) sebagai media pengawasan melalui Zoom meetings." },
  ];

  const gradientStyle = {
    background: "linear-gradient(90deg, #330e00, #73410d, #330e00)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    filter: "drop-shadow(2px 2px 3px rgba(51,14,0,0.4))",
  };

  return (
    <div className="min-h-screen bg-cream font-montserrat text-brown-dark pt-24 pb-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

        {/* HERO SECTION */}
        <section className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold font-serif leading-tight uppercase" style={gradientStyle}>
              Actuarial Science <br className="hidden md:block" />
              Competition (ASC)
            </h1>
            <p className="text-sm md:text-base leading-relaxed text-[#73410d] font-medium max-w-xl">
              Actuarial Science Competition (ASC) merupakan kompetisi ilmu aktuaria tingkat nasional yang menantang kemampuan analitis dan kuantitatif peserta dalam memecahkan soal mengenai konsep dasar hingga terapan ilmu aktuaria secara individu.
            </p>
            <div className="flex flex-col gap-3 pt-2">
              <div className="flex flex-wrap gap-4">
                <Link href="#" className="inline-flex items-center gap-2 bg-[#330e00] text-gold px-6 py-2.5 rounded-full text-sm font-bold tracking-wide hover:bg-[#73410d] transition-colors shadow-lg">
                  REGISTER NOW
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                </Link>
                <Link href="#" className="inline-flex items-center gap-2 bg-[#330e00] text-gold px-6 py-2.5 rounded-full text-sm font-bold tracking-wide hover:bg-[#73410d] transition-colors shadow-lg">
                  SEE GUIDEBOOK
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
              </div>
              <div>
                <Link href="#" className="inline-flex items-center gap-2 bg-[#330e00] text-gold px-6 py-2.5 rounded-full text-sm font-bold tracking-wide hover:bg-[#73410d] transition-colors shadow-lg w-fit">
                  SEE MODULE
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <Image
                src="/images/ASC_Logo.png"
                alt="ASC Logo"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* TIMELINE SECTION */}
        <section className="space-y-12">
          <h2 className="text-center text-4xl md:text-5xl font-bold font-serif uppercase" style={gradientStyle}>
            Timeline
          </h2>

          {/* Desktop Timeline */}
          <div className="relative max-w-5xl mx-auto px-16 sm:px-20 lg:px-24 hidden md:block">
            <div className="relative">
              {ascTimelineRows.map((cells, rowIndex) => (
                <TimelineRow key={rowIndex} cells={cells} rowIndex={rowIndex} />
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[4px] before:bg-[#b21e13]">
            {ascTimelineRows.flat().map((item, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#b21e13] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shadow-md ring-4 ring-cream"></div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] pl-4 md:pl-0 md:group-odd:text-right md:group-even:text-left">
                  <div className="flex flex-col">
                    <h3 className="font-bold text-[#5C2B14] text-sm">{item.event}</h3>
                    <time className="text-xs text-[#8A5A44]">{item.date}</time>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* HADIAH PEMENANG SECTION */}
        <section className="space-y-12 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-serif uppercase" style={gradientStyle}>
            Hadiah Pemenang
          </h2>
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center bg-[#330e00] text-cream rounded-full pl-2 pr-6 py-2 shadow-xl border border-gold/30">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFDF00] to-[#D4AF37] flex items-center justify-center text-[#330e00] font-serif font-bold text-xl shadow-inner border-2 border-white/20">1</div>
              <span className="ml-4 font-bold text-lg md:text-xl text-gold">Rp 2.000.000,00 + Piala</span>
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex items-center bg-[#330e00] text-cream rounded-full pl-2 pr-6 py-2 shadow-xl border border-gold/30">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E0E0E0] to-[#A0A0A0] flex items-center justify-center text-[#330e00] font-serif font-bold text-xl shadow-inner border-2 border-white/20">2</div>
                <span className="ml-4 font-bold text-base md:text-lg text-cream-light">Rp 1.500.000,00 + Piala</span>
              </div>
              <div className="flex items-center bg-[#330e00] text-cream rounded-full pl-2 pr-6 py-2 shadow-xl border border-gold/30">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#CD7F32] to-[#8B4513] flex items-center justify-center text-[#330e00] font-serif font-bold text-xl shadow-inner border-2 border-white/20">3</div>
                <span className="ml-4 font-bold text-base md:text-lg text-[#CD7F32]">Rp 1.000.000,00 + Piala</span>
              </div>
            </div>
          </div>
          <p className="text-sm md:text-base text-[#73410d] font-medium max-w-3xl mx-auto leading-relaxed pt-6">
            Seluruh peserta yang mengikuti Babak Penyisihan ASC akan mendapatkan e-sertifikat keikutsertaan. Semifinalis dan finalis akan menerima sertifikat yang dibagikan saat Grand Closing LOGIKA UI 2026. Setiap finalis juga akan mendapatkan medali.
          </p>
        </section>

        {/* FAQ SECTION */}
        <section className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto pt-8">
          <div className="w-full md:w-1/3 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold font-serif uppercase" style={gradientStyle}>
              General FAQ
            </h2>
            <p className="text-sm md:text-base text-[#73410d] font-medium leading-relaxed">
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
                  <span className="font-bold text-[#330e00] text-sm md:text-base pr-8">{faq.q}</span>
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
                      <p className="pt-2 text-sm text-[#73410d] leading-relaxed">
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
