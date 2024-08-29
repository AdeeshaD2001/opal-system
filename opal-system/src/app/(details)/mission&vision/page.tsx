import React from 'react';

const MissionAndVision: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: `url(/img/mission.jpeg)` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-5xl font-extrabold text-white mb-4 drop-shadow-lg">Our Mission & Vision</h1>
          <p className="text-xl text-white font-light max-w-2xl">Delivering excellence in hospitality and creating unforgettable experiences for every guest.</p>
        </div>
      </div>

      {/* Content Section */}
      <main className="py-16 px-4 bg-gradient-to-b from-white to-gray-200">
        <section className="max-w-5xl mx-auto">
          {/* Mission Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-10 transform transition hover:scale-105">
            <h2 className="text-4xl font-semibold text-[#6b4f4f] mb-6 flex items-center">
              <span className="mr-3">🌟</span> Our Mission
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At CeylonX Hotels, our mission is to provide an exceptional and memorable hospitality experience to every guest we serve. We are dedicated to delivering outstanding service, luxurious accommodations, and a warm, welcoming atmosphere. Our goal is to exceed our guests' expectations through personalized service, attention to detail, and a commitment to excellence.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We strive to create a unique experience for our guests by embracing the rich culture and traditions of Sri Lanka. Our mission extends beyond just providing a place to stay; we aim to create lasting memories and foster a sense of belonging. Whether you're visiting for leisure or business, our team is here to ensure your stay is nothing short of extraordinary.
            </p>
          </div>

          {/* Vision Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg transform transition hover:scale-105">
            <h2 className="text-4xl font-semibold text-[#6b4f4f] mb-6 flex items-center">
              <span className="mr-3">🌍</span> Our Vision
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our vision is to be the leading hotel chain in Sri Lanka, renowned for our commitment to excellence and our dedication to creating unforgettable experiences. We aspire to set new standards in the hospitality industry by continuously innovating and improving our services, facilities, and guest interactions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We envision a future where CeylonX Hotels is synonymous with quality and luxury, and where every guest feels valued and cherished. Our vision includes expanding our presence both locally and internationally, while maintaining the highest standards of service and sustainability. We are committed to fostering a culture of excellence that inspires our team and delights our guests.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Thank you for being part of our journey. We look forward to welcoming you and sharing our passion for exceptional hospitality with you.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MissionAndVision;
