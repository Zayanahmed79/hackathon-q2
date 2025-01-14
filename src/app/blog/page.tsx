"use client";

import { useEffect, useState, useRef } from "react";
import { Lato, Josefin_Sans } from "next/font/google";
import Image from "next/image";
import { FaPenNib } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import Link from "next/link";
import { Blogtype } from "@/components/types";

import { ProductType, } from "@/components/types";

import { CiSearch } from "react-icons/ci";
import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const lato = Lato({ subsets: ["latin"], weight: ["400"] });
const jsfont = Josefin_Sans({ subsets: ["latin"] });

const BlogsPage = () => {
  const [blogs, setBlogs] = useState<Blogtype[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [featuredProducts, setfeaturedProducts] = useState<ProductType[]>([]);
  const [sellProducts, setsellProducts] = useState<ProductType[]>([]);
  const [specialproduct, setspecialproducts] = useState<ProductType[]>([]);
  const sliderRef = useRef<HTMLDivElement>(null);




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
          setBlogs(data.blogs);
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

  useEffect(() => {
    const fetchsfeaturedProducts = async () => {
      try {
        const res = await fetch("/api/featured");
        const data = await res.json();
        setfeaturedProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchsfeaturedProducts();

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
    const specialproducts = async () => {
      try {
        const response = await fetch("/api/special");
        const data = await response.json();
        setspecialproducts(data.products.slice(0, 4));
      } catch (error) {
        console.error("Failed to fetch special offers:", error);
      }
    };
    specialproducts();
  }, []);

  useEffect(() => {
    const fetchsellProducts = async () => {
      try {
        const res = await fetch("/api/bestseller");
        const data = await res.json();
        setsellProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchsellProducts();

    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
        if (
          sliderRef.current.scrollLeft + sliderRef.current.offsetWidth >=
          sliderRef.current.scrollWidth
        ) {
          sliderRef.current.scrollLeft = 0;
        }
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" py-10">
      <div className="sm:p-24 sm:pl-36 p-4 bg-[#F6F5FF] mb-24">
        <h1
          className={`${jsfont.className} sm:text-[36px] test-[18px] text-[#101750] font-bold`}
        >
          {" "}
          Blog Page
        </h1>
        <p
          className={`${lato.className} text-[#101750] font-bold sm:text-[16px] text-[12px]`}
        >
          Home . Page <span className="text-[#FB2E86]">. Blog Page</span>
        </p>
      </div>

      <div className="flex md:flex-row flex-col lg:mx-32 md:mx-[7vw] mx-5 sm:gap-16">
        {/* left sided div */}
        <div>
          {loading ? (
            <div className="flex justify-center items-center h-screen">
              Loading...
            </div>
          ) : error ? (
            <div className="text-red-500 text-center">{error}</div>
          ) : blogs.length > 0 ? (
            <div className="flex flex-col items-center gap-10">
              {blogs.map((blog: Blogtype) => (
                <div key={blog.slug.current} className="flex flex-col items-start">
                  <div className="overflow-hidden h-[200px] w-full sm:h-[400px]">
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
                  <Link href={`/blog/${blog.slug}`}>
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
          
        </div>
        {/* right sided div */}
        <div className="mb-16">
          {/* Search */}
          <div>
            <h1
              className={`${jsfont.className} text-[#151875] text-[22px] font-semibold pb-2`}
            >
              Search
            </h1>
            <div className="md:flex flex justify-start border border-[#BDBDD8] rounded-sm w-fit">
              <input
                type="text"
                className="h-[10px] text-[#151875] opacity-10 py-5 px-3"
                placeholder="Search For Posts"
              />
              <button className="bg-white flex justify-center items-center text-[26px] rounded-sm text-[#CBCBE0] font-semibold p-1 pr-2">
                <CiSearch />
              </button>
            </div>
          </div>
          {/* Categories */}
          <div className="mt-6">
            <h1
              className={`${jsfont.className} text-[#151875] text-[22px] font-semibold`}
            >
              Categories
            </h1>
            <div className="flex flex-col text-[#3F509E] pt-3">
              <div className="flex">
                <Link href="/">
                  <h1 className="hover:bg-[#F939BF] bg-white hover:text-white flex items-center justify-center w-fit py-3 pl-2  rounded-sm text-[16px] px-5">
                    Featured
                  </h1>
                </Link>
                <Link href="/">
                  <h1 className="hover:bg-[#F939BF] bg-white hover:text-white flex items-center justify-center pl-2 w-fit py-3 rounded-sm text-[16px] px-5">
                    Special Offer
                  </h1>
                </Link>
              </div>
              <div className="flex">
                <Link href="/">
                  <h1 className="hover:bg-[#F939BF] bg-white hover:text-white flex justify-center items-center pl-2 w-fit py-3 rounded-sm text-[16px] px-5">
                    Best Seller
                  </h1>
                </Link>
                <Link href="">
                  <h1 className="hover:bg-[#F939BF] bg-white hover:text-white flex items-center justify-center text-start w-fit py-3 rounded-sm text-[16px] pl-2 px-5">
                    Latest
                  </h1>
                </Link>
              </div>
              <Link href="/blog">
                <h1 className="hover:bg-[#F939BF] bg-white hover:text-white flex items-center justify-center w-fit py-3 pl-2 rounded-sm text-[16px] px-5">
                  Blogs
                </h1>
              </Link>
            </div>
          </div>
          {/* Best Seller */}
          <div className="mt-6 ">
            {/* Heading and Slider Wrapper */}
            <div className="flex flex-col gap-6 items-start ">
              {/* Heading */}
              <h1
                className={`${jsfont.className} text-[#151875] text-[22px] font-semibold`}
              >
                Best Seller
              </h1>

              {/* Slider Container */}
              <div className="flex w-full">
                <div
                  ref={sliderRef}
                  className="flex flex-col overflow-hidden scroll-smooth sm:h-[275px] h-[300px]"
                >
                  <Swiper
                    direction="vertical"
                    spaceBetween={0}
                    loop={true}
                    slidesPerView={3}
                    centeredSlides={true}
                    speed={6000}
                    allowTouchMove={true}
                    autoplay={{
                      delay: 20,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: false,
                    }}
                    modules={[Autoplay]}
                    className="h-full"
                  >
                    {sellProducts.map((product) => (
                      <SwiperSlide key={product.slug.current} className="">
                        <Link href={`/${product.slug.current}`}>
                          <div className="flex items-start gap-2 w-full">
                            {/* Image */}
                            <div className="lg:h-[60px] h-[80px] w-[100px] lg:w-[80px]">
                              <Image
                                width={100}
                                height={100}
                                quality={100}
                                src={product.images[0]?.asset.url}
                                alt={product.images[0]?.alt || product.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            {/* Product Info */}
                            <div className="flex flex-col">
                              <h3
                                className="lg:text-[16px] md:text-[20px] text-[#151875] font-medium truncate max-w-[150px] overflow-hidden text-ellipsis"
                                title={product.title} // Tooltip to show the full title on hover
                              >
                                {product.title}
                              </h3>
                              <p className="text-[#151875] text-sm line-through">
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

          {/* Heading and Slider Wrapper */}
          <div className="flex flex-col mt-6 gap-6 items-start">
            {/* Heading */}
            <h1
              className={`${jsfont.className} text-[#151875] text-[22px] font-semibold`}
            >
              Featured
            </h1>

            {/* Slider Container */}
            <div className="flex w-full">
              <div
                ref={sliderRef}
                className="flex flex-col overflow-hidden scroll-smooth sm:h-[275px] h-[300px]"
              >
                <Swiper
                  direction="vertical"
                  spaceBetween={0}
                  loop={true}
                  slidesPerView={3}
                  centeredSlides={true}
                  speed={6000}
                  allowTouchMove={true}
                  autoplay={{
                    delay: 15,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                  }}
                  modules={[Autoplay]}
                  className="h-full"
                >
                  {featuredProducts.map((product) => (
                    <SwiperSlide key={product.slug.current} className="">
                      <Link href={`/${product.slug.current}`}>
                        <div className="flex items-start gap-2 ">
                          {/* Image */}
                          <div className="lg:h-[60px] h-[80px] w-[100px] lg:w-[80px]">
                            <Image
                              width={100}
                              height={100}
                              src={product.images[0]?.asset.url}
                              alt={product.images[0]?.alt || product.title}
                              className="w-full h-full  object-cover"
                            />
                          </div>
                          {/* Product Info */}
                          <div className="flex flex-col">
                            <h3
                              className="lg:text-[16px] md:text-[20px] text-[#151875] font-medium truncate max-w-[150px] overflow-hidden text-ellipsis"
                              title={product.title} // Tooltip to show the full title on hover
                            >
                              {product.title}
                            </h3>
                            <div className="flex flex-row">
                              {product.salePrice ? (
                                <div className="flex gap-2 justify-center items-center">
                                  <p className="text-[#151875] text-[16px] font-medium">
                                    ${product.salePrice}
                                  </p>
                                  <p className=" text-[12px] text-[#fb2e86] line-through">
                                    ${product.price}
                                  </p>
                                </div>
                              ) : (
                                <p className="text-[#151875] text-[16px] font-medium">
                                  ${product.price}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>

          {/* Special offer */}

          <div className="mt-6">
            <h2
              className={`${jsfont.className} text-[22px] font-semibold text-[#151875] mb-4`}
            >
              Special Offer
            </h2>
            <div className="grid grid-cols-2 place-items-center justify-items-center sm:gap-4 gap-2">
              {specialproduct.map((product, index) => (
                <div key={index} className="sm:h-[126px] w-[126px]">
                  <div className="flex flex-col items-center justify-center h-[80px] w-[126px]">
                    <Image
                      src={product.images[0]?.asset.url || "/placeholder.png"}
                      alt={product.images[0]?.alt || "Product image"}
                      width={100}
                      height={100}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <p
                    className={`${lato.className} tracking-wide text-[#151875] font-bold text-[12px] line-clamp-1 text-center flex items-center justify-center mt-2`}
                  >
                    {product.title}
                  </p>
                  <p className="text-sm flex items-center justify-center text-[#8A8FB9]">
                    ${product.price}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Follow Icons */}
          <div></div>
          {/* Tags */}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
