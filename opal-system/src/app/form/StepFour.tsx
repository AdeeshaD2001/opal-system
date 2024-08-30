"use client";
import { useState } from "react";

const StepFour = ({ onConfirm }: { onConfirm: () => void }) => {
  const [saveDetails, setSaveDetails] = useState(false);
  const [cardholderName, setCardholderName] = useState("");
  const [cardType, setCardType] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvcCode, setCvcCode] = useState("");
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [tailorOffersConsent, setTailorOffersConsent] = useState(false);

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Step 4: Confirm Details</h2>
      <p>Confirm all your details before submitting the form.</p>

      {/* Save Details Section */}
      <div className="mt-4 p-4 border rounded-lg">
        <h3 className="text-xl font-bold mb-2">Save your details</h3>
        <p>
          Use your contact details to create an account and speed up future
          bookings. <br />
          (We won't save your payment information.)
        </p>
        <div className="mt-4">
          <input
            type="checkbox"
            checked={saveDetails}
            onChange={(e) => setSaveDetails(e.target.checked)}
          />
          <label className="ml-2 font-semibold">
            Save my details so I can book faster next time
          </label>
        </div>
      </div>

      {/* Payment Section */}
      <div className="mt-6 p-4 border rounded-lg">
        <h3 className="text-xl font-bold mb-2">How do you want to pay?</h3>
        <div className="mt-4">
          <label className="block mb-1 font-bold">
            Cardholder's name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={cardholderName}
            onChange={(e) => setCardholderName(e.target.value)}
            className="border p-2 rounded w-full"
            placeholder="T Fernando"
          />

          <label className="block mt-4 mb-1 font-bold">
            Card type <span className="text-red-500">*</span>
          </label>
          <select
            value={cardType}
            onChange={(e) => setCardType(e.target.value)}
            className="border p-2 rounded w-full"
          >
            <option value="" disabled>
              -- Select --
            </option>
            <option value="visa">Visa</option>
            <option value="mastercard">Mastercard</option>
            {/* Add more options as needed */}
          </select>

          <label className="block mt-4 mb-1 font-bold">
            Card number <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="border p-2 rounded w-full"
          />

          <label className="block mt-4 mb-1 font-bold">
            Expiry date <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              className="border p-2 rounded w-1/2"
              placeholder="01 - Jan"
            />
            <input
              type="text"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              className="border p-2 rounded w-1/2"
              placeholder="2024"
            />
          </div>

          <label className="block mt-4 mb-1 font-bold">
            CVC-code <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={cvcCode}
            onChange={(e) => setCvcCode(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>
      </div>

      {/* Marketing Consent Section */}
      <div className="mt-6">
        <div className="p-4 border rounded-lg">
          <input
            type="checkbox"
            checked={marketingConsent}
            onChange={(e) => setMarketingConsent(e.target.checked)}
          />
          <label className="ml-2">
            I consent to receiving marketing emails from Booking.com, including
            promotions, personalised recommendations, rewards, travel
            experiences and updates about Booking.com’s products and services.
          </label>
        </div>
        <div className="mt-4 p-4 border rounded-lg">
          <input
            type="checkbox"
            checked={tailorOffersConsent}
            onChange={(e) => setTailorOffersConsent(e.target.checked)}
          />
          <label className="ml-2">
            I consent to receiving marketing emails from Booking.com, including
            promotions, personalised recommendations, rewards, travel
            experiences and updates about Booking.com Transport Limited’s
            products and services.
          </label>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-8">
        <button
          onClick={onConfirm}
          className="bg-green-500 text-white p-3 rounded w-full"
        >
          Complete booking
        </button>
      </div>
    </div>
  );
};

export default StepFour;
