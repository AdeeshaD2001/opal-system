"use client";
import { useState } from "react";

const StepOne = ({
  hotel,
  setHotel,
}: {
  hotel: string;
  setHotel: (value: string) => void;
}) => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Step 1: Select Hotel</h2>
      <input
        type="text"
        value={hotel}
        onChange={(e) => setHotel(e.target.value)}
        placeholder="Select Hotel"
        className="border p-2 rounded w-full"
      />
    </div>
  );
};

const StepTwo = ({
  hotel,
  setHotel,
}: {
  hotel: string;
  setHotel: (value: string) => void;
}) => {
  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-6">Enter Your Details</h2>
      <p className="text-gray-700 mb-4">
        Almost done! Just fill in the <span className="text-red-500">*</span>{" "}
        required info.
      </p>

      <div className="mb-4">
        <label
          htmlFor="first-name"
          className="block text-sm font-medium text-gray-700"
        >
          First name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="first-name"
          placeholder="First Name"
          className="border p-2 rounded w-full"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="last-name"
          className="block text-sm font-medium text-gray-700"
        >
          Last name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="last-name"
          placeholder="Last Name"
          className="border p-2 rounded w-full"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          placeholder="Email Address"
          className="border p-2 rounded w-full"
        />
        <p className="text-gray-500 text-xs mt-1">
          Watch out for typos. Confirmation email goes to this address.
        </p>
      </div>

      <div className="mb-4">
        <label
          htmlFor="country"
          className="block text-sm font-medium text-gray-700"
        >
          Country/region <span className="text-red-500">*</span>
        </label>
        <select id="country" className="border p-2 rounded w-full">
          <option>Sri Lanka</option>
          {/* Add more options as needed */}
        </select>
      </div>

      <div className="mb-4">
        <label
          htmlFor="telephone"
          className="block text-sm font-medium text-gray-700"
        >
          Telephone (mobile number preferred){" "}
          <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="telephone"
          placeholder="Sri Lanka +94"
          className="border p-2 rounded w-full"
        />
        <p className="text-gray-500 text-xs mt-1">
          So the accommodation can reach you.
        </p>
      </div>

      <div className="mb-4 flex items-center space-x-4">
        <input
          type="checkbox"
          id="confirmation"
          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
        />
        <label htmlFor="confirmation" className="text-sm text-gray-700">
          Yes, I'd like free paperless confirmation (recommended). We'll text
          you a link to download our app.
        </label>
      </div>

      <fieldset className="mb-4">
        <legend className="text-sm font-medium text-gray-700">
          Who are you booking for?
        </legend>
        <div className="flex flex-col mt-2 space-y-2">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="booking-for"
              value="main-guest"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <span className="text-sm text-gray-700">I am the main guest</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="booking-for"
              value="someone-else"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <span className="text-sm text-gray-700">
              Booking is for someone else
            </span>
          </label>
        </div>
      </fieldset>

      <fieldset className="mb-4">
        <legend className="text-sm font-medium text-gray-700">
          Are you traveling for work?
        </legend>
        <div className="flex flex-col mt-2 space-y-2">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="traveling-for-work"
              value="yes"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <span className="text-sm text-gray-700">Yes</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="traveling-for-work"
              value="no"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <span className="text-sm text-gray-700">No</span>
          </label>
        </div>
      </fieldset>
    </div>
  );
};

const StepThree = ({
  meal,
  setMeal,
}: {
  meal: string;
  setMeal: (value: string) => void;
}) => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Step 3: Meal Details</h2>
      <input
        type="text"
        value={meal}
        onChange={(e) => setMeal(e.target.value)}
        placeholder="Meal Preference"
        className="border p-2 rounded w-full"
      />
    </div>
  );
};

const StepFour = ({ onConfirm }: { onConfirm: () => void }) => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Step 4: Confirm Details</h2>
      <p>Confirm all your details before submitting the form.</p>
    </div>
  );
};

const FormPage = () => {
  const [step, setStep] = useState(1);
  const [hotel, setHotel] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [meal, setMeal] = useState("");

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleConfirm = () => {
    // Handle confirmation logic here
    alert("Form submitted!");
    // Reset form or redirect as needed
  };

  const steps = [
    "Select Hotel",
    "User Details",
    "Meal Details",
    "Confirm Details",
  ];

  const progressBarWidth = `${((step - 1) / (steps.length - 1)) * 100}%`;

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded shadow-lg border border-gray-300">
      <div className="flex justify-between items-center mb-6">
        {steps.map((label, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full ${
                step > index
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-black"
              }`}
            >
              {step > index ? (
                <span>&#10003;</span> // Checkmark for completed steps
              ) : (
                <span>{index + 1}</span>
              )}
            </div>
            <span className="text-sm mt-2">{label}</span>
          </div>
        ))}
      </div>

      <div className="w-full bg-gray-200 h-1 mb-6">
        <div
          className="bg-blue-500 h-1"
          style={{ width: progressBarWidth }}
        ></div>
      </div>

      {step === 1 && <StepOne hotel={hotel} setHotel={setHotel} />}
      {step === 2 && (
        <StepTwo
          userName={userName}
          setUserName={setUserName}
          email={email}
          setEmail={setEmail}
        />
      )}
      {step === 3 && <StepThree meal={meal} setMeal={setMeal} />}
      {step === 4 && <StepFour onConfirm={handleConfirm} />}

      <div className="flex justify-between mt-4">
        {step > 1 && (
          <button
            onClick={prevStep}
            className="bg-red-500 text-white py-2 px-4 rounded"
          >
            Back
          </button>
        )}
        {step < 4 ? (
          <button
            onClick={nextStep}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleConfirm}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Confirm
          </button>
        )}
      </div>
    </div>
  );
};

export default FormPage;
