// /app/api/latest/route.ts
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

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const tag = searchParams.get("tag");

  console.log(`Selected tag: ${tag}`);  // Debug log

  // Check if the tag parameter is valid
  if (!tag || !["new_arrival", "best_selling", "featured", "special_offer"].includes(tag)) {
    return NextResponse.json(
      { error: "Invalid or missing tag parameter." },
      { status: 400 }
    );
  }

  try {
    // Query using the selected tag
    const query = groq`
      *[_type in ["outdoor", "home", "office"] && tags in ["${tag}"]] {
        title,
        price,
        salePrice,
        images[] {
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

    console.log("Fetching products for tag:", tag); // Debug query log

    const products: Product[] = await client.fetch(query);

    if (!products || products.length === 0) {
      console.log(`No products found for the tag: ${tag}`); // Debug log if no products
    }

    return NextResponse.json(
      { products },
      {
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products." },
      { status: 500 }
    );
  }
}
