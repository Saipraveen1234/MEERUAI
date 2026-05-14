"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        Something went wrong
      </h2>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        We apologize for the inconvenience. Please try again or return to the homepage.
      </p>
      <div className="flex gap-4">
        <button
          onClick={reset}
          className="px-6 py-2.5 rounded-full bg-meeru-orange text-white text-sm font-medium hover:bg-meeru-orange/90 transition-colors"
        >
          Try again
        </button>
        <Link
          href="/"
          className="px-6 py-2.5 rounded-full border border-gray-200 text-sm font-medium text-gray-700 hover:border-gray-300 transition-colors"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
