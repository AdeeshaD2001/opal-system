"use client";

import React, { useState } from "react";

// Define the type for the Hotel data
interface Hotel {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  deals: string[];
}

// Sample hotel data
const hotelData: Hotel[] = [
  {
    id: 1,
    name: "Ocean View Resort",
    description: "Beachfront property with stunning views.",
    price: 250,
    rating: 4,
    reviews: 320,
    image: "/img/OceanView.jpg",
    deals: ["No prepayment needed"],
  },
  {
    id: 2,
    name: "City Lights Hotel",
    description: "Central location with modern amenities.",
    price: 120,
    rating: 4,
    reviews: 680,
    image: "/img/city hotel.jpg",
    deals: ["Special Offer"],
  },
  {
    id: 3,
    name: "Mountain Lodge",
    description: "Cozy retreat in the heart of the mountains.",
    price: 180,
    rating: 5,
    reviews: 890,
    image: "/img/mountain.jpg",
    deals: ["Fully refundable"],
  },
  {
    id: 4,
    name: "Desert Oasis",
    description: "Luxury resort in the desert.",
    price: 300,
    rating: 5,
    reviews: 150,
    image: "/img/dessert.jpg",
    deals: ["All-inclusive"],
  },
  {
    id: 5,
    name: "Forest Retreat",
    description: "Cabins nestled in a tranquil forest.",
    price: 200,
    rating: 4,
    reviews: 260,
    image: "/img/forest.jpg",
    deals: ["Breakfast included"],
  },
];

// HotelCard component
const HotelCard: React.FC<Hotel> = ({
  name,
  description,
  price,
  rating,
  reviews,
  image,
  deals,
}) => (
  <div className="bg-white rounded-lg shadow-md p-4 flex mb-6 border border-[#836666]">
    <img src={image} alt={name} className="w-1/3 rounded-l-lg object-cover" />
    <div className="w-2/3 p-4">
      <h3 className="font-bold text-xl text-[#836666]">{name}</h3>
      <p className="text-zinc-600 mt-2">{description}</p>
      <p className="font-bold text-2xl mt-2 text-[#836666]">${price}</p>
      <button className="bg-[#836666] text-white rounded-lg py-2 px-4 mt-4 hover:bg-[#705757]">
        View deal
      </button>
      <div className="flex items-center mt-2">
        <span className="text-[#836666]">{"⭐".repeat(rating)}</span>
        <span className="text-zinc-600 ml-2">{reviews} reviews</span>
      </div>
      <ul className="mt-2">
        {deals.map((deal, index) => (
          <li key={index} className="text-zinc-600 text-sm">
            {deal}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default function LatestHotels() {
  const [visibleHotels, setVisibleHotels] = useState(3);

  const showMoreHotels = () => {
    setVisibleHotels((prev) => prev + 3);
  };

  return (
    <section className="bg-white p-8">
      <h2 className="text-3xl font-extrabold text-center mb-8 text-[#836666]">
        <span className="border-b-4 border-[#836666] pb-2">Latest Hotels</span>
      </h2>
      <div>
        {hotelData.slice(0, visibleHotels).map((hotel) => (
          <HotelCard key={hotel.id} {...hotel} />
        ))}
      </div>
      {visibleHotels < hotelData.length && (
        <div className="text-center mt-8">
          <button
            onClick={showMoreHotels}
            className="bg-[#836666] text-white rounded-lg py-2 px-6 hover:bg-[#705757]"
          >
            See More
          </button>
        </div>
      )}
    </section>
  );
}
