interface RichTextBlock {
  _key: string;
  _type: string;
  children: Array<{ _key: string; _type: string; text: string }>;
}

export interface ProductType {
  id: string;
  title: string;
  slug: { current: string };
  images:  { asset: { _ref: string; url: string }; alt?: string }[];  
  price: number;
  salePrice: number;
  overview: string;
  newArrival: boolean;
  discountPercentage?: number;
  productDetails: Array<RichTextBlock>;
  stock: string;
  subCategory: { current: string };
  tags: string[]
}


export interface Blogtype{
  slug: string;
  featuredImage: string;
  title: string;
  authorName: string;
  publishingDate: string;
  overview: string;
}



