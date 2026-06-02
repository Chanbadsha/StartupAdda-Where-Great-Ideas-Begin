import { headers } from "next/headers";
import { postCommentAction } from "@/lib/actions";
import { auth } from "@/lib/auth";
import Image from "next/image";

const PostComment = async ({ comments, id }) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;
  const commentInfo = {
    userId: user?.id,
    postId: id,
  };

  const postCommentActionWrapper = async (formData) => {
    "use server";
    return postCommentAction(commentInfo, formData);
  };
  return (
    <section>
      {/* Add Comment */}
      <form
        action={postCommentActionWrapper}
        className="mb-8 rounded-3xl border border-black/5 bg-[#fafafa] p-5"
      >
        <textarea
          name="comment"
          id="comment"
          placeholder="Share your thoughts about this startup idea..."
          className="
        min-h-30
        w-full
        resize-none
        rounded-2xl
        border border-black/10
        bg-white
        p-4
        text-sm
        outline-none
        transition-all
        focus:border-violet-400
        focus:ring-4
        focus:ring-violet-100
      "
        />

        <div className="mt-4 flex justify-end">
          <button
            type="submit"
            className="
          rounded-2xl
          bg-violet-600
          px-6
          py-3
          text-sm
          font-medium
          text-white
          transition-all
          duration-300
          hover:bg-violet-700
        "
          >
            Post Comment
          </button>
        </div>
      </form>

      {/* Comments */}
      <div className="space-y-5">
        {comments.map((comment, ind) => (
          <div
            key={ind}
            className="
          rounded-3xl
          border border-black/5
          bg-[#fcfcfc]
          p-5
          transition-all
          duration-300
          hover:border-violet-200
          hover:shadow-md
        "
          >
            {/* Top */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex gap-4">
                {/* Avatar */}
                <Image
                  src={comment?.user?.avatar}
                  alt={comment?.user?.name}
                  width={600}
                  height={600}
                  className="h-12 w-12 rounded-full object-cover"
                />

                {/* Info */}
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="font-semibold text-black">
                      {comment?.user?.name}
                    </h4>

                    <span className="rounded-full bg-violet-50 px-2 py-1 text-xs font-medium text-violet-600">
                      {comment?.user?.role}
                    </span>
                  </div>

                  <p className="mt-1 text-xs text-black/40">
                    {comment?.createdAt}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <button
                  className="
                rounded-xl
                border border-black/10
                px-3
                py-1.5
                text-xs
                text-black/60
                transition-all
                hover:bg-black/5
              "
                >
                  Edit
                </button>

                <button
                  className="
                rounded-xl
                border border-red-100
                px-3
                py-1.5
                text-xs
                text-red-500
                transition-all
                hover:bg-red-50
              "
                >
                  Delete
                </button>
              </div>
            </div>

            {/* Comment */}
            <p className="mt-5 leading-relaxed text-black/70">
              {comment?.comment}
            </p>

            {/* Bottom */}
            <div className="mt-5 flex items-center gap-5">
              <button className="text-sm font-medium text-violet-600 transition hover:text-violet-700">
                👍 {comment?.likes} Likes
              </button>

              <button className="text-sm text-black/50 transition hover:text-black">
                Reply
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PostComment;
