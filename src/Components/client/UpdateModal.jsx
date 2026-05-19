"use client";

import { useState } from "react";
import { Button, Modal } from "@heroui/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export function UpdateModal({ idea }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    title: idea?.title || "",
    shortDescription: idea?.shortDescription || "",
    detailedDescription: idea?.detailedDescription || "",
    category: idea?.category || "",
    tags: idea?.tags?.join(", ") || "",
    imageUrl: idea?.imageUrl || "",
    estimatedBudget: idea?.estimatedBudget || "",
    targetAudience: idea?.targetAudience || "",
    problemStatement: idea?.problemStatement || "",
    proposedSolution: idea?.proposedSolution || "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      setLoading(true);

      const { data: tokenData } = await authClient.token();
      const token = tokenData?.token;

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/product/${idea._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            ...form,
            tags: form.tags.split(",").map((t) => t.trim()),
          }),
        }
      );

      const data = await res.json();

      if (data.success) {
        toast.success(data.message || "Updated successfully");
        router.refresh();
      } else {
        toast.error(data.message || "Update failed");
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.log('error', error)
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal>
      <Button
        variant="bordered"
        className="flex-1 rounded-xl border border-violet-500 px-4 py-2 text-sm font-medium text-violet-500 transition hover:bg-violet-500 hover:text-white"
      >
        Update
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="center">
          <Modal.Dialog className="sm:max-w-lg rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0b1120]">

            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Icon className="bg-violet-500/10 text-violet-500">
                ✏️
              </Modal.Icon>

              <Modal.Heading className="text-black dark:text-white">
                Update Idea
              </Modal.Heading>

              <p className="mt-1 text-sm text-gray-600 dark:text-white/60">
                Edit your startup idea details below
              </p>
            </Modal.Header>

            {/* BODY */}
            <Modal.Body className="p-6 space-y-4">

              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                className="w-full rounded-xl border px-4 py-3"
                placeholder="Title"
              />

              <input
                name="shortDescription"
                value={form.shortDescription}
                onChange={handleChange}
                className="w-full rounded-xl border px-4 py-3"
                placeholder="Short Description"
              />

              <textarea
                name="detailedDescription"
                value={form.detailedDescription}
                onChange={handleChange}
                className="w-full rounded-xl border px-4 py-3"
                rows={3}
                placeholder="Detailed Description"
              />

              <div className="grid grid-cols-2 gap-3">
                <input
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="rounded-xl border px-4 py-3"
                  placeholder="Category"
                />

                <input
                  name="tags"
                  value={form.tags}
                  onChange={handleChange}
                  className="rounded-xl border px-4 py-3"
                  placeholder="Tags"
                />
              </div>

              <input
                name="imageUrl"
                value={form.imageUrl}
                onChange={handleChange}
                className="w-full rounded-xl border px-4 py-3"
                placeholder="Image URL"
              />

              <div className="grid grid-cols-2 gap-3">
                <input
                  name="estimatedBudget"
                  value={form.estimatedBudget}
                  onChange={handleChange}
                  className="rounded-xl border px-4 py-3"
                  placeholder="Budget"
                />

                <input
                  name="targetAudience"
                  value={form.targetAudience}
                  onChange={handleChange}
                  className="rounded-xl border px-4 py-3"
                  placeholder="Audience"
                />
              </div>

              <textarea
                name="problemStatement"
                value={form.problemStatement}
                onChange={handleChange}
                className="w-full rounded-xl border px-4 py-3"
                rows={2}
                placeholder="Problem"
              />

              <textarea
                name="proposedSolution"
                value={form.proposedSolution}
                onChange={handleChange}
                className="w-full rounded-xl border px-4 py-3"
                rows={2}
                placeholder="Solution"
              />
            </Modal.Body>

            {/* FOOTER */}
            <Modal.Footer className="flex gap-3">

              <Button variant="bordered" className="flex-1" slot="close">
                Cancel
              </Button>

              <Button
                className="flex-1 bg-violet-600 text-white rounded-xl"
                onPress={handleUpdate}
                isLoading={loading}
              >
                {loading ? "Updating..." : "Save Changes"}
              </Button>

            </Modal.Footer>

          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}