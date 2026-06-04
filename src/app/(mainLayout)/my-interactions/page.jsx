import { deleteCommentAction } from "@/lib/actions";
import { auth } from "@/lib/auth";
import { GetCommentById } from "@/lib/data";
import DeleteComment from "@/utils/DeleteComment";
import { headers } from "next/headers";
import Link from "next/link";

const MyInteractionsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const userId = session?.user?.id;

  const comment = await GetCommentById(userId);

  const isEmpty = comment.length === 0;

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">My Interactions</h1>
          <p className="text-sm text-slate-500">
            Private activity: comments on startup ideas
          </p>
        </div>

        {/* Empty State */}
        {isEmpty ? (
          <div className="rounded-xl border bg-white p-10 text-center">
            <h2 className="text-lg font-semibold text-slate-800">
              No interactions yet
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Start exploring ideas and leave your first comment.
            </p>

            <Link
              href="/ideas"
              className="mt-4 inline-block rounded-lg bg-violet-600 px-4 py-2 text-sm text-white hover:bg-violet-700"
            >
              Explore Ideas
            </Link>
          </div>
        ) : (
          /* Comments List */
          <div className="space-y-4">
            {comment?.map((item) => (
              <div
                key={item._id}
                className="rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                {/* Top Row */}
                <div className="flex items-center justify-between">
                  <Link
                    href={`/ideas/${item._id}`}
                    className="text-sm font-semibold text-slate-900 hover:text-violet-600"
                  >
                    {item.ideaTitle}
                  </Link>

                  <span className="text-xs text-slate-400">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </span>
                </div>

                {/* Comment */}
                <p className="mt-2 text-sm text-slate-600">{item.comment}</p>

                {/* Actions */}
                <div className="mt-3 flex gap-4 text-xs text-slate-500">
                  <Link
                    href={`/ideas/${item.postId}`}
                    className="hover:text-violet-600"
                  >
                    View Idea
                  </Link>

                  <DeleteComment
                    deleteCommentAction={deleteCommentAction}
                    comment={item}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyInteractionsPage;
