"use client";

import React, { useState } from "react";

interface HotelFilterProps {
  onFilterChange: (filters: any) => void;
}

const HotelFilter: React.FC<HotelFilterProps> = ({ onFilterChange }) => {
  const [filter, setFilter] = useState({
    refundable: false,
    noPrepayment: false,
    specialOffers: false,
    priceRange: [0, 728],
    fiveStar: false,
    breakfastIncluded: false,
    budget: false,
    hotels: false,
    bnb: false,
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFilter((prev) => {
      const updatedFilter = { ...prev, [name]: checked };
      onFilterChange(updatedFilter);
      return updatedFilter;
    });
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const price = parseInt(e.target.value);
    setFilter((prev) => {
      const updatedFilter = { ...prev, priceRange: [0, price] };
      onFilterChange(updatedFilter);
      return updatedFilter;
    });
  };

  return (
    <aside className="w-full md:w-1/4 bg-white p-4 rounded-lg shadow-md">
      <h2 className="font-semibold text-lg mb-4">Deals</h2>
      <label className="flex items-center mb-4">
        <input
          type="checkbox"
          name="refundable"
          className="form-checkbox h-5 w-5 text-green-500"
          checked={filter.refundable}
          onChange={handleFilterChange}
        />
        <span className="ml-2">Fully refundable</span>
      </label>
      <label className="flex items-center mb-4">
        <input
          type="checkbox"
          name="noPrepayment"
          className="form-checkbox h-5 w-5 text-green-500"
          checked={filter.noPrepayment}
          onChange={handleFilterChange}
        />
        <span className="ml-2">No prepayment needed</span>
      </label>
      <label className="flex items-center mb-4">
        <input
          type="checkbox"
          name="specialOffers"
          className="form-checkbox h-5 w-5 text-green-500"
          checked={filter.specialOffers}
          onChange={handleFilterChange}
        />
        <span className="ml-2">Properties with Special Offers</span>
      </label>
      <h2 className="font-semibold text-lg mb-4">Price</h2>
      <input
        type="range"
        min="0"
        max="728"
        value={filter.priceRange[1]}
        onChange={handlePriceChange}
        className="w-full"
      />
      <div className="text-sm text-zinc-600">
        Price per night: ${filter.priceRange[0]} - ${filter.priceRange[1]}
      </div>
      <h2 className="font-semibold text-lg mb-4">Popular</h2>
      <label className="flex items-center mb-4">
        <input
          type="checkbox"
          name="fiveStar"
          className="form-checkbox h-5 w-5 text-green-500"
          checked={filter.fiveStar}
          onChange={handleFilterChange}
        />
        <span className="ml-2">5 Star</span>
      </label>
      <label className="flex items-center mb-4">
        <input
          type="checkbox"
          name="breakfastIncluded"
          className="form-checkbox h-5 w-5 text-green-500"
          checked={filter.breakfastIncluded}
          onChange={handleFilterChange}
        />
        <span className="ml-2">Breakfast included</span>
      </label>
      <h2 className="font-semibold text-lg mb-4">Property Type</h2>
      <label className="flex items-center mb-4">
        <input
          type="checkbox"
          name="budget"
          className="form-checkbox h-5 w-5 text-green-500"
          checked={filter.budget}
          onChange={handleFilterChange}
        />
        <span className="ml-2">Budget</span>
      </label>
      <label className="flex items-center mb-4">
        <input
          type="checkbox"
          name="hotels"
          className="form-checkbox h-5 w-5 text-green-500"
          checked={filter.hotels}
          onChange={handleFilterChange}
        />
        <span className="ml-2">Hotels</span>
      </label>
      <label className="flex items-center mb-4">
        <input
          type="checkbox"
          name="bnb"
          className="form-checkbox h-5 w-5 text-green-500"
          checked={filter.bnb}
          onChange={handleFilterChange}
        />
        <span className="ml-2">B&Bs</span>
      </label>
    </aside>
  );
};

export default HotelFilter;
