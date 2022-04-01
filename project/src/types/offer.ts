export type Offer = {
  id: number;
  images: string[];
  price: string;
  rating: number;
  name: string;
  type: string;
  isFavorite: boolean;
  isPremium: boolean;
  place:string;
  lat: number;
  lng: number;
};

export type Offers = Offer[];
