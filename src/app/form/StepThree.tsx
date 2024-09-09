"use client";

import { useState, useEffect } from "react";

const StepThree = ({
  mealDetails = {
    date: "",
    meals: {
      breakfast: [{ item: "", count: 1 }],
      lunch: [{ item: "", count: 1 }],
      dinner: [{ item: "", count: 1 }],
    },
    dietaryRestrictions: "",
  },
  setMealDetails,
}: {
  mealDetails?: {
    date: string;
    meals: {
      breakfast: { item: string; count: number }[];
      lunch: { item: string; count: number }[];
      dinner: { item: string; count: number }[];
    };
    dietaryRestrictions: string;
  };
  setMealDetails: (details: {
    date: string;
    meals: {
      breakfast: { item: string; count: number }[];
      lunch: { item: string; count: number }[];
      dinner: { item: string; count: number }[];
    };
    dietaryRestrictions: string;
  }) => void;
}) => {
  const [date, setDate] = useState(mealDetails.date || "");
  const [breakfast, setBreakfast] = useState(
    mealDetails.meals.breakfast || [{ item: "", count: 1 }]
  );
  const [lunch, setLunch] = useState(
    mealDetails.meals.lunch || [{ item: "", count: 1 }]
  );
  const [dinner, setDinner] = useState(
    mealDetails.meals.dinner || [{ item: "", count: 1 }]
  );
  const [dietaryRestrictions, setDietaryRestrictions] = useState(
    mealDetails.dietaryRestrictions
  );

  useEffect(() => {
    setMealDetails({
      date,
      meals: { breakfast, lunch, dinner },
      dietaryRestrictions,
    });
  }, [date, breakfast, lunch, dinner, dietaryRestrictions]);

  const foodOptions = {
    breakfast: ["Pancakes", "Omelette", "Fruit Salad"],
    lunch: ["Chicken Sandwich", "Caesar Salad", "Vegetable Wrap"],
    dinner: ["Steak", "Pasta", "Grilled Salmon"],
  };

  const handleMealChange = (
    mealType: "breakfast" | "lunch" | "dinner",
    index: number,
    field: "item" | "count",
    value: string | number
  ) => {
    const updatedMeal = [...mealDetails.meals[mealType]];
    updatedMeal[index][field] = value;
    if (mealType === "breakfast") setBreakfast(updatedMeal);
    if (mealType === "lunch") setLunch(updatedMeal);
    if (mealType === "dinner") setDinner(updatedMeal);
  };

  const addMealItem = (mealType: "breakfast" | "lunch" | "dinner") => {
    const newMeal = { item: "", count: 1 };
    if (mealType === "breakfast") setBreakfast([...breakfast, newMeal]);
    if (mealType === "lunch") setLunch([...lunch, newMeal]);
    if (mealType === "dinner") setDinner([...dinner, newMeal]);
  };

  const removeMealItem = (
    mealType: "breakfast" | "lunch" | "dinner",
    index: number
  ) => {
    let updatedMeal;
    if (mealType === "breakfast") {
      updatedMeal = breakfast.filter((_, i) => i !== index);
      setBreakfast(updatedMeal);
    }
    if (mealType === "lunch") {
      updatedMeal = lunch.filter((_, i) => i !== index);
      setLunch(updatedMeal);
    }
    if (mealType === "dinner") {
      updatedMeal = dinner.filter((_, i) => i !== index);
      setDinner(updatedMeal);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-6">Step 3: Meal Details</h2>
      <p className="text-gray-700 mb-4">
        Please select your meal preferences and any dietary restrictions.
      </p>

      <div className="mb-4">
        <label className="block mb-2 text-lg font-medium">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>

      {["breakfast", "lunch", "dinner"].map((mealType) => (
        <div key={mealType} className="mb-6">
          <h3 className="text-lg font-medium mb-2 capitalize">{mealType}</h3>
          {mealDetails.meals[mealType as keyof typeof mealDetails.meals].map(
            (meal, index) => (
              <div key={index} className="flex items-center mb-2">
                <select
                  value={meal.item}
                  onChange={(e) =>
                    handleMealChange(
                      mealType as keyof typeof mealDetails.meals,
                      index,
                      "item",
                      e.target.value
                    )
                  }
                  className="border p-2 rounded w-full mr-2"
                >
                  <option value="">Select a food item</option>
                  {foodOptions[mealType as keyof typeof foodOptions].map(
                    (foodItem, idx) => (
                      <option key={idx} value={foodItem}>
                        {foodItem}
                      </option>
                    )
                  )}
                </select>
                <input
                  type="number"
                  min="1"
                  value={meal.count}
                  onChange={(e) =>
                    handleMealChange(
                      mealType as keyof typeof mealDetails.meals,
                      index,
                      "count",
                      Number(e.target.value)
                    )
                  }
                  className="border p-2 rounded w-20 mr-2"
                  placeholder="Count"
                />
                <button
                  onClick={() =>
                    removeMealItem(
                      mealType as keyof typeof mealDetails.meals,
                      index
                    )
                  }
                  className="bg-red-500 text-white py-2 px-4 rounded"
                >
                  Remove
                </button>
              </div>
            )
          )}
          <button
            onClick={() =>
              addMealItem(mealType as keyof typeof mealDetails.meals)
            }
            className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
          >
            Add {mealType.charAt(0).toUpperCase() + mealType.slice(1)} Item
          </button>
        </div>
      ))}

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
