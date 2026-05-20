import { GetDataById } from "@/lib/data";
import { Comments } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import { Eye, MessageCircle, ThumbsUp } from "lucide-react";
import Image from "next/image";

const IdeasDetailsPage = async ({ params }) => {
  let { ideaId } = await params;
  const idea = await GetDataById(ideaId);

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
    relatedIdeas,
    createdAt,
    updatedAt,
  } = idea;

  return (
    <div className="container mx-auto">
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
      <main className="grid grid-cols-1  lg:grid-cols-12 gap-4">
        {/* Main Content */}
        <section className="lg:col-span-8 border min-h-screen">
          {/* Author Section */}
          <div className="flex flex-col gap-6 bg-white text-black px-12 py-5 shadow-lg lg:flex-row lg:items-center lg:justify-between">
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
        </section>
        {/* Right Sidebar */}
        <aside className="lg:col-span-4 border h-screen"></aside>
      </main>
    </div>
  );
};

export default IdeasDetailsPage;
