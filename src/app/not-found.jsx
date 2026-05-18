import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-white dark:bg-[#0b1120] flex items-center justify-center px-4">
      <div className="text-center max-w-md">

        <h1 className="text-6xl font-black text-violet-600">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-bold text-black dark:text-white">
          Page Not Found
        </h2>

        <p className="mt-3 text-sm text-gray-600 dark:text-white/60">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        <div className="mt-6 flex items-center justify-center gap-3">

          <Link
            href="/"
            className="rounded-xl bg-violet-600 px-5 py-2 text-sm font-semibold text-white hover:bg-violet-500"
          >
            Go Home
          </Link>

          <Link
            href="/ideas"
            className="rounded-xl border border-gray-300 dark:border-white/10 px-5 py-2 text-sm font-semibold text-black dark:text-white hover:bg-gray-100 dark:hover:bg-white/10"
          >
            Explore Ideas
          </Link>

        </div>

      </div>
    </section>
  );
}