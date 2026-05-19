"use client";

import { Button } from "@heroui/react";
import React, { useState } from "react";
import { toast } from "react-toastify";


const CommentDelete = ({ token, commentId }) => {
  const [loading, setLoading] = useState(false);


  const handleDelete = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/comment/productcomment/${commentId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();

      if (data.success) {
        toast.success(data.message || "Comment deleted");
    
      } else {
        toast.error(data.message || "Delete failed");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      variant="none"
      className="text-sm font-medium text-red-500 hover:underline cursor-pointer"
      onPress={handleDelete}
      isDisabled={loading}
    >
      {loading ? "Deleting..." : "Delete"}
    </Button>
  );
};

export default CommentDelete;