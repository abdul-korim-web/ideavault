"use client"
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import React, { useState } from "react";
import { toast } from "react-toastify";

const CommentFrom = ({productId}) => {
    const [loading,setLoading] = useState(false)
    const handelCommentSubmit = async (e) => {
  e.preventDefault();

  try {
    setLoading(true);

    const form = e.target;
    const comment = form.comment.value;

    if (!comment) {
      return toast.error("Comment is required");
    }

    const { data: tokenData } = await authClient.token();
    const token = tokenData?.token;

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/comment`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          comment,
          productId: productId,
        }),
      }
    );

    const data = await res.json();

    if (data.success) {
      toast.success(data.message || "Comment added");
      form.reset();


    } else {
      toast.error(data.message || "Failed to comment");
    }

  } catch (error) {
    console.log(error);
    toast.error("Something went wrong");
  } finally {
    setLoading(false);
  }
};
  return (
    <form onSubmit={handelCommentSubmit} className="mt-6">
      <textarea
      name="comment"
        rows={4}
        placeholder="Write your comment..."
        className="w-full rounded-2xl border border-gray-300 dark:border-white/10 bg-white dark:bg-[#0b1120] px-4 py-4 text-black dark:text-white outline-none focus:border-violet-500"
      ></textarea>

     <Button
  type="submit"
  isLoading={loading}
  disabled={loading}
  className="mt-4  rounded-2xl bg-violet-600 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-70"
>
  {loading ? "Adding Comment..." : "Add Comment"}
</Button>
    </form>
  );
};

export default CommentFrom;
