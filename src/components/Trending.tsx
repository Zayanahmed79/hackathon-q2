"use client";
import { Lato, Josefin_Sans } from "next/font/google";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { ProductType } from "./types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import Link from "next/link";



const lato = Lato({ subsets: ["latin"], weight: ["400"] });
const jsfont = Josefin_Sans({ subsets: ["latin"] });

const Trending = () => {
  const [specialProducts, setSpecialProducts] = useState<ProductType[]>([]); // Special products for the top section
  const [chairProducts, setChairProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fetch products
    const fetchChairProducts = async () => {
      try {
        const res = await fetch("/api/chairs");
        const data = await res.json();
        setChairProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchChairProducts();

    // Auto-scroll logic
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
        // Reset scroll when reaching the end
        if (
          sliderRef.current.scrollLeft + sliderRef.current.offsetWidth >=
          sliderRef.current.scrollWidth
        ) {
          sliderRef.current.scrollLeft = 0;
        }
      }
    }, 2000); // Change slides every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Fetch products from the API
    const fetchSpecialProducts = async () => {
      try {
        const res = await fetch("/api/special"); // Replace with your actual API route
        const data = await res.json();
        setSpecialProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSpecialProducts();
  }, []);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  return (
    <div className="bg-white gap-4">
      <h1
        className={`${jsfont.className} flex justify-center text-center text-[44px] text-[#151875] font-bold py-12`}
      >
        Special Offers
      </h1>
      {/* Upper Four Dynamically rendered pictures  */}
      <div className="md:flex flex-row gap-4 justify-center grid grid-cols-2 px-2">
         
        {specialProducts.slice(1, 5).map((product) => (
         
          <Link
            href={`/${product.slug.current}`}
          key={product.slug.current}
            >  
            <div
              
              className="lg:p-3   bg-white shadow-xl group md:w-[22vw] md:h-[25vw] sm:h-[350px] h-[250px] object-cover "
            >
              <div className="w-full sm:h-[250px] h-[200px] md:h-[18vw] flex justify-center items-center overflow-hidden">
                <Image
                  src={product.images[0]?.asset.url}
                  alt={product.images[0]?.alt || product.title}
                  width={300}
                  height={300}
                  className="object-cover h-full w-full mb-4  group-hover:scale-110 duration-500"
                />
              </div>
              <h3 className="font-semibold lg:text-lg sm:text-[16px] text-[14px] text-[#151875] text-center line-clamp-1 sm:px-[2px]">
                {product.title}
              </h3>
              <p
                className={`${jsfont.className} text-[#151875] text-[14px] text-center`}
              >
                {product.salePrice
                  ? `$${product.salePrice.toFixed(2)}`
                  : `$${product.price.toFixed(2)}`}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Lower part */}
      <div className="bg-white flex sm:flex-row flex-col gap-4 py-10 items-center md:items-start justify-center">
        <div className="flex flex-col lg:flex-row gap-4 item-center ">
          <div className="h-[270px] w-[380px] md:w-[44vw] sm:[46vw] bg-[#FFF6FB] hover:bg-[#EEEFFB] p-8 lg:w-[34vw]">
            <h2 className={`${jsfont.className} text-[#151875] text-[26px] `}>
              23% off in all products
            </h2>
            <p
              className={`${lato.className} text-[16px] text-[#FB2E86] font-semibold underline `}
            >
              Shop Now
            </p>
            <div className="w-40 h-40 flex justify-end float-end">
              <Image src="/images/t5.png" alt="photo" width={190} height={40} />
            </div>
          </div>
          <div className="h-[270px] w-[380px] md:w-[44vw] sm:[46vw] bg-[#FFF6FB] hover:bg-[#EEEFFB] p-8 lg:w-[34vw]">
            <h2 className={`${jsfont.className} text-[#151875] text-[26px] `}>
              23% off in all products
            </h2>
            <p
              className={`${lato.className} text-[16px] text-[#FB2E86] font-semibold underline  `}
            >
              View Collection
            </p>
            <div className="w-70 h-40 flex  justify-end">
              <Image src="/images/t6.png" alt="photo" width={270} height={40} />
            </div>
          </div>
        </div>
        {/* Three side pictures rendered dynamically */}
        <div className="overflow-hidden">
          {/* Slider container */}
          <div
            ref={sliderRef}
            className="flex flex-col lg:gap-4 overflow scroll-smooth lg:h-[275px] h-[550px]"
          >
            <Swiper
              direction="vertical"
              spaceBetween={5}
              loop={true}
              slidesPerView={3} // Shows 3 slides at a time
              centeredSlides={true} // Centers the slides
              speed={6000} // Duration for a full transition (smooth scrolling effect)
              allowTouchMove={true} // Disables manual user interaction
              autoplay={{
                delay: 20, // No delay between slides
                disableOnInteraction: false, // Continues scrolling even after interaction
                pauseOnMouseEnter: false, // Prevents pausing on hover
              }}
              modules={[Autoplay]}
              className="h-full"
            >
              {chairProducts.map((product) => (
                <SwiperSlide key={product.slug.current} className="">
                  <Link href={`/${product.slug.current}`}>
                  <div className="flex items-start gap-2 ">
                    <div className="lg:w-[100px] md:w-[200px] md:h-[140px] lg:h-[80px] sm:h-[100px] sm:w-[130px] ]">
                      <Image
                        width={100}
                        height={100}
                        src={product.images[0]?.asset.url}
                        alt={product.images[0]?.alt || product.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Product Info (Title and Description on the Right) */}
                    <div className="flex flex-col">
                      <h3
                        className="lg:text-[16px] md:text-[20px] text-[#151875] font-semibold truncate max-w-[150px] overflow-hidden text-ellipsis"
                        title={product.title} // Tooltip to show the full title on hover
                      >
                        {product.title}
                      </h3>
                      <p className="text-[#151875] line-through">
                        ${product.salePrice || product.price}
                      </p>
                    </div>
                  </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
