"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { motion } from "motion/react";

const NotFound = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50 px-6">
      {/* Background Glow */}
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-xl text-center"
      >
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
          }}
          className="lg:text-8xl md:text-9xl text-6xl font-black text-violet-600"
        >
          404
        </motion.h1>

        <h2 className="mt-4 text-3xl font-bold text-slate-900">
          Idea Not Found
        </h2>

        <p className="mt-4 text-slate-600 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist, was moved, or
          never became the next unicorn startup.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/">
            <Button className="bg-linear-to-tr from-[#160beb] to-[#544dd3] text-white">
              Back Home
            </Button>
          </Link>

          <Link href="/ideas">
            <Button variant="bordered">Browse Ideas</Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
