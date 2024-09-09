"use client";

import React, { useState } from "react";
import HotelFilter from "./HotelFilter";
import HotelList from "./HotelList";
import DatePicker from "./DatePicker";
import GuestCountInput from "./GuestCountInput";
import { hotels as hotelData } from "./constants";
import { Hotel } from "./types";

const HotelsPage: React.FC = () => {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guestCount, setGuestCount] = useState("1 room, 2 adults, 0 children");
  const [filteredHotels, setFilteredHotels] = useState<Hotel[]>(hotelData);
  const [filters, setFilters] = useState({
    priceRange: [0, Infinity],
    refundable: false,
    noPrepayment: false,
    specialOffers: false,
    fiveStar: false,
    breakfastIncluded: false,
    budget: false,
    hotels: false,
    bnb: false,
  });
  const [sortOrder, setSortOrder] = useState("");

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);

    let updatedHotels = hotelData.filter((hotel) => {
      const matchesPriceRange = hotel.rooms.some(
        (room) =>
          room.price >= newFilters.priceRange[0] &&
          room.price <= newFilters.priceRange[1]
      );

      return (
        (!newFilters.refundable || hotel.deals.includes("Fully refundable")) &&
        (!newFilters.noPrepayment ||
          hotel.deals.includes("No prepayment needed")) &&
        (!newFilters.specialOffers || hotel.deals.includes("Special Offers")) &&
        (!newFilters.fiveStar || hotel.rating === 5) &&
        (!newFilters.breakfastIncluded ||
          hotel.deals.includes("Breakfast included")) &&
        (!newFilters.budget ||
          Math.max(...hotel.rooms.map((room) => room.price)) <= 100) &&
        (!newFilters.hotels || hotel.name.toLowerCase().includes("hotel")) &&
        (!newFilters.bnb || hotel.name.toLowerCase().includes("bnb")) &&
        matchesPriceRange
      );
    });

    if (sortOrder) {
      updatedHotels = sortHotels(updatedHotels, sortOrder);
    }

    setFilteredHotels(updatedHotels);
  };

  const sortHotels = (hotels: Hotel[], sortBy: string) => {
    switch (sortBy) {
      case "priceAsc":
        return hotels.sort((a, b) => {
          const maxPriceA = Math.max(...a.rooms.map((room) => room.price));
          const maxPriceB = Math.max(...b.rooms.map((room) => room.price));
          return maxPriceA - maxPriceB;
        });
      case "priceDesc":
        return hotels.sort((a, b) => {
          const maxPriceA = Math.max(...a.rooms.map((room) => room.price));
          const maxPriceB = Math.max(...b.rooms.map((room) => room.price));
          return maxPriceB - maxPriceA;
        });
      case "rating":
        return hotels.sort((a, b) => b.rating - a.rating);
      default:
        return hotels;
    }
  };

  const handleSortChange = (sortBy: string) => {
    setSortOrder(sortBy);
    setFilteredHotels(sortHotels([...filteredHotels], sortBy));
  };

  return (
    <div className="flex flex-col md:flex-row">
      <HotelFilter onFilterChange={handleFilterChange} filters={filters} />
      <main className="flex flex-col p-4 w-full md:w-3/4">
        <HotelList hotels={filteredHotels} onSortChange={handleSortChange} />
      </main>
    </div>
  );
};

export default HotelsPage;
