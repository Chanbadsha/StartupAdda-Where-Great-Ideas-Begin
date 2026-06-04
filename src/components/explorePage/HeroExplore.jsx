import React from "react";

const HeroExplore = () => {
  return (
    <section className="container mx-auto px-4 py-20 text-center">
      <span className="rounded-full bg-violet-100 px-4 py-1 text-sm font-medium text-violet-700">
        🔍 Explore Startup Opportunities
      </span>

      <h1 className="mt-6 font-outfit text-2xl md:text-4xl font-bold text-slate-900 lg:text-5xl xl:text-6xl">
        Discover Ideas That Shape The Future
      </h1>

      <p className="mx-auto mt-5 max-w-3xl text-md leading-relaxed text-slate-600 md:text-lg">
        Explore emerging industries, trending startup concepts, and innovative
        opportunities. Find inspiration, validate market demand, and uncover
        your next big venture.
      </p>
      <div className="mt-12 flex flex-wrap justify-center gap-8">
        <div>
          <h3 className="text-3xl font-bold text-violet-600">1K+</h3>
          <p className="text-slate-600">Ideas Shared</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-violet-600">50+</h3>
          <p className="text-slate-600">Categories</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-violet-600">5K+</h3>
          <p className="text-slate-600">Community Members</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-violet-600">20K+</h3>
          <p className="text-slate-600">Comments & Feedback</p>
        </div>
      </div>
    </section>
  );
};

export default HeroExplore;
