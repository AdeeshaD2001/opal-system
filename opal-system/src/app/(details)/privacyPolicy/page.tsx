import React from 'react';
import { FaUserShield, FaInfoCircle, FaShareAlt, FaLock, FaUserCheck, FaSyncAlt, FaEnvelope } from 'react-icons/fa'; // Importing icons from react-icons

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      {/* Main Content */}
      <main className="py-16">
        <section className="max-w-4xl mx-auto px-4 lg:px-8">
          {/* Title Section */}
          <h1 className="text-4xl font-extrabold text-[#836666] mb-8 text-center">Privacy Policy</h1>

          {/* Introduction Paragraph */}
          <p className="text-s text-gray-700 mb-8 text-justify leading-relaxed">
            Welcome to CeylonX Hotels. We are committed to protecting your privacy and ensuring a secure online experience. This Privacy Policy outlines how we collect, use, and safeguard your information when you use our services.
          </p>

          {/* Information We Collect Section */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <FaUserShield className="text-[#6b4f4f] text-2xl mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Information We Collect</h2>
            </div>
            <p className="text-s text-gray-700 mb-8 text-justify leading-relaxed">
              We collect personal information that you provide directly to us, such as when you make a reservation, contact us for support, or sign up for our newsletter. This may include your name, email address, phone number, and payment information. We also collect information automatically when you use our website, such as your IP address, browser type, and usage data.
            </p>
          </div>

          {/* How We Use Your Information Section */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <FaInfoCircle className="text-[#6b4f4f] text-2xl mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">How We Use Your Information</h2>
            </div>
            <p className="text-s text-gray-700 mb-8 text-justify leading-relaxed">
              The information we collect is used to provide and improve our services, process reservations, respond to inquiries, and communicate with you about updates and promotions. We may also use your information to analyze usage trends and enhance user experience on our website.
            </p>
          </div>

          {/* Sharing Your Information Section */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <FaShareAlt className="text-[#6b4f4f] text-2xl mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Sharing Your Information</h2>
            </div>
            <p className="text-s text-gray-700 mb-8 text-justify leading-relaxed">
              We do not sell or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website, processing transactions, or performing other functions on our behalf. These providers are contractually obligated to protect your information and use it only for the purposes for which it was shared.
            </p>
          </div>

          {/* Data Security Section */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <FaLock className="text-[#6b4f4f] text-2xl mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Data Security</h2>
            </div>
            <p className="text-s text-gray-700 mb-8 text-justify leading-relaxed">
              We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. Despite our efforts, no security system is impenetrable, and we cannot guarantee absolute security.
            </p>
          </div>

          {/* Your Choices Section */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <FaUserCheck className="text-[#6b4f4f] text-2xl mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Your Choices</h2>
            </div>
            <p className="text-s text-gray-700 mb-8 text-justify leading-relaxed">
              You have the right to access, correct, or delete your personal information. You can also opt out of receiving promotional communications from us by following the unsubscribe instructions in those emails. If you have any concerns about your information or our practices, please contact us.
            </p>
          </div>

          {/* Changes to This Privacy Policy Section */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <FaSyncAlt className="text-[#6b4f4f] text-2xl mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Changes to This Privacy Policy</h2>
            </div>
            <p className="text-s text-gray-700 mb-8 text-justify leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by posting the updated policy on our website. Your continued use of our services after such changes constitutes your acceptance of the revised policy.
            </p>
          </div>

          {/* Contact Us Section */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-[#6b4f4f] text-2xl mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>
            </div>
            <p className="text-s text-gray-700 text-justify leading-relaxed">
              If you have any questions or concerns about this Privacy Policy or our practices, please contact us at{' '}
              <a 
                href="mailto:ceylonxhotels@gmail.com" 
                className="text-blue-500 hover:underline cursor-pointer"
              >
                ceylonxhotels@gmail.com
              </a>. We value your feedback and are committed to addressing any issues you may have.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
