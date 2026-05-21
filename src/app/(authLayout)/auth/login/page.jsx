"use client";

import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { Eye, EyeOff, Lightbulb, Users, Rocket } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const { data: userData, error } = await authClient.signIn.email({
      email: data?.email,
      password: data?.password,
      rememberMe: true,
      callbackURL: "http://localhost:3000/",
    });
    console.log(userData, error);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-50">
      {/* Background Blur */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      <div className="container mx-auto grid min-h-screen lg:grid-cols-2">
        {/* Left Side */}
        <section className="hidden flex-col justify-center px-10 lg:flex">
          <span className="mb-6 w-fit rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700">
            Welcome Back to StartupAdda
          </span>

          <h1 className="max-w-xl text-5xl font-bold leading-tight text-slate-900">
            Continue Your Journey of Building Startups
          </h1>

          <p className="mt-6 max-w-lg text-lg text-slate-600">
            Login to explore innovative startup ideas, connect with founders,
            and contribute to a growing community of creators.
          </p>

          <div className="mt-10 space-y-5">
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-violet-100 p-3">
                <Lightbulb className="text-violet-600" />
              </div>
              <div>
                <h3 className="font-semibold">Discover Ideas</h3>
                <p className="text-sm text-slate-500">
                  Explore trending startup concepts.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-cyan-100 p-3">
                <Users className="text-cyan-600" />
              </div>
              <div>
                <h3 className="font-semibold">Join Community</h3>
                <p className="text-sm text-slate-500">
                  Connect with innovators worldwide.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-emerald-100 p-3">
                <Rocket className="text-emerald-600" />
              </div>
              <div>
                <h3 className="font-semibold">Build Faster</h3>
                <p className="text-sm text-slate-500">
                  Turn ideas into real products.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Right Side */}
        <section className="flex items-center justify-center p-6">
          <div className="w-full max-w-xl rounded-3xl border border-white/20 bg-white/80 p-8 shadow-2xl backdrop-blur-xl">
            {/* Header */}
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-slate-900">Login</h2>
              <p className="mt-2 text-sm text-slate-500">
                Welcome back! Please enter your details
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  {...register("email", {
                    required: "Email is required",
                  })}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-violet-500"
                />

                {errors.email && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Password
                </label>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    {...register("password", {
                      required: "Password is required",
                    })}
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 pr-12 outline-none transition focus:border-violet-500"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>

                {errors.password && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Forgot Password */}
              <div className="text-right">
                <Link
                  href="/auth/forget-password"
                  className="text-sm text-violet-600 hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 py-3 font-medium text-white transition hover:opacity-90"
              >
                Login
              </button>

              {/* Divider */}
              <div className="relative py-2">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t" />
                </div>

                <div className="relative flex justify-center">
                  <span className="bg-white px-4 text-sm text-slate-500">
                    OR
                  </span>
                </div>
              </div>

              {/* Google Login */}
              <button
                type="button"
                className="flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 py-3 font-medium transition hover:bg-slate-50"
              >
                <FcGoogle size={22} />
                Continue with Google
              </button>
            </form>

            {/* Register Link */}
            <p className="mt-8 text-center text-sm text-slate-500">
              Don’t have an account?{" "}
              <Link
                href="/auth/register"
                className="font-semibold text-violet-600 hover:underline"
              >
                Create Account
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default LoginPage;
