import { Search } from "lucide-react";

const SearchButton = () => {
  return (
    <button className="bg-[#6b4f4f] text-white rounded-full h-12 px-6 mt-4 md:mt-0 transition duration-300 ease-in-out hover:bg-[#5a3e3e] flex items-center">
      <Search className="mr-2" />
      Search
    </button>
  );
};

export default SearchButton;
