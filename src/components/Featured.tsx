"use client";

import { useEffect, useState } from "react";
import { ProductType } from "./types";
import Image from "next/image";
import { Josefin_Sans, Lato } from "next/font/google";
import { FiShoppingCart } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { GoSearch } from "react-icons/go";
import { urlFor } from "@/sanity/lib/image";  
import Link from "next/link";

const lato = Lato({ subsets: ["latin"], weight: ["400"] });
const jsfont = Josefin_Sans({ subsets: ["latin"] });

const Featured = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
useEffect(() => {
  async function fetchFeaturedProducts() {
    try {
      const res = await fetch("/api/featured");
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();

      // Take only the first 4 products
      setProducts(data.products.slice(0, 4));
    } catch (error) {
      setError("Failed to load products.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  fetchFeaturedProducts();
}, []);


  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }
  if (loading) {
    return (
      <div className="flex flex-wrap justify-center gap-6 py-10">
        {/* 4 Placeholder Cards */}
        {[1, 2, 3, 4].map((_, index) => (
          <div
            key={index}
            className="relative bg-white flex shadow-xl group flex-col justify-between md:w-[270px] md:h-[361px] h-[300px] animate-pulse"
          >
            {/* New Arrival Badge Placeholder */}
            <div className="absolute top-4 right-4 h-[48px] w-[48px] bg-gray-300 rounded-full"></div>
  
            {/* Discount Percentage Placeholder */}
            <div className="absolute top-4 left-4 h-[48px] w-[48px] bg-gray-300 rounded-full"></div>
  
            {/* Product Image Placeholder */}
            <div className="md:w-[270px] h-[246px] overflow-hidden bg-gray-100 relative">
              <div className="w-full h-full">
                {/* First Image Placeholder */}
                <div className="w-full h-full bg-gray-200 animate-pulse rounded"></div>
              </div>
            </div>
  
            {/* Button Placeholder */}
            <div className="flex justify-center absolute bottom-4 left-1/4 opacity-100 duration-200 bg-gray-300 w-[100px] h-[30px] rounded"></div>
  
            {/* Icons Placeholder */}
            <div className="flex justify-center items-center gap-2 absolute top-3 left-3 opacity-100 duration-200">
              <div className="p-2 bg-gray-200 rounded-full w-8 h-8"></div>
              <div className="p-2 bg-gray-200 rounded-full w-8 h-8"></div>
              <div className="p-2 bg-gray-200 rounded-full w-8 h-8"></div>
            </div>
  
            <div className="py-2 text-center flex flex-col justify-center items-center px-4 duration-200 bg-gray-300">
              {/* Product Title Placeholder */}
              <div className="h-6 w-32 bg-gray-200 animate-pulse rounded mx-auto"></div>
  
              {/* Product ID Placeholder */}
              <div className="h-4 w-24 bg-gray-200 animate-pulse rounded mx-auto my-2"></div>
  
              {/* Product Price Placeholder */}
              <div className="flex items-center gap-2 mt-4">
                <div className="h-6 w-16 bg-gray-200 animate-pulse rounded"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  
  
  
  
  
  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }
  

  return (
    
    <div className={`${lato.className} bg-[#ffffff] py-10`}>
      <h1
        className={`${jsfont} text-[42px] text-center font-bold py-12 text-[#151875]`}
      >
        Featured Products
      </h1>
      <div className="flex flex-row  justify-center gap-6">

    
        
        {products.map((product, id) => {
          const discountPercentage = product.discountPercentage
            ? product.discountPercentage
            : 0;
          return (
            <Link 
              key={id} 
              href={`/${product.slug.current}`}>
            <div
              key={id}
              className="relative bg-white flex shadow-xl group flex-col justify-between md:w-[270px] md:h-[361px] h-[300px]"
            >
              {/* New Arrival Badge */}
              {product.newArrival && (
                <div className="absolute top-4 right-4 h-[48px] w-[48px] bg-[#2EC1AC] flex justify-center items-center text-white text-[16px] font-medium px-2 py-1 rounded-full">
                  New
                </div>
              )}

              {/* Discount Percentage */}
              {discountPercentage > 0 && (
                <div className="absolute top-4 left-4 h-[48px] w-[48px] bg-[#E97171] flex justify-center items-center text-white text-[16px] font-medium px-2 py-1 rounded-full">
                  -{discountPercentage}%
                </div>
              )}

              {/* Product Image */}
              <div className="md:w-[270px] h-[246px] overflow-hidden bg-[#f6f7fb] relative">
                <div className="w-full h-full">
                  {/* First Image (Visible by Default) */}
                  {product.images.length > 0 && (
                    <Image
                      src={urlFor(product.images[0]).url()}
                      alt={product.title}
                      width={300}
                      height={300}
                      className="object-cover absolute top-0 left-0 transition-opacity duration-300 w-full h-full"
                    />
                  )}

                  {/* Second Image (Visible on Hover) */}
                  {product.images.length > 1 && (
                    <Image
                      src={urlFor(product.images[1]).url()}
                      alt={`${product.title} - Hover Image`}
                      width={300}
                      height={300}
                      className="object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full h-full"
                    />
                
                  )}
                </div>

                <div className="flex justify-center absolute bottom-4 left-1/4 opacity-0 group-hover:opacity-100 duration-200">
                  <h1 className="bg-[#08d15f] text-white py-2 px-4 w-fit">
                    View Details
                  </h1>
                </div>
                <div className="flex justify-center items-center gap-2 absolute top-3 left-3 opacity-0 group-hover:opacity-100 duration-200">
                  <span className="p-2 bg-[#eeeffb] rounded-full text-black text-[16px]">
                    <FiShoppingCart />
                  </span>
                  <span className="p-2 bg-[#eeeffb] rounded-full text-black text-[16px]">
                    <CiHeart />
                  </span>
                  <span className="p-2 bg-[#eeeffb] rounded-full text-black text-[16px]">
                    <GoSearch />
                  </span>
                </div>
              </div>

              <div className="py-2 text-center flex flex-col justify-center items-center px-4 duration-200 group-hover:bg-[#2f1ac4] text-white">
                {/* Product Title */}
                <h1 className="text-[#fb2e86] group-hover:text-white font-bold text-[18px]">
                  {product.title}
                </h1>

                <h1 className="text-[24px] font-extrabold group-hover:text-white text-gray-400">
                  _ _ _
                </h1>

                {/* Product ID */}
                <h1
                  className={`${jsfont} text-[#151875] group-hover:text-white text-[16px]`}
                >
                  {product.id}
                </h1>

                {/* Product Price */}
                <div className="flex items-center gap-2 mt-4">
                  <span className="text-[#151875] group-hover:text-white text-[16px]">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Featured;
