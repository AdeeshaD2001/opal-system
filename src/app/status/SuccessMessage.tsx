import React from "react";

const SuccessMessage: React.FC = () => (
  <>
    <div className="flex justify-center mt-8 mb-5">
      <div className="flex items-center justify-center w-40 h-40 bg-green-100 rounded-full">
        <svg
          className="w-20 h-20 text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
    </div>
    <h2 className="text-green-600 font-extrabold text-2xl mb-2">Success</h2>
    <p className="text-gray-600 text-base leading-relaxed mt-4">
      We received your purchase request...
      <br />
      we'll be in touch shortly!
    </p>
  </>
);

export default SuccessMessage;
