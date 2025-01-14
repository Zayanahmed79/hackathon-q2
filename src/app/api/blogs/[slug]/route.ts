import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export async function GET(req: Request, { params }: { params: { slug: string } }) {
  const { slug } = params;

  console.log("Received slug:", slug); // Log the received slug

  const query = groq`
    *[_type == "blog" && slug.current == $slug][0] {
      slug,
      title,
      overview,
      content[] {
        ...,
        _type == "image" => {
          asset-> {
            url
          },
          alt
        },
        _type == "blockquote" => {
          quote,
          author
        }
      },
      publishingDate,
      authorName,
      "authorImage": authorImage.asset->url,
      "featuredImage": featuredImage.asset->url,
      tags,
      comments[] {
        name,
        comment,
        "pic": pic.asset->url,
        postedAt
      }
    }
  `;

  try {
    const blog = await client.fetch(query, { slug });
    console.log("Fetched blog data:", blog); // Log the fetched blog data
    if (!blog) {
      return NextResponse.json({ error: "Blog not found." }, { status: 404 });
    }
    return NextResponse.json(blog);
  } catch (error) {
    console.error("Error fetching blog:", error);
    return NextResponse.json({ error: "Failed to fetch blog." }, { status: 500 });
  }
}






