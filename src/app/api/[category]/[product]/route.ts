import { NextResponse } from "next/server";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

interface Product {
  id: string;
  title: string;
  slug: { current: string };
  images: { asset: { _ref: string; url: string }; alt?: string }[];
  price: number;
  salePrice: number;
  newArrival: boolean;
  discountPercentage?: number;
  productDetails: string[];
  stock: string;
  subCategory: { current: string };
}

export async function GET(
  req: Request,
  { params }: { params: { category: string; product: string } }
) {
  try {
    const { category, product: productSlug } = params;

    // Debugging: log the category and product slug
    console.log(`Fetching product for category: ${category} and slug: ${productSlug}`);

    // Use placeholders for variables in the Groq query
    const query = groq`
      *[_type == ${category} && subCategory.current  && slug.current == $productSlug][0]{
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

    // Fetch the product data from Sanity
    const fetchedProduct: Product = await client.fetch(query, {
      category,
      productSlug,
    });

    // Debugging: log the fetched product data
    console.log("Fetched product data:", fetchedProduct);

    if (!fetchedProduct) {
      console.error("Product not found");
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ product: fetchedProduct });
  } catch (error) {
    console.error("Error fetching product:", error);
    return NextResponse.json(
      { error: "Failed to fetch product details." },
      { status: 500 }
    );
  }
}
