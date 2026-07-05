import type { CSSProperties } from "react";

type TimelineCell = {
  event: string;
  date: string;
  colSpan?: number;
};

const timelineRows: TimelineCell[][] = [
  [
    { event: "Early Bird Registration", date: "13–23 Juli 2026", colSpan: 1 },
    { event: "Batch 1 Registration", date: "24 Juli–30 Agustus 2026", colSpan: 2 },
    { event: "Registrasi MathVenture", date: "3–29 Agustus 2026", colSpan: 1 },
  ],
  [
    {
      event: "Grand Opening LOGIKA UI & Technical Meeting",
      date: "10 Oktober 2026",
      colSpan: 1,
    },
    { event: "Batch 2 Registration", date: "31 Agustus–2 Oktober 2026", colSpan: 2 },
    { event: "MathVenture", date: "29 Agustus 2026", colSpan: 1 },
  ],
  [
    {
      event: "Submisi Berkas Penyisihan ACC, DSC, EC",
      date: "11–30 Oktober 2026",
      colSpan: 1,
    },
    { event: "Babak Penyisihan MIC & ASC", date: "17 Oktober 2026", colSpan: 1 },
    { event: "Babak Penyisihan MTC", date: "18 Oktober 2026", colSpan: 1 },
    {
      event: "Registrasi LogiTalks & Campus Tour",
      date: "2–22 November 2026",
      colSpan: 1,
    },
  ],
  [
    { event: "Grand Closing", date: "22 November 2026", colSpan: 1 },
    { event: "Babak Semifinal & Final", date: "21–22 November 2026", colSpan: 1 },
    { event: "Submisi Berkas Final", date: "14–19 November 2026", colSpan: 1 },
    {
      event: "Technical Meeting Semifinal & Final",
      date: "14 November 2026",
      colSpan: 1,
    },
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
  // Mapping konfigurasi per baris secara presisi
  // lineWidth 50px ke margin menjamin kurva benar-benar jatuh di luar teks grid
  const config = [
    { uTurn: null,    lineLeft: "12.5%", lineWidth: "87.5%" }, // Baris 1
    { uTurn: "right", lineLeft: "0%",    lineWidth: "100%" },  // Baris 2
    { uTurn: "left",  lineLeft: "0%",    lineWidth: "100%" },  // Baris 3
    { uTurn: "right", lineLeft: "12.5%", lineWidth: "87.5%" }, // Baris 4
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
          transform: "translate(-50%, -50%)", // Centering sempurna
        }}
      />
    );

    currentGridCol += span;
  });

  return (
    <div className="relative">
      {/* 1. Kurva U-Turn Penghubung ke Baris Sebelumnya */}
      {config.uTurn && (
        <div
          className="absolute z-0"
          style={{
            top: "-4px", // Overlap presisi 4px di atas garis baris sebelumnya
            bottom: "0px", // Menyentuh sempurna dasar garis baris ini
            width: "50px",
            ...(config.uTurn === "right"
              ? {
                  right: "-50px", // Didorong keluar ke margin kanan!
                  borderTop: `4px solid ${CONNECTOR_COLOR}`,
                  borderRight: `4px solid ${CONNECTOR_COLOR}`,
                  borderBottom: `4px solid ${CONNECTOR_COLOR}`,
                  borderTopRightRadius: RADIUS,
                  borderBottomRightRadius: RADIUS,
                }
              : {
                  left: "-50px", // Didorong keluar ke margin kiri!
                  borderTop: `4px solid ${CONNECTOR_COLOR}`,
                  borderLeft: `4px solid ${CONNECTOR_COLOR}`,
                  borderBottom: `4px solid ${CONNECTOR_COLOR}`,
                  borderTopLeftRadius: RADIUS,
                  borderBottomLeftRadius: RADIUS,
                }),
          }}
        />
      )}

      {/* 2. Grid Teks yang Bersih dari Tabrakan */}
      <div
        className={`grid grid-cols-4 ${
          rowIndex === 0 ? "pt-4" : "pt-12"
        } pb-6 z-10 relative`}
      >
        {cellElements}
      </div>

      {/* 3. Garis Horizontal Bawah & Titik Dot */}
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

const TimelineSection = () => {
  return (
    <section
      id="timeline"
      className="py-20 overflow-hidden"
      style={{
        background:
          "linear-gradient(to right, #fffdf5 0%, #FFF7D2 40%, #f5e9c8 100%)",
      }}
    >
      {/* px-16 memberikan ruang eksklusif 64px di kiri/kanan untuk ular U-turn */}
      <div className="max-w-5xl mx-auto px-16 sm:px-20 lg:px-24">
        <h2
          className="text-center mb-8 italic font-bold text-5xl uppercase font-serif"
          style={{
            background: "linear-gradient(90deg, #330e00, #73410d, #330e00)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: "drop-shadow(2px 2px 3px rgba(51,14,0,0.4))",
          }}
        >
          Our Timeline
        </h2>

        <div className="relative">
          {timelineRows.map((cells, rowIndex) => (
            <TimelineRow key={rowIndex} cells={cells} rowIndex={rowIndex} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;