"use server";

import { auth } from "@/lib/auth";
import {  revalidateTag } from "next/cache";
import { headers } from "next/headers";

export const createProductAction = async (prevState, formData) => {
  const data = Object.fromEntries(formData);
//   console.log('data', data)

 try {
  const {token} = await auth.api.getToken({
    headers:await headers(),
  })
//   console.log('token', token)
 
  const ideaData = {
    title: data.title,
    shortDescription: data.shortDescription,
    detailedDescription: data.detailedDescription,
    category: data.category,
    tags: data.tags ? data.tags.split(",").map((t) => t.trim()) : [],
    imageUrl: data.imageUrl,
    estimatedBudget: data.estimatedBudget,
    targetAudience: data.targetAudience,
    problemStatement: data.problemStatement,
    proposedSolution: data.proposedSolution,
  };
//   console.log('ideaData', ideaData)

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/product`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(ideaData),
  });

  const result = await res.json();
  revalidateTag("products")
  return result;
 } catch (error) {
    console.error("Create Product Error:", error);

    return {
      success: false,
      message: "Something went wrong",
    };
 }
};