"use client";

import { useState } from "react";
import { Button, Modal } from "@heroui/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export function UpdateComment({
  commentId,
  token,
  oldComment,
}) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [comment, setComment] = useState(oldComment || "");

  const handleUpdate = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/comment/productcomment/${commentId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            comment,
          }),
        }
      );

      const data = await res.json();

      if (data.success) {
        toast.success(data.message || "Comment updated");
        router.refresh();
      } else {
        toast.error(data.message || "Update failed");
      }

    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal>


      <Button
        variant="none"
        className="text-sm font-medium text-violet-500 hover:underline cursor-pointer"
      >
        Edit
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="center">

          <Modal.Dialog className="sm:max-w-[450px] rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0b1120]">

            <Modal.CloseTrigger />


            <Modal.Header>

              <Modal.Icon className="bg-violet-500/10 text-violet-500">
                ✏️
              </Modal.Icon>

              <Modal.Heading className="text-black dark:text-white">
                Update Comment
              </Modal.Heading>

            </Modal.Header>


            <Modal.Body>

              <textarea
                rows={5}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Update your comment..."
                className="w-full rounded-2xl border border-gray-300 dark:border-white/10 bg-white dark:bg-[#0b1120] px-4 py-3 text-sm text-black dark:text-white outline-none focus:border-violet-500"
              />

            </Modal.Body>


            <Modal.Footer className="flex gap-3">

              <Button
                variant="bordered"
                className="flex-1 rounded-xl"
                slot="close"
              >
                Cancel
              </Button>

              <Button
                onPress={handleUpdate}
                isLoading={loading}
                isDisabled={loading}
                className="flex-1 rounded-xl bg-violet-600 text-white hover:bg-violet-500"
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