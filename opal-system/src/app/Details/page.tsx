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
            <h1 className="text-xl font-bold mb-4">Our Story</h1>
            <div className="text-justify">
                <p className="mb-4">
                Welcome to CeylonX Hotels, where luxury meets comfort. Our journey began in 2023 with a vision to redefine hospitality by blending exceptional service with a warm and inviting atmosphere. From our humble beginnings in Nuwara-Eliya, we’ve grown into a renowned name in the industry, known for our commitment to excellence.
                </p>
                <p className="mb-10">
                At CeylonX Hotels, every detail is carefully curated to provide an unforgettable experience for our guests. Our story is one of passion, dedication, and a relentless pursuit of quality. Join us as we continue to innovate and elevate the art of hospitality.
                </p>
            </div>

            {/* Mission & Vission */}
            <h1 className="text-xl font-bold mb-4">Mission & Vision</h1>            
            <div className="text-justify">
                <p className="mb-4">
                <strong>Mission:</strong> Our mission is to offer unparalleled hospitality that exceeds expectations, creating memorable experiences for every guest. We are dedicated to providing exceptional service, luxurious accommodations, and a welcoming atmosphere that reflects our commitment to excellence.
                </p>
                <p className="mb-10">
                <strong>Vision:</strong> Our vision is to be the leading hotel chain recognized for our innovative approach to hospitality, setting new standards for comfort and service. We strive to be the first choice for travelers seeking a unique and memorable stay, consistently exceeding their expectations through our dedication to quality and guest satisfaction.
                </p>
            </div>

            {/* Terms of Services */}
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
                <p className="mb-10">
                <strong>6. Changes to Terms:</strong> How and when we may update our Terms of Service.
                </p>
            </div>

            {/* Privacy Policy */}
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
                <p className="mb-10">
                <strong>6. Your Rights:</strong> How you can access, correct, or delete your personal information.
                </p>
            </div>

            {/* Cookie Policy */}
            <h1 className="text-xl font-bold mb-4">Cookie Policy</h1>
            <div className="text-justify">
                <p className="mb-2">
                <strong>1. What Are Cookies:</strong> Explanation of cookies and their purpose. </p>
                <p className="mb-2">
                <strong>2. Types of Cookies We Use: </strong>Details on different types of cookies (e.g., essential, performance, functionality, targeting). </p>
                <p className="mb-2">
                <strong>3. Managing Cookies: </strong>How users can manage or disable cookies through their browser settings.</p>
                <p className="mb-10">
                <strong>4. Consent:</strong> How we obtain consent for the use of cookies and how users can withdraw it.</p>
            </div>

            {/* FAQs */}
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
          
          {/* Services Container */}
          <div id="our-services" className="flex-1 bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-4 text-yellow-900">Our Services</h2>


            {/* Dining Experience */}
            <h1 className="text-xl font-bold mb-4">Dining Experience</h1>
            
            <div className="text-justify">
                <p className="mb-4">
                At CeylonX Hotels, we believe dining is an integral part of your stay. Our diverse dining options cater to every palate, whether you're in the mood for a gourmet meal, casual dining, or a quick bite. Enjoy:
                </p>
                <ul className="list-disc pl-5">
                    <li><strong>Signature Restaurants:</strong> Indulge in culinary delights at our on-site restaurants, featuring a range of cuisines from local specialties to international favorites.</li>
                    <li><strong>Fine Dining:</strong> Experience exceptional service and exquisite dishes prepared by our world-class chefs in a sophisticated setting.</li>
                    <li><strong>Casual Dining:</strong> Enjoy relaxed meals in a comfortable atmosphere with a variety of menu options for breakfast, lunch, and dinner.</li>
                    <li><strong>Room Service:</strong> For your convenience, our in-room dining service offers a wide selection of meals delivered right to your door.</li>
                    <li className="mb-10"><strong>Special Events:</strong> Celebrate special occasions with customized menus and private dining options available upon request.</li>
                </ul>
                
            </div>

            {/* Wellness */}
            <h1 className="text-xl font-bold mb-4">Wellness</h1>
            
            <div className="text-justify">
                <p className="mb-4">
                our well-being is our priority at CeylonX Hotels. Our wellness services are designed to rejuvenate and refresh you:
                </p>
                <ul className="list-disc pl-5">
                    <li><strong>Spa Treatments:</strong> Unwind with a range of spa services, including massages, facials, and body treatments, all delivered by skilled therapists in a serene environment.</li>
                    <li><strong>Relaxation Areas:</strong> Enjoy our tranquil relaxation lounges, designed to help you escape and relax during your stay.</li>
                    <li><strong>Wellness Programs:</strong> Participate in our wellness programs, including meditation and yoga classes, to enhance your physical and mental well-being.</li>
                    <li className="mb-10"><strong>Health and Beauty:</strong> Access our beauty salon services for haircuts, styling, and other treatments to ensure you look and feel your best.</li>
               </ul>
                
            </div>
            
            {/* Fitness */}
            <h1 className="text-xl font-bold mb-4">Fitness</h1>
            
            <div className="text-justify">
                <p className="mb-4">
                Stay active and fit while traveling with our state-of-the-art fitness facilities:
                </p>
                <ul className="list-disc pl-5">
                    <li><strong>Gym:</strong> Our fully-equipped fitness center features the latest exercise machines, free weights, and cardio equipment to help you maintain your fitness routine.</li>
                    <li><strong>Personal Training:</strong> Take advantage of personalized training sessions with our certified fitness trainers, available upon request.</li>
                    <li><strong>Fitness Classes:</strong> Join our group fitness classes, including aerobics, strength training, and more, tailored to various skill levels.</li>
                    <li className="mb-10"><strong>Outdoor Activities:</strong> Explore nearby trails, parks, or recreational areas for outdoor fitness opportunities.</li>
               </ul>
                
            </div>

            {/* Entertainment */}
            <h1 className="text-xl font-bold mb-4">Entertainment</h1>
            
            <div className="text-justify">
                <p className="mb-4">
                Experience a vibrant and engaging atmosphere with our diverse entertainment options:
                </p>
                <ul className="list-disc pl-5">
                    <li><strong>Live Music and Shows:</strong> Enjoy live performances, music events, and theatrical shows organized regularly for your entertainment.</li>
                    <li><strong>Themed Events:</strong> Participate in themed events and activities hosted at our hotel, providing fun and unique experiences.</li>
                    <li><strong>Cinema and Game Rooms:</strong> Relax in our on-site cinema or game rooms, featuring the latest movies and a variety of games for all ages.</li>
                    <li className="mb-10"><strong>Cultural Events:</strong> Engage in local cultural events and activities that highlight the rich heritage and traditions of our destination.</li>
               </ul>
                
            </div>


            {/* Special Offers */}
            <h1 className="text-xl font-bold mb-4">Special Offers</h1>

            <div className="text-justify">
                <p className="mb-4">
                Make the most of your stay with our exclusive special offers and promotions:
                </p>
                <ul className="list-disc pl-5">
                    <li><strong>Seasonal Deals:</strong> Take advantage of limited-time seasonal promotions and discounts available throughout the year.</li>
                    <li><strong>Package Deals:</strong> Book one of our tailored packages, which include accommodations, dining, and additional perks for a complete experience.</li>
                    <li><strong>Early Bird Discounts:</strong> Save on your stay by booking early with our advanced booking discounts.</li>
                    <li><strong>Loyalty Programs:</strong> Join our loyalty program to earn rewards, receive special offers, and enjoy additional benefits on future stays.</li>
                    <li><strong>Exclusive Deals:</strong> Explore exclusive deals available only on our website, including complimentary upgrades and special amenities.</li>
               </ul>
                
            </div>
           
          </div>
        </div>
      </section>
    );
  };

export default details;