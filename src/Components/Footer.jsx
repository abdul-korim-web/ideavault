import Link from "next/link";

export default function IdeaVaultFooter() {
  return (
    <footer className="border-t border-gray-200 dark:border-white/10 bg-white dark:bg-[#0b1120] text-black dark:text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-10 md:grid-cols-3 md:px-8">

        <div className="animate__animated animate__backInLeft">
          <h2 className="text-xl font-black">IdeaVault</h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-white/60">
            A platform for sharing, exploring and validating startup ideas.
          </p>
        </div>

        <div className="animate__animated animate__backInUp">
          <h3 className="text-sm font-semibold">Platform</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-white/60">
            <li><Link href="/ideas" className="hover:text-black dark:hover:text-white">Ideas</Link></li>
            <li><Link href="/interactions" className="hover:text-black dark:hover:text-white">My Interactions</Link></li>
            <li><Link href="/add-idea" className="hover:text-black dark:hover:text-white">Add Idea</Link></li>
            <li><Link href="/my-ideas" className="hover:text-black dark:hover:text-white">My Ideas</Link></li>
          </ul>
        </div>

        <div className="animate__animated animate__backInRight">
          <h3 className="text-sm font-semibold">Contact</h3>
          <p className="mt-3 text-sm text-gray-600 dark:text-white/60">
            Email: abdulkorimwebdeveloper@gmail.com
          </p>

          <div className="mt-4 flex items-center gap-3">
            <a target="_blank" href="https://github.com/abdul-korim-web" className="text-gray-600 dark:text-white/60 hover:text-black dark:hover:text-white">GitHub</a>
            <a target="_blank" href="https://www.linkedin.com/in/abdul-korim-webdeveloper/" className="text-gray-600 dark:text-white/60 hover:text-black dark:hover:text-white">LinkedIn</a>
            <a target="_blank" href="https://www.facebook.com/abdulkorimweb" className="text-gray-600 dark:text-white/60 hover:text-black dark:hover:text-white">Facebook</a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-white/10 py-4 text-center text-xs text-gray-500 dark:text-white/50">
        © {new Date().getFullYear()} IdeaVault. All rights reserved.
      </div>
    </footer>
  );
}