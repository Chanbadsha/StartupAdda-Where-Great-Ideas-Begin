"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Lightbulb, MessageSquare, TrendingUp } from "lucide-react";

const innovators = [
  {
    name: "Sarah Ahmed",
    role: "EdTech Founder",
    image: "https://i.pravatar.cc/300?img=1",
    ideas: 12,
    comments: 84,
    impact: "12K+ Users",
  },
  {
    name: "Rahim Hasan",
    role: "FinTech Builder",
    image: "https://i.pravatar.cc/300?img=2",
    ideas: 9,
    comments: 56,
    impact: "$25K MRR",
  },
  {
    name: "Emily Chen",
    role: "AI Entrepreneur",
    image: "https://i.pravatar.cc/300?img=3",
    ideas: 15,
    comments: 102,
    impact: "18K+ Users",
  },
];

const FeaturedInnovators = () => {
  return (
    <section className="container mx-auto px-4 py-20 md:py-28">
      {/* Heading */}
      <div className="mx-auto max-w-3xl text-center">
        <span className="rounded-full bg-amber-100 px-4 py-1 text-sm font-medium text-amber-700">
          🌟 Featured Innovators
        </span>

        <h2 className="mt-5 font-outfit text-4xl font-bold text-slate-900 md:text-5xl">
          Meet The Builders
        </h2>

        <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
          Discover creators and founders who are actively contributing ideas,
          sharing knowledge, and building the future through innovation.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {innovators.map((person, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}
            whileHover={{ y: -6 }}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl"
          >
            {/* Profile */}
            <div className="flex flex-col items-center text-center">
              <Image
                src={person.image}
                alt={person.name}
                width={96}
                height={96}
                className="h-24 w-24 rounded-full object-cover"
              />

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                {person.name}
              </h3>

              <p className="text-slate-500">{person.role}</p>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div>
                <Lightbulb className="mx-auto text-violet-600" size={20} />
                <p className="mt-2 font-bold">{person.ideas}</p>
                <span className="text-xs text-slate-500">Ideas</span>
              </div>

              <div>
                <MessageSquare className="mx-auto text-violet-600" size={20} />
                <p className="mt-2 font-bold">{person.comments}</p>
                <span className="text-xs text-slate-500">Comments</span>
              </div>

              <div>
                <TrendingUp className="mx-auto text-violet-600" size={20} />
                <p className="mt-2 font-bold">{person.impact}</p>
                <span className="text-xs text-slate-500">Impact</span>
              </div>
            </div>

            {/* CTA */}
            <button className="mt-8 w-full rounded-xl border border-violet-200 py-3 text-sm font-medium text-violet-700 transition hover:bg-violet-50">
              View Profile
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedInnovators;
