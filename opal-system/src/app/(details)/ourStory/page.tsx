import React from 'react';
import Image from 'next/image';

const OurStory: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section with Background Image */}
      <header className="relative h-96 overflow-hidden">
        <Image
          src="/img/OceanView.jpg" // Path to the header background image
          alt="CeylonX Hotels Journey"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="opacity-100 transition-transform duration-500 transform hover:scale-105"
        />
        
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] to-[#1A1A1A] opacity-70"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Our Story</h1>
          <p className="text-lg max-w-2xl text-center drop-shadow-md">
            Discover the journey of CeylonX Hotels and our commitment to redefining luxury and hospitality in Sri Lanka.
          </p>
        </div>
      </header>

      <main className="py-16 bg-gradient-to-b from-gray-100 to-white">
        <section className="max-w-6xl mx-auto px-4">
          {/* First Section with Left Image */}
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="md:w-1/2 mb-4 md:mb-0 md:pr-8 transform transition-transform duration-500 hover:scale-105">
              <Image
                src="/img/story1.jpg" // Image path for this section
                alt="Our Journey"
                width={800}
                height={450}
                className="rounded-lg shadow-lg border-4 border-[#D6C7B0]"
              />
            </div>
            <div className="md:w-1/2 text-justify px-4 md:px-0">
              <h2 className="text-3xl font-semibold text-[#836666] mb-4">The Beginning of Our Journey</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At CeylonX Hotels, our journey began with a vision to redefine luxury and hospitality in Sri Lanka. Established over two decades ago, we embarked on a mission to create a chain of hotels that offer unparalleled comfort and a genuine sense of Sri Lankan warmth. Our founder, inspired by the island's rich heritage and stunning landscapes, envisioned a brand that combines elegance with local charm.
              </p>
            </div>
          </div>

          {/* Decorative Divider */}
          <div className="flex justify-center mb-12">
            <div className="h-1 w-16 bg-[#836666] rounded-full"></div>
          </div>

          {/* Second Section with Right Image */}
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="md:w-1/2 order-last md:order-first mb-4 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-semibold text-[#836666] mb-4">Expansion Across the Island</h2>
              <p className="text-lg text-gray-700 mb-6 text-justify leading-relaxed">
                From our first boutique hotel nestled in the hills of Kandy, we have expanded our reach across the island, offering guests a unique experience at each location. Our hotels are thoughtfully designed to reflect the diverse beauty of Sri Lanka, from serene coastal retreats to vibrant city escapes. Each property is a testament to our commitment to providing exceptional service and creating memorable experiences for our guests.
              </p>
            </div>
            <div className="md:w-1/2 md:pl-8 transform transition-transform duration-500 hover:scale-105">
              <Image
                src="/img/story2.jpg" // Image path for this section
                alt="Expansion Across the Island"
                width={800}
                height={450}
                className="rounded-lg shadow-lg border-4 border-[#D6C7B0]"
              />
            </div>
          </div>

          {/* Decorative Divider */}
          <div className="flex justify-center mb-12">
            <div className="h-1 w-16 bg-[#836666] rounded-full"></div>
          </div>

          {/* Third Section with Left Image */}
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="md:w-1/2 mb-4 md:mb-0 md:pr-8 transform transition-transform duration-500 hover:scale-105">
              <Image
                src="/img/hotel.jpg" // Image path for this section
                alt="Sustainability and Community"
                width={800}
                height={450}
                className="rounded-lg shadow-lg border-4 border-[#D6C7B0]"
              />
            </div>
            <div className="md:w-1/2 text-justify px-4 md:px-0">
              <h2 className="text-3xl font-semibold text-[#836666] mb-4">Commitment to Sustainability</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Over the years, we have embraced sustainable practices and community engagement as core principles of our operations. Our dedication to preserving the natural beauty of Sri Lanka and supporting local communities is reflected in every aspect of our business. We take pride in our role as a responsible hospitality provider, striving to make a positive impact while delivering outstanding guest experiences.
              </p>
            </div>
          </div>

          {/* Decorative Divider */}
          <div className="flex justify-center mb-12">
            <div className="h-1 w-16 bg-[#836666] rounded-full"></div>
          </div>

          {/* Fourth Section with Right Image */}
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="md:w-1/2 order-last md:order-first mb-4 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-semibold text-[#836666] mb-4">Looking to the Future</h2>
              <p className="text-lg text-gray-700 mb-6 text-justify leading-relaxed">
                As we look to the future, we remain committed to innovation and excellence. Our goal is to continue expanding our portfolio while upholding the values that have guided us from the beginning. We invite you to join us on this journey and experience the exceptional hospitality that defines CeylonX Hotels.
              </p>
            </div>
            <div className="md:w-1/2 md:pl-8 transform transition-transform duration-500 hover:scale-105">
              <Image
                src="/img/hotel2.jpeg" // Image path for this section
                alt="Looking to the Future"
                width={800}
                height={450}
                className="rounded-lg shadow-lg border-4 border-[#D6C7B0]"
              />
            </div>
          </div>

          {/* Call-to-Action Button */}
          <div className="flex justify-center mt-8">
            <a
              href="/search"
              className="bg-[#6b4f4f] text-white px-6 py-3 rounded-md hover:bg-[#5a3e3e] transition duration-200 transform hover:scale-105"
            >
              Explore Our Hotels
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default OurStory;
