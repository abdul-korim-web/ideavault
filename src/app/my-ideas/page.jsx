
import DeleteProduct from "@/Components/client/deleteProduct";
import { UpdateModal } from "@/Components/client/UpdateModal";
import { auth } from "@/lib/auth";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
const fetchIdeas = async(token)=>{
  const res =await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/product/mydata`,{
    headers:{
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    }
  })
  const data = await res.json()
  return data?.data
}
export default async function MyIdeasPage() {
const {token} = await auth.api.getToken({
    headers:await headers()
  })
  const myIdeas = await fetchIdeas(token)
  if (!myIdeas || myIdeas?.length===0) {
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

        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">

          <div>
            <h1 className="text-3xl font-black text-black dark:text-white">
              My Ideas 💡
            </h1>

            <p className="mt-2 text-sm text-gray-600 dark:text-white/60">
              Manage all your startup ideas
            </p>
          </div>

          <div className="rounded-2xl bg-violet-600 px-5 py-3 text-center text-white">
            <h3 className="text-2xl font-black">
              {myIdeas?.length}
            </h3>
            <p className="text-xs text-white/80">Total Ideas</p>
          </div>

        </div>

        {myIdeas.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-3xl border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5 py-20 text-center">
            <h2 className="text-2xl font-bold text-black dark:text-white">
              No Ideas Found 😕
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-white/60">
              Start by creating your first idea.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

            {myIdeas.map((idea) => (
              <div
                key={idea?._id}
                className="overflow-hidden rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 transition hover:-translate-y-1"
              >

                <div className="relative h-52 w-full">
                  <Image
                    src={idea?.imageUrl}
                    alt={idea?.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-5">

                  <span className="inline-block rounded-full bg-violet-600/20 px-3 py-1 text-xs font-medium text-violet-500">
                    {idea?.category}
                  </span>

                  <h2 className="mt-3 text-xl font-bold text-black dark:text-white line-clamp-1">
                    {idea?.title}
                  </h2>

                  <p className="mt-2 text-sm text-gray-600 dark:text-white/60 line-clamp-2">
                    {idea?.shortDescription}
                  </p>

                  <div className="mt-4 space-y-1 text-xs text-gray-500 dark:text-white/50">
                    <p>💰 Budget: {idea?.estimatedBudget}</p>
                    <p>🎯 Audience: {idea?.targetAudience}</p>
                    <p>📅 {idea.createdAt}</p>
                  </div>

                  <div className="mt-5 flex items-center gap-3">

                    
                    <UpdateModal idea={idea}/>

                    <DeleteProduct productId={idea?._id}/>

                  </div>

                </div>

              </div>
            ))}

          </div>
        )}

      </div>
    </section>
  );
}