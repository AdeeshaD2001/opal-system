"use client";

import React, { useState } from "react";
import MenuLinks from "./MenuLinks";
import Logo from "./Logo";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Mocked authentication state

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Add logic for logout, such as clearing tokens or calling API
    setIsLoggedIn(false);
  };

  return (
    <header className="bg-[#6b4f4f] shadow-md py-6 px-6 lg:px-8 relative z-40">
      <div className="container mx-auto flex items-center justify-between relative">
        <Logo />

        <button
          className="text-3xl text-white lg:hidden focus:outline-none rounded absolute top-4 right-4 z-50"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <MenuLinks
          isOpen={isOpen}
          isLoggedIn={isLoggedIn}
          handleLogout={handleLogout}
        />
      </div>
    </header>
  );
};

export default NavBar;
