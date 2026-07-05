import Image from "next/image";
import Link from "next/link";
import type { Competition } from "@/data/competitions";

type Props = {
  competition: Competition;
};

const CompetitionCard = ({ competition }: Props) => {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-gold bg-cream-light p-6 shadow-sm">
      <div className="flex justify-center">
        <Image
          src={competition.logo}
          alt={competition.name}
          width={80}
          height={80}
          className="object-contain"
        />
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold-dark">
          {competition.slug.toUpperCase()}
        </p>
        <h3 className="text-lg font-bold leading-snug text-brown-dark">
          {competition.name}
        </h3>
        <p className="text-sm leading-relaxed text-brown">
          {competition.shortDesc}
        </p>
      </div>

      <div className="mt-auto pt-2">
        <p className="text-xs uppercase tracking-widest text-brown/60">
          Hadiah Juara 1
        </p>
        <p className="text-base font-bold text-gold-dark">
          {competition.prizeFirst}
        </p>
      </div>

      <div className="flex gap-3 pt-1">
        <button
          type="button"
          className="flex-1 rounded-lg bg-red py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-dark"
        >
          Register Now
        </button>
        <Link
          href={competition.href}
          className="flex-1 rounded-lg border border-gold py-2.5 text-center text-sm font-semibold text-brown-dark transition-colors hover:bg-gold/10"
        >
          See Details
        </Link>
      </div>
    </div>
  );
};

export default CompetitionCard;
