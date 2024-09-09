"use client";

import React from "react";
import { Hotel } from "./types";
import HotelCard from "./HotelCard";

interface HotelListProps {
  hotels: Hotel[];
}

const HotelList: React.FC<{
  hotels: Hotel[];
  onSortChange: (sortBy: string) => void;
}> = ({ hotels, onSortChange }) => (
  <main className="w-full p-4">
    <div className="flex justify-end space-x-4 mb-4">
      <label>
        Sort by:
        <select
          onChange={(e) => onSortChange(e.target.value)}
          className="ml-2 border border-zinc-300 rounded-lg p-2"
        >
          <option value="priceAsc">Price (Low to High)</option>
          <option value="priceDesc">Price (High to Low)</option>
          <option value="rating">Rating</option>
        </select>
      </label>
    </div>
    <div className="flex flex-col space-y-6">
      {hotels.map((hotel) => (
        <HotelCard key={hotel.id} {...hotel} />
      ))}
    </div>
  </main>
);

export default HotelList;
