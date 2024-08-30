"use client";

import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";

const FormPage = () => {
  const [step, setStep] = useState(1);
  const [hotel, setHotel] = useState("Sample Hotel");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("Sri Lanka");
  const [telephone, setTelephone] = useState("");
  const [bookingFor, setBookingFor] = useState("main-guest");
  const [travelingForWork, setTravelingForWork] = useState("no");
  const [confirmation, setConfirmation] = useState(false);

  const [mealDetails, setMealDetails] = useState({
    date: "",
    meals: {
      breakfast: [],
      lunch: [],
      dinner: [],
    },
    dietaryRestrictions: "",
  });
  // { item: "", count: 1 }

  const [cardholderName, setCardholderName] = useState("");
  const [cardType, setCardType] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvcCode, setCvcCode] = useState("");
  const [saveDetails, setSaveDetails] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [tailorOffersConsent, setTailorOffersConsent] = useState(false);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleConfirm = async () => {
    const payload = {
      hotel,
      firstName,
      lastName,
      email,
      country,
      telephone,
      bookingFor,
      travelingForWork,
      confirmation,
      mealDetails,
      paymentDetails: {
        cardholderName,
        cardType,
        cardNumber,
        expiryDate,
        cvcCode,
        saveDetails,
        marketingConsent,
        tailorOffersConsent,
      },
    };
    console.log(
      "Submitting form with the following data:",
      JSON.stringify(payload, null, 2)
    );
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
              {step > index ? <span>&#10003;</span> : <span>{index + 1}</span>}
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
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          email={email}
          setEmail={setEmail}
          country={country}
          setCountry={setCountry}
          telephone={telephone}
          setTelephone={setTelephone}
          bookingFor={bookingFor}
          setBookingFor={setBookingFor}
          travelingForWork={travelingForWork}
          setTravelingForWork={setTravelingForWork}
          confirmation={confirmation}
          setConfirmation={setConfirmation}
        />
      )}
      {step === 3 && (
        <StepThree mealDetails={mealDetails} setMealDetails={setMealDetails} />
      )}
      {step === 4 && (
        <StepFour
          onConfirm={handleConfirm}
          cardholderName={cardholderName}
          setCardholderName={setCardholderName}
          cardType={cardType}
          setCardType={setCardType}
          cardNumber={cardNumber}
          setCardNumber={setCardNumber}
          expiryDate={expiryDate}
          setExpiryDate={setExpiryDate}
          cvcCode={cvcCode}
          setCvcCode={setCvcCode}
          saveDetails={saveDetails}
          setSaveDetails={setSaveDetails}
          marketingConsent={marketingConsent}
          setMarketingConsent={setMarketingConsent}
          tailorOffersConsent={tailorOffersConsent}
          setTailorOffersConsent={setTailorOffersConsent}
        />
      )}

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
