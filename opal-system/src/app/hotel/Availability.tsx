"use client";

import React, { useState } from "react";
import RoomOption from "./RoomOption";

const Availability: React.FC = () => {
  // State for date range and guest details
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  return (
    <section className="mt-10">
      <h2 className="text-lg font-semibold mb-4">Availability</h2>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <DateAndGuestDetails
          checkInDate={checkInDate}
          checkOutDate={checkOutDate}
          setCheckInDate={setCheckInDate}
          setCheckOutDate={setCheckOutDate}
          adults={adults}
          setAdults={setAdults}
          children={children}
          setChildren={setChildren}
          rooms={rooms}
          setRooms={setRooms}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4">
          View availability
        </button>
        <RoomOptionsSection />
      </div>
    </section>
  );
};

const DateAndGuestDetails: React.FC<{
  checkInDate: string;
  checkOutDate: string;
  setCheckInDate: React.Dispatch<React.SetStateAction<string>>;
  setCheckOutDate: React.Dispatch<React.SetStateAction<string>>;
  adults: number;
  setAdults: React.Dispatch<React.SetStateAction<number>>;
  children: number;
  setChildren: React.Dispatch<React.SetStateAction<number>>;
  rooms: number;
  setRooms: React.Dispatch<React.SetStateAction<number>>;
}> = ({
  checkInDate,
  checkOutDate,
  setCheckInDate,
  setCheckOutDate,
  adults,
  setAdults,
  children,
  setChildren,
  rooms,
  setRooms,
}) => (
  <div className="mb-6">
    <table className="w-full">
      <tbody>
        <TableRow label="Check-in Date:">
          <input
            type="date"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            className="border border-gray-300 p-2 rounded-lg w-full"
          />
        </TableRow>
        <TableRow label="Check-out Date:">
          <input
            type="date"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            className="border border-gray-300 p-2 rounded-lg w-full"
          />
        </TableRow>
        <TableRow label="Guests:">
          <div className="flex space-x-4">
            <InputWithLabel
              label="Adults"
              value={adults}
              setValue={setAdults}
              min={0}
            />
            <InputWithLabel
              label="Children"
              value={children}
              setValue={setChildren}
              min={0}
            />
            <InputWithLabel
              label="Rooms"
              value={rooms}
              setValue={setRooms}
              min={1}
            />
          </div>
        </TableRow>
      </tbody>
    </table>
  </div>
);

const TableRow: React.FC<{ label: string }> = ({ label, children }) => (
  <tr>
    <td className="text-gray-700 font-semibold">{label}</td>
    <td>{children}</td>
  </tr>
);

const InputWithLabel: React.FC<{
  label: string;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  min: number;
}> = ({ label, value, setValue, min }) => (
  <div>
    <label className="block text-gray-700">{label}</label>
    <input
      type="number"
      min={min}
      value={value}
      onChange={(e) => setValue(Number(e.target.value))}
      className="border border-gray-300 p-2 rounded-lg w-full"
    />
  </div>
);

const RoomOptionsSection: React.FC = () => (
  <div className="mt-6">
    <h3 className="text-md font-semibold mb-4">Available Rooms</h3>
    <table className="w-full">
      <tbody>
        <td>
          <RoomOptionRow
            roomType="Deluxe Double Room"
            description="Only 1 room left on our site"
            price="LKR 50,912"
            discount="20% off"
            includes="Good breakfast included"
          />
          <RoomOptionRow
            roomType="Superior Double Room"
            description="Only 2 rooms left on our site"
            price="LKR 53,591"
            discount="20% off"
            includes="Parking + High-speed internet"
          />
        </td>
        <td className="border-b-2 border-zinc-300 py-4 text-right w-1/6">
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
            I’LL RESERVE
          </button>
        </td>
        {/* Add more RoomOptionRow as needed */}
      </tbody>
    </table>
  </div>
);

const RoomOptionRow: React.FC<{
  roomType: string;
  description: string;
  price: string;
  discount: string;
  includes: string;
}> = ({ roomType, description, price, discount, includes }) => (
  <tr>
    <td className="border-b-2 border-zinc-300 py-4 w-1/6">
      <RoomOption
        roomType={roomType}
        description={description}
        price={price}
        discount={discount}
        includes={includes}
      />
    </td>
  </tr>
);

export default Availability;
