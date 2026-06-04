"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/../public/logo.png";

import { motion } from "motion/react";
import { FaLinkedin } from "react-icons/fa";
import { GiThunderBlade } from "react-icons/gi";
import { BsTwitter } from "react-icons/bs";
import { MailCheck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <Image src={logo} alt="StartupAdda Logo" width={40} height={40} />

              <h2 className="font-outfit text-2xl font-bold">
                StartUp<span className="text-[#4F46E5]">Adda</span>
              </h2>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              A community-driven platform where founders, innovators, and
              creators share startup ideas, gather feedback, and build the next
              generation of impactful products.
            </p>

            <div className="mt-6 flex gap-3">
              {[
                { icon: GiThunderBlade, href: "#" },
                { icon: FaLinkedin, href: "#" },
                { icon: BsTwitter, href: "#" },
                { icon: MailCheck, href: "mailto:hello@startupadda.com" },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={index}
                    href={item.href}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-violet-200 hover:text-violet-600"
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-semibold text-slate-900">Explore</h3>

            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/ideas"
                  className="text-slate-600 transition hover:text-violet-600"
                >
                  Browse Ideas
                </Link>
              </li>

              <li>
                <Link
                  href="/explore"
                  className="text-slate-600 transition hover:text-violet-600"
                >
                  Explore Startups
                </Link>
              </li>

              <li>
                <Link
                  href="/add-idea"
                  className="text-slate-600 transition hover:text-violet-600"
                >
                  Submit Idea
                </Link>
              </li>

              <li>
                <Link
                  href="/my-ideas"
                  className="text-slate-600 transition hover:text-violet-600"
                >
                  My Ideas
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-slate-900">Categories</h3>

            <ul className="mt-4 space-y-3">
              <li className="text-slate-600">AI & Machine Learning</li>
              <li className="text-slate-600">FinTech</li>
              <li className="text-slate-600">HealthTech</li>
              <li className="text-slate-600">EdTech</li>
              <li className="text-slate-600">SaaS</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-slate-900">Stay Updated</h3>

            <p className="mt-4 text-sm text-slate-600">
              Get startup insights, trending ideas, and community updates.
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-violet-400"
              />

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-xl bg-gradient-to-r from-[#160beb] to-[#544dd3] px-4 py-3 font-medium text-white"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} StartupAdda. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
