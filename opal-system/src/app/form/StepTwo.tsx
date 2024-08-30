"use client";

import React from "react";

const StepTwo = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  country,
  setCountry,
  telephone,
  setTelephone,
  bookingFor,
  setBookingFor,
  travelingForWork,
  setTravelingForWork,
  confirmation,
  setConfirmation,
}) => {
  return (
    <div>
      <div className="p-4 border rounded-lg">
        <h3 className="text-xl font-bold mb-2">Personal Details</h3>
        <label className="block mt-4 mb-1 font-bold">
          First Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="border p-2 rounded w-full"
        />

        <label className="block mt-4 mb-1 font-bold">
          Last Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="border p-2 rounded w-full"
        />

        <label className="block mt-4 mb-1 font-bold">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded w-full"
        />

        <label className="block mt-4 mb-1 font-bold">
          Country <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="border p-2 rounded w-full"
        />

        <label className="block mt-4 mb-1 font-bold">
          Telephone <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
          className="border p-2 rounded w-full"
        />

        <div className="mt-4">
          <div className="flex items-center">
            <input
              type="radio"
              id="main-guest"
              checked={bookingFor === "main-guest"}
              onChange={() => setBookingFor("main-guest")}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="main-guest" className="ml-2">
              Booking for main guest
            </label>
          </div>
          <div className="flex items-center mt-2">
            <input
              type="radio"
              id="someone-else"
              checked={bookingFor === "someone-else"}
              onChange={() => setBookingFor("someone-else")}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="someone-else" className="ml-2">
              Booking for someone else
            </label>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-center">
            <input
              type="radio"
              id="no"
              checked={travelingForWork === "no"}
              onChange={() => setTravelingForWork("no")}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="no" className="ml-2">
              No
            </label>
          </div>
          <div className="flex items-center mt-2">
            <input
              type="radio"
              id="yes"
              checked={travelingForWork === "yes"}
              onChange={() => setTravelingForWork("yes")}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="yes" className="ml-2">
              Yes
            </label>
          </div>
        </div>

        <div className="mt-4 flex items-center">
          <input
            type="checkbox"
            id="confirmation"
            checked={confirmation}
            onChange={(e) => setConfirmation(e.target.checked)}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label htmlFor="confirmation" className="ml-2">
            I confirm that all the information is correct
          </label>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
