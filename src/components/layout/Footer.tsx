import Image from "next/image";

const textGradientStyle = {
  fontFamily: "inherit",
  background: "linear-gradient(135deg, #330e00, #864705, #330e00)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
} as const;

// Warna solid untuk teks isi (alamat, email, copyright).
// Gradient clip-text bagus untuk judul besar, tapi di ukuran kecil
// kontrasnya turun dan jadi susah dibaca — jadi teks isi pakai warna solid.
const bodyTextColor = "#5b3a1a";
const mutedTextColor = "#7a5a35";

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "X", href: "#" },
] as const;

const SocialIcon = ({ label }: { label: (typeof socialLinks)[number]["label"] }) => {
  switch (label) {
    case "Instagram":
      return (
        <svg width="34" height="34" viewBox="0 0 24 24">
          <defs>
            <radialGradient id="ig" cx="30%" cy="107%" r="150%">
              <stop offset="0%" stopColor="#fdf497" />
              <stop offset="45%" stopColor="#fd5949" />
              <stop offset="60%" stopColor="#d6249f" />
              <stop offset="90%" stopColor="#285AEB" />
            </radialGradient>
          </defs>
          <rect width="24" height="24" rx="6" fill="url(#ig)" />
          <rect
            x="2"
            y="2"
            width="20"
            height="20"
            rx="5"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
          />
          <circle cx="12" cy="12" r="4.5" fill="none" stroke="white" strokeWidth="1.5" />
          <circle cx="17.5" cy="6.5" r="1" fill="white" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="#0077B5">
          <rect width="24" height="24" rx="4" fill="#0077B5" />
          <text x="4" y="18" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="white">
            in
          </text>
        </svg>
      );
    case "TikTok":
      return (
        <svg width="34" height="34" viewBox="0 0 24 24">
          <rect width="24" height="24" rx="6" fill="black" />
          <path
            d="M16 8.5c1 .7 2.2 1 3.5 1v2.5c-1.2 0-2.3-.4-3.2-1v4.5c0 2.5-2 4.5-4.5 4.5S7.5 18 7.5 15.5 9.5 11 12 11v2.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2V5h2.5c.3 1.8 1.4 3.2 3 3.5z"
            fill="white"
          />
        </svg>
      );
    case "YouTube":
      return (
        <svg width="34" height="34" viewBox="0 0 24 24">
          <rect width="24" height="24" rx="6" fill="#FF0000" />
          <path d="M10 8.5l6 3.5-6 3.5V8.5z" fill="white" />
        </svg>
      );
    case "X":
      return (
        <svg width="34" height="34" viewBox="0 0 24 24">
          <rect width="24" height="24" rx="6" fill="black" />
          <path
            d="M18 6L13.5 11.5L18.5 18H15L12 14L8.5 18H5.5L10.5 12L5.5 6H9L12 9.5L15 6H18Z"
            fill="white"
          />
        </svg>
      );
  }
};

const Footer = () => {
  return (
    <footer
      style={{
        background:
          "linear-gradient(to right, #fffdf5 0%, #FFF7D2 40%, #f5e9c8 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto px-8 py-12">
        {/* Baris atas: brand di kiri, sosmed di ujung kanan */}
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
            {socialLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="transition-transform hover:scale-110"
              >
                <SocialIcon label={label} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider + Hubungi Kami full-width, mengikuti pola referensi */}
        <div
          className="mt-8 pt-8 flex flex-col gap-2"
          style={{ borderTop: "1px solid rgba(134, 71, 5, 0.25)" }}
        >
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

        {/* Copyright paling bawah */}
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