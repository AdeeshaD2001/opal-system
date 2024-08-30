import React from "react";

const FailureMessage: React.FC = () => (
  <>
    <div className="flex justify-center mt-8 mb-5">
      <div className="flex items-center justify-center w-40 h-40 bg-red-100 rounded-full">
        <svg
          className="w-20 h-20 text-red-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
    </div>
    <h2 className="text-red-600 font-extrabold text-2xl mb-2">Failure</h2>
    <p className="text-gray-600 text-base leading-relaxed mt-4">
      Your purchase request failed...
      <br />
      please try again later!
    </p>
  </>
);

export default FailureMessage;
