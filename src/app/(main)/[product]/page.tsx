"use client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { PortableText } from "@portabletext/react";

import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import { ProductType } from "@/components/types";
import { Josefin_Sans, Lato } from "next/font/google";

import ShareButton from "@/components/share";
import { FaRegHeart } from "react-icons/fa6";

const jsfont = Josefin_Sans({ subsets: ["latin"] });
const lato = Lato({ subsets: ["latin"], weight: ["400"] });

interface ProductPageProps {
  params: {
    product: string;
  };
}

// interface SideImage {
//   asset: {
//     _ref: string;
//     url: string;
//   };
//   alt?: string;
// }

// interface RichTextBlock {
//   _key: string;
//   _type: string;
//   children: Array<{ _key: string; _type: string; text: string }>;
// }

const ProductPage: React.FC<ProductPageProps> = ({ params }) => {
  const { product } = params;

  const [productDetails, setProductDetails] = useState<ProductType | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  // const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const swiperRef = useRef<SwiperRef>(null);

  const tags = Array.isArray(productDetails?.tags) ? productDetails.tags : [];

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`/api/${product}`);
        const data = await response.json();

        if (response.ok) {
          setProductDetails(data.product);
        } else {
          setError(data.error || "Product not found");
        }
      } catch (error) {
        console.log(error);
        setError("Failed to fetch product details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [product]);

  const handleImageSelect = (index: number) => {
    setActiveImageIndex(index);
    swiperRef.current?.swiper?.slideTo(index);
  };

  // Early return for loading or error states
  if (loading)
    return (
      <div className="h-screen w-full flex justify-center items-center skeleton-loader">
        <Image
          src={"/images/logo.png"}
          alt="logo"
          width={150}
          height={150}
          className="md:w-[250px] w-[100px] pt-10"
        />
      </div>
    );
  if (error) return <div>{error}</div>;
  if (!productDetails) return <div>Product not found</div>;

  const { title, price, salePrice, images, stock, subCategory } =
    productDetails;

  const discountPercentage = salePrice
    ? Math.round(((price - salePrice) / price) * 100)
    : 0;

  return (
    <div>
      {/* Top heaing */}
      <div className="md:p-24 p-4 md:pl-36 bg-[#F6F5FF]">
        <h1
          className={`${jsfont.className} sm:text-[36px] text-[18px] text-[#101750] font-bold  `}
        >
          {" "}
          Product Details
        </h1>
        <p className={`${lato.className} text-[#101750] font-bold sm:text-[16px] text-[14px]`}>
          Home . Page <span className="text-[#FB2E86]">.{title}</span>
        </p>
      </div>

      <div className="flex md:flex-row flex-col lg:m-20 m-5 p-3 gap-5 boxx">
        <div className="flex-1  flex md:flex-row flex-col-reverse lg:gap-4 gap-2">
          {/* Side Images */}
          <div className="flex md:flex-col flex-row gap-3">
            {images?.map((image, index) => {
              const sideImageUrl = image.asset._ref
                ? urlFor(image.asset._ref).url()
                : image.asset.url || "/placeholder.png";

              return (
                <Image
                  key={index}
                  src={sideImageUrl}
                  alt={image.alt || "Side image"}
                  width={150}
                  height={100}
                  className={`cursor-pointer border rounded-lg md:w-[150px] w-[60px] ${activeImageIndex === index ? "border-black" : "border-gray-300"}`}
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
              className="xl:w-[380px] md:w-[30vw] w-[101.4%] md:h-[50vw] h-[500px] lg:h-[480px] rounded-lg"
              onSlideChange={(swiper) =>
                setActiveImageIndex(swiper.activeIndex)
              }
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
                      className="relative xl:w-[380px] md:w-[30vw] w-[100%] md:h-[50vw] h-[500px] lg:h-[480px]  object-top object-cover"
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
        <div className="flex-1 sm:space-y-6 md:p-10 p-3">
          <h1 className="sm:text-[36px] text-[20px] text-[#0D134E] font-medium mb-2">
            {title}
          </h1>
          <div className="flex items-center gap-4">
            {/* Price Display */}
            <span className="text-[20px] font-medium">
              Rs. {salePrice || price}
            </span>
            {/* Show sale price if available */}
            {salePrice && (
              <>
                <span className="line-through text-red-500">Rs. {price}</span>
              </>
            )}
          </div>

          <div>
            <div className="rich-text text-[#A9ACC6]">
              {productDetails.overview}
            </div>
          </div>

          <div className="mt-10">
            {stock === "outofstock" ? (
              <div className="space-y-5">
                <div className="uppercase w-full py-[14px] text-white bg-[#9B9B9B] sm:text-[13px] text-[12px] flex justify-center items-center">
                  Sold Out
                </div>
              </div>
            ) : (
              <div className="mt-10  flex items-center justify-center gap-2 ">
                <button
                  className={`${jsfont.className} font-semibold text-[#151875]`}
                >
                  Add To Cart
                </button>
                <p>
                  <FaRegHeart className="" />
                </p>
              </div>
            )}
          </div>
          <div className="sm:mt-10 mt-4 flex flex-col gap-4">
            {/* category */}
            <div className="flex items-center gap-2">
              <h1
                className={`${jsfont.className} text-[#151875] font-semibold`}
              >
                Category
              </h1>
              <div>{subCategory.current}</div>
            </div>
            {/* tags */}
            <div className="flex items-center gap-2">
              <div
                className={`${jsfont.className} text-[#151875] font-semibold`}
              >
                Tags
              </div>
              <div className="tags">
                {tags.length > 0 && (
                  <ul>
                    {tags.map((tag, index) => (
                      <li key={index} className="tag">
                        {tag.replace("_", " ").toUpperCase()}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            {/* share */}
            <div className="flex items-center gap-2">
              <h1
                className={`${jsfont.className} text-[#151875] font-semibold`}
              >
                Share
              </h1>
              <ShareButton />
            </div>
          </div>
        </div>
      </div>
      {/* Description */}
      <div className="md:px-28 px-5 py-10 bg-[#F6F5FF]">
        <h1
          className={`${jsfont.className} text-[#151875] underline font-semibold pb-6`}
        >
          Description
        </h1>
        <div className="rich-text text-[#A9ACC6]">
          <PortableText value={productDetails.productDetails} />
        </div>
      </div>
      {/* Image */}
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

export default ProductPage;
