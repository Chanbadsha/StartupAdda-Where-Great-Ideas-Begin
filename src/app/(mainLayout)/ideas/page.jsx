import { Button, Input, Label, ListBox, Select } from "@heroui/react";
import { Search } from "lucide-react";
import { ChevronsExpandVertical } from "@gravity-ui/icons";
import Image from "next/image";
import { Suspense } from "react";
import IdeasList from "@/utils/IdeaList";
import CardLoadings from "@/utils/UiLoading";
const categories = [
  { id: "ai", textValue: "AI" },
  { id: "saas", textValue: "SaaS" },
  { id: "fintech", textValue: "FinTech" },
  { id: "healthtech", textValue: "HealthTech" },
  { id: "edtech", textValue: "EdTech" },
  { id: "ecommerce", textValue: "E-commerce" },
  { id: "greentech", textValue: "GreenTech" },
  { id: "blockchain", textValue: "Blockchain" },
  { id: "web3", textValue: "Web3" },
  { id: "cybersecurity", textValue: "Cybersecurity" },
  { id: "productivity", textValue: "Productivity" },
  { id: "social", textValue: "Social Media" },
  { id: "devtools", textValue: "Developer Tools" },
  { id: "logistics", textValue: "Logistics" },
  { id: "travel", textValue: "TravelTech" },
  { id: "foodtech", textValue: "FoodTech" },
  { id: "gaming", textValue: "Gaming" },
  { id: "automation", textValue: "AI Automation" },
  { id: "realestate", textValue: "Real Estate" },
  { id: "other", textValue: "Other" },
];
const IdeasPage = async () => {
  return (
    <div className="container px-4 mx-auto pb-12">
      {/* Heading */}
      <div className="flex flex-col items-center text-center justify-center mt-10 md:mt-16 xl:mt-24 px-4">
        {/* Badge */}
        <span className="px-4 py-1 text-xs md:text-sm font-medium text-purple-600 bg-purple-100 rounded-full">
          🚀 Startup Ideas Platform
        </span>
        {/* Title */}
        <h2 className="font-outfit font-bold mt-5 text-3xl md:text-5xl xl:text-6xl leading-tight tracking-tight text-gray-900">
          Find Your Next Big Idea
        </h2>
        {/* Description */}
        <p className="my-4 text-sm md:text-base xl:text-lg text-gray-600 max-w-2xl leading-relaxed">
          Browse trending startup ideas, spark inspiration, and turn creativity
          into real-world products that solve real problems.
        </p>
      </div>
      {/* Search and Filter Section */}
      <div className="max-w-5xl mx-auto">
        <div
          className="flex flex-col md:flex-row items-stretch md:items-center gap-3 
    bg-white/70 backdrop-blur-lg border border-gray-200 
    rounded-2xl shadow-sm px-4 py-3"
        >
          {/* Search */}
          <div className="flex items-center gap-2 w-full md:flex-1">
            <Search className="text-gray-500" />

            <Input
              aria-label="Search ideas"
              className="w-full bg-transparent outline-none"
              placeholder="Search startup ideas, keywords..."
            />
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-8 bg-gray-200" />

          {/* Filter */}
          <div className="w-full md:w-auto">
            <Select placeholder="Category">
              <Select.Trigger className="bg-transparent border-none shadow-none">
                <Select.Value />
                <Select.Indicator className="size-3 text-gray-500">
                  <ChevronsExpandVertical />
                </Select.Indicator>
              </Select.Trigger>

              <Select.Popover className="rounded-xl shadow-lg border border-gray-100">
                <ListBox>
                  {categories.slice(0, 6).map((category) => (
                    <ListBox.Item
                      key={category.id}
                      id={category.id}
                      textValue={category.textValue}
                    >
                      {category.textValue}
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  ))}
                </ListBox>
              </Select.Popover>
            </Select>
          </div>

          {/* Sort */}
          <div className="w-full md:w-auto">
            <Select placeholder="Sort by">
              <Select.Trigger className="bg-transparent border-none shadow-none">
                <Select.Value />
                <Select.Indicator className="size-3 text-gray-500">
                  <ChevronsExpandVertical />
                </Select.Indicator>
              </Select.Trigger>

              <Select.Popover className="rounded-xl shadow-lg border border-gray-100">
                <ListBox>
                  <ListBox.Item id="asc" textValue="asc">
                    Oldest first
                    <ListBox.ItemIndicator />
                  </ListBox.Item>

                  <ListBox.Item id="dsc" textValue="dsc">
                    Newest first
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>
          </div>

          {/* Search Button */}
          <div className="w-full md:w-auto">
            <Button className="w-full md:w-auto bg-gradient-to-tr from-[#291ef1] to-[#544dd3] text-white px-6 py-2 rounded-xl hover:scale-[1.03] transition-all duration-300">
              Search
            </Button>
          </div>
        </div>
      </div>

      <main className="grid  grid-cols-1 lg:grid-cols-12 gap-8 mt-10">
        {/* Card Container */}
        <section className="lg:col-span-8">
          <Suspense fallback={<CardLoadings />}>
            <IdeasList />
          </Suspense>
        </section>

        {/* Sidebar */}
        <aside className="lg:col-span-4">
          <div className="lg:sticky top-24 space-y-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
            {/* Trending Categories */}
            <div className="bg-white/70 backdrop-blur-lg border border-gray-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-outfit text-lg font-semibold text-gray-900">
                  Trending Categories
                </h3>

                <span className="text-xs text-purple-600 font-medium">
                  Popular
                </span>
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

                <span className="text-xs text-orange-500 font-medium">
                  Hot 🔥
                </span>
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

                      <p className="text-xs text-gray-500">
                        AI & SaaS Innovator
                      </p>
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

                      <p className="text-xs text-gray-500">
                        Startup Strategist
                      </p>
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
                  Join innovators sharing ideas and building the future
                  together.
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
      </main>
    </div>
  );
};

export default IdeasPage;
