"use client";

import React, { useState, useEffect } from "react";

interface Room {
  type: string;
  amenities: string[];
  availability: boolean;
  price: number;
  adultCount: number; // Added
  childCount: number; // Added
}

interface Hotel {
  id: number;
  name: string;
  description: string;
  rating: number;
  reviews: number;
  image: string;
  deals: string[];
  rooms: Room[]; // New property for room details
}

const hotelData: Hotel[] = [
  {
    id: 1,
    name: "Ocean View Resort",
    description: "Beachfront property with stunning views.",
    rating: 4,
    reviews: 320,
    image: "https://placehold.co/400x200",
    deals: ["No prepayment needed"],
    rooms: [
      {
        type: "Standard Room",
        amenities: ["Sea view", "Free Wi-Fi", "King-size bed"],
        availability: true,
        price: 250,
        adultCount: 2,
        childCount: 0,
      },
      {
        type: "Deluxe Room",
        amenities: ["Ocean view", "Free Wi-Fi", "King-size bed", "Balcony"],
        availability: false,
        price: 350,
        adultCount: 2,
        childCount: 1,
      },
    ],
  },
  {
    id: 2,
    name: "City Lights Hotel",
    description: "Central location with modern amenities.",
    rating: 4,
    reviews: 680,
    image: "https://placehold.co/400x200",
    deals: ["Special Offer"],
    rooms: [
      {
        type: "Standard Room",
        amenities: ["City view", "Free Wi-Fi", "Queen-size bed"],
        availability: true,
        price: 120,
        adultCount: 1,
        childCount: 0,
      },
      {
        type: "Executive Suite",
        amenities: ["City view", "Free Wi-Fi", "King-size bed", "Mini bar"],
        availability: true,
        price: 220,
        adultCount: 2,
        childCount: 2,
      },
    ],
  },
  {
    id: 3,
    name: "Mountain Lodge",
    description: "Cozy retreat in the heart of the mountains.",
    rating: 5,
    reviews: 890,
    image: "https://placehold.co/400x200",
    deals: ["Fully refundable"],
    rooms: [
      {
        type: "Cabin Room",
        amenities: ["Mountain view", "Free Wi-Fi", "Fireplace"],
        availability: true,
        price: 180,
        adultCount: 2,
        childCount: 1,
      },
      {
        type: "Suite",
        amenities: ["Mountain view", "Free Wi-Fi", "Fireplace", "Jacuzzi"],
        availability: true,
        price: 280,
        adultCount: 2,
        childCount: 0,
      },
    ],
  },
];

const DatePicker: React.FC<{
  label: string;
  value: string;
  onChange: (date: string) => void;
}> = ({ label, value, onChange }) => (
  <div className="flex flex-col mb-4">
    <label className="font-semibold text-sm">{label}</label>
    <input
      type="date"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border border-zinc-300 rounded-lg p-2 w-48"
    />
  </div>
);

const GuestCountInput: React.FC<{
  value: string;
  onChange: (count: string) => void;
}> = ({ value, onChange }) => (
  <div className="flex flex-col mb-4">
    <label className="font-semibold text-sm">Guest Count</label>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="1 room, 2 adults, 0 children"
      className="border border-zinc-300 rounded-lg p-2 w-64"
    />
  </div>
);

const RoomCard: React.FC<Room> = ({
  type,
  amenities,
  availability,
  price,
  adultCount,
  childCount,
}) => (
  <div className="relative bg-zinc-100 rounded-lg p-4 shadow-md mb-4">
    {/* Availability Button in Top Right */}
    <div className="absolute bottom-4 right-4">
      <button
        className={`${
          availability ? "bg-green-500 text-white" : "bg-red-500 text-white"
        } rounded-md px-4 py-1 text-sm`}
        disabled={!availability}
      >
        {availability ? "Available" : "Unavailable"}
      </button>
    </div>

    <h5 className="font-semibold">{type}</h5>
    <p className="text-sm text-zinc-600">Amenities: {amenities.join(", ")}</p>
    <p className="text-sm text-zinc-600">Price: ${price} per night</p>
    <p className="text-sm text-zinc-600">Adults: {adultCount}</p>
    <p className="text-sm text-zinc-600">Children: {childCount}</p>
  </div>
);

const HotelCard: React.FC<Hotel> = ({
  id,
  name,
  description,
  rating,
  reviews,
  image,
  deals,
  rooms,
}) => (
  <div
    key={id}
    className="bg-white rounded-lg shadow-lg p-4 mb-6 flex flex-col"
  >
    {/* Top: Hotel Image (full width on small screens) */}
    <div className="w-full mb-4">
      <img src={image} alt={name} className="w-full rounded-lg object-cover" />
    </div>

    {/* Bottom: Hotel Details */}
    <div>
      <h3 className="font-bold text-xl mt-2">{name}</h3>
      <p className="text-zinc-600 mt-1">{description}</p>
      <div className="flex items-center mt-2">
        <span className="text-yellow-500">{"⭐".repeat(rating)}</span>
        <span className="text-zinc-600 ml-2">{reviews} reviews</span>
      </div>

      {/* Room Cards Section */}
      <div className="mt-4">
        <h4 className="font-semibold text-lg">Available Rooms:</h4>
        <div className="flex flex-col space-y-4 mt-2">
          {rooms.map((room, index) => (
            <RoomCard key={index} {...room} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

const HotelFilter: React.FC<{ onFilterChange: (filters: any) => void }> = ({
  onFilterChange,
}) => {
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
      <h2 className="font-semibold text-lg mb-4">Property Types</h2>
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
        <span className="ml-2">B&Bs & Inns</span>
      </label>
    </aside>
  );
};

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

const HotelSearch: React.FC = () => {
  const [filteredHotels, setFilteredHotels] = useState<Hotel[]>(hotelData);
  const [sortOrder, setSortOrder] = useState<string>("");

  const handleFilterChange = (filters: any) => {
    let updatedHotels = hotelData.filter((hotel) => {
      const matchesPriceRange = hotel.rooms.some(
        (room) =>
          room.price >= filters.priceRange[0] &&
          room.price <= filters.priceRange[1]
      );

      return (
        (!filters.refundable || hotel.deals.includes("Fully refundable")) &&
        (!filters.noPrepayment ||
          hotel.deals.includes("No prepayment needed")) &&
        (!filters.specialOffers || hotel.deals.includes("Special Offers")) &&
        (!filters.fiveStar || hotel.rating === 5) &&
        (!filters.breakfastIncluded ||
          hotel.deals.includes("Breakfast included")) &&
        (!filters.budget ||
          Math.max(...hotel.rooms.map((room) => room.price)) <= 100) &&
        (!filters.hotels || hotel.name.toLowerCase().includes("hotel")) &&
        (!filters.bnb || hotel.name.toLowerCase().includes("bnb")) &&
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
      <HotelFilter onFilterChange={handleFilterChange} />
      <HotelList hotels={filteredHotels} onSortChange={handleSortChange} />
    </div>
  );
};
export default HotelSearch;
