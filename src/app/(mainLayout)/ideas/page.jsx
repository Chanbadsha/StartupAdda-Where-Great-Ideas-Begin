import { Suspense } from "react";
export const dynamic = "force-dynamic";
import IdeasList from "@/utils/IdeaList";
import CardLoadings from "@/utils/UiLoading";
import IdeasHeading from "@/components/ideasPage/IdeasHeading";
import IdeasPageSideBar from "@/components/ideasPage/IdeasPageSideBar";
import SearchFilterUI from "@/components/ideasPage/SearchFilterUI";
const categories = [
  { id: "AI", textValue: "AI" },
  { id: "SaaS", textValue: "SaaS" },
  { id: "FinTech", textValue: "FinTech" },
  { id: "HealthTech", textValue: "HealthTech" },
  { id: "EdTech", textValue: "EdTech" },
  { id: "E-commerce", textValue: "E-commerce" },
  { id: "GreenTech", textValue: "GreenTech" },
  { id: "Blockchain", textValue: "Blockchain" },
  { id: "Web3", textValue: "Web3" },
  { id: "Cybersecurity", textValue: "Cybersecurity" },
  { id: "Productivity", textValue: "Productivity" },
  { id: "Social Media", textValue: "Social Media" },
  { id: "Developer Tools", textValue: "Developer Tools" },
  { id: "Logistics", textValue: "Logistics" },
  { id: "TravelTech", textValue: "TravelTech" },
  { id: "FoodTech", textValue: "FoodTech" },
  { id: "Gaming", textValue: "Gaming" },
  { id: "AI Automation", textValue: "AI Automation" },
  { id: "Real Estate", textValue: "Real Estate" },
  { id: "Other", textValue: "Other" },
];
const IdeasPage = async (props) => {
  const searchParams = await props.searchParams;

  const search = searchParams?.search || "";
  const category = searchParams?.category || "";
  const sort = searchParams?.sort || "desc";

  return (
    <div className="container px-4 mx-auto pb-12">
      {/* Heading */}
      <IdeasHeading />
      {/* Search and Filter Section */}
      <div className="max-w-5xl mx-auto">
        <SearchFilterUI
          search={search}
          category={category}
          sort={sort}
          categories={categories}
        />
      </div>

      <main className="grid  grid-cols-1 lg:grid-cols-12 gap-8 mt-10">
        {/* Card Container */}
        <section className="lg:col-span-8">
          <Suspense fallback={<CardLoadings />}>
            <IdeasList
              searchParams={searchParams}
              search={search}
              category={category}
              sort={sort}
            />
          </Suspense>
        </section>

        {/* Sidebar */}
        <IdeasPageSideBar />
      </main>
    </div>
  );
};

export default IdeasPage;
