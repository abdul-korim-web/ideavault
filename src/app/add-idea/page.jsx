
import { createProductAction } from "@/action/createProduct";
import CreateProductFrom from "@/Components/client/CreateProductFrom";
export const metadata = {
  title: 'Add Ideas ',
  description: 'This is a add ideas page ',
}
export default function AddIdeaPage() {
  return (
    <section className="min-h-screen bg-white dark:bg-[#0b1120] px-4 py-10 md:px-8 animate__animated animate__backInDown">
      <div className="mx-auto max-w-4xl rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-6 md:p-10">
        <div>
          <h1 className="text-3xl font-black text-black dark:text-white">
            Submit Startup Idea 🚀
          </h1>

          <p className="mt-2 text-sm text-gray-600 dark:text-white/60">
            Share your innovative startup concept with the community
          </p>
        </div>

        <CreateProductFrom createProductAction={createProductAction}/>
      </div>
    </section>
  );
}