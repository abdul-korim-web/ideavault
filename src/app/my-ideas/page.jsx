
import { Button } from "@heroui/react";
import Image from "next/image";

export default function MyIdeasPage() {
  const myIdeas = [
    {
      _id: "1",
      title: "AI Resume Builder",
      shortDescription:
        "An AI tool that generates professional resumes instantly.",
      detailedDescription:
        "Uses AI to create optimized resumes based on job descriptions.",
      category: "AI",
      tags: ["AI", "Career", "Resume"],
      imageUrl:
        "https://images.unsplash.com/photo-1581091870622-2c7e0c1d3f2a",
      estimatedBudget: "$2000",
      targetAudience: "Job Seekers",
      problemStatement:
        "People struggle to create professional resumes.",
      proposedSolution:
        "AI generates optimized resumes instantly.",
      createdAt: "2 days ago",
    },

    {
      _id: "2",
      title: "Health Tracker App",
      shortDescription:
        "Track health activities and fitness goals easily.",
      detailedDescription:
        "Users can monitor sleep, calories, workouts and get AI insights.",
      category: "Health",
      tags: ["Fitness", "Health", "Tracker"],
      imageUrl:
        "https://images.unsplash.com/photo-1556228578-0d85b1a4d571",
      estimatedBudget: "$5000",
      targetAudience: "Fitness Enthusiasts",
      problemStatement:
        "People fail to maintain healthy routines consistently.",
      proposedSolution:
        "An AI-driven app that tracks habits and motivates users daily.",
      createdAt: "5 days ago",
    },

    {
      _id: "3",
      title: "AI Travel Planner",
      shortDescription:
        "AI generates personalized travel plans.",
      detailedDescription:
        "Creates travel itineraries based on budget and preferences.",
      category: "Travel",
      tags: ["AI", "Travel", "Planner"],
      imageUrl:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      estimatedBudget: "$6000",
      targetAudience: "Travelers",
      problemStatement:
        "Trip planning takes too much time.",
      proposedSolution:
        "AI automatically builds travel plans.",
      createdAt: "1 week ago",
    },

    {
      _id: "4",
      title: "Smart Grocery System",
      shortDescription:
        "AI-based grocery ordering system.",
      detailedDescription:
        "Suggests groceries based on user behavior and habits.",
      category: "Tech",
      tags: ["AI", "E-commerce", "Delivery"],
      imageUrl:
        "https://images.unsplash.com/photo-1580915411954-282cb1b0d780",
      estimatedBudget: "$10000",
      targetAudience: "Families",
      problemStatement:
        "Grocery shopping takes too much time.",
      proposedSolution:
        "Smart automated grocery system.",
      createdAt: "3 days ago",
    },
  ];

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
              {myIdeas.length}
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

                    <Button variant="outline" className="flex-1 rounded-xl border border-violet-500 px-4 py-2 text-sm font-medium text-violet-500 transition hover:bg-violet-500 hover:text-white">
                      Update
                    </Button>

                    <Button variant="outline" className="flex-1 rounded-xl border border-red-500 px-4 py-2 text-sm font-medium text-red-500 transition hover:bg-red-500 hover:text-white">
                      Delete
                    </Button>

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