export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-[#0b1120]">
      <div className="flex flex-col items-center gap-4">

        {/* Spinner */}
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-violet-500 border-t-transparent"></div>

        {/* Text */}
        <p className="text-sm font-medium text-gray-600 dark:text-white/70">
          Loading please wait...
        </p>

      </div>
    </div>
  );
}