export type Offer = {
  id: number;
  images: string[];
  price: number;
  rating: number;
  name: string;
  type: string;
  isFavorite: boolean;
  isPremium: boolean;
  city:string;
  lat: number;
  lng: number;
};

export type Offers = Offer[];
