"use client";

import React, { useState } from "react";

const testHotel = {
  name: "Hotel Norrebro",
  details: {
    address: "123 Main Street, Cityville",
    phone: "(123) 456-7890",
    website: "www.hotelnorrebro.com",
  },
  overview: {
    description:
      "Located in the heart of the city, Hotel Norrebro offers a blend of comfort and convenience with modern amenities and exceptional service.",
    features: [
      { icon: "https://placehold.co/20x20", label: "Free Wifi" },
      { icon: "https://placehold.co/20x20", label: "Free parking" },
      { icon: "https://placehold.co/20x20", label: "Air conditioning" },
      { icon: "https://placehold.co/20x20", label: "Private bathroom" },
      { icon: "https://placehold.co/20x20", label: "Key card access" },
    ],
  },
  rooms: [
    {
      type: "Standard Room",
      description: "A cozy room with a queen-sized bed.",
      price: "$100/night",
    },
    {
      type: "Deluxe Room",
      description: "A spacious room with a king-sized bed and city view.",
      price: "$150/night",
    },
  ],
  amenities: ["Free Wifi", "Swimming Pool", "Fitness Center", "Room Service"],
  policies: ["Check-in: 3:00 PM", "Check-out: 12:00 PM", "No pets allowed"],
};

const Main: React.FC = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const renderSection = () => {
    switch (activeSection) {
      case "overview":
        return <PropertyOverview />;
      case "rooms":
        return <Rooms />;
      case "amenities":
        return <Amenities />;
      case "policies":
        return <Policies />;
      default:
        return <PropertyOverview />;
    }
  };

  return (
    <main className="flex-grow relative p-4">
      <button className="absolute top-5 left-5 text-black">← Back</button>
      <div className="flex flex-col lg:flex-row mt-10">
        <div className="flex flex-col lg:w-1/2 lg:mr-5">
          <h1 className="text-center text-3xl font-bold mb-4">
            {testHotel.name}
          </h1>
          <div className="flex flex-col bg-white p-4 rounded-lg shadow-md">
            <ImageSlider />
          </div>
        </div>

        <div className="flex flex-col lg:w-1/2 lg:ml-5 mt-10 lg:mt-0">
          <div className="flex justify-center mt-4">
            <div className="flex space-x-5 border-b-2 border-zinc-300 pb-2 overflow-x-auto">
              <button
                onClick={() => setActiveSection("overview")}
                className={`text-lg font-semibold ${
                  activeSection === "overview"
                    ? "text-primary border-b-2 border-primary"
                    : "text-zinc-500"
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveSection("rooms")}
                className={`text-lg font-semibold ${
                  activeSection === "rooms"
                    ? "text-primary border-b-2 border-primary"
                    : "text-zinc-500"
                }`}
              >
                Rooms
              </button>
              <button
                onClick={() => setActiveSection("amenities")}
                className={`text-lg font-semibold ${
                  activeSection === "amenities"
                    ? "text-primary border-b-2 border-primary"
                    : "text-zinc-500"
                }`}
              >
                Amenities
              </button>
              <button
                onClick={() => setActiveSection("policies")}
                className={`text-lg font-semibold ${
                  activeSection === "policies"
                    ? "text-primary border-b-2 border-primary"
                    : "text-zinc-500"
                }`}
              >
                Policies
              </button>
            </div>
          </div>
          {renderSection()}
          <div className="flex flex-col bg-white p-4 rounded-lg shadow-md mt-4">
            <h2 className="text-xl font-semibold mb-2">Hotel Details</h2>
            <p className="text-gray-700 mb-2">
              {testHotel.overview.description}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Address:</strong> {testHotel.details.address}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Phone:</strong> {testHotel.details.phone}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Website:</strong> {testHotel.details.website}
            </p>
          </div>
        </div>
      </div>

      <div className="absolute right-5 top-5 bg-green-100 text-green-700 rounded-lg px-3 py-1">
        <span className="font-semibold">Excellent</span>{" "}
        <span className="ml-1">9.6</span>{" "}
        <span className="text-zinc-500">(1,920 reviews)</span>
      </div>
    </main>
  );
};

const ImageSlider: React.FC = () => (
  <div className="w-full h-64 lg:h-full bg-gray-200 rounded-lg">
    {/* Replace with actual slider images */}
    <img
      src="https://placehold.co/600x400"
      alt="Hotel Norrebro"
      className="w-full h-full object-cover rounded-lg"
    />
  </div>
);

const PropertyOverview: React.FC = () => (
  <section className="mt-6">
    <h2 className="text-lg font-semibold">Property Overview</h2>
    <p className="text-gray-700 mt-2">{testHotel.overview.description}</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
      {testHotel.overview.features.map((feature, index) => (
        <div key={index} className="flex items-center">
          <img src={feature.icon} alt={feature.label} className="mr-2" />
          <span className="text-zinc-600">{feature.label}</span>
        </div>
      ))}
    </div>
  </section>
);

const Rooms: React.FC = () => (
  <section className="mt-6">
    <h2 className="text-lg font-semibold">Rooms</h2>
    {testHotel.rooms.map((room, index) => (
      <div key={index} className="mb-4">
        <h3 className="text-md font-bold">{room.type}</h3>
        <p className="text-gray-700">{room.description}</p>
        <p className="text-gray-700">{room.price}</p>
      </div>
    ))}
  </section>
);

const Amenities: React.FC = () => (
  <section className="mt-6">
    <h2 className="text-lg font-semibold">Amenities</h2>
    <ul className="list-disc pl-5">
      {testHotel.amenities.map((amenity, index) => (
        <li key={index} className="text-gray-700">
          {amenity}
        </li>
      ))}
    </ul>
  </section>
);

const Policies: React.FC = () => (
  <section className="mt-6">
    <h2 className="text-lg font-semibold">Policies</h2>
    <ul className="list-disc pl-5">
      {testHotel.policies.map((policy, index) => (
        <li key={index} className="text-gray-700">
          {policy}
        </li>
      ))}
    </ul>
  </section>
);

const Widget: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Main />
    </div>
  );
};

export default Widget;
