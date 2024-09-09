"use client";

import React from "react";

interface GuestCountInputProps {
  value: string;
  onChange: (count: string) => void;
}

const GuestCountInput: React.FC<GuestCountInputProps> = ({
  value,
  onChange,
}) => (
  <div className="flex flex-col mb-4">
    <label className="font-semibold text-sm">Guest Count</label>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="1 room, 2 adults, 0 children"
      className="border border-zinc-300 rounded-lg p-2 w-64"
    />
  </div>
);

export default GuestCountInput;
