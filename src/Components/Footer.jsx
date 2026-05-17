export default function IdeaVaultFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#0b1120] text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-10 md:grid-cols-3 md:px-8">
        
        <div>
          <h2 className="text-xl font-black">IdeaVault</h2>
          <p className="mt-2 text-sm text-white/60">
            A platform for sharing, exploring and validating startup ideas.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Platform</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/60">
            <li><a href="/ideas" className="hover:text-white">Ideas</a></li>
            <li><a href="/categories" className="hover:text-white">Categories</a></li>
            <li><a href="/add-idea" className="hover:text-white">Add Idea</a></li>
            <li><a href="/my-ideas" className="hover:text-white">My Ideas</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Contact</h3>
          <p className="mt-3 text-sm text-white/60">
            Email: abdulkorimwebdeveloper@gmail.com
          </p>

          <div className="mt-4 flex items-center gap-3">
            <a target="_blank" href="https://github.com/abdul-korim-web" className="text-white/60 hover:text-white">GitHub</a>
            <a target="_blank" href="https://www.linkedin.com/in/abdul-korim-webdeveloper/" className="text-white/60 hover:text-white">LinkedIn</a>
            <a target="_blank" href="https://www.facebook.com/abdulkorimweb" className="text-white/60 hover:text-white">facebook</a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} IdeaVault. All rights reserved.
      </div>
    </footer>
  );
}