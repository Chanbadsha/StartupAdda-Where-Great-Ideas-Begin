import Image from "next/image";

const CommentsInfo = ({ comment }) => {
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
  return (
    <div
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
            src={comment?.user?.image || "https://ibb.co.com/zVJ88zFV"}
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
              {timeAgo(comment?.createdAt)}
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
      <p className="mt-5 leading-relaxed text-black/70">{comment?.comment}</p>

      {/* Bottom */}
      <div className="mt-5 flex items-center gap-5">
        {/* <button className="text-sm font-medium ">{comment?.likes} Likes</button> */}

        <button className="text-sm text-black/50 transition hover:text-black">
          Likes
        </button>
        <button className="text-sm text-black/50 transition hover:text-black">
          Reply
        </button>
      </div>
    </div>
  );
};

export default CommentsInfo;
