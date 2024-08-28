"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[#6b4f4f] shadow-md py-6 px-6 lg:px-8 rounded-t-xl rounded-b-xl">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-white text-3xl md:text-5xl font-extrabold tracking-wider"
        >
          <span className="text-[#836666]">CeylonX</span> Hotels
        </Link>

        {/* Hamburger Menu Icon */}
        <button
          className="text-3xl text-white lg:hidden focus:outline-none rounded"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`lg:flex lg:items-center lg:space-x-8 ${
            isOpen ? "block" : "hidden"
          } w-full lg:w-auto rounded-lg lg:rounded-none bg-[#6b4f4f] lg:bg-transparent mt-4 lg:mt-0 transition-all duration-300 ease-in-out`}
        >
          <ul className="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full lg:w-auto space-y-4 lg:space-y-0 lg:space-x-8 mt-4 lg:mt-0">
            <li className="hover:-translate-y-2 duration-500 transition-all text-white">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:-translate-y-2 duration-500 transition-all text-white">
              <Link href="/hotels">Hotels</Link>
            </li>
            <li className="hover:-translate-y-2 duration-500 transition-all text-white">
              <Link href="/Details">About Us</Link>
            </li>
            <li className="hover:-translate-y-2 duration-500 transition-all text-white">
              <Link href="/">Contact</Link>
            </li>
            <li className="lg:ml-4">
              <button className="bg-white text-[#836666] rounded h-12 px-6 transition duration-300 ease-in-out hover:bg-gray-200">
                <Link href="/LogIn">Sign In</Link>
              </button>
            </li>
            <li className="lg:ml-4">
              <button className="bg-white text-[#836666] rounded h-12 px-6 transition duration-300 ease-in-out hover:bg-gray-200">
                <Link href="/Register">Register</Link>
              </button>
              <button className="bg-[#836666] text-white rounded-full h-12 px-6 transition duration-300 ease-in-out hover:bg-[#6b4f4f] shadow-lg">
                Login
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
