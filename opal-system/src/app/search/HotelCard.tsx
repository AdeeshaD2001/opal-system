"use client";

import React from "react";
import { Hotel } from "./types";
import RoomCard from "./RoomCard";

const HotelCard: React.FC<Hotel> = ({
  id,
  name,
  description,
  rating,
  reviews,
  image,
  rooms,
}) => (
  <div
    key={id}
    className="bg-white rounded-lg shadow-lg p-4 mb-6 flex flex-col sm:flex-row"
  >
    <div className="w-full sm:w-1/3 mb-4 sm:mb-0 sm:mr-4">
      <img
        src={image}
        alt={name}
        className="w-full h-full rounded-lg object-cover"
      />
    </div>

    <div className="w-full sm:w-2/3 flex flex-col">
      <h3 className="font-bold text-xl">{name}</h3>
      <p className="text-zinc-600 mt-1">{description}</p>
      <div className="flex items-center mt-2">
        <span className="text-yellow-500">{"⭐".repeat(rating)}</span>
        <span className="text-zinc-600 ml-2">{reviews} reviews</span>
      </div>

      <div className="mt-4 flex-1">
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

export default HotelCard;
