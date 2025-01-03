export interface ProductType {
  id: string;
  title: string;
  slug: { current: string };
  images:  { asset: { _ref: string; url: string }; alt?: string }[];  
  price: number;
  salePrice: number;
  newArrival: boolean;
  discountPercentage?: number;
  productDetails: string[];
  stock: string;
  subCategory: { current: string };
}
