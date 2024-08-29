// import React from 'react';

// const OurStory: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 text-justify">
            
//       <main className="py-12">
//         <section className="max-w-4xl mx-auto px-4">
//           <h1 className="text-4xl font-bold text-gray-800 mb-8">Our Story</h1>
          
//           <p className="text-s text-gray-600 mb-6">
//             At CeylonX Hotels, our journey began with a vision to redefine luxury and hospitality in Sri Lanka. Established over two decades ago, we embarked on a mission to create a chain of hotels that offer unparalleled comfort and a genuine sense of Sri Lankan warmth. Our founder, inspired by the island's rich heritage and stunning landscapes, envisioned a brand that combines elegance with local charm.
//           </p>
          
//           <p className="text-s text-gray-600 mb-6">
//             From our first boutique hotel nestled in the hills of Kandy, we have expanded our reach across the island, offering guests a unique experience at each location. Our hotels are thoughtfully designed to reflect the diverse beauty of Sri Lanka, from serene coastal retreats to vibrant city escapes. Each property is a testament to our commitment to providing exceptional service and creating memorable experiences for our guests.
//           </p>
          
//           <p className="text-s text-gray-600 mb-6">
//             Over the years, we have embraced sustainable practices and community engagement as core principles of our operations. Our dedication to preserving the natural beauty of Sri Lanka and supporting local communities is reflected in every aspect of our business. We take pride in our role as a responsible hospitality provider, striving to make a positive impact while delivering outstanding guest experiences.
//           </p>
          
//           <p className="text-s text-gray-600 mb-6">
//             As we look to the future, we remain committed to innovation and excellence. Our goal is to continue expanding our portfolio while upholding the values that have guided us from the beginning. We invite you to join us on this journey and experience the exceptional hospitality that defines CeylonX Hotels.
//           </p>
          
//           <p className="text-s text-gray-600">
//             Thank you for being part of our story. We look forward to welcoming you to our hotels and sharing the unique charm of Sri Lanka with you.
//           </p>
//         </section>
//       </main>
            
//     </div>
//   );
// };

// export default OurStory;

import React from 'react';
import Image from 'next/image';

const OurStory: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section with Background Image */}
      <header className="relative h-96">
        <Image
          src="/img/OceanView.jpg" // Path to the header background image
          alt="CeylonX Hotels Journey"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#D6C7B0] to-[#A8997E] opacity-75"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-4">Our Story</h1>
          <p className="text-lg max-w-2xl text-center">
            Discover the journey of CeylonX Hotels and our commitment to redefining luxury and hospitality in Sri Lanka.
          </p>
        </div>
      </header>

      <main className="py-12">
        <section className="max-w-6xl mx-auto px-4">
          {/* First Section with Left Image */}
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="md:w-1/2 mb-4 md:mb-0 md:pr-4">
              <Image
                src="/images/our-journey.jpg" // Image path for this section
                alt="Our Journey"
                width={800}
                height={450}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 text-justify">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">The Beginning of Our Journey</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At CeylonX Hotels, our journey began with a vision to redefine luxury and hospitality in Sri Lanka. Established over two decades ago, we embarked on a mission to create a chain of hotels that offer unparalleled comfort and a genuine sense of Sri Lankan warmth. Our founder, inspired by the island's rich heritage and stunning landscapes, envisioned a brand that combines elegance with local charm.
              </p>
            </div>
          </div>

          {/* Second Section with Right Image */}
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="md:w-1/2 order-last md:order-first mb-4 md:mb-0 md:pr-4">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Expansion Across the Island</h2>
              <p className="text-lg text-gray-600 mb-6 text-justify leading-relaxed">
                From our first boutique hotel nestled in the hills of Kandy, we have expanded our reach across the island, offering guests a unique experience at each location. Our hotels are thoughtfully designed to reflect the diverse beauty of Sri Lanka, from serene coastal retreats to vibrant city escapes. Each property is a testament to our commitment to providing exceptional service and creating memorable experiences for our guests.
              </p>
            </div>
            <div className="md:w-1/2 md:pl-4">
              <Image
                src="/images/expansion.jpg" // Image path for this section
                alt="Expansion Across the Island"
                width={800}
                height={450}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Third Section with Left Image */}
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="md:w-1/2 mb-4 md:mb-0 md:pr-4">
              <Image
                src="/images/sustainability.jpg" // Image path for this section
                alt="Sustainability and Community"
                width={800}
                height={450}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 text-justify">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Commitment to Sustainability</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Over the years, we have embraced sustainable practices and community engagement as core principles of our operations. Our dedication to preserving the natural beauty of Sri Lanka and supporting local communities is reflected in every aspect of our business. We take pride in our role as a responsible hospitality provider, striving to make a positive impact while delivering outstanding guest experiences.
              </p>
            </div>
          </div>

          {/* Fourth Section with Right Image */}
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="md:w-1/2 order-last md:order-first mb-4 md:mb-0 md:pr-4">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Looking to the Future</h2>
              <p className="text-lg text-gray-600 mb-6 text-justify leading-relaxed">
                As we look to the future, we remain committed to innovation and excellence. Our goal is to continue expanding our portfolio while upholding the values that have guided us from the beginning. We invite you to join us on this journey and experience the exceptional hospitality that defines CeylonX Hotels.
              </p>
            </div>
            <div className="md:w-1/2 md:pl-4">
              <Image
                src="/images/future.jpg" // Image path for this section
                alt="Looking to the Future"
                width={800}
                height={450}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Call-to-Action Button */}
          <div className="flex justify-center mt-8">
            <a
              href="/explore-hotels"
              className="bg-[#6b4f4f] text-white px-6 py-3 rounded-md hover:bg-[#5a3e3e] transition duration-200"
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
