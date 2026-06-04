"use client";
import toast from "react-hot-toast";

const DeleteComment = ({ comment, deleteCommentAction }) => {
  const handleDelete = async () => {
    try {
      const result = await deleteCommentAction(comment);

      if (result?.result?.deletedCount > 0) {
        toast.success("Comment deleted successfully");
      } else {
        toast("Something went wrong", {
          icon: "❌",
        });
      }
    } catch (error) {
      toast("Failed to delete comment", {
        icon: "❌",
      });
    }
  };
  return (
    <button onClick={handleDelete} className="hover:text-red-500">
      Delete
    </button>
  );
};

export default DeleteComment;
