import Link from "next/link";
import Dropdown from "./Dropdown";
import AuthButtons from "./AuthButtons";

interface MenuLinksProps {
  isOpen: boolean;
  isLoggedIn: boolean;
  handleLogout: () => void;
}

const MenuLinks: React.FC<MenuLinksProps> = ({
  isOpen,
  isLoggedIn,
  handleLogout,
}) => {
  return (
    <nav
      className={`lg:flex lg:items-center lg:space-x-8 ${
        isOpen ? "block" : "hidden"
      } w-full lg:w-auto rounded-lg lg:rounded-none bg-[#6b4f4f] lg:bg-transparent mt-4 lg:mt-0 transition-all duration-300 ease-in-out`}
    >
      <ul className="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full lg:w-auto space-y-4 lg:space-y-0 lg:space-x-8 mt-4 lg:mt-0">
        {["Home", "Hotels"].map((link, index) => (
          <li
            key={index}
            className="hover:-translate-y-2 duration-500 transition-all text-white"
          >
            <Link href={`/${link.toLowerCase()}`}>{link}</Link>
          </li>
        ))}

        <Dropdown />

        <li className="hover:-translate-y-2 duration-500 transition-all text-white">
          <Link href="/contact">Contact</Link>
        </li>

        {/* Use the AuthButtons component for login/logout */}
        <AuthButtons isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      </ul>
    </nav>
  );
};

export default MenuLinks;
