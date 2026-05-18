"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

export default function LoginPage() {
  const handleLogin =async (e)=>{
      e.preventDefault()
     const userFormData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(userFormData.entries());
    const { data, error } = await authClient.signIn.email(userData);
   if (error) {
    toast.error(error?.message || "Login failed");
    return;
  }
  
  toast.success("User login successfully:");
  redirect(`/`)
      
    }
  return (
    <section className="min-h-screen bg-white dark:bg-[#0b1120] flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-8">

        <h1 className="text-2xl font-black text-black dark:text-white text-center">
          Login
        </h1>

        <p className="mt-2 text-center text-sm text-gray-600 dark:text-white/60">
          Welcome back to IdeaVault
        </p>

        <form onSubmit={handleLogin} className="mt-8 space-y-5">

          <div>
            <label className="text-sm text-black dark:text-white">Email</label>
            <input
            name="email"
            placeholder="Enter Your Email"
              type="email"
              className=" mt-2 w-full rounded-xl border border-gray-300 dark:border-white/10 bg-white dark:bg-[#0b1120] px-4 py-3 text-black dark:text-white outline-none focus:border-violet-500"
            />
          </div>

          <div>
            <label className="text-sm text-black dark:text-white">Password</label>
            <input
            name="password"
            placeholder="Enter Your Password"
              type="password"
              className="mt-2 w-full rounded-xl border border-gray-300 dark:border-white/10  dark:bg-[#0b1120] px-4 py-3 text-black dark:text-white outline-none focus:border-violet-500 bg-white"
            />
          </div>

          <div className="text-right">
            <Link href="#" className="text-sm text-violet-600 hover:underline">
              Forget Password?
            </Link>
          </div>

          <Button
            type="submit"
            className="w-full rounded-xl bg-violet-600 py-3 text-white font-semibold hover:bg-violet-500 transition"
          >
            Login
          </Button>

        </form>

        <div className="my-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-gray-200 dark:bg-white/10"></div>
          <span className="text-xs text-gray-500 dark:text-white/50">OR</span>
          <div className="h-px flex-1 bg-gray-200 dark:bg-white/10"></div>
        </div>

        <button
          onClick={async()=>{
const data = await authClient.signIn.social({
    provider: "google",
  });
       }}
          className="cursor-pointer flex w-full items-center justify-center gap-3 rounded-xl border border-gray-300 dark:border-white/10 bg-white dark:bg-[#0b1120] py-3 text-sm font-semibold text-black dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition"
        >
         <FcGoogle className="text-2xl"  />
          Continue with Google
        </button>

        <p className="mt-6 text-center text-sm text-gray-600 dark:text-white/60">
          Don’t have an account?{" "}
          <Link href="/register" className="text-violet-600 hover:underline">
            Register
          </Link>
        </p>

      </div>
    </section>
  );
}