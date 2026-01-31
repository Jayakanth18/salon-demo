import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-[#d4a574] mb-4">404</h1>
        <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
        <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
          We're sorry, the page you requested could not be found. Please go back to the homepage or contact us.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/"
            className="bg-[#d4a574] text-white px-8 py-4 hover:bg-[#c39563] transition-colors uppercase font-semibold"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="bg-gray-800 text-white px-8 py-4 hover:bg-gray-700 transition-colors uppercase font-semibold"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
