"use client";

import React from "react";
import { Room } from "./types";

const RoomCard: React.FC<Room> = ({
  type,
  amenities,
  availability,
  price,
  adultCount,
  childCount,
}) => (
  <div className="relative bg-zinc-100 rounded-lg p-4 shadow-md mb-4">
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

export default RoomCard;
