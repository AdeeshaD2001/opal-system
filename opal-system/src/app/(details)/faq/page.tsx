"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "How do I make a booking through your system?",
    answer:
      "To make a booking, simply select your desired hotel and room type, enter your check-in and check-out dates, and follow the prompts to enter your personal details and payment information. Once completed, you'll receive a confirmation email with your booking details.",
  },
  {
    question: "Can I book a room at multiple hotels in one transaction?",
    answer: "Yes, you can book rooms at multiple hotels in one transaction. Just add the desired hotels and rooms to your booking cart before proceeding to checkout.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept major credit cards, debit cards, and some digital payment methods. You can select your preferred payment method during the checkout process.",
  },
  {
    question: "Can I modify or cancel my booking?",
    answer: "Yes, you can modify or cancel your booking through your account dashboard. Please check the specific hotel's cancellation policy for any potential fees or deadlines.",
  },
  {
    question: "How can I check the status of my booking?",
    answer: "You can check the status of your booking by logging into your account and viewing your booking history. You’ll also receive status updates via email.",
  },
  {
    question: "What should I do if I don't receive a confirmation email?",
    answer: "If you don't receive a confirmation email within a few minutes of booking, check your spam or junk folder. If it’s not there, please contact our support team for assistance.",
  },
  {
    question: "Are there any special requests or preferences I can add to my booking?",
    answer: "Yes, you can add special requests or preferences during the booking process, such as room preferences or additional services. These requests will be communicated to the hotel, but are subject to availability.",
  },
  {
    question: "Can I book additional services like meals or airport transfers?",
    answer: "Yes, you can book additional services like meals, airport transfers, and more during the booking process or by contacting the hotel directly through your booking confirmation.",
  },
  {
    question: "What is your policy on booking errors or incorrect information?",
    answer: "If you notice any errors in your booking, please contact our support team immediately. We will work to correct the information or assist with any necessary changes.",
  },
  {
    question: "How do I contact customer support for booking-related issues?",
    answer: "You can contact customer support through our help center on the website or by using the contact information provided in your booking confirmation email.",
  },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-[#6b4f4f] text-center mb-8">Frequently Asked Questions</h1>
        <p className="text-center text-[#6b4f4f] mb-8 text-lg">
          Find answers to the most common questions we receive.
        </p>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 pb-4">
              <button
                className={`flex justify-between items-center w-full text-left py-4 px-6 rounded-lg transition-all duration-300 ease-in-out ${
                  openIndex === index ? "bg-gray-200 text-[#6b4f4f]" : "bg-white text-gray-800"
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <svg
                  className={`w-4 h-4 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <p className="mt-2 text-gray-700 px-6">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 text-center">
          <div className="flex justify-center mb-6">
            <img
              className="w-12 h-12 rounded-full border-2 border-white shadow-lg"
              src="/img/person-1.jpeg"
              alt="Support Team"
            />
            <img
              className="w-12 h-12 rounded-full border-2 border-white shadow-lg -ml-4"
              src="/img/person-2.jpg"
              alt="Support Team"
            />
            <img
              className="w-12 h-12 rounded-full border-2 border-white shadow-lg -ml-4"
              src="/img/person-3.jpg"
              alt="Support Team"
            />
          </div>
          <h2 className="text-2xl font-semibold text-[#6b4f4f] mb-4">Still Have Questions?</h2>
          <p className="text-gray-600 mb-6">
            Can't find the answer you're looking for? Our friendly team is here to help.
          </p>
          <button className="bg-[#6b4f4f] text-white px-8 py-3 rounded-full shadow-md hover:bg-[#5a3e3e] transition duration-300 ease-in-out">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
