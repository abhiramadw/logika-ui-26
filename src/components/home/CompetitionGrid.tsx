import CompetitionCard from "@/components/ui/CompetitionCard";
import { highSchoolCompetitions, undergraduateCompetitions } from "@/data/competitions";

const CompetitionGrid = () => {
  return (
    <section className="bg-cream-light py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* High School */}
        <div className="mb-16">
          <div className="mb-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark mb-3">
              SMA / Sederajat
            </p>
            <h2 className="text-2xl font-black uppercase tracking-wide text-brown-dark sm:text-3xl">
              High School Competitions
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {highSchoolCompetitions.map((competition) => (
              <CompetitionCard key={competition.slug} competition={competition} />
            ))}
          </div>
        </div>

        {/* Undergraduate */}
        <div className="mt-24">
          <div className="mb-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark mb-3">
              Mahasiswa
            </p>
            <h2 className="text-2xl font-black uppercase tracking-wide text-brown-dark sm:text-3xl">
              Undergraduate Competitions
            </h2>
          </div>

          {/* ACC dan DSC di baris pertama */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {undergraduateCompetitions
              .filter((c) => c.slug !== "uec")
              .map((competition) => (
                <CompetitionCard key={competition.slug} competition={competition} />
              ))}
          </div>

          {/* UEC di baris kedua, center */}
          <div className="mt-6 flex justify-center">
            <div className="w-full sm:w-1/2">
              {undergraduateCompetitions
                .filter((c) => c.slug === "uec")
                .map((competition) => (
                  <CompetitionCard key={competition.slug} competition={competition} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitionGrid;
