export default function WhyIdeaVault() {
  const features = [
    {
      title: "Idea Validation",
      desc: "Get real feedback before building your startup.",
    },
    {
      title: "Community Driven",
      desc: "Connect with founders, developers and creators.",
    },
    {
      title: "Fast Growth",
      desc: "Improve ideas quickly with real-world insights.",
    },
    {
      title: "Trending Ideas",
      desc: "Discover what’s hot in the startup world.",
    },
  ];

  return (
    <section className="bg-gray-50 dark:bg-[#0b1120] px-4 py-16 md:px-8">
      <div className="mx-auto max-w-7xl">

        <h2 className="text-2xl font-black md:text-4xl text-black dark:text-white animate__animated animate__backInLeft">
          Why IdeaVault? 🚀
        </h2>

        <p className="mt-2 text-sm text-gray-600 dark:text-white/60 animate__animated animate__backInRight">
          A platform built for innovators and creators
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 animate__animated animate__backInRight">

          {features.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-6 hover:scale-105 transition"
            >
              <h3 className="text-lg font-bold text-black dark:text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-gray-600 dark:text-white/60">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}