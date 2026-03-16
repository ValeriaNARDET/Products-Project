export type ProductType = {
  id?: number | string;
  title: string;
  description: string;
  price: number;

  brand?: string;
  category?: string;
  images?: string[];
  discountPercentage?: number;
  minimumOrderQuantity?: number;
  rating?: number;
  shippingInformation?: string;
  stock?: number;
  thumbnail?: string;
}