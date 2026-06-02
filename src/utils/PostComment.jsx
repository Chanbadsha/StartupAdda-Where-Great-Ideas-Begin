import { headers } from "next/headers";
import {
  deleteCommentAction,
  editCommentAction,
  postCommentAction,
} from "@/lib/actions";
import { auth } from "@/lib/auth";
import Image from "next/image";
import CommentsInfo from "@/components/shared/CommentsInfo";

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
          required
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
          <CommentsInfo
            deleteCommentAction={deleteCommentAction}
            editCommentAction={editCommentAction}
            key={ind}
            comment={comment}
          ></CommentsInfo>
        ))}
      </div>
    </section>
  );
};

export default PostComment;
