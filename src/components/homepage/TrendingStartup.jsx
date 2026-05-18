import { MoveRight } from "lucide-react";
import Link from "next/link";
import startUpIdea from "@/../public/startup.json";
import StartUpCard from "../shared/StartUpCard";
const TrendingStartup = () => {
  return (
    <div className="container mx-auto my-12">
      {/* Header Section */}
      <div className="flex-col md:flex-row leading-relaxed flex justify-between md:items-center gap-3">
        <div>
          <h2 className="font-outfit text-2xl lg:text-3xl font-semibold xl:text-4xl">
            Trending Startup Ideas
          </h2>
          <p className="xl:text-lg md:text-base text-sm font-light mt-1">
            Top-rated concepts from the community this week
          </p>
        </div>
        <Link
          className="flex text-sm lg:text-lg justify-end pr-2 items-center gap-1"
          href={"#"}
        >
          View All Ideas
          <MoveRight width={16} />
        </Link>
      </div>

      {/* Startup containers */}
      <div className="grid mt-4 grid-cols-3 grid-rows-2  gap-12">
        {startUpIdea.map((idea, ind) => (
          <StartUpCard key={ind} idea={idea} />
        ))}
      </div>
    </div>
  );
};

export default TrendingStartup;
