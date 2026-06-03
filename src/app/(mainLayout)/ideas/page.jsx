import { Button, Input, Label, ListBox, Select } from "@heroui/react";
import { Search } from "lucide-react";
import { ChevronsExpandVertical } from "@gravity-ui/icons";
import Image from "next/image";
import { Suspense } from "react";
import IdeasList from "@/utils/IdeaList";
import CardLoadings from "@/utils/UiLoading";
import IdeasHeading from "@/components/ideasPage/IdeasHeading";
import IdeasPageSideBar from "@/components/ideasPage/IdeasPageSideBar";
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
      <IdeasHeading />
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
        <IdeasPageSideBar />
      </main>
    </div>
  );
};

export default IdeasPage;
