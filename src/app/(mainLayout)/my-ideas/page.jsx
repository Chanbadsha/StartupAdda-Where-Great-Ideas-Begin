import HeroSection from "@/components/myIdeasPage/HeroSection";
import MyIdeasPageMainSection from "@/components/myIdeasPage/MyIdeasPageMainSection";
import { deleteIdeaAction } from "@/lib/actions";
import { auth } from "@/lib/auth";
import { GetAllDataByCreator } from "@/lib/data";
import { headers } from "next/headers";

const idea = [
  {
    _id: "1",
    title: "AI Resume Builder",
    category: "AI",
    status: "Published",
    createdAt: "May 28, 2026",
    description:
      "Generate professional resumes using AI with customizable templates and smart suggestions.",
  },
  {
    _id: "2",
    title: "Smart Health Tracker",
    category: "Health",
    status: "Draft",
    createdAt: "May 30, 2026",
    description:
      "Track daily health metrics and receive AI-powered recommendations.",
  },
  {
    _id: "3",
    title: "Startup Funding Match",
    category: "Business",
    status: "Published",
    createdAt: "Jun 01, 2026",
    description:
      "Connect startup founders with the most relevant investors using AI.",
  },
];

const MyIdeasPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const ideas = await GetAllDataByCreator(user.id);

  const totalIdeas = ideas.length;

  const publishedIdeas = ideas.filter(
    (idea) => idea.status === "Published",
  ).length;
  const draftIdeas = ideas.filter((idea) => idea.status === "Draft").length;

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <HeroSection />

      {/* Main Section */}
      <MyIdeasPageMainSection
        publishedIdeas={publishedIdeas}
        totalIdeas={totalIdeas}
        draftIdeas={draftIdeas}
        ideas={ideas}
        deleteIdeaAction={deleteIdeaAction}
      />
    </main>
  );
};

export default MyIdeasPage;
