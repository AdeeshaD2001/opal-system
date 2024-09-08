import React from "react";

interface ChildrenPickerProps {
  children: number;
  setChildren: React.Dispatch<React.SetStateAction<number>>;
}

const ChildrenPicker: React.FC<ChildrenPickerProps> = ({
  children,
  setChildren,
}) => {
  return (
    <div className="flex flex-col items-center w-full">
      <label className="text-zinc-700 font-semibold mb-2">Children</label>
      <input
        type="number"
        value={children}
        onChange={(e) => setChildren(parseInt(e.target.value) || 0)}
        min="0"
        className="w-32 p-2  border-none rounded-full bg-gray-100 text-zinc-700 placeholder-zinc-400 focus:outline-none"
        placeholder="Number of children"
      />
    </div>
  );
};

export default ChildrenPicker;
