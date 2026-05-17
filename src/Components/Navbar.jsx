"use client";

import { useState } from "react";

export default function IdeaVaultNavbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Ideas", href: "/ideas" },
    { name: "Add Idea", href: "/add-idea" },
    { name: "My Ideas", href: "/my-ideas" },
    { name: "My Interactions", href: "/interactions" },
  ];

  const toggleTheme = () => {
    setDark(!dark);
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark");
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b1120]/80 backdrop-blur-xl dark:bg-[#0a0f1c]/90">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 text-lg font-bold text-white">
            💡
          </div>
          <div className="leading-tight">
            <h1 className="text-xl font-black text-white">IdeaVault</h1>
            <p className="text-xs text-white/60">Startup Idea Platform</p>
          </div>
        </div>

        <ul className="hidden items-center gap-2 lg:flex">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white hover:bg-white/10"
          >
            {dark ? "🌙" : "☀️"}
          </button>

          <a
            href="/login"
            className="hidden rounded-full px-4 py-2 text-sm text-white/70 hover:text-white md:block"
          >
            Login
          </a>

          <a
            href="/register"
            className="hidden rounded-full bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-500 md:block"
          >
            Register
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-white lg:hidden"
          >
            ☰
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-[#0b1120] px-4 py-3">
          <div className="flex flex-col gap-2">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-white"
              >
                {item.name}
              </a>
            ))}

            <a
              href="/login"
              className="rounded-md px-3 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-white"
            >
              Login
            </a>

            <a
              href="/register"
              className="rounded-md bg-violet-600 px-3 py-2 text-sm text-white hover:bg-violet-500"
            >
              Register
            </a>
          </div>
        </div>
      )}
    </header>
  );
}