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
  userName,
  setUserName,
  email,
  setEmail,
}: {
  userName: string;
  setUserName: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
}) => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Step 2: User Details</h2>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Name"
        className="border p-2 rounded w-full mb-4"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="border p-2 rounded w-full"
      />
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
            className="bg-green-500 text-white py-2 px-4 rounded"
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
