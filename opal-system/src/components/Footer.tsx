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
                <p className="ml-2 cursor-pointer hover:underline">opalhotels@gmail.com</p>
              </div>
              <div className="flex items-center">
                <BsTelephoneOutbound className="text-xl" />
                <p className="ml-2 cursor-pointer hover:underline">011 234 5678</p>
              </div>
              <div className="flex items-center">
                <FaFacebook className="text-xl" />
                <p className="ml-2 cursor-pointer hover:underline">Opal Hotels</p>
              </div>
              <div className="flex items-center">
                <FaInstagram className="text-xl" />
                <p className="ml-2 cursor-pointer hover:underline">opalhotels</p>
              </div>
            </div>
          </div>

          {/* Middle Section: About Us */}
          <div className="flex flex-col md:w-1/3 space-y-4 text-center md:text-left">
            <h4 className="font-semibold text-2xl ">About Us</h4>
              
            <div className="flex flex-col gap-2">
              <p className="cursor-pointer hover:underline">
                <Link href="/ourStory">Our Story</Link>
              </p>
              <p className="cursor-pointer hover:underline">
                <Link href="/mission&vision">Mission & Vision</Link>
              </p>
              <p className="cursor-pointer hover:underline">
                <Link href="/termsOfService">Terms of Service</Link>
              </p>
              <p className="cursor-pointer hover:underline">
                <Link href="/privacyPolicy">Privacy Policy</Link>
              </p>
              <p className="cursor-pointer hover:underline">
                <Link href="/cookiePolicy">Cookie Policy</Link>
              </p>
              <p className="cursor-pointer hover:underline">
                <Link href="/faq">FAQs</Link>
              </p>
              
            </div>

          </div>

          {/* Right Section: Our Services */}
          <div className="flex flex-col md:w-1/3 space-y-4 text-center md:text-left">
          
            
              <h4 className="font-semibold text-2xl">Our Services</h4>

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
      <div className='py-8'>
        <div className="max-w-7xl mx-auto px-4 text-center">
                <p>&copy; {new Date().getFullYear()} Opal Hotels. All rights reserved.</p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
