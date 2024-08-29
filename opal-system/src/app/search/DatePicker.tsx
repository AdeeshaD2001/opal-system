"use client";

import React from "react";

interface DatePickerProps {
  label: string;
  value: string;
  onChange: (date: string) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ label, value, onChange }) => (
  <div className="flex flex-col mb-4">
    <label className="font-semibold text-sm">{label}</label>
    <input
      type="date"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border border-zinc-300 rounded-lg p-2 w-48"
    />
  </div>
);

export default DatePicker;
