"use client";

import React, { useState, useRef } from "react";
import { testHotel } from "../../constants";
import ImageSlider from "./ImageSlider";
import Availability from "./Availability";
import PropertyOverview from "./PropertyOverview";
import Rooms from "./Rooms";
import Amenities from "./Amenities";
import Policies from "./Policies";

const Main: React.FC = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const availabilityRef = useRef<HTMLDivElement | null>(null);

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

  const handleReserveClick = () => {
    availabilityRef.current?.scrollIntoView({ behavior: "smooth" });
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
            <ImageSlider images={testHotel.images} />
          </div>
        </div>

        <div className="flex flex-col lg:w-1/2 lg:ml-5 mt-10 lg:mt-0">
          <div className="flex justify-center mt-4">
            <div className="flex space-x-5 border-b-2 border-zinc-300 pb-2 overflow-x-auto">
              {["overview", "rooms", "amenities", "policies"].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`text-lg font-semibold ${
                    activeSection === section
                      ? "text-primary border-b-2 border-primary"
                      : "text-zinc-500"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
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

          <button
            onClick={handleReserveClick}
            className="mt-6 bg-green-500 text-white px-4 py-2 rounded-lg self-center"
          >
            Reserve
          </button>
        </div>
      </div>

      <div className="absolute right-5 top-5 bg-green-100 text-green-700 rounded-lg px-3 py-1">
        <span className="font-semibold">Excellent</span>{" "}
        <span className="ml-1">9.6</span>{" "}
        <span className="text-zinc-500">(1,920 reviews)</span>
      </div>

      <div ref={availabilityRef} className="mt-10">
        <Availability />
      </div>
    </main>
  );
};

export default Main;
