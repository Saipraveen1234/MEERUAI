import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6">
      <h2 className="text-4xl font-bold text-gray-900 mb-2">404</h2>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Page Not Found
      </h3>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-2.5 rounded-full bg-meeru-orange text-white text-sm font-medium hover:bg-meeru-orange/90 transition-colors"
      >
        Go home
      </Link>
    </div>
  );
}
