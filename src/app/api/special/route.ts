import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";  
import { groq } from "next-sanity";

interface Product {
  title: string;
  price: number;
  salePrice: number;
  images: {
    asset: {
      _ref: string;
    };
  };
  slug: string;
  productDetails: string[];
  tags: string[];
  stock: string;
  subCategory: string;
}

export async function GET() {
  try {
    const query = groq`
      *[_type in ["outdoor", "home", "office"] && tags == "special_offer"]{
        title,
        price,
        salePrice,
        images[]{
          asset->{
            _id,
            url
          },
         alt
        },
        slug,
        productDetails,
        tags,
        stock,
        subCategory
      }
    `;
    const products: Product[] = await client.fetch(query);

    return NextResponse.json(
      { products },
      {
        headers: {
          'Cache-Control': 'no-store',
        },
      }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch Featured products." },
      { status: 500 }
    );
  }
}