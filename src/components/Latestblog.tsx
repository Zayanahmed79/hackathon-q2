"use client";

import React, { useEffect, useState } from "react";
import { Lato, Josefin_Sans } from "next/font/google";
import Image from "next/image";
import { FaPenNib } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { Blogtype } from "./types";
import Link from "next/link";

const lato = Lato({ subsets: ["latin"], weight: ["400"] });
const jsfont = Josefin_Sans({ subsets: ["latin"] });

const Latestblog = () => {
  const [blogs, setBlogs] = useState<Blogtype[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBlogshere() {
      try {
        const res = await fetch("/api/blogs");
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setBlogs(data.blogs); // Assuming your API returns { blogs: Blogtype[] }
      } catch (err) {
        setError("Failed to load blogs.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogshere();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-[20px] text-[#151875]">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-[20px] text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-white pb-24">
      <div>
        <h1
          className={`${jsfont.className} flex justify-center text-center text-[44px] text-[#151875] font-bold p-20`}
        >
          Latest Blog
        </h1>
      </div>
      {/* Cards */}
      <div className="flex md:flex-row flex-col gap-10 justify-center items-center">
        {blogs.map((blog: Blogtype) => (
          <div
            key={blog.slug.current}
            className="w-[370px] h-[493px] rounded-md shadow-xl group"
          >
            {/* Featured Image */}
            <div className="overflow-hidden  h-[255px] w-[370px] rounded-md object-cover ">
              <Image
                src={blog.featuredImage || "/images/placeholder.png"}
                alt={blog.title}
                height={400}
                width={400}
                className="group-hover:scale-105 duration-500 h-full w-full object-cover "
              />
            </div>

            {/* Author & Date */}
            <div className={`${jsfont.className} text-[14px] text-[#151875] flex flex-row gap-8 pt-2 p-3`}>
              <h3 className="flex flex-row items-center justify-center gap-1">
                <FaPenNib className="text-[#FB2E86]" /> {blog.authorName}
              </h3>
              <h3 className="flex flex-row items-center gap-1">
                <SlCalender className="text-[#FFA454]" />
                {new Date(blog.publishingDate).toLocaleDateString()}
              </h3>
            </div>

            {/* Title */}
            <h1 className="text-[16px] font-bold text-[#151875] pt-2 p-3 group-hover:text-[#FB2E86] duration-300">
              {blog.title}
            </h1>

            {/* Overview */}
            <p className={`${lato.className} text-[16px] text-[#72718F] p-3 pt-2 leading-relaxed`}>
              {blog.overview.length > 100
                ? `${blog.overview.substring(0, 90)}...`
                : blog.overview}
            </p>

            {/* Read More Button */}
            <Link

             href={`/blogs/${blog.slug}`}
             >
            <button className="text-[#151875] underline underline-offset-4 pt-2 p-4 group-hover:text-[#FB2E86] duration-300">
              Read More
            </button>


            </Link>

            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Latestblog;
