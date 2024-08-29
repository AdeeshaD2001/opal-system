"use client";

const StepThree = ({
  meal,
  setMeal,
}: {
  meal: string;
  setMeal: (value: string) => void;
}) => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Step 3: Meal Details</h2>
      <input
        type="text"
        value={meal}
        onChange={(e) => setMeal(e.target.value)}
        placeholder="Meal Preference"
        className="border p-2 rounded w-full"
      />
    </div>
  );
};

export default StepThree;
