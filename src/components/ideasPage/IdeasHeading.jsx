"use client";
import { motion } from "motion/react";
const IdeasHeading = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center text-center justify-center mt-10 md:mt-16 xl:mt-24 px-4"
    >
      {/* Badge */}
      <motion.span
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        animate={{
          y: [0, -3, 0],
        }}
        className="px-4 py-1 text-xs md:text-sm font-medium text-purple-600 bg-purple-100 rounded-full"
      >
        🚀 Startup Ideas Platform
      </motion.span>
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.01 }}
        transition={{
          delay: 0.1,
          duration: 0.6,
        }}
        className="font-outfit font-bold mt-5 text-3xl md:text-5xl xl:text-6xl leading-tight tracking-tight text-gray-900"
      >
        Find Your Next Big Idea
      </motion.h2>
      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.2,
          duration: 0.6,
        }}
        className="my-4 text-sm md:text-base xl:text-lg text-gray-600 max-w-2xl leading-relaxed"
      >
        Browse trending startup ideas, spark inspiration, and turn creativity
        into real-world products that solve real problems.
      </motion.p>
    </motion.div>
  );
};

export default IdeasHeading;
