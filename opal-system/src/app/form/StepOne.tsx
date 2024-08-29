"use client";

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

export default StepOne;
