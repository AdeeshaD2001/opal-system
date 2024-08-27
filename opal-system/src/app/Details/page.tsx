"use client";

import React, { useState } from "react";

const details: React.FC = () => {
    return (
      <section className="container mx-auto p-6 bg-orange-100">
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
          {/* About Us Container */}
          <div className="flex-1 bg-gray-100 p-6 rounded-lg shadow-md">

            <h2 className="text-3xl font-bold mb-4 text-yellow-900">About Us</h2>



            {/* Our Story */}
            <div id="0ur-Story" className="flex-1 bg-gray-100 p-6 rounded-lg shadow-md mb-4">
                <h1 className="text-xl font-bold mb-4">Our Story</h1>
                <div className="text-justify">
                    <p className="mb-4">
                    Welcome to CeylonX Hotels, where luxury meets comfort. Our journey began in 2023 with a vision to redefine hospitality by blending exceptional service with a warm and inviting atmosphere. From our humble beginnings in Nuwara-Eliya, we’ve grown into a renowned name in the industry, known for our commitment to excellence.
                    </p>
                    <p className="mb-2">
                    At CeylonX Hotels, every detail is carefully curated to provide an unforgettable experience for our guests. Our story is one of passion, dedication, and a relentless pursuit of quality. Join us as we continue to innovate and elevate the art of hospitality.
                    </p>
                </div>
            </div>

            {/* Mission & Vission */}
            <div id="mission-vission" className="flex-1 bg-gray-100 p-6 rounded-lg shadow-md mb-4">
                <h1 className="text-xl font-bold mb-4">Mission & Vision</h1>            
                <div className="text-justify">
                    <p className="mb-4">
                    <strong>Mission:</strong> Our mission is to offer unparalleled hospitality that exceeds expectations, creating memorable experiences for every guest. We are dedicated to providing exceptional service, luxurious accommodations, and a welcoming atmosphere that reflects our commitment to excellence.
                    </p>
                    <p className="mb-2">
                    <strong>Vision:</strong> Our vision is to be the leading hotel chain recognized for our innovative approach to hospitality, setting new standards for comfort and service. We strive to be the first choice for travelers seeking a unique and memorable stay, consistently exceeding their expectations through our dedication to quality and guest satisfaction.
                    </p>
                </div>
            </div>

            {/* Terms of Services */}
            <div id="terms-of-services" className="flex-1 bg-gray-100 p-6 rounded-lg shadow-md mb-4">
                <h1 className="text-xl font-bold mb-4">Terms of Services</h1>
                <div className="text-justify">
                    <p className="mb-2">
                    <strong>1. Acceptance of Terms:</strong> By accessing and using our services, you agree to be bound by these Terms of Service and our Privacy Policy.
                    </p>
                    <p className="mb-2">
                    <strong>2. Booking Policies:</strong> Detailed information regarding reservations, cancellations, and modifications.
                    </p>
                    <p className="mb-2">
                    <strong>3. Payment Terms:</strong> Information on accepted payment methods, billing procedures, and refund policies.
                    </p>
                    <p className="mb-2">
                    <strong>4. User Responsibilities:</strong> Guidelines for using our services and responsibilities of the user.
                    </p>
                    <p className="mb-2">
                    <strong>5. Limitation of Liability:</strong> Disclaimers regarding our liability for any damages or losses.
                    </p>
                    <p className="mb-2">
                    <strong>6. Changes to Terms:</strong> How and when we may update our Terms of Service.
                    </p>
                </div>
            </div>
            
            {/* Privacy Policy */}
            <div id="privacy-policy" className="flex-1 bg-gray-100 p-6 rounded-lg shadow-md mb-4">
                <h1 className="text-xl font-bold mb-4">Privacy Policy</h1>
                <div className="text-justify">
                    <p className="mb-2">
                    <strong>1. Information Collection:</strong> Details on what personal information we collect and how we collect it.
                    </p>
                    <p className="mb-2">
                    <strong>2. Use of Information:</strong> How we use the information collected, including for booking, marketing, and customer service.
                    </p>
                    <p className="mb-2">
                    <strong>3. Data Security:</strong> Measures we take to protect your personal information.
                    </p>
                    <p className="mb-2">
                    <strong>4. Cookies:</strong> Information about the use of cookies on our site and how they help us enhance your experience.
                    </p>
                    <p className="mb-2">
                    <strong>5. Third-Party Sharing:</strong> Instances when we may share your information with third parties.
                    </p>
                    <p className="mb-2">
                    <strong>6. Your Rights:</strong> How you can access, correct, or delete your personal information.
                    </p>
                </div>
            </div>

            {/* Cookie Policy */}
            <div id="cookie-policy" className="flex-1 bg-gray-100 p-6 rounded-lg shadow-md mb-4">
                <h1 className="text-xl font-bold mb-4">Cookie Policy</h1>
                <div className="text-justify">
                    <p className="mb-2">
                    <strong>1. What Are Cookies:</strong> Explanation of cookies and their purpose. </p>
                    <p className="mb-2">
                    <strong>2. Types of Cookies We Use: </strong>Details on different types of cookies (e.g., essential, performance, functionality, targeting). </p>
                    <p className="mb-2">
                    <strong>3. Managing Cookies: </strong>How users can manage or disable cookies through their browser settings.</p>
                    <p className="mb-2">
                    <strong>4. Consent:</strong> How we obtain consent for the use of cookies and how users can withdraw it.</p>
                </div>
            </div>

            {/* FAQs */}
            <div id="faqs" className="flex-1 bg-gray-100 p-6 rounded-lg shadow-md mb-4">
                <h1 className="text-xl font-bold mb-4">FAQs</h1>
                <div className="text-justify">
                    <p className="mb-2">
                    <strong>1. How do I make a reservation?</strong> Instructions on booking a room.
                    </p>
                    <p className="mb-2">
                    <strong>2. What is your cancellation policy?</strong> Details on how to cancel or modify a reservation.
                    </p>
                    <p className="mb-2">
                    <strong>3. What amenities are included in my stay?</strong>  Information on what is included with the room.
                    </p>
                    <p className="mb-2">
                    <strong>4. Do you offer special rates or discounts?</strong> Information on promotions or discounts.
                    </p>
                    <p className="mb-2">
                    <strong>5. What is the check-in and check-out time?</strong> Standard check-in and check-out times.
                    </p>
                    <p>
                    <strong>6. How can I contact customer service?</strong> Contact details for support.
                    </p>
                </div>
            </div>
                
        </div>
          
        
        </div>
      </section>
    );
  };

export default details;