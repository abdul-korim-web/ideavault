
import CommentDelete from "@/Components/client/CommentDelete";
import { auth } from "@/lib/auth";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
 const getComments = async (token) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/comment/mycomment`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
      }
    );

    const data = await res.json();

    return data?.data || [];
  } catch (error) {
    console.log("comment fetch error:", error);

    return [];
  }
};
export default async function MyInteractionsPage({  }) {
  const {token} = await auth.api.getToken({
      headers:await headers()
    })
    const comments= await getComments(token)
    console.log('comments', comments)
  return (
    <section className="min-h-screen bg-white dark:bg-[#0b1120] px-4 py-10 md:px-8">
      <div className="mx-auto max-w-5xl">

        {/* HEADER */}
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">

          <div>
            <h1 className="text-3xl font-black text-black dark:text-white">
              My Interactions 💬
            </h1>

            <p className="mt-2 text-sm text-gray-600 dark:text-white/60">
              All comments you have made on startup ideas
            </p>
          </div>

          <div className="rounded-2xl bg-violet-600 px-5 py-3 text-center text-white">
            <h3 className="text-2xl font-black">
              {comments.length}
            </h3>
            <p className="text-xs text-white/80">Total Comments</p>
          </div>

        </div>

        {/* EMPTY STATE */}
        {comments.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-3xl border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5 py-20 text-center">

            <h2 className="text-2xl font-bold text-black dark:text-white">
              No Comments Found 😕
            </h2>

            <p className="mt-2 text-sm text-gray-600 dark:text-white/60">
              You haven’t commented on any startup ideas yet.
            </p>

          </div>
        ) : (

          /* LIST */
          <div className="space-y-6">

            {comments.map((item) => (

              <div
                key={item._id}
                className="flex flex-col gap-5 rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-5 md:flex-row"
              >

                {/* IMAGE (optional idea image if you add later) */}
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-violet-600/10 text-violet-500 font-bold">
                  💡
                </div>

                {/* CONTENT */}
                <div className="flex flex-1 flex-col justify-between">

                  <div>

                    <h2 className="text-xl font-bold text-black dark:text-white">
                      Idea ID: {item.productId}
                    </h2>

                    {/* COMMENT BOX */}
                    <div className="mt-4 rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-[#0b1120] p-4">

                      <div className="flex items-center gap-3 mb-3">

                        <Image
                          src={item?.creator?.image || "/user.png"}
                          alt={item?.creator?.name}
                          width={35}
                          height={35}
                          className="h-9 w-9 rounded-full object-cover"
                        />

                        <div>
                          <p className="text-sm font-semibold text-black dark:text-white">
                            {item?.creator?.name}
                          </p>

                          <p className="text-xs text-gray-500 dark:text-white/40">
                            {item?.creator?.email}
                          </p>
                        </div>

                      </div>

                      <p className="text-sm leading-7 text-gray-700 dark:text-white/70">
                        “{item.comment}”
                      </p>

                    </div>

                  </div>

                  {/* FOOTER */}
                  <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                    <p className="text-xs text-gray-500 dark:text-white/40">
                      {new Date(item.createdAt).toLocaleString()}
                    </p>

                    <div className="flex items-center gap-3">

                      <Button
                        variant="outline"
                        className="rounded-xl border border-violet-500 px-4 py-2 text-sm font-medium text-violet-500 transition hover:bg-violet-500 hover:text-white"
                      >
                        Edit
                      </Button>

                      <CommentDelete token={token} commentId={item._id} />

                      <Link
                        href={`/ideas/${item.productId}`}
                        className="rounded-xl bg-violet-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-violet-500"
                      >
                        View Idea
                      </Link>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>
    </section>
  );
}