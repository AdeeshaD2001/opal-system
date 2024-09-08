import React from "react";

interface AdultsPickerProps {
  adults: number;
  setAdults: React.Dispatch<React.SetStateAction<number>>;
}

const AdultsPicker: React.FC<AdultsPickerProps> = ({ adults, setAdults }) => {
  return (
    <div className="flex flex-col items-center w-full">
      <label className="text-zinc-700 font-semibold mb-2">Adults</label>
      <input
        type="number"
        value={adults}
        onChange={(e) => setAdults(parseInt(e.target.value) || 0)}
        min="1"
        className="w-32 p-2  border-none rounded-full bg-gray-100 text-zinc-700 placeholder-zinc-400 focus:outline-none"
        placeholder="Number of adults"
      />
    </div>
  );
};

export default AdultsPicker;
