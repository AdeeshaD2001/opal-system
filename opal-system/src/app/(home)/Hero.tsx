"use client";

import React from "react";
import SearchBar from "./SearchBar"; // Import the new SearchBar component

export default function Hero() {
  return (
    <div className="relative h-screen bg-white flex items-center justify-center">
      {/* Main Image with Increased Height and Corner Rounding */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <img
          src="img/bedroom.jpg"
          alt="Room"
          className="rounded-3xl object-cover w-[90%] h-[75vh] shadow-xl"
          style={{ top: "-35px", position: "relative" }}
        />
      </div>

      {/* Search Bar */}
      <SearchBar />
    </div>
  );
}
