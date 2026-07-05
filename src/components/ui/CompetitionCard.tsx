import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { UserPlus, ArrowRight } from "lucide-react";
import type { Competition } from "@/data/competitions";

type Props = {
  competition: Competition;
};

const btnStyle: CSSProperties = {
  background: "radial-gradient(circle at 50% 50%, #bd3c0c, #330e00)",
  border: "1px solid #e3b05c",
  boxShadow: "0 0 12px rgba(189,60,12,0.6), 0 0 24px rgba(189,60,12,0.3)",
  borderRadius: "8px",
  padding: "8px 12px",
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
  flex: 1,
};

const CompetitionCard = ({ competition }: Props) => {
  return (
    <div
      className="flex flex-col items-center text-center p-6 gap-3"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(222,142,82,0.215) 100%)",
        border: "1px solid rgba(134,0,0,0.215)",
        borderRadius: "16px",
        boxShadow: "0 0 14px rgba(134,0,0,0.15)",
      }}
    >
      <Image
        src={competition.logo}
        alt={competition.name}
        width={80}
        height={80}
        className="object-contain"
      />

      <p
        style={{
          fontFamily: "inherit",
          fontSize: "16px",
          fontWeight: "bold",
          textTransform: "uppercase",
          background: "linear-gradient(135deg, #330e00, #73410d, #330e00)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          filter: "drop-shadow(2px 2px 4px rgba(51,14,0,0.55))",
          lineHeight: "1.3",
        }}
      >
        {competition.name} ({competition.slug.toUpperCase()})
      </p>

      <p
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "15px",
          background: "linear-gradient(135deg, #330e00, #73410d, #330e00)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          lineHeight: "1.6",
          textAlign: "justify",
        }}
      >
        {competition.shortDesc}
      </p>

      <div className="flex gap-3 w-full mt-2">
        <button style={btnStyle}>
          REGISTER NOW <UserPlus size={14} />
        </button>
        <Link href={competition.href} style={btnStyle}>
          SEE DETAILS <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
};

export default CompetitionCard;
