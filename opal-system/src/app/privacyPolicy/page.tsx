import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      
      <main className="py-12">
        <section className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h1>

          <p className="text-s text-gray-600 mb-6 text-justify">
            Welcome to CeylonX Hotels. We are committed to protecting your privacy and ensuring a secure online experience. This Privacy Policy outlines how we collect, use, and safeguard your information when you use our services.
          </p>

          <h2 className="text-xl font-bold text-gray-800 mb-4">1. Information We Collect</h2>
          <p className="text-s text-gray-600 mb-6 text-justify">
            We collect personal information that you provide directly to us, such as when you make a reservation, contact us for support, or sign up for our newsletter. This may include your name, email address, phone number, and payment information. We also collect information automatically when you use our website, such as your IP address, browser type, and usage data.
          </p>

          <h2 className="text-xl font-bold text-gray-800 mb-4">2. How We Use Your Information</h2>
          <p className="text-s text-gray-600 mb-6 text-justify">
            The information we collect is used to provide and improve our services, process reservations, respond to inquiries, and communicate with you about updates and promotions. We may also use your information to analyze usage trends and enhance user experience on our website.
          </p>

          <h2 className="text-xl font-bold text-gray-800 mb-4">3. Sharing Your Information</h2>
          <p className="text-s text-gray-600 mb-6 text-justify">
            We do not sell or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website, processing transactions, or performing other functions on our behalf. These providers are contractually obligated to protect your information and use it only for the purposes for which it was shared.
          </p>

          <h2 className="text-xl font-bold text-gray-800 mb-4">4. Data Security</h2>
          <p className="text-s text-gray-600 mb-6 text-justify">
            We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. Despite our efforts, no security system is impenetrable, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-xl font-bold text-gray-800 mb-4">5. Your Choices</h2>
          <p className="text-s text-gray-600 mb-6 text-justify">
            You have the right to access, correct, or delete your personal information. You can also opt out of receiving promotional communications from us by following the unsubscribe instructions in those emails. If you have any concerns about your information or our practices, please contact us.
          </p>

          <h2 className="text-xl font-bold text-gray-800 mb-4">6. Changes to This Privacy Policy</h2>
          <p className="text-s text-gray-600 mb-6 text-justify">
            We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by posting the updated policy on our website. Your continued use of our services after such changes constitutes your acceptance of the revised policy.
          </p>

          <h2 className="text-xl font-bold text-gray-800 mb-4">7. Contact Us</h2>
          <p className="text-s text-gray-600 text-justify">
            If you have any questions or concerns about this Privacy Policy or our practices, please contact us at{' '}
            <a 
                href="mailto:ceylonxhotels@gmail.com" 
                className="text-blue-500 hover:underline cursor-pointer"
            >
                ceylonxhotels@gmail.com
            </a>. We value your feedback and are committed to addressing any issues you may have.
          </p>
        </section>
      </main>

    </div>
  );
};

export default PrivacyPolicy;
