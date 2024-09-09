import React, { useState } from "react";
import AdultsPicker from "./AdultsPicker";
import ChildrenPicker from "./ChildrenPicker";
import Divider from "./Divider";

const GuestCountPicker: React.FC = () => {
  const [adults, setAdults] = useState<number>(1); // Default 1 adult
  const [children, setChildren] = useState<number>(0); // Default 0 children

  return (
    <div className="flex flex-col md:flex-row items-center w-full md:w-[45%]">
      {/* Container for Adults and Children Pickers */}
      <div className="flex flex-col md:flex-row items-center w-full">
        {/* Adults Picker */}
        <AdultsPicker adults={adults} setAdults={setAdults} />

        {/* Divider */}
        <Divider />

        {/* Children Picker */}
        <ChildrenPicker children={children} setChildren={setChildren} />
      </div>
    </div>
  );
};

export default GuestCountPicker;
