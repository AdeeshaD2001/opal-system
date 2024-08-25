import Link from "next/link";
import { BsFillSendFill, BsTelephoneOutbound } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="mt-16 bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start justify-between space-y-8 md:space-y-0">
          {/* Left Section: Contact Us */}
          <div className="flex flex-col md:w-1/3 space-y-4">
            <h4 className="font-semibold text-2xl">Contact Us</h4>
            <div className="flex flex-col gap-2">
              <div className="flex items-center">
                <BsFillSendFill className="text-xl" />
                <p className="ml-2 cursor-pointer hover:underline">hotels.com</p>
              </div>
              <div className="flex items-center">
                <BsTelephoneOutbound className="text-xl" />
                <p className="ml-2 cursor-pointer hover:underline">011 234 5678</p>
              </div>
              <div className="flex items-center">
                <FaFacebook className="text-xl" />
                <p className="ml-2 cursor-pointer hover:underline">CeylonX Hotels</p>
              </div>
              <div className="flex items-center">
                <FaInstagram className="text-xl" />
                <p className="ml-2 cursor-pointer hover:underline">ceylonxhotels</p>
              </div>
            </div>
          </div>

          {/* Middle Section: About Us */}
          <div className="flex flex-col md:w-1/3 space-y-4 text-center md:text-left">
            <Link href='/Details'>
              <h4 className="font-semibold text-2xl cursor-pointer hover:underline">About Us</h4>
              </Link>
              
            <div className="flex flex-col gap-2">
              <p>Our Story</p>
              <p>Mission & Vision</p>
              <p>Terms of Service</p>
              <p>Privacy Policy</p>
              <p>Cookie Policy</p>
              <p>FAQs</p>
            </div>
          </div>

          {/* Right Section: Our Services */}
          <div className="flex flex-col md:w-1/3 space-y-4 text-center md:text-left">
            <Link href="/Details#our-services">
              <h4 className="font-semibold text-2xl cursor-pointer hover:underline">Our Services</h4>
            </Link>
            <div className="flex flex-col gap-2">
              <p>Dining Experience</p>
              <p>Wellness</p>
              <p>Fitness</p>
              <p>Entertainment</p>
              <p>Special Offers</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
