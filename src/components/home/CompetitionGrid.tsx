import CompetitionCard from "@/components/ui/CompetitionCard";
import { highSchoolCompetitions, undergraduateCompetitions } from "@/data/competitions";

const titleStyle = {
  background: "linear-gradient(90deg, #330e00, #73410d, #330e00)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  filter: "drop-shadow(3px 3px 8px rgba(51,14,0,0.7))",
} as const;

const CompetitionGrid = () => {
  return (
    <section
      className="py-20"
      style={{
        background:
          "linear-gradient(to right, #fffdf5 0%, #FFF7D2 40%, #f5e9c8 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* High School */}
        <div className="mb-16">
          <h2
            className="mb-8 text-center font-bold text-5xl uppercase"
            style={titleStyle}
          >
            High School Competitions
          </h2>

          <div className="grid grid-cols-2 gap-6 max-w-5xl mx-auto">
            {highSchoolCompetitions.map((competition) => (
              <CompetitionCard key={competition.slug} competition={competition} />
            ))}
          </div>
        </div>

        {/* Undergraduate */}
        <div className="mt-24">
          <h2
            className="mb-8 text-center font-bold text-5xl uppercase"
            style={titleStyle}
          >
            Undergraduate Competitions
          </h2>

          {/* UEC dan ACC di baris pertama */}
          <div className="grid grid-cols-2 gap-6 max-w-5xl mx-auto">
            {undergraduateCompetitions
              .filter((c) => c.slug !== "dsc")
              .map((competition) => (
                <CompetitionCard key={competition.slug} competition={competition} />
              ))}
          </div>

          {/* DSC di baris kedua, center */}
          <div className="mt-6 flex justify-center">
            <div className="w-full max-w-md">
              {undergraduateCompetitions
                .filter((c) => c.slug === "dsc")
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
