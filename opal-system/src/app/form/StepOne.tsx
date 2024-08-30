"use client";

const StepOne = ({ hotel }: { hotel: string }) => {
  // Assuming `hotel` contains details or an object with hotel information.
  const hotelDetails = {
    name: "Sample Hotel",
    location: "1234 Sample Street, Sample City",
    rating: "4.5/5",
    description: "A luxurious hotel with excellent amenities.",
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Step 1: Hotel Details</h2>
      {hotel ? (
        <div>
          <p className="text-md font-semibold">Hotel: {hotelDetails.name}</p>
          <p className="text-md">Location: {hotelDetails.location}</p>
          <p className="text-md">Rating: {hotelDetails.rating}</p>
          <p className="text-md">Description: {hotelDetails.description}</p>
        </div>
      ) : (
        <p>Please select a hotel to see the details.</p>
      )}
    </div>
  );
};

export default StepOne;
