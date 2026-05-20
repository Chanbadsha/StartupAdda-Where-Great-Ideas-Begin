import HomePageHero from "@/components/homepage/HomePageHero";
import TrendingStartup from "@/components/homepage/TrendingStartup";
import React, { Suspense } from "react";
import Loading from "./loading";

const HomePage = () => {
  return (
    <div className="px-2">
      <HomePageHero />

      <TrendingStartup />
    </div>
  );
};

export default HomePage;
