const testHotel = {
  name: "Hotel Norrebro",
  overview: {
    description:
      "Hotel Norrebro is a modern, chic hotel located in the vibrant district of Norrebro. It offers a blend of Scandinavian design and modern amenities, making it the perfect choice for both business and leisure travelers.",
    features: [
      { label: "Free Wi-Fi", icon: "https://placehold.co/24x24/wifi" },
      { label: "24/7 Reception", icon: "https://placehold.co/24x24/reception" },
      { label: "Fitness Center", icon: "https://placehold.co/24x24/fitness" },
      { label: "Bar & Lounge", icon: "https://placehold.co/24x24/bar" },
      {
        label: "Conference Room",
        icon: "https://placehold.co/24x24/conference",
      },
    ],
  },
  rooms: [
    {
      type: "Deluxe Double Room",
      description:
        "A spacious room featuring a king-size bed, modern bathroom, and city views.",
      price: "LKR 50,912 per night",
      discount: "20% off",
      includes: "Good breakfast included",
    },
    {
      type: "Superior Double Room",
      description:
        "A stylish room with a queen-size bed, a well-appointed bathroom, and complimentary breakfast.",
      price: "LKR 53,591 per night",
      discount: "15% off",
      includes: "Parking + High-speed internet",
    },
    {
      type: "Junior Suite",
      description:
        "A luxurious suite offering a separate living area, king-size bed, and panoramic city views.",
      price: "LKR 70,000 per night",
      discount: "10% off",
      includes: "Complimentary dinner",
    },
  ],
  amenities: [
    { label: "Free Parking", icon: "https://placehold.co/24x24/parking" },
    { label: "Swimming Pool", icon: "https://placehold.co/24x24/pool" },
    { label: "Spa & Wellness", icon: "https://placehold.co/24x24/spa" },
    { label: "Room Service", icon: "https://placehold.co/24x24/roomservice" },
    { label: "Pet-Friendly", icon: "https://placehold.co/24x24/pet" },
  ],
  policies: [
    "Check-in: 3:00 PM",
    "Check-out: 11:00 AM",
    "Cancellation policy: Free cancellation up to 48 hours before check-in.",
    "Children of all ages are welcome.",
    "Pets are allowed on request. Charges may apply.",
  ],
  details: {
    address: "12 Norrebro St, Copenhagen, Denmark",
    phone: "+45 1234 5678",
    website: "https://www.hotelnorrebro.com",
  },
  images: ["/img/OceanView.jpg", "/img/city hotel.jpg", "/img/mountain.jpg"],
};

export { testHotel };
