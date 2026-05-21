"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
// import { FcGoogle } from "react-icons/fc";
import { Eye, EyeOff, Lightbulb, Rocket, Users } from "lucide-react";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const { data: userData, error } = await authClient.signUp.email({
      name: data?.fullName,
      email: data?.email,
      password: data?.password,
      image: data?.imageUrl,
      callbackURL: "http://localhost:3000/auth/login",
    });
    console.log(userData, error);
  };

  // watch input value by passing the name of it
  const password = watch("password");
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
            Join StartupAdda Today
          </span>

          <h1 className="max-w-xl text-5xl font-bold leading-tight text-slate-900">
            Turn Your Ideas Into The Next Big Startup
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-600">
            Share innovative startup ideas, receive community feedback,
            collaborate with creators, and discover the next generation of
            groundbreaking businesses.
          </p>

          <div className="mt-10 space-y-5">
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-violet-100 p-3">
                <Lightbulb className="text-violet-600" />
              </div>
              <div>
                <h3 className="font-semibold">Share Startup Ideas</h3>
                <p className="text-sm text-slate-500">
                  Publish and validate your business concepts.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-cyan-100 p-3">
                <Users className="text-cyan-600" />
              </div>
              <div>
                <h3 className="font-semibold">Build Community</h3>
                <p className="text-sm text-slate-500">
                  Connect with founders and innovators worldwide.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-emerald-100 p-3">
                <Rocket className="text-emerald-600" />
              </div>
              <div>
                <h3 className="font-semibold">Launch Faster</h3>
                <p className="text-sm text-slate-500">
                  Get feedback before investing time and money.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Right Side */}
        <section className="flex items-center justify-center p-6 ">
          <div className="w-full  rounded-3xl border border-white/20 bg-white/80 p-8 shadow-2xl backdrop-blur-xl">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-slate-900">
                Create Account
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Start sharing startup ideas and connect with innovators.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-1">
              {/* Full Name */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  {...register("fullName", { required: true, maxLength: 20 })}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-violet-500"
                />
                {errors.fullName?.type === "required" && (
                  <p
                    role="alert"
                    className="mt-1 text-sm font-medium text-red-500"
                  >
                    Full name is required
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter  Your Email"
                  {...register("email", { required: true, maxLength: 40 })}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-violet-500"
                />
                {errors.email?.type === "required" && (
                  <p
                    role="alert"
                    className="mt-1 text-sm font-medium text-red-500"
                  >
                    Email is required
                  </p>
                )}
              </div>

              {/* Image URL */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Profile Image URL
                </label>
                <input
                  type="url"
                  {...register("imageUrl", { required: true })}
                  placeholder="https://example.com/profile.jpg"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-violet-500"
                />
                {errors.imageUrl?.type === "required" && (
                  <p
                    role="alert"
                    className="mt-1 text-sm font-medium text-red-500"
                  >
                    ImageUrl is required
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
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                      pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z]).+$/,
                        message:
                          "Password must contain at least one uppercase and one lowercase letter",
                      },
                    })}
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    className={`w-full rounded-2xl border px-4 py-3 pr-12 outline-none transition ${
                      errors.password
                        ? "border-red-500 focus:border-red-500"
                        : "border-slate-200 focus:border-violet-500"
                    }`}
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
                  <p
                    role="alert"
                    className="mt-2 text-sm font-medium text-red-500"
                  >
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Confirm Password
                </label>

                <div className="relative">
                  <input
                    {...register("confirmPassword", {
                      required: "Please confirm your password",
                      validate: (value) =>
                        value === password || "Passwords do not match",
                    })}
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm password"
                    className={`w-full rounded-2xl border px-4 py-3 pr-12 outline-none transition ${
                      errors.confirmPassword
                        ? "border-red-500 focus:border-red-500"
                        : "border-slate-200 focus:border-violet-500"
                    }`}
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>

                {errors.confirmPassword && (
                  <p
                    role="alert"
                    className="mt-2 flex items-center gap-1 text-sm font-medium text-red-500"
                  >
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              {/* Password Rules */}
              <div className="rounded-2xl bg-slate-100 p-4 text-sm text-slate-600">
                <p>✓ Minimum 6 characters</p>
                <p>✓ One uppercase letter</p>
                <p>✓ One lowercase letter</p>
              </div>

              {/* Register Button */}
              <button
                type="submit"
                className="w-full rounded-2xl bg-linear-to-r from-violet-600 to-indigo-600 py-3 font-medium text-white transition hover:opacity-90"
              >
                Create Account
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
                {/* <FcGoogle size={22} /> */}
                Continue with Google
              </button>
            </form>

            {/* Login Link */}
            <p className="mt-8 text-center text-sm text-slate-500">
              Already have an account?{" "}
              <Link
                href="/auth/login"
                className="font-semibold text-violet-600 hover:underline"
              >
                Sign In
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default RegisterPage;
