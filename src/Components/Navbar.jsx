"use client";

import { authClient, useSession } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { useState } from "react";
import { toast } from "react-toastify";

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
  const { data, isPending } = useSession();
  const user = data?.user;
  const handelLogout =async()=>{
    await authClient.signOut({
  fetchOptions: {
    onSuccess: () => {
      toast.success("logout success")
     redirect("/login")
    },
  },
});
  }
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
          {isPending ? (
            <span className="text-xs text-gray-500">Loading...</span>
          ) : user ? (
            <>
              <Image
                src={user?.image || userLogo}
                alt="user"
                width={32}
                height={32}
                className="rounded-full border border-white/10"
              />

              <span className="hidden md:block text-sm font-medium text-white/80">
                {user?.name}
              </span>

              <Button
                onClick={() => handelLogout()}
                className="hidden md:flex rounded-full px-4 py-2 bg-white/10 text-white text-xs border border-white/10 hover:bg-white/20 transition"
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="hidden rounded-full px-4 py-2 text-sm text-white/70 hover:text-white md:block"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="hidden rounded-full bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-500 md:block"
              >
                Register
              </Link>
            </>
          )}

          <Button
            onClick={() => setOpen(!open)}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-white lg:hidden"
          >
            ☰
          </Button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-[#0b1120] px-4 py-3">
          <div className="flex flex-col gap-2">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-white"
              >
                {item.name}
              </Link>
            ))}
           {isPending ? (
  <span className="text-xs text-gray-500">Loading...</span>
) : user ? (
  <div className="flex flex-col gap-3 rounded-xl bg-white/5 p-3 border border-white/10">

    <div className="flex items-center gap-3">
      <Image
        src={user?.image || userLogo}
        alt="user"
        width={38}
        height={38}
        className="rounded-full border border-white/10"
      />

      <div className="flex flex-col">
        <span className="text-sm font-medium text-white">
          {user?.name}
        </span>
        <span className="text-xs text-white/50">
          {user?.email}
        </span>
      </div>
    </div>

    <Button
      onClick={() => handelLogout()}
      className="w-full rounded-xl bg-white/10 text-white text-sm border border-white/10 hover:bg-white/20 transition"
    >
      Logout
    </Button>

  </div>
) : (
  <div className="flex flex-col gap-2">
    <Link
      href="/login"
      className="rounded-xl px-3 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-white"
    >
      Login
    </Link>

    <Link
      href="/register"
      className="rounded-xl bg-violet-600 px-3 py-2 text-sm font-medium text-white hover:bg-violet-500"
    >
      Register
    </Link>
  </div>
)}
          </div>
        </div>
      )}
    </header>
  );
}
