import Image from "next/image";
import IdeaCard from "./IdeaCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const fetchTrandingIdeas = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/product/topdata`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data?.homeProduct;
};

export default async function TrendingIdeas() {
  const ideas = await fetchTrandingIdeas();

  return (
    <section className="bg-white dark:bg-[#0b1120] px-4 py-16 md:px-8 text-black dark:text-white">
      <div className="mx-auto max-w-7xl">

        <div className="mb-10">
          <h2 className="text-2xl font-black md:text-4xl animate__animated animate__backInDown">
            Trending Ideas 🚀
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-white/60 animate__animated animate__backInLeft">
            Explore the most popular startup ideas from the community
          </p>
        </div>

        {!ideas || ideas.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5 py-20 text-center animate__animated animate__backInUp">
            <h3 className="text-xl font-bold text-black dark:text-white">
              No Ideas Found 😕
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-white/60">
              Be the first to share a startup idea.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 animate__animated animate__backInUp">
            {ideas.slice(0, 6).map((idea) => (
              <IdeaCard key={idea._id} idea={idea} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}