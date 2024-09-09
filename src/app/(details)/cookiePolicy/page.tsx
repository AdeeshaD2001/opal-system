import React from 'react';
import { FaCookieBite, FaInfoCircle, FaGlobe, FaLock, FaSyncAlt, FaEnvelope } from 'react-icons/fa'; // Importing icons from react-icons

const CookiePolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      {/* Main Content */}
      <main className="py-16">
        <section className="max-w-4xl mx-auto px-4 lg:px-8">
          {/* Title Section */}
          <h1 className="text-4xl font-extrabold text-[#836666] mb-8 text-center">Cookie Policy</h1>

          {/* Introduction Paragraph */}
          <p className="text-s text-gray-700 mb-8 text-justify leading-relaxed">
            At Opal Hotels, we use cookies to enhance your experience on our website. This Cookie Policy explains what cookies are, how we use them, and how you can manage your cookie preferences.
          </p>

          {/* What Are Cookies Section */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <FaCookieBite className="text-[#6b4f4f] text-2xl mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">What Are Cookies?</h2>
            </div>
            <p className="text-s text-gray-700 mb-8 text-justify leading-relaxed">
              Cookies are small text files that are stored on your device when you visit a website. They help websites remember your preferences, login information, and other details to improve your browsing experience. Cookies can be either session cookies (which are deleted when you close your browser) or persistent cookies (which remain on your device for a set period).
            </p>
          </div>

          {/* How We Use Cookies Section */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <FaInfoCircle className="text-[#6b4f4f] text-2xl mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">How We Use Cookies</h2>
            </div>
            <p className="text-s text-gray-700 mb-8 text-justify leading-relaxed">
              We use cookies for various purposes, including:
            </p>
            <ul className="list-disc pl-6 mb-8 text-s text-gray-700">
              <li>Remembering your preferences and settings.</li>
              <li>Analyzing website usage and performance to improve our services.</li>
              <li>Providing personalized content and advertisements.</li>
              <li>Facilitating social media interactions.</li>
            </ul>
            <p className="text-s text-gray-700 text-justify leading-relaxed">
              By using our website, you consent to the use of cookies as described in this policy.
            </p>
          </div>

          {/* Third-Party Cookies Section */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <FaGlobe className="text-[#6b4f4f] text-2xl mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Third-Party Cookies</h2>
            </div>
            <p className="text-s text-gray-700 mb-8 text-justify leading-relaxed">
              We may also use third-party cookies from trusted partners to help us analyze website performance and deliver targeted advertising. These cookies are governed by the privacy policies of the respective third-party services and not by this policy.
            </p>
          </div>

          {/* Managing Cookies Section */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <FaLock className="text-[#6b4f4f] text-2xl mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Managing Cookies</h2>
            </div>
            <p className="text-s text-gray-700 mb-8 text-justify leading-relaxed">
              You can manage your cookie preferences through your browser settings. Most browsers allow you to block or delete cookies, but this may affect your ability to use certain features of our website. For more information on how to manage cookies, please refer to your browser's help documentation.
            </p>
          </div>

          {/* Changes to This Cookie Policy Section */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <FaSyncAlt className="text-[#6b4f4f] text-2xl mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Changes to This Cookie Policy</h2>
            </div>
            <p className="text-s text-gray-700 mb-8 text-justify leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by posting the updated policy on our website. Your continued use of our website after such changes constitutes your acceptance of the revised policy.
            </p>
          </div>

          {/* Contact Us Section */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-[#6b4f4f] text-2xl mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>
            </div>
            <p className="text- text-gray-700 text-justify leading-relaxed">
              If you have any questions or concerns about this Cookie Policy or our use of cookies, please contact us at{' '}
              <a 
                href="mailto:opalhotels@gmail.com" 
                className="text-blue-500 hover:underline cursor-pointer"
              >
                opalhotels@gmail.com
              </a>. We value your feedback and are committed to addressing any issues you may have.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CookiePolicy;
