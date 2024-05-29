"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white px-8 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-gray-800">Logo</div>
        <div className="hidden md:flex space-x-4">
          <Link
            href="/"
            passHref
            onClick={toggleMenu}
            className="text-gray-800"
          >
            Home{" "}
          </Link>
          <Link
            href="/blog"
            passHref
            onClick={toggleMenu}
            className="text-gray-800"
          >
            Blog{" "}
          </Link>
          <Link
            href="/about"
            passHref
            onClick={toggleMenu}
            className="text-gray-800"
          >
            About{" "}
          </Link>
          <Link
            href="/login"
            passHref
            onClick={toggleMenu}
            className="text-gray-800"
          >
            Login{" "}
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "100vh" : 0 }}
        className="fixed inset-0 bg-gray-800 z-50 flex flex-col justify-center items-center md:hidden"
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-white"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <div className="flex flex-col space-y-6 text-center">
          <Link
            href="/"
            passHref
            onClick={toggleMenu}
            className="text-white text-2xl"
          >
            Home{" "}
          </Link>
          <Link
            href="/blog"
            passHref
            onClick={toggleMenu}
            className="text-white text-2xl"
          >
            Blog{" "}
          </Link>
          <Link
            href="/contact"
            passHref
            onClick={toggleMenu}
            className="text-white text-2xl"
          >
            Contact
          </Link>
          <Link
            href="/login"
            passHref
            onClick={toggleMenu}
            className="text-white text-2xl"
          >
            Login
          </Link>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
