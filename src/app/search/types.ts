export interface Room {
  type: string;
  amenities: string[];
  availability: boolean;
  price: number;
  adultCount: number;
  childCount: number;
}

export interface Hotel {
  id: number;
  name: string;
  description: string;
  rating: number;
  reviews: number;
  image: string;
  deals: string[];
  rooms: Room[];
}
