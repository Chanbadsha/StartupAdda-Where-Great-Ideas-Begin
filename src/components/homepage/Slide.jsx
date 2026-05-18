import { Button } from "@heroui/react";
import Link from "next/link";

const Slide = ({ slideData }) => {
  const { title, description, cta, href, image, badge } = slideData;

  return (
    <div
      className="mt-3 relative w-full h-105 md:h-130 lg:h-150 xl:h-160 flex items-center rounded-3xl overflow-hidden px-6 md:px-12"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-black/20" />

      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-600/30 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full" />

      {/* Content */}
      <div className="relative z-10 max-w-2xl space-y-5">
        <span className="inline-block px-3 py-1 text-xs md:text-sm bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white">
          {badge}
        </span>

        <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">
          {title}
        </h2>

        <p className="text-sm md:text-lg text-gray-200 leading-relaxed max-w-lg">
          {description}
        </p>

        <Link href={href}>
          <Button className="bg-linear-to-tr from-[#291ef1] to-[#544dd3] text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-300">
            {cta}
          </Button>
        </Link>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-black/40 to-transparent" />
    </div>
  );
};

export default Slide;
