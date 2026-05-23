"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ImagePlus } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { PostData } from "@/lib/data";

const AddIdeaPage = () => {
  const { data } = authClient.useSession();
  const users = data?.user;
  // console.log(users);
  const getUserName = (name) => {
    return `@${name.toLowerCase().trim().split(" ").join(".")}`;
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const formattedData = {
      ...data,

      tags: data.tags?.split(",").map((t) => t.trim()),
      proposedSolution: data.proposedSolution?.split(",").map((t) => t.trim()),
      targetAudience: data.targetAudience?.split(",").map((t) => t.trim()),

      // object structure

      estimatedBudget: {
        amount: Number(data.estimatedBudget) || 1000,
        currency: "USD",
        timeline: data.timeline,
        fundingStage: "Seed",
      },

      // optional future fields
      gallery: [],
      engagement: {},
      comments: [],
      creator: {
        name: users?.name,
        username: getUserName(users?.name),
        role: users?.role,
        avatar: users?.image,
        bio: users?.bio,
        id: users?.id,
      },
      status: "pending",
    };

    // console.log(formattedData);
    const postInfo = await PostData(formattedData);
    console.log(postInfo);
  };
  return (
    <main className="relative min-h-screen bg-slate-50 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <Link
          href="/ideas"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-violet-600 hover:text-violet-700 hover:underline transition"
        >
          <ArrowLeft size={16} />
          Back to Ideas
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">
            Share Your Startup Idea
          </h1>
          <p className="mt-3 text-slate-600 text-base">
            Turn your vision into reality and get feedback from the community.
          </p>
        </div>

        <div className="mx-auto w-full max-w-5xl rounded-3xl border border-white/30 bg-white/70 p-8 shadow-2xl backdrop-blur-2xl transition hover:shadow-violet-200/30">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Idea Title */}
            <div className="md:col-span-1">
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-600">
                Idea Title *
              </label>
              <input
                type="text"
                placeholder="Idea Title"
                {...register("ideaTitle", {
                  required: "Idea Title is required",
                })}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
              />
              {errors.ideaTitle && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.ideaTitle.message}
                </p>
              )}
            </div>

            {/* Tagline */}
            <div className="md:col-span-1">
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-600">
                Tagline *
              </label>
              <input
                type="text"
                placeholder="Tagline"
                {...register("tagline", { required: "Tagline is required" })}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
              />
              {errors.tagline && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.tagline.message}
                </p>
              )}
            </div>

            {/* Short Description (full width) */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-600">
                Short Description *
              </label>
              <input
                type="text"
                placeholder="One line summary"
                {...register("shortDescription", {
                  required: "Short description is required",
                })}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
              />
              {errors.shortDescription && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.shortDescription.message}
                </p>
              )}
            </div>

            {/* Detailed Description (full width) */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-600">
                Detailed Description *
              </label>
              <textarea
                rows={5}
                placeholder="Explain your idea in detail..."
                {...register("detailedDescription", {
                  required: "Detailed description is required",
                })}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
              />
              {errors.detailedDescription && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.detailedDescription.message}
                </p>
              )}
            </div>

            {/* Category */}
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-600">
                Category *
              </label>
              <select
                {...register("category", { required: "Category is required" })}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
              >
                <option>AI</option>
                <option>Tech</option>
                <option>Health</option>
                <option>Education</option>
                <option>FinTech</option>
                <option>Startup Tools</option>
              </select>
              {errors.category && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.category.message}
                </p>
              )}
            </div>

            {/* Tags */}
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-600">
                Tags
              </label>
              <input
                type="text"
                placeholder="Tags (comma separated)"
                {...register("tags")}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
              />
            </div>

            {/* Image URL (full width) */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-600">
                Cover Image *
              </label>

              <div className="relative">
                <input
                  type="url"
                  onChange={(e) => {
                    e.target.value = e.target.value.trim().replace(/\s/g, "");
                  }}
                  placeholder="https://image-link.com"
                  {...register("coverImage", {
                    required: "Image URL is required",
                    pattern: {
                      value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|webp|svg))$/i,
                      message: "Enter a valid image URL",
                    },
                  })}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 pr-12 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                />

                <ImagePlus className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
              </div>

              {errors.coverImage && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.coverImage.message}
                </p>
              )}
            </div>

            {/* Budget + Audience */}
            <div>
              <input
                type="number"
                placeholder="Estimated Budget"
                {...register("estimatedBudget")}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Target Audience"
                {...register("targetAudience")}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
              />
            </div>
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-600">
                Timeline *
              </label>
              <select
                {...register("timeline", { required: "Category is required" })}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
              >
                <option>3-6 months</option>
                <option>6-12 months</option>
                <option>1-2 years</option>
              </select>
              {errors.timeline && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.timeline.message}
                </p>
              )}
            </div>

            {/* Problem (full width) */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-600">
                Problem Statement *
              </label>
              <textarea
                rows={3}
                placeholder="Describe the main problem..."
                {...register("problemStatement", {
                  required: "Problem Statement is required",
                })}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
              />
              {errors.problemStatement && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.problemStatement.message}
                </p>
              )}
            </div>

            {/* Solution (full width) */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-600">
                Proposed Solution *
              </label>
              <textarea
                rows={3}
                placeholder="Proposed solutions (comma separated)"
                {...register("proposedSolution", {
                  required: "Proposed Solution is required",
                })}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
              />
              {errors.proposedSolution && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.proposedSolution.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full rounded-2xl bg-linear-to-r from-violet-600 to-indigo-600 py-3 font-semibold text-white shadow-lg transition hover:scale-[1.01] hover:shadow-violet-300/40 active:scale-[0.99]"
              >
                Publish Idea 🚀
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default AddIdeaPage;
