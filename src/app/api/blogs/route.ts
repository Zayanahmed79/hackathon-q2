import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";  
import { groq } from "next-sanity";

interface Blog {
  title: string;
  overview: string;
  slug: string;
  authorName: string;
  publishingDate: string;
  featuredImage: {
    asset: {
      url: string;
    };
  };
  tags: string[];
}

export async function GET() {
  try {
    const query = groq`
      *[_type == "blog"] | order(publishingDate desc) {
        title,
        overview,
        "slug": slug.current,
        authorName,
        publishingDate,
        "featuredImage": featuredImage.asset->url,
        tags
      }
    `;

    const blogs: Blog[] = await client.fetch(query);

    return NextResponse.json(
      { blogs },
      {
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch blogs." },
      { status: 500 }
    );
  }
}
