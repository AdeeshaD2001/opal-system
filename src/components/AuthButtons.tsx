import Link from "next/link";

interface AuthButtonsProps {
  isLoggedIn: boolean;
  handleLogout: () => void;
}

const AuthButtons: React.FC<AuthButtonsProps> = ({
  isLoggedIn,
  handleLogout,
}) => {
  return (
    <>
      {isLoggedIn ? (
        <li className="lg:ml-4">
          <button
            onClick={handleLogout}
            className="bg-white text-[#836666] rounded h-12 px-6 transition duration-300 ease-in-out hover:bg-gray-300"
          >
            Log Out
          </button>
        </li>
      ) : (
        <>
          <li className="lg:ml-4">
            <button className="bg-white text-[#836666] rounded h-12 px-6 transition duration-300 ease-in-out hover:bg-gray-300">
              <Link href="/LogIn">Log In</Link>
            </button>
          </li>
          <li className="lg:ml-4">
            <button className="bg-white text-[#836666] rounded h-12 px-6 transition duration-300 ease-in-out hover:bg-gray-300">
              <Link href="/SignUp">Sign Up</Link>
            </button>
          </li>
        </>
      )}
    </>
  );
};

export default AuthButtons;
