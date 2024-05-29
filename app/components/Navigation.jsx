"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Navbar</div>
        <div className="hidden md:flex space-x-4">
          <a href="/" className="text-white">Home</a>
          <a href="/about" className="text-white">About</a>
          <a href="/services" className="text-white">Services</a>
          <a href="/contact" className="text-white">Contact</a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? '100vh' : 0 }}
        className="fixed inset-0 bg-blue-600 z-50 flex flex-col justify-center items-center md:hidden"
      >
        <button onClick={toggleMenu} className="absolute top-4 right-4 text-white">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <div className="flex flex-col space-y-6 text-center">
          <a href="/" className="text-white text-2xl" onClick={toggleMenu}>Home</a>
          <a href="/about" className="text-white text-2xl" onClick={toggleMenu}>About</a>
          <a href="/services" className="text-white text-2xl" onClick={toggleMenu}>Services</a>
          <a href="/contact" className="text-white text-2xl" onClick={toggleMenu}>Contact</a>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
