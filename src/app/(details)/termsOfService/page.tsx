import React from 'react';
import { FaShieldAlt, FaBalanceScale, FaFileSignature, FaGavel } from 'react-icons/fa'; // Importing icons from react-icons

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      {/* Main Content */}
      <main className="py-16">
        <section className="max-w-4xl mx-auto px-4 lg:px-8">
          {/* Title Section */}
          <h1 className="text-4xl font-extrabold text-[#836666] mb-8 text-center">Terms of Service</h1>
          
          {/* Introduction Paragraph */}
          <p className="text-s text-gray-700 mb-8 text-justify leading-relaxed">
            Welcome to Opal Hotels. By accessing or using our services, you agree to comply with and be bound by the following terms and conditions. These Terms of Service outline the rules and regulations for the use of our hotel system. Please read them carefully before using our services.
          </p>
          
          {/* Service Description */}
          <p className="text-s text-gray-700 mb-8 text-justify leading-relaxed">
            Our platform provides comprehensive tools designed to optimize hotel and restaurant operations across multiple locations. By using our services, you agree to use them solely for lawful purposes and in accordance with these Terms. We reserve the right to modify or update these Terms at any time, and continued use of our services will constitute acceptance of any changes.
          </p>

          {/* User Obligations Section */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <FaShieldAlt className="text-[#6b4f4f] text-2xl mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">User Obligations</h2>
            </div>
            <p className="text-s text-gray-700 mb-8 text-justify leading-relaxed">
              Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security. We are not liable for any loss or damage arising from your failure to protect your account information.
            </p>
          </div>

          {/* Limitation of Liability Section */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <FaBalanceScale className="text-[#6b4f4f] text-2xl mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Limitation of Liability</h2>
            </div>
            <p className="text-s text-gray-700 mb-8 text-justify leading-relaxed">
              Opal Hotels shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of our services. This includes but is not limited to loss of data, loss of profits, or other damages that may result from errors or omissions in the information provided.
            </p>
          </div>

          {/* Intellectual Property Section */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <FaFileSignature className="text-[#6b4f4f] text-2xl mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Intellectual Property</h2>
            </div>
            <p className="text-s text-gray-700 mb-8 text-justify leading-relaxed">
              All content and materials on our platform, including text, graphics, logos, and software, are the property of Opal Hotels or its licensors and are protected by intellectual property laws. You may not reproduce, distribute, or create derivative works from any content on our platform without our express written permission.
            </p>
          </div>

          {/* Governing Law Section */}
          <div className="mb-10">
            <div className="flex items-center mb-4">
              <FaGavel className="text-[#6b4f4f] text-2xl mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Governing Law</h2>
            </div>
            <p className="text-s text-gray-700 mb-8 text-justify leading-relaxed">
              These Terms of Service shall be governed by and construed in accordance with the laws of Sri Lanka. Any disputes arising under or in connection with these Terms will be subject to the exclusive jurisdiction of the courts of Sri Lanka.
            </p>
          </div>

          {/* Contact Information */}
          <p className="text-s text-gray-700 text-justify leading-relaxed">
            If you have any questions or concerns regarding these Terms of Service, please contact us at{' '}
            <a 
              href="mailto:opalhotels@gmail.com" 
              className="text-blue-500 hover:underline cursor-pointer"
            >
              opalhotels@gmail.com
            </a>. Your feedback is important to us, and we are committed to ensuring a positive experience with our system.
          </p>
        </section>
      </main>
    </div>
  );
};

export default TermsOfService;
