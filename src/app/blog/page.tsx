"use client";

import React, { useEffect, useState } from "react";
import { Lato, Josefin_Sans } from "next/font/google";
import Image from "next/image";
import { FaPenNib } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import Link from "next/link";
import { Blogtype } from "@/components/types"; // Assuming you have a `types.ts` file with `Blogtype`.

const lato = Lato({ subsets: ["latin"], weight: ["400"] });
const jsfont = Josefin_Sans({ subsets: ["latin"] });

const BlogsPage = () => {
  const [blogs, setBlogs] = useState<Blogtype[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch blogs from the API
  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch("/api/blogs");
        if (!res.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await res.json();

        if (Array.isArray(data)) {
          setBlogs(data);
        } else if (data?.blogs && Array.isArray(data.blogs)) {
          setBlogs(data.blogs); // In case of nested "blogs" field
        } else {
          throw new Error("Unexpected API response format");
        }
      } catch (error) {
        setError("Failed to load blogs.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  return (
    <div className=" py-10">
      <div className="p-24 pl-36 bg-[#F6F5FF] mb-24">
        <h1
          className={`${jsfont.className} text-[36px] text-[#101750] font-bold  `}
        >
          {" "}
          Blog Page
        </h1>
        <p className={`${lato.className} text-[#101750] font-bold text-[16px]`}>
          Home . Page <span className="text-[#FB2E86]">. Blog Page</span>
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-screen">
          Loading...
        </div>
      ) : error ? (
        <div className="text-red-500 text-center">{error}</div>
      ) : blogs.length > 0 ? (
        <div className="flex flex-col items-center gap-10">
          {blogs.map((blog: Blogtype) => (
            <div
              key={blog.slug}
              className="flex flex-col items-start"
              style={{ width: "870px" }}
            >
              {/* Featured Image */}
              <div className="overflow-hidden h-[455px] w-[870px] ">
                <Image
                  src={blog.featuredImage || "/images/placeholder.png"}
                  alt={blog.title}
                  height={800}
                  width={800}
                  quality={100}
                  className="object-cover h-full w-full rounded-md"
                />
              </div>

              {/* Author & Date */}
              <div className="text-[14px] text-[#151875] flex flex-row items-center gap-6 mt-4">
                <div className="flex flex-row items-center justify-center gap-1 ">
                  <FaPenNib className="text-[#FB2E86] " />
                  <h3 className="flex items-center px-6 bg-[#FFE7F9] rounded-sm">
                    {blog.authorName}
                  </h3>
                </div>

                <div className=" flex flex-row justify-center items-center gap-1 ">
                  <SlCalender className="text-[#FFA454]" />
                  <h3 className="flex items-center bg-[#FFECE2] px-6 gap-1 rounded-sm">
                    {new Date(blog.publishingDate).toLocaleDateString()}
                  </h3>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-[20px] font-bold text-[#151875] mt-4 w-full">
                {blog.title}
              </h1>

              {/* Overview */}
              <p className="text-[16px] text-[#8A8FB9] mt-2 leading-loose">
                {blog.overview}
              </p>

              {/* Read More Button */}
              <Link href={`/blogs/${blog.slug}`}>
                <button className="text-[#151875] font-semibold  mt-4 hover:text-[#FB2E86] duration-300">
                  Read More
                </button>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500">No blogs found.</div>
      )}
      <div className="bg-white flex justify-center items-center py-20">
        <Image
          src={"/images/sub2.png"}
          alt="photo"
          height={93}
          width={904}
          className="bg-white"
        />
      </div>
    </div>
  );
};

export default BlogsPage;
