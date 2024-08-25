import Link from "next/link"
import { BsFillSendFill, BsTelephoneOutbound } from "react-icons/bs"
import { FaInstagram } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa6"

const Footer = () => {
    return (
      <footer className="mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start justify-between">
            {/* Left Section: Contact Us */}
            <div className="flex flex-col md:w-1/3">
              {/* <Link href="/" className="font-black text-[#8B4513] text-2xl">
                CeylonX Hotels
              </Link> */}
  
              <h4 className="font-semibold text-[30px] py-4">Contact Us</h4>
  
              <div className="flex flex-col gap-4">
                <div className="flex items-center py-2">
                  <BsFillSendFill />
                  <p className="ml-2">hotels.com</p>
                </div>
                <div className="flex items-center py-2">
                  <BsTelephoneOutbound />
                  <p className="ml-2">011 234 5678</p>
                </div>
                <div className="flex items-center py-2">
                  <FaFacebook />
                  <p className="ml-2">CeylonX Hotels</p>
                </div>
                <div className="flex items-center py-2">
                  <FaInstagram />
                  <p className="ml-2">ceylonxhotels</p>
                </div>
              </div>
            </div>
  
            {/* Middle Section: About Us */}
            <div className="flex flex-col md:w-1/3 text-center md:text-left">
              <h4 className="font-semibold text-[30px] py-4">About Us</h4>
              <div className="flex flex-col gap-2">
                <p className="pb-2">Our Story</p>
                <p className="pb-2">Mission & Vision</p>
                <p className="pb-2">Terms of Service</p>
                <p className="pb-2">Privacy Policy</p>
                <p className="pb-2">Cookie Policy</p>
                <p className="pb-2">FAQs</p>
              </div>
            </div>
  
            {/* Right Section: Our Services */}
            <div className="flex flex-col md:w-1/3 text-center md:text-left">
              <h4 className="font-semibold text-[30px] py-4">Our Services</h4>
              <div className="flex flex-col gap-2">
                <p className="pb-2">Dining Experience</p>
                <p className="pb-2">Wellness</p>
                <p className="pb-2">Fitness</p>
                <p className="pb-2">Entertainment</p>
                <p className="pb-2">Special Offers</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;