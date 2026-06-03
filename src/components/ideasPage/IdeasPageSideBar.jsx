import Image from "next/image";

const IdeasPageSideBar = () => {
  return (
    <aside className="lg:col-span-4">
      <div className="lg:sticky top-24 space-y-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
        {/* Trending Categories */}
        <div className="bg-white/70 backdrop-blur-lg border border-gray-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-outfit text-lg font-semibold text-gray-900">
              Trending Categories
            </h3>

            <span className="text-xs text-purple-600 font-medium">Popular</span>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-sm hover:scale-105 transition">
              AI
            </span>

            <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm hover:scale-105 transition">
              SaaS
            </span>

            <span className="px-3 py-1 rounded-full bg-green-100 text-green-600 text-sm hover:scale-105 transition">
              FinTech
            </span>

            <span className="px-3 py-1 rounded-full bg-pink-100 text-pink-600 text-sm hover:scale-105 transition">
              EdTech
            </span>

            <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-sm hover:scale-105 transition">
              HealthTech
            </span>

            <span className="px-3 py-1 rounded-full bg-cyan-100 text-cyan-600 text-sm hover:scale-105 transition">
              Robotics
            </span>
          </div>
        </div>

        {/* Trending Ideas */}
        <div className="bg-white/70 backdrop-blur-lg border border-gray-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-outfit text-lg font-semibold text-gray-900">
              Trending Ideas
            </h3>

            <span className="text-xs text-orange-500 font-medium">Hot 🔥</span>
          </div>

          <div className="space-y-4">
            {/* Idea Item */}
            <div className="group cursor-pointer">
              <h4 className="text-sm font-semibold text-gray-800 group-hover:text-purple-600 transition">
                AI Resume Builder for Developers
              </h4>

              <div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
                <span>💬 128</span>
                <span>❤️ 540</span>
              </div>
            </div>

            {/* Idea Item */}
            <div className="group cursor-pointer">
              <h4 className="text-sm font-semibold text-gray-800 group-hover:text-purple-600 transition">
                Smart Agriculture Monitoring System
              </h4>

              <div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
                <span>💬 89</span>
                <span>❤️ 320</span>
              </div>
            </div>

            {/* Idea Item */}
            <div className="group cursor-pointer">
              <h4 className="text-sm font-semibold text-gray-800 group-hover:text-purple-600 transition">
                AI Study Assistant for Students
              </h4>

              <div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
                <span>💬 214</span>
                <span>❤️ 870</span>
              </div>
            </div>
          </div>
        </div>

        {/* Top Creators */}
        <div className="bg-white/70 backdrop-blur-lg border border-gray-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-outfit text-lg font-semibold text-gray-900">
              Top Creators
            </h3>

            <button className="text-sm text-purple-600 hover:underline">
              View All
            </button>
          </div>

          <div className="space-y-4">
            {/* Creator */}
            <div className="flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-3">
                <Image
                  width={600}
                  height={600}
                  src="https://i.pravatar.cc/100?img=1"
                  alt="creator"
                  className="w-11 h-11 rounded-full object-cover"
                />

                <div>
                  <h4 className="text-sm font-semibold text-gray-800 group-hover:text-purple-600 transition">
                    Sarah Khan
                  </h4>

                  <p className="text-xs text-gray-500">AI & SaaS Innovator</p>
                </div>
              </div>

              <span className="text-xs font-medium text-purple-600">
                24 Ideas
              </span>
            </div>

            {/* Creator */}
            <div className="flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-3">
                <Image
                  width={600}
                  height={600}
                  src="https://i.pravatar.cc/100?img=2"
                  alt="creator"
                  className="w-11 h-11 rounded-full object-cover"
                />

                <div>
                  <h4 className="text-sm font-semibold text-gray-800 group-hover:text-purple-600 transition">
                    David Lee
                  </h4>

                  <p className="text-xs text-gray-500">FinTech Builder</p>
                </div>
              </div>

              <span className="text-xs font-medium text-purple-600">
                18 Ideas
              </span>
            </div>

            {/* Creator */}
            <div className="flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-3">
                <Image
                  width={600}
                  height={600}
                  src="https://i.pravatar.cc/100?img=3"
                  alt="creator"
                  className="w-11 h-11 rounded-full object-cover"
                />

                <div>
                  <h4 className="text-sm font-semibold text-gray-800 group-hover:text-purple-600 transition">
                    Alex Morgan
                  </h4>

                  <p className="text-xs text-gray-500">Startup Strategist</p>
                </div>
              </div>

              <span className="text-xs font-medium text-purple-600">
                15 Ideas
              </span>
            </div>
          </div>
        </div>
        {/* Community Stats */}
        <div className="bg-linear-to-br from-[#291ef1] to-[#544dd3] rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
          {/* Glow */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h3 className="font-outfit text-xl font-semibold">
              Startup Community
            </h3>

            <p className="text-sm text-gray-200 mt-2 leading-relaxed">
              Join innovators sharing ideas and building the future together.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div>
                <h4 className="text-2xl font-bold">2.4K+</h4>
                <p className="text-xs text-gray-200">Ideas Shared</p>
              </div>

              <div>
                <h4 className="text-2xl font-bold">950+</h4>
                <p className="text-xs text-gray-200">Innovators</p>
              </div>

              <div>
                <h4 className="text-2xl font-bold">12K+</h4>
                <p className="text-xs text-gray-200">Comments</p>
              </div>

              <div>
                <h4 className="text-2xl font-bold">85+</h4>
                <p className="text-xs text-gray-200">Categories</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default IdeasPageSideBar;
