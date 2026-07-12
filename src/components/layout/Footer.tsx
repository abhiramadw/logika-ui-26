import Image from "next/image";

const textGradientStyle = {
  fontFamily: "inherit",
  background: "linear-gradient(135deg, #330e00, #864705, #330e00)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
} as const;

const bodyTextColor = "#5b3a1a";

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/logikaui" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/logika-ui/" },
  { label: "TikTok", href: "https://www.tiktok.com/@logikaui" },
  { label: "YouTube", href: "https://youtube.com/@logikaui2026" },
  { label: "X", href: "https://x.com/logika_ui" },
] as const;

const SocialIcon = ({ label }: { label: (typeof socialLinks)[number]["label"] }) => {
  let src = "";
  switch (label) {
    case "Instagram":
      src = "/images/Instagram_logo.svg";
      break;
    case "LinkedIn":
      src = "/images/LinkedIn_logo.svg.webp";
      break;
    case "TikTok":
      src = "/images/TikTok_Logo.svg";
      break;
    case "YouTube":
      src = "/images/Youtube_logo.png";
      break;
    case "X":
      src = "/images/X_icon.svg.webp";
      break;
  }
  
  return (
    <div className="relative w-8 h-8 hover:scale-110 transition-transform duration-300">
      <Image src={src} alt={`${label} LOGIKA UI`} fill className="object-contain" />
    </div>
  );
};

const Footer = () => {
  return (
    // Footer murni transparan tanpa background kaku & mt-auto memastikan menempel di bawah container utama
    <footer className="relative w-full mt-auto">
      <div className="relative z-10 max-w-5xl mx-auto px-8 py-12">
        <div className="flex items-center justify-between flex-wrap gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/images/Logo.png"
              alt="Logo LOGIKA UI 2026"
              width={60}
              height={60}
              className="object-contain shrink-0"
            />
            <p
              style={{
                ...textGradientStyle,
                fontSize: "36px",
                fontWeight: "bold",
                lineHeight: "1.1",
              }}
            >
              LOGIKA UI 2026
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((item) => {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="transition-transform hover:scale-110"
                >
                  <SocialIcon label={item.label} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Baris pembatas kaku (borderTop) telah dihasus sepenuhnya agar transisinya mengalir mulus seperti Gambar 2 */}
        <div className="mt-8 flex flex-col gap-2">
          <p
            style={{
              color: "#864705",
              fontWeight: "bold",
              fontSize: "20px",
              marginBottom: "2px",
            }}
          >
            Hubungi Kami
          </p>
          <p
            className="md:whitespace-nowrap"
            style={{
              color: bodyTextColor,
              fontWeight: "normal",
              fontSize: "18px",
              lineHeight: "1.7",
            }}
          >
            <span style={{ fontWeight: "bold" }}>Alamat : </span>
            Gedung D Ruang 101 FMIPA UI, Kampus UI Depok, Depok 16424
          </p>
          <p
            style={{
              color: bodyTextColor,
              fontWeight: "normal",
              fontSize: "18px",
              lineHeight: "1.7",
            }}
          >
            <span style={{ fontWeight: "bold" }}>Email : </span>
            logika@sci.ui.ac.id
          </p>
        </div>

        <div className="mt-8">
          <p
            style={{
              color: "#864705",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            @ 2026 LOGIKA UI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;