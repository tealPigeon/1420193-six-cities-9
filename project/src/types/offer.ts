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
};

export type Offers = Offer[];
