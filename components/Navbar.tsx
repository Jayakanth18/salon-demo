"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-100 sticky top-0 z-50 shadow-md">
      <nav className="container mx-auto flex items-center justify-between px-4">
        <Link
          href="/"
          className="bg-[#d4a574] py-6 px-8 flex items-center gap-2 hover:bg-[#c39563] transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"
            />
          </svg>
          <h1 className="text-2xl font-bold mb-0">Salone</h1>
        </Link>

        <button
          type="button"
          className="lg:hidden text-gray-700 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex lg:items-center w-full lg:w-auto absolute lg:relative top-full left-0 bg-gray-100 lg:bg-transparent p-4 lg:p-0`}
        >
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
            <Link
              href="/"
              className="text-gray-700 hover:text-[#d4a574] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-[#d4a574] transition-colors"
            >
              About
            </Link>
            <Link
              href="/service"
              className="text-gray-700 hover:text-[#d4a574] transition-colors"
            >
              Service
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-[#d4a574] transition-colors flex items-center gap-1 py-2">
                Pages
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="lg:absolute left-0 top-full hidden group-hover:block bg-gray-100 lg:shadow-lg rounded min-w-[150px] pt-2">
                <div className="bg-gray-100 rounded shadow-lg">
                  <Link
                    href="/team"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#d4a574] hover:text-white transition-colors whitespace-nowrap"
                  >
                    Our Team
                  </Link>
                  <Link
                    href="/testimonial"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#d4a574] hover:text-white transition-colors whitespace-nowrap"
                  >
                    Testimonial
                  </Link>
                </div>
              </div>
            </div>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-[#d4a574] transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
