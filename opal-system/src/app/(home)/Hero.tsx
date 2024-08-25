"use client";

import React from "react";

export default function Hero() {
  return (
    <div className="relative h-screen bg-white flex items-center justify-center">
      {/* Main Image with Increased Height and Corner Rounding */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <img
          src="img/bedroom.jpg"
          alt="Room"
          className="rounded-3xl object-cover w-[90%] h-[70vh] shadow-xl"
        />
      </div>

      {/* Search Bar Container */}
      <div className="fixed top-[calc(40vh)] w-[60%] max-w-4xl mx-auto p-6 bg-white bg-opacity-95 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
        {/* Date Picker */}
        <div className="flex-1 flex flex-col md:flex-row items-center">
          <label className="text-zinc-700 font-semibold mr-2 md:w-24 text-right">
            Check-In
          </label>
          <input
            type="date"
            className="w-full md:w-[45%] p-2 border-none rounded-full bg-gray-100 text-zinc-700 placeholder-zinc-400 focus:outline-none"
          />
        </div>
        {/* Divider */}
        <div className="h-12 border-l border-gray-300 hidden md:block"></div>
        {/* Date Picker */}
        <div className="flex-1 flex flex-col md:flex-row items-center">
          <label className="text-zinc-700 font-semibold mr-2 md:w-24 text-right">
            Check-Out
          </label>
          <input
            type="date"
            className="w-full md:w-[45%] p-2 border-none rounded-full bg-gray-100 text-zinc-700 placeholder-zinc-400 focus:outline-none"
          />
        </div>
        {/* Divider */}
        <div className="h-12 border-l border-gray-300 hidden md:block"></div>
        {/* Guest Count Picker */}
        <div className="flex-1 flex flex-col md:flex-row items-center">
          <label className="text-zinc-700 font-semibold mr-2 md:w-24 text-right">
            Guest Count
          </label>
          <input
            type="number"
            placeholder="Number of guests"
            className="w-full md:w-[45%] p-2 border-none rounded-full bg-gray-100 text-zinc-700 placeholder-zinc-400 focus:outline-none"
          />
        </div>

        {/* Search Button */}
        <button className="bg-[#6b4f4f] text-white rounded-full h-12 px-6 mt-4 md:mt-0 transition duration-300 ease-in-out hover:bg-[#5a3e3e]">
          Search
        </button>
      </div>
    </div>
  );
}
