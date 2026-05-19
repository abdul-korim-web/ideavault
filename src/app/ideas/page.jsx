

import IdeaCard from "@/Components/IdeaCard";
import Image from "next/image";
const fetchIdeas = async()=>{
  const res =await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/product`)
  const data = await res.json()
  return data?.allProduct
}
export default async function IdeasPage() {
  const ideas = await fetchIdeas()
  if (!ideas || ideas?.length===0) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-[#0b1120]">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-black dark:text-white">
          Idea Not Found
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          The idea you are looking for does not exist.
        </p>
      </div>
    </div>
  );
}
  return (
    <section className="min-h-screen bg-white dark:bg-[#0b1120] px-4 py-10 md:px-8">
      <div className="mx-auto max-w-7xl">

        <div className="mb-10">
          <h1 className="text-3xl font-black text-black dark:text-white">
            Explore Startup Ideas 🚀
          </h1>

          <p className="mt-2 text-sm text-gray-600 dark:text-white/60">
            Discover innovative ideas shared by creators
          </p>
        </div>

        {ideas.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-3xl border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5 py-20 text-center">
            <h2 className="text-2xl font-bold text-black dark:text-white">
              No Ideas Found 😕
            </h2>

            <p className="mt-2 text-sm text-gray-600 dark:text-white/60">
              No startup ideas available right now.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

            {ideas.map((idea) => (
              <IdeaCard  key={idea._id} idea={idea}/>
            ))}

          </div>
        )}

      </div>
    </section>
  );
}