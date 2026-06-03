"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { AlertDialog, Button } from "@heroui/react";
import { useState } from "react";
import toast from "react-hot-toast";
import EditModal from "./EditModal";
export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
    },
  },
};
const MyIdeasPageMainSection = ({
  totalIdeas,
  publishedIdeas,
  draftIdeas,
  ideas,
  deleteIdeaAction,
  editIdeaAction,
}) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const onDelete = async (id) => {
    try {
      setIsDeleting(true);

      await deleteIdeaAction(id);
      toast.success("Idea deleted successfully");
    } catch (err) {
      toast.error("Failed to delete idea");
    } finally {
      setIsDeleting(false);
    }
  };
  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      {/* Stats */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="mb-8 grid gap-4 md:grid-cols-3"
      >
        <motion.div
          variants={cardAnimation}
          whileHover={{ y: -5 }}
          className="rounded-2xl bg-white p-6 shadow-sm"
        >
          <p className="text-sm text-slate-500">Total Ideas</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            {totalIdeas}
          </h2>
        </motion.div>

        <motion.div
          variants={cardAnimation}
          whileHover={{ y: -5 }}
          className="rounded-2xl bg-white p-6 shadow-sm"
        >
          <p className="text-sm text-slate-500">Published</p>
          <h2 className="mt-2 text-3xl font-bold text-emerald-600">
            {publishedIdeas}
          </h2>
        </motion.div>

        <motion.div
          variants={cardAnimation}
          whileHover={{ y: -5 }}
          className="rounded-2xl bg-white p-6 shadow-sm"
        >
          <p className="text-sm text-slate-500">Drafts</p>
          <h2 className="mt-2 text-3xl font-bold text-amber-500">
            {draftIdeas}
          </h2>
        </motion.div>
      </motion.div>

      {/* Search & Action */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
      >
        <input
          type="text"
          placeholder="Search your ideas..."
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-violet-400 md:max-w-md"
        />

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/add-idea"
            className="inline-flex items-center justify-center rounded-xl bg-violet-600 px-5 py-3 font-medium text-white transition hover:bg-violet-700"
          >
            + Create New Idea
          </Link>
        </motion.div>
      </motion.div>

      {/* Ideas */}
      {ideas.length > 0 ? (
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {ideas.map((idea) => (
            <motion.div
              key={idea._id}
              variants={cardAnimation}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
              }}
              className="rounded-3xl bg-white p-6 shadow-sm hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700">
                  {idea.category}
                </span>

                <span
                  className={`rounded-full capitalize px-3 py-1 text-xs font-medium ${
                    idea.status === "Published"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-amber-100 text-amber-700"
                  }`}
                >
                  {idea.status}
                </span>
              </div>

              <h3 className="mt-4 text-xl font-bold text-slate-900">
                {idea.ideaTitle}
              </h3>

              <p className="mt-3 line-clamp-3 text-sm text-slate-600">
                {idea.shortDescription}
              </p>

              <p className="mt-4 text-xs text-slate-400">
                Created: {new Date(idea.createdAt).toLocaleDateString()}
              </p>

              <div className="mt-6  flex gap-3">
                {/* Edit Button */}
                <EditModal editIdeaAction={editIdeaAction} idea={idea} />

                {/* Delete Button + Dialog */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1"
                >
                  <AlertDialog>
                    <Button variant="danger">Delete Idea</Button>

                    <AlertDialog.Backdrop>
                      <AlertDialog.Container>
                        <AlertDialog.Dialog className="sm:max-w-105">
                          <motion.div
                            initial={{ opacity: 0, scale: 0.92, y: 12 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 10 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                          >
                            <AlertDialog.CloseTrigger />

                            {/* Header */}
                            <motion.div
                              initial={{ opacity: 0, y: -8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.05 }}
                            >
                              <AlertDialog.Header>
                                <AlertDialog.Icon status="danger" />
                                <AlertDialog.Heading>
                                  Delete this idea?
                                </AlertDialog.Heading>
                              </AlertDialog.Header>
                            </motion.div>

                            {/* Body */}
                            <motion.div
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 }}
                            >
                              <AlertDialog.Body>
                                <p>
                                  You are about to permanently delete{" "}
                                  <strong>{idea.ideaTitle}</strong>.
                                </p>

                                <p className="mt-2 text-sm text-gray-500">
                                  This action cannot be undone and all
                                  associated data will be removed permanently.
                                </p>
                              </AlertDialog.Body>
                            </motion.div>

                            {/* Footer */}
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.15 }}
                              className="flex gap-2 mt-4"
                            >
                              <Button
                                slot="close"
                                variant="tertiary"
                                disabled={isDeleting}
                              >
                                Cancel
                              </Button>

                              <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <Button
                                  variant="danger"
                                  isLoading={isDeleting}
                                  slot={"close"}
                                  onClick={() => onDelete(idea._id)}
                                >
                                  Delete Idea
                                </Button>
                              </motion.div>
                            </motion.div>
                          </motion.div>
                        </AlertDialog.Dialog>
                      </AlertDialog.Container>
                    </AlertDialog.Backdrop>
                  </AlertDialog>
                </motion.div>
              </div>

              <Link
                href={`/ideas/${idea._id}`}
                className="mt-3 block rounded-xl bg-slate-100 px-4 py-2 text-center text-sm font-medium text-slate-700 transition hover:bg-slate-200"
              >
                View Details
              </Link>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.4,
          }}
          className="rounded-3xl bg-white p-12 text-center shadow-sm"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="mb-4 text-6xl"
          >
            💡
          </motion.div>

          <h3 className="text-2xl font-bold text-slate-900">No Ideas Yet</h3>

          <p className="mt-3 text-slate-600">
            You haven&apos;t created any startup ideas yet. Start sharing your
            next big innovation today.
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/add-idea"
              className="mt-6 inline-flex rounded-xl bg-violet-600 px-6 py-3 font-medium text-white"
            >
              Create Your First Idea
            </Link>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default MyIdeasPageMainSection;
