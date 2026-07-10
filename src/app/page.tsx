import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import TimelineSection from "@/components/home/TimelineSection";
import CompetitionGrid from "@/components/home/CompetitionGrid";

const Home = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <CompetitionGrid />
    </div>
  );
};

export default Home;