"use client";

import { Josefin_Sans, Lato } from "next/font/google";
import { useEffect, useState } from "react";
import { ProductType } from "./types";
import { urlFor } from "@/sanity/lib/image";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { LuZoomIn } from "react-icons/lu";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Image from "next/image";
import Link from "next/link";

const lato = Lato({ subsets: ["latin"], weight: ["400"] });
const jsfont = Josefin_Sans({ subsets: ["latin"] });

const Latest = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string>("new_arrival");

  useEffect(() => {
    async function fetchFilteredProducts() {
      console.log(`Fetching products for tag: ${selectedTag}`);
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`/api/latest?tag=${selectedTag}`);
        if (!res.ok) {
          throw new Error(`Failed to fetch data: ${res.statusText}`);
        }

        const data = await res.json();

        console.log("API Response:", data);

        if (!data.products || !Array.isArray(data.products)) {
          throw new Error("Invalid API response: Missing 'products' field");
        }

        setProducts(data.products);
      } catch (err) {
        console.error(err);
        setError("Failed to load products. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    fetchFilteredProducts();
  }, [selectedTag]);

  if (loading) {
    return (
      <div className="px-8 p-12 flex flex-row items-center justify-center relative">
        <div className="flex gap-6">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="h-[370px] w-[350px] flex flex-col bg-white rounded-lg overflow-hidden group relative animate-pulse"
            >
              {/* Product Image Loader */}
              <div className="relative h-[250px] w-full overflow-hidden">
                <div className="bg-gray-200 animate-pulse w-full h-full absolute"></div>
              </div>

              {/* Product Details Loader */}
              <div className="flex justify-between items-center px-3 py-2">
                <div className="bg-gray-200 w-2/3 h-5 rounded animate-pulse"></div>
                <div className="bg-gray-200 w-1/3 h-5 rounded animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const headings = [
    { tag: "new_arrival", label: "New Arrival" },
    { tag: "best_selling", label: "Best Seller" },
    { tag: "featured", label: "Featured" },
    { tag: "special_offer", label: "Special Offer" },
  ];

  // if (loading) {
  //   return <div className="text-center">Loading...</div>;
  // }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className={`${lato.className} bg-white`}>
      <div className="flex flex-col items-center gap-3 py-12">
        {/* Main Heading */}
        <h1
          className={`${jsfont.className} text-[42px] text-center font-bold text-[#151875]`}
        >
          Latest Products
        </h1>
        {/* Sub Headings */}
        <div className="flex md:text-[18px] items-center md:gap-10 gap-3 text-[#151875]">
          {headings.map(({ tag, label }) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2  ${
                selectedTag === tag
                  ? "text-[#FB2E86] underline"
                  : "bg-white text-black"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="xl:px-14 md:px-4 py-12 flex flex-row items-center justify-center relative">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          className="mySwiper"
          breakpoints={{
            1024: {
              slidesPerView: 3, // Large screens: 3 slides
            },
            1023: {
              slidesPerView: 'auto', // Small screens: adjust dynamically
            },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.slug.current}>
              <Link href={`/${product.slug.current}`}>
              <div className="lg:h-[370px] lg:w-[350px] mb-10 md:h-[350px] md:w-[285px] w-[150px] lg:pl-7 flex flex-col  bg-white rounded-lg overflow-hidden group relative">
                {/* Product Image */}
                <div className="relative h-[250px] w-full overflow-hidden">
                  {product.images.length > 0 && (
                    <Image
                      src={urlFor(product.images[0]).url()}
                      alt={product.title}
                      width={300}
                      height={300}
                      className="object-cover w-full h-full absolute"
                    />
                  )}
                  {product.images.length > 1 && (
                    <Image
                      src={urlFor(product.images[1]).url()}
                      alt={product.title}
                      width={300}
                      height={300}
                      className="object-cover opacity-0 group-hover:opacity-100 w-full absolute duration-500 h-full"
                    />
                  )}
                  {product.salePrice && (
                    <span className="absolute top-2 left-2 bg-[#2F1AC4] text-white text-xs font-bold px-2 py-1 rounded-md shadow-md">
                      Sale
                    </span>
                  )}
                  <div className="text-[#2F1AC4] text-sm absolute flex flex-col gap-1 py-3 px-3 bottom-1 opacity-0 group-hover:opacity-100 duration-500">
                    <p className="rounded-full bg-[#f7f7f7] hover:bg-[#efcbcb] duration-300 p-2">
                      <FaRegHeart />
                    </p>
                    <p className="rounded-full bg-[#f7f7f7] hover:bg-[#efcbcb] duration-300 p-2">
                      <LuShoppingCart />
                    </p>
                    <p className="rounded-full bg-[#f7f7f7] hover:bg-[#efcbcb] duration-300 p-2">
                      <LuZoomIn />
                    </p>
                  </div>
                </div>

                {/* Product Details */}
                <div className="flex justify-between items-center px-3 py-2">
                  <h2 className="text-[#151875] text-[16px] font-semibold truncate">
                    {product.title}
                  </h2>
                  <p className="text-[#151875] text-sm font-semibold">
                    {product.salePrice ? (
                      <>
                        <span className="line-through text-gray-500 font-light text-xs">
                          ${product.price.toFixed(2)}
                        </span>{" "}
                        <br />
                        <span>${product.salePrice.toFixed(2)}</span>
                      </>
                    ) : (
                      `$${product.price.toFixed(2)}`
                    )}
                  </p>
                </div>
              </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Latest;
