import React from 'react';

const CookiePolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      
      <main className="py-12">
        <section className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Cookie Policy</h1>

          <p className="text-s text-gray-600 mb-6 text-justify">
            At CeylonX Hotels, we use cookies to enhance your experience on our website. This Cookie Policy explains what cookies are, how we use them, and how you can manage your cookie preferences.
          </p>

          <h2 className="text-xl font-bold text-gray-800 mb-4">1. What Are Cookies?</h2>
          <p className="text-s text-gray-600 mb-6 text-justify">
            Cookies are small text files that are stored on your device when you visit a website. They help websites remember your preferences, login information, and other details to improve your browsing experience. Cookies can be either session cookies (which are deleted when you close your browser) or persistent cookies (which remain on your device for a set period).
          </p>

          <h2 className="text-xl font-bold text-gray-800 mb-4">2. How We Use Cookies</h2>
          <p className="text-s text-gray-600 mb-6 text-justify">
            We use cookies for various purposes, including:
            <ul className="list-disc pl-6 mb-6">
              <li>Remembering your preferences and settings.</li>
              <li>Analyzing website usage and performance to improve our services.</li>
              <li>Providing personalized content and advertisements.</li>
              <li>Facilitating social media interactions.</li>
            </ul>
            By using our website, you consent to the use of cookies as described in this policy.
          </p>

          <h2 className="text-xl font-bold text-gray-800 mb-4">3. Third-Party Cookies</h2>
          <p className="text-s text-gray-600 mb-6 text-justify">
            We may also use third-party cookies from trusted partners to help us analyze website performance and deliver targeted advertising. These cookies are governed by the privacy policies of the respective third-party services and not by this policy.
          </p>

          <h2 className="text-xl font-bold text-gray-800 mb-4">4. Managing Cookies</h2>
          <p className="text-s text-gray-600 mb-6 text-justify">
            You can manage your cookie preferences through your browser settings. Most browsers allow you to block or delete cookies, but this may affect your ability to use certain features of our website. For more information on how to manage cookies, please refer to your browser's help documentation.
          </p>

          <h2 className="text-xl font-bold text-gray-800 mb-4">5. Changes to This Cookie Policy</h2>
          <p className="text-s text-gray-600 mb-6 text-justify">
            We may update this Cookie Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by posting the updated policy on our website. Your continued use of our website after such changes constitutes your acceptance of the revised policy.
          </p>

          <h2 className="text-xl font-bold text-gray-800 mb-4">6. Contact Us</h2>
          <p className="text-s text-gray-600 text-justify">
            If you have any questions or concerns about this Cookie Policy or our use of cookies, please contact us at{' '}
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

export default CookiePolicy;
