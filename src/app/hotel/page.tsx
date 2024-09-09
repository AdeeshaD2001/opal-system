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
      <div className="flex flex-col lg:flex-row mt-10 space-y-6 lg:space-y-0">
        <div className="flex flex-col lg:w-1/2 lg:ml-5 lg:order-last">
          {/* Image Slider */}
          <div className="flex flex-col bg-white p-6 rounded-lg shadow-lg border-2 border-gray-300">
            <ImageSlider images={testHotel.images} slidesToShow={3} />
          </div>
        </div>
        <div className="flex flex-col lg:w-1/2 lg:mr-5">
          {/* Rating */}
          <div className="absolute right-5 top-5 bg-green-100 text-green-700 rounded-lg px-3 py-1 shadow-lg">
            <span className="font-semibold">Excellent</span>{" "}
            <span className="ml-1">9.6</span>{" "}
            <span className="text-zinc-500">(1,920 reviews)</span>
          </div>

          {/* Hotel Title */}
          <div className="flex justify-center gap-2 p-4 bg-gray-200 rounded-lg border-2 border-gray-300">
            <h1 className="text-center text-4xl font-extrabold text-gray-800 tracking-wide">
              Welcome to {testHotel.name}
            </h1>
          </div>

          {/* Hotel Details */}
          <h2 className="text-2xl font-bold mt-6 text-center text-primary underline decoration-primary">
            Hotel Details
          </h2>
          <div className="flex flex-col bg-white p-6 rounded-lg shadow-lg border-2 border-gray-300 mb-6">
            <p className="text-gray-800 mb-4 text-lg leading-relaxed">
              {testHotel.overview.description}
            </p>
            <p className="text-gray-800 mb-2">
              <strong>Address:</strong> {testHotel.details.address}
            </p>
            <p className="text-gray-800 mb-2">
              <strong>Phone:</strong> {testHotel.details.phone}
            </p>
            <p className="text-gray-800 mb-2">
              <strong>Website:</strong> {testHotel.details.website}
            </p>
          </div>

          {/* Section Navigation */}
          <div className="flex justify-center gap-2 p-4 bg-gray-100 rounded-lg shadow-md border-2 border-gray-300">
            {["overview", "rooms", "amenities", "policies"].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`text-lg font-semibold px-6 py-2 rounded-lg transition-colors ${
                  activeSection === section
                    ? "bg-white text-black border-2 border-black"
                    : "bg-secondary text-black hover:bg-primary hover:text-white"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>

          {/* Render Section */}
          <div className="mt-6 border-gray-300 rounded-lg p-4 border-2">
            {renderSection()}
          </div>

          {/* Reserve Button */}
          <button
            onClick={handleReserveClick}
            className="mt-6 bg-green-500 text-white px-6 py-3 rounded-lg self-center shadow-lg hover:bg-green-600 transition-transform transform hover:scale-105"
          >
            Reserve Now
          </button>
        </div>
      </div>

      {/* Availability Section */}
      <div ref={availabilityRef} className="mt-10">
        <Availability />
      </div>
    </main>
  );
};

export default Main;
