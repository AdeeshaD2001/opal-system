"use client";
import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";

const FormPage = () => {
  const [step, setStep] = useState(1);
  const [hotel, setHotel] = useState("Sample Hotel"); // Mocked hotel data
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  const [mealDetails, setMealDetails] = useState({
    breakfast: false,
    lunch: false,
    dinner: false,
    dietaryRestrictions: "",
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleConfirm = async () => {
    const payload = {
      hotel,
      userName,
      email,
      mealDetails,
    };

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        alert("Failed to submit the form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  const steps = [
    "Hotel Details",
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

      {step === 1 && <StepOne hotel={hotel} />}
      {step === 2 && (
        <StepTwo
          userName={userName}
          setUserName={setUserName}
          email={email}
          setEmail={setEmail}
        />
      )}
      {step === 3 && (
        <StepThree mealDetails={mealDetails} setMealDetails={setMealDetails} />
      )}
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
        {step < 4 && (
          <button
            onClick={nextStep}
            className="bg-green-500 text-white py-2 px-4 rounded"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default FormPage;
