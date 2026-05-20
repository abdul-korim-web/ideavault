export default function HowItWorks() {
  const steps = [
    {
      title: "Share Your Idea",
      desc: "Post your startup idea with details, problem and solution.",
    },
    {
      title: "Get Community Feedback",
      desc: "Users comment, discuss and validate your idea.",
    },
    {
      title: "Improve & Build",
      desc: "Refine your idea based on real feedback and insights.",
    },
  ];

  return (
    <section className="bg-white dark:bg-[#0b1120] px-4 py-16 md:px-8">
      <div className="mx-auto max-w-7xl">

        <h2 className="text-2xl font-black md:text-4xl text-black dark:text-white animate__animated animate__backInLeft">
          How It Works ⚡
        </h2>

        <p className="mt-2 text-sm text-gray-600 dark:text-white/60 animate__animated animate__backInRight">
          Simple 3 steps to turn your idea into reality
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">

          {steps.map((step, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 p-6 animate__animated animate__backInRight"
            >
              <div className="text-3xl font-black text-violet-600">
                0{i + 1}
              </div>

              <h3 className="mt-4 text-xl font-bold text-black dark:text-white">
                {step.title}
              </h3>

              <p className="mt-2 text-sm text-gray-600 dark:text-white/60">
                {step.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}