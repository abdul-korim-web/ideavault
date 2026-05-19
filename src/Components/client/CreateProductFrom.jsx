"use client"
import React, { useActionState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { toast } from 'react-toastify';
import CreateProductFromButton from './CreateProductFromButton';

const CreateProductFrom = ({createProductAction}) => {
     const [state, formAction] = useActionState(createProductAction, null);
    

  useEffect(() => {
    if (state?.message) {
      if (state.success) {
        toast.success(state.message);
      } else {
        toast.error(state.message);
      }
    }
  }, [state]);
    return (
       <form action={formAction} className="mt-10 space-y-6">
          <div>
            <label className="text-sm font-medium text-black dark:text-white">
              Idea Title
            </label>
            <input
              name="title"
              type="text"
              placeholder="Enter idea title"
              className="mt-2 w-full rounded-2xl border border-gray-300 dark:border-white/10 bg-white dark:bg-[#0b1120] px-4 py-3 text-black dark:text-white outline-none focus:border-violet-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-black dark:text-white">
              Short Description
            </label>
            <textarea
              name="shortDescription"
              rows={3}
              placeholder="Write short description"
              className="mt-2 w-full rounded-2xl border border-gray-300 dark:border-white/10 bg-white dark:bg-[#0b1120] px-4 py-3 text-black dark:text-white outline-none focus:border-violet-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-black dark:text-white">
              Detailed Description
            </label>
            <textarea
              name="detailedDescription"
              rows={6}
              placeholder="Write detailed description"
              className="mt-2 w-full rounded-2xl border border-gray-300 dark:border-white/10 bg-white dark:bg-[#0b1120] px-4 py-3 text-black dark:text-white outline-none focus:border-violet-500"
            />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-black dark:text-white">
                Category
              </label>
              <select
                name="category"
                className="mt-2 w-full rounded-2xl border border-gray-300 dark:border-white/10 bg-white dark:bg-[#0b1120] px-4 py-3 text-black dark:text-white outline-none focus:border-violet-500"
              >
                <option value="Tech">Tech</option>
                <option value="Health">Health</option>
                <option value="AI">AI</option>
                <option value="Education">Education</option>
                <option value="Finance">Finance</option>
                <option value="Travel">Travel</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-black dark:text-white">
                Tags
              </label>
              <input
                name="tags"
                type="text"
                placeholder="AI, Startup, SaaS"
                className="mt-2 w-full rounded-2xl border border-gray-300 dark:border-white/10 bg-white dark:bg-[#0b1120] px-4 py-3 text-black dark:text-white outline-none focus:border-violet-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-black dark:text-white">
                Image URL
              </label>
              <input
                name="imageUrl"
                type="text"
                placeholder="https://example.com/image.png"
                className="mt-2 w-full rounded-2xl border border-gray-300 dark:border-white/10 bg-white dark:bg-[#0b1120] px-4 py-3 text-black dark:text-white outline-none focus:border-violet-500"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-black dark:text-white">
                Estimated Budget
              </label>
              <input
                name="estimatedBudget"
                type="text"
                placeholder="$5000"
                className="mt-2 w-full rounded-2xl border border-gray-300 dark:border-white/10 bg-white dark:bg-[#0b1120] px-4 py-3 text-black dark:text-white outline-none focus:border-violet-500"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-black dark:text-white">
              Target Audience
            </label>
            <input
              name="targetAudience"
              type="text"
              placeholder="Entrepreneurs, Students, Businesses"
              className="mt-2 w-full rounded-2xl border border-gray-300 dark:border-white/10 bg-white dark:bg-[#0b1120] px-4 py-3 text-black dark:text-white outline-none focus:border-violet-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-black dark:text-white">
              Problem Statement
            </label>
            <textarea
              name="problemStatement"
              rows={4}
              placeholder="Describe the problem your idea solves"
              className="mt-2 w-full rounded-2xl border border-gray-300 dark:border-white/10 bg-white dark:bg-[#0b1120] px-4 py-3 text-black dark:text-white outline-none focus:border-violet-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-black dark:text-white">
              Proposed Solution
            </label>
            <textarea
              name="proposedSolution"
              rows={4}
              placeholder="Explain your proposed solution"
              className="mt-2 w-full rounded-2xl border border-gray-300 dark:border-white/10 bg-white dark:bg-[#0b1120] px-4 py-3 text-black dark:text-white outline-none focus:border-violet-500"
            />
          </div>

          <CreateProductFromButton/>
        </form>
    );
}

export default CreateProductFrom;
