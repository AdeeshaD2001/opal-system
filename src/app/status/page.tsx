"use client";

import React from "react";
import SuccessMessage from "./SuccessMessage";
import FailureMessage from "./FailureMessage";

interface ResultProps {
  isSuccess: boolean;
  onClose: () => void;
}

const Result: React.FC<ResultProps> = ({ isSuccess, onClose }) => (
  <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="relative bg-white rounded-xl shadow-lg p-8 w-full max-w-md min-h-[500px] text-center">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
        aria-label="Close"
      >
        ✖
      </button>
      {isSuccess ? <SuccessMessage /> : <FailureMessage />}
    </div>
  </div>
);

export default Result;
