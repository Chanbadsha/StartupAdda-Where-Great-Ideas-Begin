"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const successStories = [
  {
    name: "Sarah Ahmed",
    role: "Founder of SkillForge",
    story:
      "Shared an EdTech idea on StartupAdda, gathered feedback from educators, and launched an MVP that now serves thousands of students.",
    metric: "12K+ Users",
  },
  {
    name: "Rahim Hasan",
    role: "Founder of GreenCart",
    story:
      "Validated his eco-commerce concept through community discussions and secured his first paying customers before launch.",
    metric: "500+ Customers",
  },
  {
    name: "Emily Chen",
    role: "Founder of AIFlow",
    story:
      "Connected with developers through StartupAdda and transformed a solo AI idea into a growing SaaS product.",
    metric: "$25K MRR",
  },
];

const SuccessStories = () => {
  return (
    <section className="container mx-auto px-4 py-20 md:py-28">
      {/* Heading */}
      <div className="mx-auto max-w-3xl text-center">
        <span className="rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-700">
          🌟 Success Stories
        </span>

        <h2 className="mt-5 font-outfit text-2xl font-bold text-slate-900 lg:text-5xl">
          Ideas That Became Reality
        </h2>

        <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
          Discover how founders used StartupAdda to validate ideas, gain
          feedback, and build products that people love.
        </p>
      </div>

      {/* Stories */}
      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {successStories.map((story, index) => (
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
            className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl"
          >
            {/* Metric */}
            <div className="mb-6 inline-flex rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
              {story.metric}
            </div>

            {/* Story */}
            <p className="leading-relaxed text-slate-600">
              &quot;{story.story}&quot;
            </p>

            {/* Founder */}
            <div className="mt-6 border-t pt-5">
              <h3 className="font-semibold text-slate-900">{story.name}</h3>

              <p className="text-sm text-slate-500">{story.role}</p>
            </div>

            {/* Arrow */}
            <div className="mt-6 flex justify-end">
              <ArrowUpRight className="text-slate-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStories;
