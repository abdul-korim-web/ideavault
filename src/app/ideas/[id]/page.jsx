

import CommentDelete from "@/Components/client/CommentDelete";
import CommentFrom from "@/Components/client/CommentFrom";

import { auth } from "@/lib/auth";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
const fetchSingleIdeas = async(id,token)=>{
  const res =await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/product/${id}`,{
    headers:{
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    }
  })
  const data = await res.json()
  return data?.data
}
const getComment = async (productId, token) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/comment/productcomment/${productId}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
      }
    );

    const data = await res.json();

    return data;

  } catch (error) {
    console.log(error);

    return {
      success: false,
      message: "Failed to fetch comments",
    };
  }
};
const getMe = async (token) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/me`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );

  const data = await res.json();
  return data?.user;
};
export default async function IdeaDetailsPage({params}) {
  const {token} = await auth.api.getToken({
    headers:await headers()
  })
  const {id} = await params
  const idea =  await fetchSingleIdeas(id,token)
  const commentsFun=await getComment(id,token)
  const comments =commentsFun?.data
  const user  =await getMe(token)
 
if (!idea) {
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
      <div className="mx-auto max-w-5xl">

        <div className="overflow-hidden rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5">

          <div className="relative h-[300px] w-full md:h-[450px]">
            <Image
              src={idea.imageUrl}
              alt={idea.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">

            <span className="inline-block rounded-full bg-violet-600/20 px-4 py-1 text-sm font-medium text-violet-500">
              {idea.category}
            </span>

            <h1 className="mt-4 text-3xl font-black text-black dark:text-white md:text-5xl">
              {idea.title}
            </h1>

            <p className="mt-4 text-base leading-7 text-gray-700 dark:text-white/70">
              {idea.detailedDescription}
            </p>

            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">

              <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-[#0b1120] p-5">
                <h3 className="text-sm font-semibold text-black dark:text-white">
                  🎯 Target Audience
                </h3>

                <p className="mt-2 text-sm text-gray-600 dark:text-white/60">
                  {idea.targetAudience}
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-[#0b1120] p-5">
                <h3 className="text-sm font-semibold text-black dark:text-white">
                  💰 Estimated Budget
                </h3>

                <p className="mt-2 text-sm text-gray-600 dark:text-white/60">
                  {idea.estimatedBudget}
                </p>
              </div>

            </div>

            <div className="mt-6 rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-[#0b1120] p-5">
              <h3 className="text-lg font-bold text-black dark:text-white">
                🚨 Problem Statement
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-700 dark:text-white/70">
                {idea.problemStatement}
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-[#0b1120] p-5">
              <h3 className="text-lg font-bold text-black dark:text-white">
                💡 Proposed Solution
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-700 dark:text-white/70">
                {idea.proposedSolution}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {idea.tags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full bg-violet-600/20 px-4 py-2 text-xs font-medium text-violet-500"
                >
                  #{tag}
                </span>
              ))}
            </div>

          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-6 md:p-8">

          <h2 className="text-2xl font-black text-black dark:text-white">
            Comments 💬
          </h2>

          <CommentFrom productId={idea._id}/>

         <div className="mt-8 space-y-5">

  {!comments || comments.length === 0 ? (
    <div className="rounded-3xl border border-dashed border-gray-300 dark:border-white/10 bg-gray-100 dark:bg-[#0b1120] py-14 text-center">

      <h2 className="text-xl font-bold text-black dark:text-white">
        No Comments Yet 💬
      </h2>

      <p className="mt-2 text-sm text-gray-500 dark:text-white/50">
        Be the first person to comment on this idea.
      </p>

    </div>
  ) : (
    comments.map((comment) => (
      <div
        key={comment._id}
        className="rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-[#0b1120] p-5"
      >

        <div className="flex items-start justify-between gap-4">

          <div className="flex items-start gap-4">

            <Image
              src={comment?.creator?.image || "/user.png"}
              alt={comment?.creator?.name || "user"}
              width={50}
              height={50}
              className="h-12 w-12 rounded-full object-cover"
            />

            <div>
              <h3 className="font-semibold text-black dark:text-white">
                {comment?.creator?.name}
              </h3>

              <p className="mt-1 text-xs text-gray-500 dark:text-white/40">
                {new Date(comment?.createdAt).toLocaleString()}
              </p>
            </div>

          </div>

          {user?.email===comment?.creator?.email ? (
            <div className="flex items-center gap-3">

            <button className="text-sm font-medium text-violet-500 hover:underline cursor-pointer">
              Edit
            </button>
<CommentDelete token={token} commentId={comment._id} />
        

          </div>

          ) :(<>
          </>)}
        </div>

        <p className="mt-4 text-sm leading-7 text-gray-700 dark:text-white/70">
          {comment?.comment}
        </p>

      </div>
    ))
  )}

</div>

        </div>

      </div>
    </section>
  );
}