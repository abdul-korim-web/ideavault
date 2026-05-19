
import Image from "next/image";
import IdeaCard from "./IdeaCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function TrendingIdeas() {
   const ideas = [
  {
    _id: "1",
    title: "AI Resume Builder",
    shortDescription:
      "An AI-powered tool that creates professional resumes instantly based on user input.",
    detailedDescription:
      "This platform uses AI to generate optimized resumes tailored for job descriptions.",
    category: "AI",
    tags: ["AI", "Career", "Resume"],
    imageUrl: "https://images.unsplash.com/photo-1581091870622-2c7e0c1d3f2a",
    estimatedBudget: "$2000",
    targetAudience: "Job Seekers",
    problemStatement: "People struggle to create professional resumes.",
    proposedSolution: "AI generates optimized resumes in seconds.",
  },

  {
    _id: "2",
    title: "Health Tracker App",
    shortDescription:
      "A smart app that tracks daily health activities and suggests improvements.",
    detailedDescription:
      "Tracks steps, sleep, diet and gives AI-based health suggestions.",
    category: "Health",
    tags: ["Fitness", "Health", "Tracker"],
    imageUrl: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571",
    estimatedBudget: "$5000",
    targetAudience: "Fitness Enthusiasts",
    problemStatement: "People don’t track daily health properly.",
    proposedSolution: "Smart tracking with AI suggestions.",
  },

  {
    _id: "3",
    title: "Online Learning Platform",
    shortDescription:
      "A platform where students can learn skills through interactive video courses.",
    detailedDescription:
      "Includes quizzes, assignments and certification system.",
    category: "Education",
    tags: ["Learning", "Courses", "E-learning"],
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
    estimatedBudget: "$8000",
    targetAudience: "Students",
    problemStatement: "Quality education is not accessible everywhere.",
    proposedSolution: "Affordable online learning platform.",
  },

  {
    _id: "4",
    title: "Smart Grocery Delivery",
    shortDescription:
      "AI-based grocery delivery system with smart recommendations.",
    detailedDescription:
      "Suggests groceries based on user habits and past orders.",
    category: "Tech",
    tags: ["Delivery", "AI", "E-commerce"],
    imageUrl: "https://images.unsplash.com/photo-1580915411954-282cb1b0d780",
    estimatedBudget: "$10000",
    targetAudience: "Households",
    problemStatement: "Grocery shopping is time-consuming.",
    proposedSolution: "Automated smart ordering system.",
  },

  {
    _id: "5",
    title: "Startup Idea Validator",
    shortDescription:
      "A platform where users validate startup ideas through community feedback.",
    detailedDescription:
      "Users can post ideas and get real feedback, votes, and comments.",
    category: "Startup",
    tags: ["Validation", "Community", "Ideas"],
    imageUrl: "https://images.unsplash.com/photo-1559136555-9303baea8ebd",
    estimatedBudget: "$3000",
    targetAudience: "Entrepreneurs",
    problemStatement: "Ideas fail due to lack of validation.",
    proposedSolution: "Community-based idea validation system.",
  },

  {
    _id: "6",
    title: "AI Travel Planner",
    shortDescription:
      "AI suggests personalized travel plans based on budget and preference.",
    detailedDescription:
      "Generates full travel itinerary with hotels, food, and routes.",
    category: "Travel",
    tags: ["AI", "Travel", "Planner"],
    imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    estimatedBudget: "$6000",
    targetAudience: "Travelers",
    problemStatement: "Planning trips takes too much time.",
    proposedSolution: "AI-based automated trip planning.",
  },
];
const {token} = await auth.api.getToken({
  headers:await headers()
})
console.log('token', token)

  return (
   <section className="bg-[#0b1120] px-4 py-16 md:px-8 text-white ">
      <div className="mx-auto max-w-7xl">

        <div className="mb-10">
          <h2 className="text-2xl font-black md:text-4xl">
            Trending Ideas 🚀
          </h2>
          <p className="mt-2 text-sm text-white/60">
            Explore the most popular startup ideas from the community
          </p>
        </div>

        {ideas.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 py-20 text-center">
            <h3 className="text-xl font-bold">No Ideas Found 😕</h3>
            <p className="mt-2 text-sm text-white/60">
              Be the first to share a startup idea.
            </p>

            
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ideas.slice(0, 6).map((idea) => (
              <IdeaCard  key={idea._id} idea={idea}/>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}