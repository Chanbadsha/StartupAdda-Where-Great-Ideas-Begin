import { GetAllData, GetDataById } from "@/lib/data";
import { Comments } from "@gravity-ui/icons";
import { Avatar, Badge, Button } from "@heroui/react";
import {
  Bookmark,
  Eye,
  MessageCircle,
  MessageCircleWarning,
  Share,
  Sparkles,
  ThumbsUp,
} from "lucide-react";
import Image from "next/image";

const IdeasDetailsPage = async ({ params }) => {
  let { ideaId } = await params;
  const idea = await GetDataById(ideaId);
  const relatedIdeas = await GetAllData();

  const {
    _id,
    ideaTitle,
    tagline,
    shortDescription,
    detailedDescription,
    category,
    tags,
    problemStatement,
    proposedSolution,
    targetAudience,
    estimatedBudget,
    coverImage,
    gallery,
    creator,
    engagement,
    startupPotential,
    status,
    comments,

    createdAt,
    updatedAt,
  } = idea;

  return (
    <div className="container mx-auto mb-12">
      {/* Heading */}
      <div className=" bg-linear-to-tr from-[#4847d4] to-[#6939d4] text-white px-12 py-16 rounded-lg my-8">
        <section className="space-y-5">
          {/* Category Badge */}
          <span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-white/70 backdrop-blur border border-white/10">
            {category}
          </span>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            {ideaTitle}
          </h1>

          {/* Description */}
          <p className="text-sm md:text-base text-white/60 leading-relaxed max-w-2xl">
            {shortDescription}
          </p>

          {/* Engagement Section */}
          <div className="flex flex-wrap gap-3 pt-2">
            {/* Likes */}
            <div className="flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 border border-white/10 backdrop-blur hover:bg-white/10 transition">
              <ThumbsUp size={16} className="text-violet-400" />
              <span className="text-sm text-white/70">
                <span className="text-white font-medium">
                  {engagement?.likes}
                </span>{" "}
                Upvotes
              </span>
            </div>

            {/* Comments */}
            <div className="flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 border border-white/10 backdrop-blur hover:bg-white/10 transition">
              <MessageCircle size={16} className="text-cyan-400" />
              <span className="text-sm text-white/70">
                <span className="text-white font-medium">
                  {engagement?.comments}
                </span>{" "}
                Comments
              </span>
            </div>

            {/* Views */}
            <div className="flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 border border-white/10 backdrop-blur hover:bg-white/10 transition">
              <Eye size={16} className="text-emerald-400" />
              <span className="text-sm text-white/70">
                <span className="text-white font-medium">
                  {engagement?.views}
                </span>{" "}
                Views
              </span>
            </div>
          </div>
        </section>
      </div>

      {/* Main */}
      <main className="grid grid-cols-1 mt-6  lg:grid-cols-12 gap-4 px-2 ">
        {/* Main Content */}
        <section className="lg:col-span-8 space-y-6">
          {/* Author Section */}
          <div className="flex rounded-lg flex-col gap-6 bg-white text-black px-12 py-5 shadow-lg lg:flex-row lg:items-center lg:justify-between">
            {/* Left: Author Info */}
            <div className="flex gap-4 items-center flex-col md:flex-row">
              {/* Author Image */}
              <div className="shrink-0">
                <Image
                  src={creator?.avatar}
                  alt={creator?.name}
                  width={120}
                  height={120}
                  className="h-24 w-24 rounded-full border-2 border-[#4847d4] p-1 object-cover"
                />
              </div>

              {/* Author Details */}
              <div className="space-y-1">
                <h2 className="text-lg font-semibold text-black">
                  {creator?.name}
                </h2>

                <p className="text-xs text-black/50">{creator?.username}</p>

                <p className="text-sm font-medium text-violet-500">
                  {creator?.role}
                </p>

                <p className="text-sm text-black/60 leading-relaxed max-w-md">
                  {creator?.bio}
                </p>

                <p className="flex items-center gap-1 text-xs text-black/40">
                  📍 {creator?.location}
                </p>
              </div>
            </div>

            {/* Right: Stats + Actions */}
            <div className="flex flex-col gap-4 lg:items-end">
              {/* Stats */}
              <div className="flex gap-6">
                <div className="text-center">
                  <p className="text-xl font-bold">12</p>
                  <span className="text-sm text-black/60">Ideas</span>
                </div>

                <div className="text-center">
                  <p className="text-xl font-bold">4.5k</p>
                  <span className="text-sm text-black/60">Followers</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <Button className="bg-violet-600 text-white hover:bg-violet-700">
                  Follow
                </Button>

                <Button variant="outline">Message</Button>
              </div>
            </div>
          </div>

          {/* Banner Image */}
          <div className="group my-6 relative overflow-hidden rounded-3xl">
            {/* Image */}
            <Image
              src={coverImage}
              width={1200}
              height={800}
              alt={ideaTitle}
              className="h-105 w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-violet-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 z-10 w-full p-8 md:p-10">
              {/* Category */}
              <span className="mb-4 inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-white/70 backdrop-blur-xl">
                {category}
              </span>

              {/* Title */}
              <h3 className="max-w-2xl text-3xl font-bold tracking-tight text-white md:text-5xl">
                {ideaTitle}
              </h3>

              {/* Tagline */}
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
                {tagline}
              </p>
            </div>
          </div>

          {/* Problem Section */}
          <section className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm lg:p-8">
            <div className="mb-5 flex items-center gap-3">
              <Avatar
                color="danger"
                className="h-12 w-12 border border-red-200 bg-red-50"
              >
                <Avatar.Fallback>
                  <MessageCircleWarning className="text-red-500" />
                </Avatar.Fallback>
              </Avatar>

              <div>
                <p className="text-sm font-medium text-red-500">Challenge</p>

                <h2 className="text-2xl font-bold tracking-tight text-black lg:text-4xl">
                  The Problem
                </h2>
              </div>
            </div>

            <p className="max-w-4xl text-base leading-relaxed text-black/70">
              {problemStatement}
            </p>
          </section>

          {/* Solution Section */}
          <section className="rounded-3xl bg-[#f6f4ff] p-6 shadow-sm ring-1 ring-violet-100 lg:p-8">
            <div className="mb-6 flex items-center gap-3">
              <Avatar className="h-12 w-12 border border-violet-200 bg-violet-100">
                <Avatar.Fallback>
                  <Sparkles className="text-violet-600" />
                </Avatar.Fallback>
              </Avatar>

              <div>
                <p className="text-sm font-medium text-violet-500">
                  Innovation
                </p>

                <h2 className="text-2xl font-bold tracking-tight text-black lg:text-4xl">
                  The Solution
                </h2>
              </div>
            </div>

            {/* Solution Points */}
            <ul className="mb-6 grid gap-3">
              {proposedSolution.map((solution, ind) => (
                <li
                  key={ind}
                  className="flex items-start gap-3 rounded-2xl bg-white px-4 py-3 text-sm text-black/70 shadow-sm"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-violet-500"></span>
                  {solution}
                </li>
              ))}
            </ul>

            {/* Detailed Description */}
            <p className="max-w-4xl leading-relaxed text-black/70">
              {detailedDescription}
            </p>
          </section>

          {/* Targeted Audience */}
          <section className="flex flex-col gap-8 rounded-3xl border border-black/5 bg-white p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between lg:p-8">
            {/* Audience */}
            <div className="flex-1">
              {/* Heading */}
              <div className="mb-5">
                <p className="text-sm font-medium text-violet-500">Audience</p>

                <h4 className="text-2xl font-bold tracking-tight text-black lg:text-3xl">
                  Target Audience
                </h4>
              </div>

              {/* Audience Tags */}
              <ul className="flex flex-wrap gap-3">
                {targetAudience.map((Audience, ind) => (
                  <li key={ind}>
                    <span
                      className="
              inline-flex
              rounded-full
              border border-violet-200
              bg-violet-50
              px-4
              py-2
              text-sm
              font-medium
              text-violet-700
              transition-all
              duration-300
              hover:bg-violet-100
            "
                    >
                      {Audience}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Budget */}
            <div className="rounded-3xl bg-gradient-to-br from-violet-600 to-indigo-600 p-6 text-white shadow-lg lg:min-w-[280px]">
              <p className="text-sm font-medium text-white/70">Funding Needs</p>

              <h2 className="mt-2 text-4xl font-bold tracking-tight">
                ${estimatedBudget.amount}
              </h2>

              <p className="mt-1 text-sm text-white/70">
                Estimated budget for launching and scaling the startup idea.
              </p>

              <div className="mt-5 flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3 backdrop-blur-xl">
                <div>
                  <p className="text-xs text-white/60">Funding Stage</p>

                  <p className="font-semibold">
                    {estimatedBudget.fundingStage}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-white/60">Timeline</p>

                  <p className="font-semibold">{estimatedBudget.timeline}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Discussion Sections */}
          {/* Discussion Section */}
          <section className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm lg:p-8">
            {/* Heading */}
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-violet-500">Community</p>

                <h2 className="text-2xl font-bold tracking-tight text-black lg:text-4xl">
                  Discussion & Feedback
                </h2>
              </div>

              <div className="rounded-2xl bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700">
                {comments.length} Comments
              </div>
            </div>

            {/* Add Comment */}
            <div className="mb-8 rounded-3xl border border-black/5 bg-[#fafafa] p-5">
              <textarea
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
            </div>

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
        </section>
        {/* Right Sidebar */}
        <aside className="lg:col-span-4 space-y-6">
          {/* Upvote section */}
          <section className="rounded-[28px] border border-black/5 bg-white p-5 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
            {/* Upvote Button */}
            <button
              className="
      flex w-full items-center justify-center gap-2
      rounded-2xl
      bg-linear-to-r from-indigo-600 to-violet-600
      px-6 py-5
      text-base font-semibold text-white
      shadow-lg
      transition-all duration-300
      hover:scale-[1.02]
      hover:shadow-violet-200
    "
            >
              <span>
                <ThumbsUp />
              </span>{" "}
              Upvote Idea
            </button>

            {/* Actions */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <button
                className="
        flex items-center justify-center gap-2
        rounded-2xl
        border border-black/10
        bg-white
        px-4 py-3
        text-sm font-medium text-black/70
        transition-all duration-300
        hover:bg-black/5
      "
              >
                <span>
                  <Bookmark />
                </span>{" "}
                Bookmark
              </button>

              <button
                className="
        flex items-center justify-center gap-2
        rounded-2xl
        border border-black/10
        bg-white
        px-4 py-3
        text-sm font-medium text-black/70
        transition-all duration-300
        hover:bg-black/5
      "
              >
                <span>
                  <Share />
                </span>{" "}
                Share
              </button>
            </div>

            {/* Divider */}
            <div className="my-6 h-px w-full bg-black/5" />

            {/* Stats */}
            <div className="space-y-5">
              {/* Views */}
              <div className="flex items-center justify-between">
                <p className="text-sm text-black/40">Views</p>

                <p className="font-semibold text-black/80">14,208</p>
              </div>

              {/* Posted */}
              <div className="flex items-center justify-between">
                <p className="text-sm text-black/40">Posted</p>

                <p className="font-semibold text-black/80">Oct 12, 2023</p>
              </div>

              {/* Impact */}
              <div className="flex items-center justify-between">
                <p className="text-sm text-black/40">Impact Score</p>

                <p className="font-bold text-indigo-600">9.4/10</p>
              </div>
            </div>
          </section>

          {/* Related Ideas */}
          <section className="rounded-[28px] border border-black/5 bg-white p-5 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
            {/* Heading */}
            <div className="mb-5">
              <h2 className="text-2xl font-bold tracking-tight text-black">
                Related Ideas
              </h2>

              <p className="mt-1 text-sm text-black/50">
                Similar startup concepts you may like
              </p>
            </div>

            {/* Related Ideas List */}
            <div className="space-y-4">
              {relatedIdeas.map((idea, ind) => (
                <div
                  key={ind}
                  className="
          group
          flex gap-4
          rounded-2xl
          border border-black/5
          bg-[#fafafa]
          p-3
          transition-all duration-300
          hover:border-violet-200
          hover:bg-violet-50/40
          hover:shadow-md
        "
                >
                  {/* Thumbnail */}
                  <div
                    className="
            flex h-16 w-16 shrink-0 items-center justify-center
            rounded-2xl
            bg-linear-to-br from-violet-500 to-indigo-600
            text-white
            shadow-sm
          "
                  >
                    <Image
                      src={idea?.coverImage}
                      alt={idea?.ideaTitle}
                      width={100}
                      height={100}
                      className="h-full w-full rounded-2xl object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col justify-center">
                    <h3
                      className="
              line-clamp-1
              text-sm font-semibold text-black
              transition-colors duration-300
              group-hover:text-violet-700
            "
                    >
                      {idea?.title}
                    </h3>

                    <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-black/50">
                      {idea?.shortDescription}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </aside>
      </main>
    </div>
  );
};

export default IdeasDetailsPage;
