"use client";

interface RoomType {
  type: string;
  count: number;
  pricePerNight: string;
}

interface ReservationDetails {
  hotelName: string;
  location: string;
  rating: string;
  description: string;
  reservedRooms: RoomType[];
  totalCost: string;
}

const StepOne = ({
  reservation,
}: {
  reservation: ReservationDetails | null;
}) => {
  const testReservation: ReservationDetails = {
    hotelName: "Grand Palace Hotel",
    location: "4567 Royal Avenue, Luxury City",
    rating: "5/5",
    description: "An upscale hotel offering top-notch services and amenities.",
    reservedRooms: [
      { type: "Deluxe Suite", count: 2, pricePerNight: "$150.00" },
      { type: "Standard Room", count: 1, pricePerNight: "$100.00" },
    ],
    totalCost: "$400.00",
  };

  const reservationDetails = reservation || testReservation;

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Step 1: Reservation Details</h2>
      {reservation ? (
        <div>
          <p className="text-md font-semibold">
            Hotel: {reservationDetails.hotelName}
          </p>
          <p className="text-md">Location: {reservationDetails.location}</p>
          <p className="text-md">Rating: {reservationDetails.rating}</p>
          <p className="text-md">
            Description: {reservationDetails.description}
          </p>
          <h3 className="text-md font-semibold mt-4">Reserved Rooms:</h3>
          {reservationDetails.reservedRooms.map((room, index) => (
            <div key={index} className="mb-2">
              <p className="text-md">Room Type: {room.type}</p>
              <p className="text-md">Count: {room.count}</p>
              <p className="text-md">Price per Night: {room.pricePerNight}</p>
            </div>
          ))}
          <p className="text-md mt-4 font-semibold">
            Total Cost: {reservationDetails.totalCost}
          </p>
        </div>
      ) : (
        <p>Please select a hotel and make a reservation to see the details.</p>
      )}
    </div>
  );
};

export default StepOne;
