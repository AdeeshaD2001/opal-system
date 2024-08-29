"use client";

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
export default StepTwo;
