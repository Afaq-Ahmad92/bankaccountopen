"use client";
import React, { useState } from "react";
import Link from "next/link";
import "../styles/Navbar.css";
const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blend-darken p-4 fixed items-center w-full top-0 left-0 z-10 Navbar bg-transparent backdrop-blur-md bg-opacity-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link href="/">MyApp</Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link className="text-white" href="/">
            Home
          </Link>
          <Link href="/blogs" className="text-white">
            Blogs
          </Link>
          <Link href="/corporate-bank-account" className="text-white">
            Corporate Bank Account
          </Link>
          <Link href="/personal-bank-account" className="text-white">
            Personal Bank Account
          </Link>
          <Link href="/about" className="text-white">
            About Us
          </Link>
          <Link href="/contact" className="text-white">
            Contact Us
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
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
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black w-full flex flex-col space-y-2 p-3 mt-4">
          <Link className="text-white" href="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/blogs" className="text-white" onClick={toggleMenu}>
            Blogs
          </Link>
          <Link
            href="/corporate-bank-account"
            className="text-white"
            onClick={toggleMenu}
          >
            Corporate Bank Account
          </Link>
          <Link
            href="/personal-bank-account"
            className="text-white"
            onClick={toggleMenu}
          >
            Personal Bank Account
          </Link>
          <Link href="/about" className="text-white" onClick={toggleMenu}>
            About Us
          </Link>
          <Link href="/contact" className="text-white" onClick={toggleMenu}>
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default CustomNavbar;
