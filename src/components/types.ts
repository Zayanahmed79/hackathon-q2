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
  slug: { current: string };
  featuredImage: string
  title: string;
  authorName: string;
  publishingDate: string;
  overview: string;
}

export interface Singleblog {
  slug: { current: string };
  title: string;
  overview: string;
  content: Array<RichTextBlock | ImageBlock | BlockquoteBlock>; // Include possible custom blocks
  featuredImage: { asset: { _ref: string; url: string }; alt?: string };
  authorImage: { asset: { _ref: string; url: string }; alt?: string };
  authorName: string;
  publishingDate: string;
  tags?: string[];
  comments?: Comment[];
}

export interface ImageBlock {
  _type: "image";
  asset: { url: string };
  alt?: string;
}

export interface BlockquoteBlock {
  _type: "blockquote";
  quote: string;
  author: string;
}




interface Comment {
  name: string;
  email?: string;
  pic?: {
    asset: {
      url: string;
    };
  };
  comment: string;
  postedAt: string;
}


