"use client";

import React from "react";
import CustomDatePicker from "./DatePicker";
import GuestCountPicker from "./GuestCountPicker";
import SearchButton from "./SearchButton";
import Divider from "./Divider";

const SearchBar: React.FC = () => {
  return (
    <div className="relative w-[100%] max-w-4xl mx-auto p-6 bg-white bg-opacity-95 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4 mt-[67vh]">
      {/* Date Picker Components */}
      <CustomDatePicker label="Check-In" />
      <Divider />
      <CustomDatePicker label="Check-Out" />
      <Divider />
      {/* Guest Count Picker */}
      <GuestCountPicker />
      {/* Search Button */}
      <SearchButton />
    </div>
  );
};

export default SearchBar;
