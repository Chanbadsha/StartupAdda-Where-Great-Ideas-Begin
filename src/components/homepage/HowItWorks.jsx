"use client";

import { Lightbulb, MessageSquareMore, Rocket } from "lucide-react";
import { motion } from "motion/react";

const steps = [
  {
    icon: Lightbulb,
    title: "Share Your Idea",
    description:
      "Submit your startup idea with details, goals, and vision. Whether it's a side project or the next unicorn, start by sharing it with the community.",
  },
  {
    icon: MessageSquareMore,
    title: "Get Feedback",
    description:
      "Receive valuable insights, suggestions, and constructive feedback from entrepreneurs, developers, designers, and startup enthusiasts.",
  },
  {
    icon: Rocket,
    title: "Build & Launch",
    description:
      "Refine your concept, validate your assumptions, find collaborators, and transform your idea into a real startup opportunity.",
  },
];

const HowItWorks = () => {
  return (
    <section className="container mx-auto px-4 py-20 md:py-28">
      {/* Heading */}
      <div className="mx-auto max-w-3xl text-center">
        <span className="rounded-full bg-violet-100 px-4 py-1 text-sm font-medium text-violet-700">
          🚀 How It Works
        </span>

        <h2 className="mt-5 font-outfit text-2xl lg:text-4xl font-bold text-slate-900 md:text-5xl">
          Turn Ideas Into Real Opportunities
        </h2>

        <p className="mt-4 text-base leading-relaxed text-slate-600 lg:text-lg">
          StartupAdda helps founders and innovators validate ideas, gather
          feedback, and take the first step toward building something impactful.
        </p>
      </div>

      {/* Steps */}
      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -6,
              }}
              className="group relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl"
            >
              {/* Number */}
              <div className="absolute right-6 top-6 text-5xl font-bold text-slate-100">
                0{index + 1}
              </div>

              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-600">
                <Icon size={28} />
              </div>

              {/* Content */}
              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {step.title}
              </h3>

              <p className="mt-3 leading-relaxed text-slate-600">
                {step.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorks;
