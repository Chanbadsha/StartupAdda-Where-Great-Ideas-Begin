export default function NoData() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center container mx-auto px-6 w-full">
      <div
        className="
        max-w-6xl
          relative overflow-hidden
          w-full
          rounded-[32px]
          border border-white/10
          bg-white/5
          backdrop-blur-2xl
          p-10
          text-black
          text-center
    
          shadow-2xl
        "
      >
        {/* Gradient Blur */}
        <div className="absolute  -top-20 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl" />

        {/* Icon */}
        <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-10 w-10 text-violet-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5m-16.5 5.25h16.5m-16.5 5.25h9"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="relative flex flex-col justify-center  items-center">
          <h2 className="text-3xl font-bold tracking-tight text-black">
            No Ideas Found
          </h2>

          <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-black/60">
            Looks like there are no startup ideas available right now. Explore
            later or become the first creator to share an innovative idea with
            the community.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4 sm:flex-row">
            <button
              className="
                rounded-2xl
                bg-linear-to-r
                from-violet-500
                to-cyan-500
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                shadow-lg
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-violet-500/30
              "
            >
              Explore Ideas
            </button>

            <button
              className="
                rounded-2xl
                border border-black/10
                bg-white/5
                px-6
                py-3
                text-sm
                font-medium
                text-black/80
                backdrop-blur-xl
                transition-all
                duration-300
                hover:bg-white/10
              "
            >
              Add New Idea
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
