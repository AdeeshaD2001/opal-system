import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      

      <main className="py-12">
        <section className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Terms of Service</h1>
          
          <p className="text-s text-gray-600 mb-6 text-justify">
            Welcome to CeylonX Hotels. By accessing or using our services, you agree to comply with and be bound by the following terms and conditions. These Terms of Service outline the rules and regulations for the use of our hotel system. Please read them carefully before using our services.
          </p>
          
          <p className="text-s text-gray-600 mb-6 text-justify">
            Our platform provides comprehensive tools designed to optimize hotel and restaurant operations across multiple locations. By using our services, you agree to use them solely for lawful purposes and in accordance with these Terms. We reserve the right to modify or update these Terms at any time, and continued use of our services will constitute acceptance of any changes.
          </p>

          <h2 className="text-xl font-bold text-gray-800 mb-4">User Obligations</h2>
          <p className="text-s text-gray-600 mb-6 text-justify">
            Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security. We are not liable for any loss or damage arising from your failure to protect your account information.
          </p>

          <h2 className="text-xl font-bold text-gray-800 mb-4">Limitation of Liability</h2>
          <p className="text-s text-gray-600 mb-6 text-justify">
            CeylonX Hotels shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of our services. This includes but is not limited to loss of data, loss of profits, or other damages that may result from errors or omissions in the information provided.
          </p>

          <h2 className="text-xl font-bold text-gray-800 mb-4">Intellectual Property</h2>
          <p className="text-s text-gray-600 mb-6 text-justify">
            All content and materials on our platform, including text, graphics, logos, and software, are the property of CeylonX Hotels or its licensors and are protected by intellectual property laws. You may not reproduce, distribute, or create derivative works from any content on our platform without our express written permission.
          </p>

          <h2 className="text-xl font-bold text-gray-800 mb-4">Governing Law</h2>
          <p className="text-s text-gray-600 mb-6 text-justify">
            These Terms of Service shall be governed by and construed in accordance with the laws of Sri Lanka. Any disputes arising under or in connection with these Terms will be subject to the exclusive jurisdiction of the courts of Sri Lanka.
          </p>

          <p className="text-s text-gray-600 text-justify">
            If you have any questions or concerns regarding these Terms of Service, please contact us at{' '}
            <a 
                href="mailto:ceylonxhotels@gmail.com" 
                className="text-blue-500 hover:underline cursor-pointer"
            >
                ceylonxhotels@gmail.com
            </a>. Your feedback is important to us, and we are committed to ensuring a positive experience with our system.
          </p>
        </section>
      </main>

      
    </div>
  );
};

export default TermsOfService;
