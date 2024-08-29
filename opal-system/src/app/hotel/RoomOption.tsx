import React from "react";

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
}) => (
  <div className="p-4 border border-gray-300 rounded-lg">
    <h4 className="text-lg font-semibold mb-2">{roomType}</h4>
    <p className="text-gray-600 mb-2">{description}</p>
    <p className="text-green-600 font-bold mb-2">{price}</p>
    <p className="text-red-600 mb-2">{discount}</p>
    <p className="text-gray-700">{includes}</p>
  </div>
);

export default RoomOption;
