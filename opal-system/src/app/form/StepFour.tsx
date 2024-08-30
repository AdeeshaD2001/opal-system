"use client";
import React from "react";

const StepFour = ({
  onConfirm,
  cardholderName,
  setCardholderName,
  cardType,
  setCardType,
  cardNumber,
  setCardNumber,
  expiryDate,
  setExpiryDate,
  cvcCode,
  setCvcCode,
  saveDetails,
  setSaveDetails,
  marketingConsent,
  setMarketingConsent,
  tailorOffersConsent,
  setTailorOffersConsent,
}) => {
  return (
    <div>
      <div className="p-4 border rounded-lg">
        <h3 className="text-xl font-bold mb-2">Payment Details</h3>
        <label className="block mt-4 mb-1 font-bold">
          Cardholder Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={cardholderName}
          onChange={(e) => setCardholderName(e.target.value)}
          className="border p-2 rounded w-full"
        />

        <label className="block mt-4 mb-1 font-bold">
          Card Type <span className="text-red-500">*</span>
        </label>
        <select
          value={cardType}
          onChange={(e) => setCardType(e.target.value)}
          className="border p-2 rounded w-full"
        >
          <option value="" disabled>
            Select Card Type
          </option>
          <option value="Visa">Visa</option>
          <option value="MasterCard">MasterCard</option>
          <option value="Amex">American Express</option>
        </select>

        <label className="block mt-4 mb-1 font-bold">
          Card Number <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          className="border p-2 rounded w-full"
          placeholder="1234 5678 9012 3456"
        />

        <div className="flex justify-between mt-4">
          <div className="w-1/2 pr-2">
            <label className="block mb-1 font-bold">
              Expiry Date <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              className="border p-2 rounded w-full"
              placeholder="MM/YY"
            />
          </div>
          <div className="w-1/2 pl-2">
            <label className="block mb-1 font-bold">
              CVC Code <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={cvcCode}
              onChange={(e) => setCvcCode(e.target.value)}
              className="border p-2 rounded w-full"
            />
          </div>
        </div>

        <div className="mt-4 flex items-center">
          <input
            type="checkbox"
            id="save-details"
            checked={saveDetails}
            onChange={(e) => setSaveDetails(e.target.checked)}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label htmlFor="save-details" className="ml-2">
            Save card details for future transactions
          </label>
        </div>
      </div>

      <div className="mt-6 p-4 border rounded-lg">
        <h3 className="text-xl font-bold mb-2">Consent</h3>
        <div className="mt-4 flex items-center">
          <input
            type="checkbox"
            checked={marketingConsent}
            onChange={(e) => setMarketingConsent(e.target.checked)}
            id="marketing-consent"
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label htmlFor="marketing-consent" className="ml-2">
            Yes, I want to receive special offers and marketing updates
          </label>
        </div>
        <div className="mt-4 flex items-center">
          <input
            type="checkbox"
            checked={tailorOffersConsent}
            onChange={(e) => setTailorOffersConsent(e.target.checked)}
            id="tailor-offers-consent"
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label htmlFor="tailor-offers-consent" className="ml-2">
            Yes, I agree to tailor offers and promotions to my preferences
          </label>
        </div>

        <button
          onClick={onConfirm}
          className="bg-green-500 text-white py-2 px-4 rounded mt-6"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default StepFour;
