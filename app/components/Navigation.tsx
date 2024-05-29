"use client";
import Link from "next/link";
import { useState } from "react";
import MobileLink from "./MobileLink";
import { motion, AnimatePresence } from "framer-motion";
const links = [
  { href: "/", label: "Home" },
  { href: "/", label: "About" },
  { href: "/", label: "Contact" },
  { href: "/", label: "What We Do" },
  { href: "/blog", label: "Blog" },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
    },
    exit: {
      scaleY: 0,
    },
  };
  return (
    <header>
      <nav className="flex justify-between px-10 py-8 text-black bg-white backdrop-blur-lg text-md font-medium backdrop-filter bg-opacity-20">
        <p>Logo</p>
        <section className="flex space-x-8 items-center">
          <Link href={"/"}>Home</Link>
          <Link href={"/blog"}>Blog</Link>
          <button className="">Login</button>
        </section>
        <div
          onClick={toggleMenu}
          className="md:hidden cursor-pointer text-md text-black"
        >
          Menu
        </div>
      </nav>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen origin-top bg-yellow-400 text-black p-10"
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-between">
                <h1 className="text-lg text-black">Portfolio</h1>
                <p
                  className="cursor-pointer text-md text-black"
                  onClick={toggleMenu}
                >
                  Close
                </p>
              </div>
              <motion.div
                className="flex flex-col h-full justify-center font-lora items-center gap-4 "
              >
                {links.map((link, index) => {
                  return (
                    <div className="overflow-hidden">
                      <MobileLink key={index} href={link.href} label={link.label} />
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
