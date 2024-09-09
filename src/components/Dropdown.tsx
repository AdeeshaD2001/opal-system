import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const Dropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <li className="relative hover:-translate-y-2 duration-500 transition-all text-white">
      <button onClick={toggleDropdown} className="flex items-center space-x-2">
        <span>About Us</span>
      </button>
      {isDropdownOpen && (
        <ul
          ref={dropdownRef}
          className="absolute left-0 mt-2 w-48 bg-white text-[#836666] rounded-lg shadow-lg z-50"
        >
          {[
            "Our Story",
            "Mission & Vision",
            "Terms of Service",
            "Privacy Policy",
            "Cookie Policy",
            "FAQs",
          ].map((item, index) => (
            <li key={index} className="hover:bg-gray-100">
              <Link
                href={`/${item.replace(/\s+/g, "").toLowerCase()}`}
                className="block px-4 py-2"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default Dropdown;
