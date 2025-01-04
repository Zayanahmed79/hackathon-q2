import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { product: string } }) {
  const { product: slug } = params;

  console.log("Slug received:", slug);

  if (!slug) {
    return NextResponse.json({ error: "Invalid or missing slug parameter" }, { status: 400 });
  }

  const query = groq`*[_type in ["home", "outdoor", "office"] && slug.current == $slug][0]{
        title,
        price,
        salePrice,
        overview,
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
  }`;

  try {
    const product = await client.fetch(query, { slug });

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json({ product }, { status: 200 });
  } catch (error) {
    console.error("Error fetching product data:", error);
    return NextResponse.json({ error: "Failed to fetch product data" }, { status: 500 });
  }
}
