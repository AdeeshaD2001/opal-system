"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <header className="bg-[#6b4f4f] shadow-md py-6 px-6 lg:px-8 relative z-40">
      {" "}
      {/* Ensure header has high z-index */}
      <div className="container mx-auto flex items-center justify-between relative">
        {" "}
        {/* Ensure this container is also relative */}
        {/* Logo */}
        <Link
          href="/"
          className="text-white text-3xl md:text-5xl font-extrabold tracking-wider"
        >
          <span className="text-[#D1A7A7]">Opal</span> Hotels
        </Link>
        {/* Hamburger Menu Icon */}
        <button
          className="text-3xl text-white lg:hidden focus:outline-none rounded absolute top-4 right-4 z-50"
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
              <Link href="/search">Hotels</Link>
            </li>

            <li className="relative hover:-translate-y-2 duration-500 transition-all text-white">
              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-2"
              >
                <span>About Us</span>
              </button>
              {isDropdownOpen && (
                <ul
                  ref={dropdownRef}
                  className="absolute left-0 mt-2 w-48 bg-white text-[#836666] rounded-lg shadow-lg z-50"
                >
                  <li className="hover:bg-gray-100">
                    <Link href="/ourStory" className="block px-4 py-2">
                      Our Story
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100">
                    <Link href="/mission&vision" className="block px-4 py-2">
                      Mission & Vision
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100">
                    <Link href="/termsOfService" className="block px-4 py-2">
                      Terms of Service
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100">
                    <Link href="/privacyPolicy" className="block px-4 py-2">
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100">
                    <Link href="/cookiePolicy" className="block px-4 py-2">
                      Cookie Policy
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100">
                    <Link href="/faq" className="block px-4 py-2">
                      FAQs
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="hover:-translate-y-2 duration-500 transition-all text-white">
              <Link href="/contact">Contact</Link>
            </li>

            <li className="lg:ml-4">
              <button className="bg-white text-[#836666] rounded h-12 px-6 transition duration-300 ease-in-out hover:bg-gray-300">
                <Link href="/LogIn">Log In</Link>
              </button>
            </li>

            <li className="lg:ml-4">
              <button className="bg-white text-[#836666] rounded h-12 px-6 transition duration-300 ease-in-out hover:bg-gray-300">
                <Link href="/SignUp">Sign Up</Link>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
