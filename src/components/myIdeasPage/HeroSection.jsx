"use client";

import { motion } from "motion/react";
import { fadeUp } from "./MyIdeasPageMainSection";

const HeroSection = () => {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={fadeUp}
      className="border-b bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-12">
        <span className="inline-flex rounded-full bg-violet-100 px-4 py-1 text-sm font-medium text-violet-700">
          🔒 Private Workspace
        </span>

        <h1 className="mt-4 text-4xl font-bold text-slate-900">My Ideas</h1>

        <p className="mt-3 max-w-2xl text-slate-600">
          View, update, and manage all your startup ideas from your private
          dashboard.
        </p>
      </div>
    </motion.section>
  );
};

export default HeroSection;
