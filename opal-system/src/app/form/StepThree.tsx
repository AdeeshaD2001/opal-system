"use client";

import { useState, useEffect } from "react";

const StepThree = ({
  mealDetails = {
    breakfast: false,
    lunch: false,
    dinner: false,
    dietaryRestrictions: "",
  },
  setMealDetails,
}: {
  mealDetails?: {
    breakfast: boolean;
    lunch: boolean;
    dinner: boolean;
    dietaryRestrictions: string;
  };
  setMealDetails: (details: {
    breakfast: boolean;
    lunch: boolean;
    dinner: boolean;
    dietaryRestrictions: string;
  }) => void;
}) => {
  const [breakfast, setBreakfast] = useState(mealDetails.breakfast);
  const [lunch, setLunch] = useState(mealDetails.lunch);
  const [dinner, setDinner] = useState(mealDetails.dinner);
  const [dietaryRestrictions, setDietaryRestrictions] = useState(
    mealDetails.dietaryRestrictions
  );

  // Handle the state update and pass it to the parent component (if any)
  useEffect(() => {
    setMealDetails({ breakfast, lunch, dinner, dietaryRestrictions });
  }, [breakfast, lunch, dinner, dietaryRestrictions]);

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-6">Step 3: Meal Details</h2>
      <p className="text-gray-700 mb-4">
        Please select your meal preferences and any dietary restrictions.
      </p>

      <div className="mb-4">
        <h3 className="text-lg font-medium mb-2">Meal Options</h3>
        <div className="flex flex-col space-y-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={breakfast}
              onChange={(e) => setBreakfast(e.target.checked)}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <span className="ml-2 text-sm text-gray-700">Breakfast</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={lunch}
              onChange={(e) => setLunch(e.target.checked)}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <span className="ml-2 text-sm text-gray-700">Lunch</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={dinner}
              onChange={(e) => setDinner(e.target.checked)}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <span className="ml-2 text-sm text-gray-700">Dinner</span>
          </label>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-medium mb-2">Dietary Restrictions</h3>
        <textarea
          value={dietaryRestrictions}
          onChange={(e) => setDietaryRestrictions(e.target.value)}
          placeholder="Please specify any dietary restrictions or allergies."
          className="border p-2 rounded w-full h-24"
        />
      </div>
    </div>
  );
};

export default StepThree;
