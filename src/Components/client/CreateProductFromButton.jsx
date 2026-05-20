import React from 'react';
import { useFormStatus } from 'react-dom';

const CreateProductFromButton = () => {
     const { pending } = useFormStatus();
         console.log('pending', pending)
    return (
        <button
  type="submit"
  disabled={pending}
  className="group relative w-full overflow-hidden rounded-2xl bg-violet-600 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-70 cursor-pointer"
>
  <span className="relative z-10 flex items-center justify-center gap-2">
    {pending && (
      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
    )}

    {pending ? "Submitting..." : "Submit Idea"}
  </span>

  <span className="absolute inset-0 -z-0 bg-gradient-to-r from-violet-600 via-purple-600 to-violet-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
</button>
    );
}

export default CreateProductFromButton;
