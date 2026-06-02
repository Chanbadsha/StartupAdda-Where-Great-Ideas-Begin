"use client";
import { useState } from "react";
import Image from "next/image";

const CommentsInfo = ({ editCommentAction, comment, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(comment?.comment);

  const timeAgo = (date) => {
    // eslint-disable-next-line react-hooks/purity
    const diff = Date.now() - new Date(date).getTime();

    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (minutes < 1) return "Just now";
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return `${days}d ago`;
  };

  const handleSave = async () => {
    await editCommentAction(comment._id, editText);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditText(comment?.comment);
    setIsEditing(false);
  };

  return (
    <div className="rounded-3xl border bg-[#fcfcfc] p-5">
      {/* Top */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex gap-4">
          <Image
            src={comment?.user?.image}
            alt={comment?.user?.name}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full"
          />

          <div>
            <h4 className="font-semibold">{comment?.user?.name}</h4>
            <span
              title={new Date(comment?.createdAt).toLocaleString()}
              className="rounded-full bg-black/5 px-2 py-1 text-[10px] text-black/50"
            >
              {timeAgo(comment?.createdAt)}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="rounded-xl border px-3 py-1.5 text-xs"
            >
              Edit
            </button>
          ) : (
            <>
              <button
                onClick={handleSave}
                className="rounded-xl bg-green-500 px-3 py-1.5 text-xs text-white"
              >
                Save
              </button>

              <button
                onClick={handleCancel}
                className="rounded-xl border px-3 py-1.5 text-xs"
              >
                Cancel
              </button>
            </>
          )}
        </div>
      </div>

      {/* Comment Body */}
      <div className="mt-5">
        {!isEditing ? (
          <p className="text-black/70">{comment?.comment}</p>
        ) : (
          <textarea
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="w-full rounded-xl border p-3 text-sm outline-none focus:border-violet-300"
            rows={3}
          />
        )}
      </div>
    </div>
  );
};

export default CommentsInfo;
