import React, { useState } from "react";
import { CalendarCheck } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import CSS for the calendar

interface CustomDatePickerProps {
  label: string;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({ label }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [isOpen, setIsOpen] = useState(false); // Controls the visibility of the calendar

  const handleCalendarOpen = () => setIsOpen(!isOpen);

  return (
    <div className="flex-1 flex flex-col items-center relative w-full md:w-[45%]">
      {/* Label Above Input */}
      <label className="text-zinc-700 font-semibold mb-2 text-center w-full">
        {label}
      </label>

      {/* Input Button */}
      <div className="relative w-full">
        <button
          onClick={handleCalendarOpen}
          className="w-32 p-2 border-none rounded-full bg-gray-100 text-zinc-700 placeholder-zinc-400 focus:outline-none flex items-center justify-between"
        >
          <span>{startDate ? startDate.toDateString() : "Select Date"}</span>
          <CalendarCheck className="text-zinc-500" />
        </button>

        {/* Date Picker (Calendar Pop-up) */}
        {isOpen && (
          <div
            className="absolute z-50 mt-2 left-0 w-full"
            style={{ bottom: "100%", transform: "translateY(-8px)" }}
          >
            <DatePicker
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
                setIsOpen(false); // Close the calendar when a date is selected
              }}
              inline
              className="bg-white rounded-lg shadow-md"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomDatePicker;
