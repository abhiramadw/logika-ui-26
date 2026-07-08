import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import TimelineSection from "@/components/home/TimelineSection";
import CompetitionGrid from "@/components/home/CompetitionGrid";
import MeshGradientBackground from "@/components/ui/MeshGradientBackground";

const Home = () => {
  return (
    <MeshGradientBackground>
      <div className="relative z-10 w-full">
        <HeroSection />
        <AboutSection />
        <TimelineSection />
        <CompetitionGrid />
      </div>
    </MeshGradientBackground>
  );
};

export default Home;
