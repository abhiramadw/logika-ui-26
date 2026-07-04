import Image from "next/image";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20"
      style={{
        background:
          "linear-gradient(to right, #fffdf5 0%, #FFF7D2 40%, #f5e9c8 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center gap-8 text-center">
        {/* Header: logo + teks About + judul */}
        <div className="flex items-center gap-4">
          <Image
            src="/images/Logo.png"
            alt="Logo LOGIKA UI 2026"
            width={80}
            height={80}
            className="object-contain"
          />
          <div>
            <p
              className="font-serif text-4xl font-bold italic"
              style={{
                background:
                  "linear-gradient(135deg, #330e00, #864705, #330e00)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(2px 2px 4px rgba(51,14,0,0.4))",
              }}
            >
              About
            </p>
            <h2
              className="text-6xl font-black"
              style={{
                background:
                  "linear-gradient(90deg, #330e00, #73410d, #330e00)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(2px 2px 3px rgba(51,14,0,0.35))",
              }}
            >
              LOGIKA UI 2026
            </h2>
          </div>
        </div>

        {/* Tema */}
        <p className="font-serif text-2xl text-brown-dark whitespace-nowrap">
          <span className="italic">THEME:</span> &quot;EXPLORING THE HIDDEN
          ARCHITECTURE OF MATHEMATICS&quot;
        </p>

        {/* Deskripsi */}
        <div
          className="rounded-xl p-6 w-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(222,142,82,0.215) 100%)",
            border: "1px solid rgba(134,0,0,0.215)",
            boxShadow: "2px 2px 6px rgba(0,0,0,0.2)",
          }}
        >
          <p
            className="text-base font-bold text-justify"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              background:
                "linear-gradient(135deg, #330e00, #864705, #330e00)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            LOGIKA (Lomba dan Kegiatan Matematika) UI 2026 adalah ajang
            kompetisi berskala nasional yang diselenggarakan oleh Departemen
            Matematika FMIPA UI sejak tahun 1997. LOGIKA UI sebagai ruang
            eksplorasi bagi siswa SMP/sederajat dan SMA/sederajat serta
            mahasiswa untuk menggali potensi diri melalui lomba matematika,
            statistika, dan ilmu aktuaria. Yuk, jelajahi serunya dunia
            matematika dan temukan pola serta struktur tersembunyi yang
            membentuk dunia bersama LOGIKA UI 2026!
          </p>
        </div>

        {/* Total Prize */}
        <div>
          <p
            className="uppercase tracking-widest text-sm font-bold text-brown"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Total Prize
          </p>
          <p
            className="font-black text-6xl"
            style={{
              background:
                "linear-gradient(90deg, #330e00, #73410d, #330e00)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Rp 54.000.000,00++
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
