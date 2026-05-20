"use client";

import { authClient, useSession } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export default function IdeaVaultNavbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);

  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Ideas", href: "/ideas" },
    { name: "Add Idea", href: "/add-idea" },
    { name: "My Ideas", href: "/my-ideas" },
    { name: "My Interactions", href: "/interactions" },
  ];

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const toggleTheme = () => {
    setDark(!dark);
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark");
    }
  };

  const { data, isPending } = useSession();
  const user = data?.user;
const router = useRouter()
  const handelLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.refresh()
          toast.success("logout success");
        },
      },
    });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b1120]/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">

  
        <div className="flex items-center gap-3 animate__animated animate__backInLeft">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 text-white">
            💡
          </div>
          <h1 className="text-xl font-black text-white">IdeaVault</h1>
        </div>

     
        <ul className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => {
            const active = isActive(item.href);

            return (
              <li key={item.href} className="animate__animated animate__backInDown">
                <Link
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition
                    ${
                      active
                        ? "bg-white/20 text-white"
                        : "text-white/70 hover:bg-white/10 hover:text-white"
                    }
                  `}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

 
        <div className="flex items-center gap-3 animate__animated animate__backInRight">

          <button
            onClick={toggleTheme}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-white"
          >
            {dark ? "🌙" : "☀️"}
          </button>

     
          {isPending ? (
            <span className="text-xs text-gray-500">Loading...</span>
          ) : user ? (
            <>
              <Image
                src={user?.image}
                alt="user"
                width={32}
                height={32}
                className="rounded-full"
              />

              <span className="hidden md:block text-white text-sm">
                {user?.name}
              </span>

              <Button
                onClick={handelLogout}
                className="hidden md:flex bg-white/10 text-white px-4 py-2 rounded-full"
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link className="text-white/70 hidden md:block" href="/login">
                Login
              </Link>
              <Link
                className="bg-violet-600 text-white px-4 py-2 rounded-full hidden md:block"
                href="/register"
              >
                Register
              </Link>
            </>
          )}


          <Button
            onClick={() => setOpen(!open)}
            className="lg:hidden bg-white/5 text-white px-3 py-2 rounded-full"
          >
            ☰
          </Button>
        </div>
      </nav>


      {open && (
        <div className="lg:hidden px-4 py-3 border-t border-white/10">
          {navItems.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block rounded-md px-3 py-2 text-sm mb-1
                  ${
                    active
                      ? "bg-white/20 text-white"
                      : "text-white/70 hover:bg-white/10"
                  }
                `}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}