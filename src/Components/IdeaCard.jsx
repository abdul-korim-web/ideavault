import Image from "next/image";
import React from "react";

const IdeaCard = ({ idea }) => {
  return (
    <div
      className="group rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 overflow-hidden hover:bg-gray-50 dark:hover:bg-white/10 transition"
    >
      <div className="relative h-40 w-full">
        <Image
          src={idea.imageUrl}
          alt={idea.title}
          fill
          className="object-cover group-hover:scale-105 transition"
        />
      </div>

      <div className="p-5">
        <span className="inline-block rounded-full bg-violet-600/20 px-3 py-1 text-xs text-violet-500 dark:text-violet-300">
          {idea.category}
        </span>

        <h3 className="mt-3 text-lg font-bold line-clamp-1 text-black dark:text-white">
          {idea.title}
        </h3>

        <p className="mt-2 text-sm text-gray-600 dark:text-white/60 line-clamp-2">
          {idea.shortDescription}
        </p>

        <div className="mt-4 space-y-1 text-xs text-gray-500 dark:text-white/50">
          <p>💰 Budget: {idea.estimatedBudget || "N/A"}</p>
          <p>🎯 Audience: {idea.targetAudience || "General"}</p>
        </div>

        <a
          href={`/ideas/${idea._id}`}
          className="mt-5 inline-block w-full rounded-xl bg-violet-600 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-violet-500 transition"
        >
          View Details
        </a>
      </div>
    </div>
  );
};

export default IdeaCard;