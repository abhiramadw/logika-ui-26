import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about" className="pt-8 pb-20 md:py-20 relative">
      {/* Glow lembut sebelumnya sudah dihapus agar menyatu dengan MeshGradientBackground utama */}

      <div className="relative z-10 max-w-5xl mx-auto px-4 flex flex-col items-center gap-8 text-center">
        {/* Header: logo + teks About + judul */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-4 md:gap-6">
          <Image
            src="/images/Logo.png"
            alt="Logo LOGIKA UI 2026"
            width={100}
            height={100}
            className="object-contain w-[80px] h-[80px] md:w-[100px] md:h-[100px]"
          />
          <div className="text-center md:text-left">
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
              className="text-5xl sm:text-6xl font-black"
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
        <p className="font-serif text-xl sm:text-2xl text-brown-dark md:whitespace-nowrap">
          <span className="italic">THEME:</span> <br /> &quot;EXPLORING THE HIDDEN
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
            Matematika FMIPA UI sejak tahun 1997. LOGIKA UI merupakan ruang
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
            className="uppercase tracking-widest text-lg md:text-xl font-bold text-brown mb-2"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Total Prize
          </p>
          <p
            className="font-black text-4xl leading-tight sm:text-6xl md:text-7xl lg:text-8xl whitespace-nowrap"
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