export type TBookCard = {
  id: number;
  title: string;
  price: number;
  oldPrice?: number;
  author: string;
  rating: number;
  image: string;
  badge?: string | null;
  discount?: string | null;
};
