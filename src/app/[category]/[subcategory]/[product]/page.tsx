"use client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Archivo } from "next/font/google";
import { ProductType } from "@/components/types";

const archivo = Archivo({ subsets: ["latin"], weight: ["400"] });

interface ProductPageProps {
  params: {
    category: string;
    subcategory: string;
    product: string;
  };
}


const ProductPage: React.FC<ProductPageProps> = ({ params }) => {
  const { category, subcategory, product } = params;

  const [productDetails, setProductDetails] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const swiperRef = useRef<SwiperRef>(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`/api/${category}/${subcategory}/${product}`);
        const data = await response.json();
  
        if (response.ok && data.product) {
          setProductDetails(data.product);
        } else {
          setError(data.error || "Product not found");
        }
      } catch (error) {
        console.error(error);
        setError("Failed to fetch product details.");
      } finally {
        setLoading(false);
      }
    };
  
    fetchProductDetails();
  }, [category, subcategory, product]);
  
 

  const handleImageSelect = (index: number) => {
    setActiveImageIndex(index);
    swiperRef.current?.swiper?.slideTo(index);
  };

  if (loading) {
    return (
      <div className="h-screen w-full flex justify-center items-center skeleton-loader">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error) return <div>{error}</div>;
  if (!productDetails) return <div>Product not found</div>;

  const {
    title,
    price,
    salePrice,
    images,
    
    stock,
    
  } = productDetails;

  const discountPercentage = salePrice
    ? Math.round(((price - salePrice) / price) * 100)
    : 0;

  const isOutOfStock = stock === "outOfStock";

  return (
    <div className={`${archivo.className} product-page md:p-10 p-4`}>
      <div className="flex md:flex-row flex-col gap-10">
        <div className="md:w-[52%] flex lg:gap-4 gap-2">
          {/* Side Images */}
          <div className="lg:flex hidden flex-col gap-3">
            {images?.map((image, index) => {
              const sideImageUrl = image.asset._ref
                ? urlFor(image.asset._ref).url()
                : image.asset.url || "/placeholder.png";

              return (
                <Image
                  key={index}
                  src={sideImageUrl}
                  alt={image.alt || "Side image"}
                  width={80}
                  height={100}
                  className={`cursor-pointer border ${activeImageIndex === index ? "border-black" : "border-gray-300"}`}
                  onClick={() => handleImageSelect(index)}
                />
              );
            })}
          </div>

          {/* Swiper Slider */}
          <div className="">
            <Swiper
              modules={[Navigation]}
              navigation
              className="xl:w-[550px] md:w-[40vw] w-[91vw] h-[500px] lg:h-[650px] md-[500px]"
              onSlideChange={(swiper) => setActiveImageIndex(swiper.activeIndex)}
              initialSlide={activeImageIndex}
              ref={swiperRef}
            >
              {images?.map((image, index) => {
                const swiperImageUrl = image.asset._ref
                  ? urlFor(image.asset._ref).url()
                  : image.asset.url || "/placeholder.png";

                return (
                  <SwiperSlide key={index}>
                    <Image
                      src={swiperImageUrl}
                      alt={image.alt || "Main image"}
                      width={520}
                      height={650}
                      className="relative xl:w-[550px] md:w-[40vw] w-[91vw] h-[500px] lg:h-[650px] md-[500px] object-top object-cover"
                    />

                    {salePrice && (
                      <span className=" bg-[#E70000] text-white p-4 py-2 text-[14px] rounded-3xl absolute top-4 right-4">
                        {discountPercentage}% off
                      </span>
                    )}
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1 sm:space-y-6 lg:ml-[35px]">
          <h1 className="sm:text-[36px] text-[20px] font-medium mb-2">
            {title}
          </h1>
          <div className="flex items-center gap-4">
            {/* Price Display */}
            <span className="text-[20px] font-medium">
              Rs. {salePrice || price}
            </span>
            {/* Show sale price if available */}
            {salePrice && (
              <span className="line-through text-gray-500">Rs. {price}</span>
            )}
          </div>
        </div>

        <div className="mt-10">
          {isOutOfStock ? (
            <div className="space-y-5">
              <div className="uppercase w-full py-[14px] text-white bg-[#9B9B9B] sm:text-[13px] text-[12px] flex justify-center items-center">
                Sold Out
              </div>
              <div className="mt-2 bg-[#EDEDED] py-[14px] px-5 flex items-center">
                <label
                  htmlFor="outOfStock"
                  className="inline-flex items-center text-[12px] font-medium"
                >
                  <input
                    type="radio"
                    id="outOfStock"
                    name="stockStatus"
                    value="outOfStock"
                    checked
                    disabled
                    className="mr-2 rounded-full w-[17px] h-[17px] appearance-none border-[3px] border-[#BABABA] checked:bg-[#000000]"
                  />
                  Out of stock
                </label>
              </div>
            </div>
          ) : (
            <div className="mt-10 space-y-5">
              <button className="uppercase w-full py-[14px] buttonThree text-white bg-[#111111] sm:text-[13px] text-[12px]">
                add to bag
              </button>

              <div className="mt-2 bg-[#EDEDED] py-[14px] px-5 flex items-center">
                <label
                  htmlFor="outOfStock"
                  className="flex items-center text-[13px] font-medium"
                >
                  <input
                    type="radio"
                    id="outOfStock"
                    name="stockStatus"
                    value="outOfStock"
                    checked
                    disabled
                    className="mr-2 rounded-full w-[16px] h-[16px] appearance-none border-[3px] border-[#F28E8E] checked:bg-[#F62727]"
                  />
                  Only a few left! Ready to ship
                </label>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
