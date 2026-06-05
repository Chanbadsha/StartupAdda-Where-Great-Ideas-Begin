"use client";

import { useState } from "react";
import Link from "next/link";
import { Button, Input, Label } from "@heroui/react";
import { motion } from "motion/react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { redirect } from "next/navigation";
import Loading from "@/app/loading";

const DashboardPage = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const [name, setName] = useState(user?.name || "");
  const [image, setImage] = useState(user?.image || "");
  const [loading, setLoading] = useState(false);
  if (isPending) {
    return <Loading />;
  }

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleUpdate = async () => {
    try {
      setLoading(true);
      if (image.length == 0 && name.length == 0) {
        return toast("Please provide a name or profile image to update.");
      }
      if (image.length > 0) {
        if (!isValidUrl(image)) {
          toast.error("Please enter a valid image URL");
          return;
        }
        await authClient.updateUser({
          image: image,
        });
      }
      if (name.length > 0) {
        await authClient.updateUser({
          name: name,
        });
      }
      toast.success("Profile updated successfully");
    } catch {
      toast("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-slate-900">Dashboard</h1>
        <p className="mt-2 text-slate-600">
          Manage your profile, ideas, and activity in one place
        </p>
      </motion.div>

      {/* Quick Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-10 grid gap-6 md:grid-cols-2"
      >
        <Link href="/my-ideas">
          <div className="group rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-lg">
            <h2 className="text-xl font-semibold text-slate-900">My Ideas</h2>
            <p className="mt-2 text-sm text-slate-600">
              View, edit, and manage all startup ideas you have created.
            </p>

            <p className="mt-4 text-sm font-medium text-violet-600 group-hover:underline">
              Go to My Ideas →
            </p>
          </div>
        </Link>

        <Link href="/my-interactions">
          <div className="group rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-lg">
            <h2 className="text-xl font-semibold text-slate-900">
              My Interactions
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Track your comments, feedback, and engagement on ideas.
            </p>

            <p className="mt-4 text-sm font-medium text-violet-600 group-hover:underline">
              View Activity →
            </p>
          </div>
        </Link>
      </motion.div>

      {/* Profile Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mt-12 mx-auto max-w-2xl rounded-3xl border bg-white p-8 shadow-sm"
      >
        <h2 className="text-2xl font-semibold text-slate-900">
          Profile Settings
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Update your personal information
        </p>

        {/* Avatar */}
        <div className="mt-6 flex flex-col items-center text-center">
          <Image
            src={user?.image || "https://ibb.co.com/C9pf7XF"}
            alt="profile"
            width={600}
            height={600}
            className="h-24 w-24 rounded-full object-cover"
          />
        </div>

        {/* Form */}
        <div className="mt-8 space-y-5">
          <div>
            <Label>Full Name</Label>
            <Input
              defaultValue={user?.name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>

          <div>
            <Label>Profile Image URL</Label>
            <Input
              onChange={(e) => setImage(e.target.value)}
              placeholder="Paste image URL"
            />
          </div>

          <div>
            <Label>Email</Label>
            <Input value={user?.email} disabled />
          </div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              onClick={handleUpdate}
              isLoading={loading}
              className="w-full bg-linear-to-r from-[#160beb] to-[#544dd3] text-white"
            >
              Update Profile
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default DashboardPage;
