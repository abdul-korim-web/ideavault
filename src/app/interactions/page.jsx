"use client";

import { Button } from "@heroui/react";
import Image from "next/image";

export default function MyInteractionsPage() {
  const myComments = [
    {
      _id: "1",
      ideaId: "101",
      ideaTitle: "AI Resume Builder",
      ideaImage:
        "https://images.unsplash.com/photo-1581091870622-2c7e0c1d3f2a",
      comment:
        "This idea can really help fresh graduates create professional resumes quickly.",
      createdAt: "2 hours ago",
    },

    {
      _id: "2",
      ideaId: "102",
      ideaTitle: "Health Tracker App",
      ideaImage:
        "https://images.unsplash.com/photo-1556228578-0d85b1a4d571",
      comment:
        "You should add smart notifications and water tracking features.",
      createdAt: "5 hours ago",
    },

    {
      _id: "3",
      ideaId: "103",
      ideaTitle: "AI Travel Planner",
      ideaImage:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      comment:
        "Hotel recommendations based on budget would make this even better.",
      createdAt: "1 day ago",
    },
  ];

  return (
    <section className="min-h-screen bg-white dark:bg-[#0b1120] px-4 py-10 md:px-8">
      <div className="mx-auto max-w-5xl">

        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">

          <div>
            <h1 className="text-3xl font-black text-black dark:text-white">
              My Interactions 💬
            </h1>

            <p className="mt-2 text-sm text-gray-600 dark:text-white/60">
              All comments you have made on startup ideas
            </p>
          </div>

          <div className="rounded-2xl bg-violet-600 px-5 py-3 text-center text-white">
            <h3 className="text-2xl font-black">
              {myComments.length}
            </h3>

            <p className="text-xs text-white/80">
              Total Comments
            </p>
          </div>

        </div>

        {myComments.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-3xl border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5 py-20 text-center">
            <h2 className="text-2xl font-bold text-black dark:text-white">
              No Comments Found 😕
            </h2>

            <p className="mt-2 text-sm text-gray-600 dark:text-white/60">
              You haven’t commented on any startup ideas yet.
            </p>
          </div>
        ) : (
          <div className="space-y-6">

            {myComments.map((item) => (
              <div
                key={item._id}
                className="flex flex-col gap-5 rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-5 md:flex-row"
              >

                <div className="relative h-44 w-full overflow-hidden rounded-2xl md:w-60">
                  <Image
                    src={item.ideaImage}
                    alt={item.ideaTitle}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between">

                  <div>

                    <h2 className="text-2xl font-bold text-black dark:text-white">
                      {item.ideaTitle}
                    </h2>

                    <div className="mt-5 rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-[#0b1120] p-4">

                      <p className="text-sm leading-7 text-gray-700 dark:text-white/70">
                        “{item.comment}”
                      </p>

                    </div>

                  </div>

                  <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                    <p className="text-xs text-gray-500 dark:text-white/40">
                      {item.createdAt}
                    </p>

                    <div className="flex items-center gap-3">

                      <Button variant="outline" className="rounded-xl border border-violet-500 px-4 py-2 text-sm font-medium text-violet-500 transition hover:bg-violet-500 hover:text-white">
                        Edit Comment
                      </Button>

                      <Button variant="outline" className="rounded-xl border border-red-500 px-4 py-2 text-sm font-medium text-red-500 transition hover:bg-red-500 hover:text-white">
                        Delete
                      </Button>

                      <a
                        href={`/ideas/${item.ideaId}`}
                        className="rounded-xl bg-violet-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-violet-500"
                      >
                        View Idea
                      </a>

                    </div>

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