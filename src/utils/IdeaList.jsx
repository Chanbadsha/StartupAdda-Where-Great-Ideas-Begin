import StartUpCard from "@/components/shared/StartUpCard";
import { GetAllData } from "@/lib/data";
import NoData from "./NoData";

const IdeasList = async () => {
  const startUpIdea = await GetAllData();

  return (
    <>
      {startUpIdea.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {startUpIdea.map((idea, ind) => (
            <StartUpCard key={ind} idea={idea} />
          ))}
        </div>
      ) : (
        <NoData />
      )}
    </>
  );
};
export default IdeasList;
