"use client";

import Link from "next/link";
import { Mail, ArrowLeft } from "lucide-react";
import { useForm } from "react-hook-form";

const ForgetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50">
      {/* Background Blur */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      {/* Card */}
      <div className="w-full max-w-md rounded-3xl border border-white/20 bg-white/80 p-8 shadow-2xl backdrop-blur-xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            Forgot Password?
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Enter your email and we’ll send you reset instructions
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Email Address
            </label>

            <div className="relative">
              <input
                type="email"
                placeholder="you@example.com"
                {...register("email", {
                  required: "Email is required",
                })}
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 pr-12 outline-none transition focus:border-violet-500"
              />

              <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
            </div>

            {errors.email && (
              <p className="mt-2 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-2xl bg-linear-to-r from-violet-600 to-indigo-600 py-3 font-medium text-white transition hover:opacity-90"
          >
            Send Reset Link
          </button>
        </form>

        {/* Back to Login */}
        <div className="mt-6 text-center">
          <Link
            href="/auth/login"
            className="inline-flex items-center gap-2 text-sm font-medium text-violet-600 hover:underline"
          >
            <ArrowLeft size={16} />
            Back to Login
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ForgetPassword;
