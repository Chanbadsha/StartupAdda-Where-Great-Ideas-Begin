import HomePageHero from "@/components/homepage/HomePageHero";
import HowItWorks from "@/components/homepage/HowItWorks";
import SuccessStories from "@/components/homepage/SuccessStories";
import TrendingStartup from "@/components/homepage/TrendingStartup";

const HomePage = () => {
  return (
    <div className="px-2">
      <HomePageHero />

      <TrendingStartup />
      <HowItWorks />
      <SuccessStories />
    </div>
  );
};

export default HomePage;
