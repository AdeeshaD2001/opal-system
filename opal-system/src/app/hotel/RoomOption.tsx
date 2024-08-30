import React, { useState } from "react";

interface RoomOptionProps {
  roomType: string;
  description: string;
  price: string;
  discount: string;
  includes: string;
}

const RoomOption: React.FC<RoomOptionProps> = ({
  roomType,
  description,
  price,
  discount,
  includes,
}) => {
  const [numRooms, setNumRooms] = useState(1);

  const handleNumRoomsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumRooms(Number(e.target.value));
  };

  return (
    <div className="p-4 border border-gray-300 rounded-lg">
      <h4 className="text-lg font-semibold mb-2">{roomType}</h4>
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="text-green-600 font-bold mb-2">{price}</p>
      <p className="text-red-600 mb-2">{discount}</p>
      <p className="text-gray-700 mb-2">{includes}</p>
      <div className="flex items-center">
        <label htmlFor="numRooms" className="mr-2">
          Number of rooms:
        </label>
        <input
          type="number"
          id="numRooms"
          min="1"
          value={numRooms}
          onChange={handleNumRoomsChange}
          className="w-16 p-1 border border-gray-300 rounded-md"
        />
      </div>
    </div>
  );
};

export default RoomOption;
