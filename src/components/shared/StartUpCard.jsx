import { Card, Link, Button } from "@heroui/react";
import Image from "next/image";

const StartUpCard = ({ idea }) => {
  const {
    id,
    ideaTitle,
    shortDescription,
    category,
    tags,
    imageURL,
    estimatedBudget,
    targetAudience,
  } = idea;

  return (
    <Card className="w-full rounded-2xl overflow-hidden shadow-md group hover:shadow-xl transition-all duration-300">
      {/* Image Section */}

      <div className="relative h-52 mt-2 overflow-hidden rounded-lg  ">
        <Image
          src={imageURL}
          alt={ideaTitle}
          width={600}
          className="h-full group-hover:scale-110  duration-700 absolute top-0 left-0 w-full rounded-lg bg-cover bg-center"
          height={600}
        ></Image>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        {/* Category + Budget */}
        <div className="flex justify-between items-center">
          <span className="text-xs px-3 py-1 rounded-full bg-purple-100 text-purple-600 font-medium">
            {category}
          </span>

          {estimatedBudget && (
            <span className="text-xs text-gray-500">${estimatedBudget}</span>
          )}
        </div>

        {/* Title */}
        <h2 className="font-outfit text-lg font-semibold text-gray-800">
          {ideaTitle}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-2">{shortDescription}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags?.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Audience */}
        <p className="text-xs text-gray-500"> Target: {targetAudience}</p>

        {/* CTA */}
        <div className="flex justify-between items-center pt-2">
          <Link
            href={`/ideas/${idea.id}`}
            className="text-sm text-purple-600 font-medium hover:underline"
          >
            View Details →
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default StartUpCard;
