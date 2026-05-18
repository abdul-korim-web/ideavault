
export default function AddIdeaPage() {
  return (
    <section className="min-h-screen bg-white dark:bg-[#0b1120] px-4 py-10 md:px-8">
      <div className="mx-auto max-w-4xl rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-6 md:p-10">

        <div>
          <h1 className="text-3xl font-black text-black dark:text-white">
            Submit Startup Idea 🚀
          </h1>

          <p className="mt-2 text-sm text-gray-600 dark:text-white/60">
            Share your innovative startup concept with the community
          </p>
        </div>

        <form className="mt-10 space-y-6">

          <div>
            <label className="text-sm font-medium text-black dark:text-white">
              Idea Title
            </label>

            <input
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
              rows={3}
              placeholder="Write short description"
              className="mt-2 w-full rounded-2xl border border-gray-300 dark:border-white/10 bg-white dark:bg-[#0b1120] px-4 py-3 text-black dark:text-white outline-none focus:border-violet-500"
            ></textarea>
          </div>

          <div>
            <label className="text-sm font-medium text-black dark:text-white">
              Detailed Description
            </label>

            <textarea
              rows={6}
              placeholder="Write detailed description"
              className="mt-2 w-full rounded-2xl border border-gray-300 dark:border-white/10 bg-white dark:bg-[#0b1120] px-4 py-3 text-black dark:text-white outline-none focus:border-violet-500"
            ></textarea>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

            <div>
              <label className="text-sm font-medium text-black dark:text-white">
                Category
              </label>

              <select
                className="mt-2 w-full rounded-2xl border border-gray-300 dark:border-white/10 bg-white dark:bg-[#0b1120] px-4 py-3 text-black dark:text-white outline-none focus:border-violet-500"
              >
                <option>Tech</option>
                <option>Health</option>
                <option>AI</option>
                <option>Education</option>
                <option>Finance</option>
                <option>Travel</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-black dark:text-white">
                Tags
              </label>

              <input
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
              rows={4}
              placeholder="Describe the problem your idea solves"
              className="mt-2 w-full rounded-2xl border border-gray-300 dark:border-white/10 bg-white dark:bg-[#0b1120] px-4 py-3 text-black dark:text-white outline-none focus:border-violet-500"
            ></textarea>
          </div>

          <div>
            <label className="text-sm font-medium text-black dark:text-white">
              Proposed Solution
            </label>

            <textarea
              rows={4}
              placeholder="Explain your proposed solution"
              className="mt-2 w-full rounded-2xl border border-gray-300 dark:border-white/10 bg-white dark:bg-[#0b1120] px-4 py-3 text-black dark:text-white outline-none focus:border-violet-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-violet-600 py-4 text-sm font-semibold text-white transition hover:bg-violet-500"
          >
            Submit Idea
          </button>

        </form>
      </div>
    </section>
  );
}