

import IdeaCard from "@/Components/IdeaCard";
import Image from "next/image";
const fetchIdeas = async()=>{
  const res =await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/product`)
  const data = await res.json()
  return data?.allProduct
}
export default async function IdeasPage() {
  const ideas = await fetchIdeas()
  // const ideas = [
  //   {
  //     _id: "1",
  //     title: "AI Resume Builder",
  //     shortDescription:
  //       "An AI-powered tool that creates professional resumes instantly based on user input.",
  //     detailedDescription:
  //       "This platform uses AI to generate optimized resumes tailored for job descriptions.",
  //     category: "AI",
  //     tags: ["AI", "Career", "Resume"],
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1581091870622-2c7e0c1d3f2a",
  //     estimatedBudget: "$2000",
  //     targetAudience: "Job Seekers",
  //     problemStatement:
  //       "People struggle to create professional resumes.",
  //     proposedSolution:
  //       "AI generates optimized resumes in seconds.",
  //   },

  //   {
  //     _id: "2",
  //     title: "Health Tracker App",
  //     shortDescription:
  //       "A smart app that tracks health activities and daily fitness goals.",
  //     detailedDescription:
  //       "Users can monitor sleep, calories, workouts and receive AI-based health insights.",
  //     category: "Health",
  //     tags: ["Fitness", "Health", "Tracker"],
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1556228578-0d85b1a4d571",
  //     estimatedBudget: "$5000",
  //     targetAudience: "Fitness Enthusiasts",
  //     problemStatement:
  //       "People fail to maintain healthy routines consistently.",
  //     proposedSolution:
  //       "An AI-driven app that tracks habits and motivates users daily.",
  //   },

  //   {
  //     _id: "3",
  //     title: "Online Learning Platform",
  //     shortDescription:
  //       "Interactive platform for learning tech and business skills online.",
  //     detailedDescription:
  //       "Offers video courses, quizzes, certifications and personalized learning paths.",
  //     category: "Education",
  //     tags: ["Learning", "Courses", "Education"],
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
  //     estimatedBudget: "$8000",
  //     targetAudience: "Students",
  //     problemStatement:
  //       "Many students lack access to quality education resources.",
  //     proposedSolution:
  //       "Affordable and accessible online learning experience.",
  //   },

  //   {
  //     _id: "4",
  //     title: "Smart Grocery Delivery",
  //     shortDescription:
  //       "AI-based grocery ordering and delivery platform.",
  //     detailedDescription:
  //       "Provides smart recommendations based on user shopping habits and preferences.",
  //     category: "Tech",
  //     tags: ["AI", "Delivery", "Shopping"],
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1580915411954-282cb1b0d780",
  //     estimatedBudget: "$10000",
  //     targetAudience: "Families",
  //     problemStatement:
  //       "Grocery shopping consumes too much time weekly.",
  //     proposedSolution:
  //       "Automated grocery suggestions with fast delivery service.",
  //   },

  //   {
  //     _id: "5",
  //     title: "Startup Idea Validator",
  //     shortDescription:
  //       "Platform to validate startup ideas through community feedback.",
  //     detailedDescription:
  //       "Users can post startup ideas, collect reviews, votes and suggestions.",
  //     category: "Startup",
  //     tags: ["Startup", "Validation", "Community"],
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1559136555-9303baea8ebd",
  //     estimatedBudget: "$3000",
  //     targetAudience: "Entrepreneurs",
  //     problemStatement:
  //       "Founders launch products without proper market validation.",
  //     proposedSolution:
  //       "Community-driven startup validation system.",
  //   },

  //   {
  //     _id: "6",
  //     title: "AI Travel Planner",
  //     shortDescription:
  //       "AI-powered travel planning platform for personalized trips.",
  //     detailedDescription:
  //       "Creates travel itineraries based on budget, interests and preferred destinations.",
  //     category: "Travel",
  //     tags: ["Travel", "AI", "Planner"],
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  //     estimatedBudget: "$6000",
  //     targetAudience: "Travelers",
  //     problemStatement:
  //       "Trip planning is often stressful and time-consuming.",
  //     proposedSolution:
  //       "AI automatically builds optimized travel plans.",
  //   },
  // ];

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