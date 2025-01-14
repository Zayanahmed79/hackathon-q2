"use client";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { FaPenNib } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { ProductType, Singleblog } from "@/components/types";
import { PortableText } from "@portabletext/react";
import { Josefin_Sans, Lato } from "next/font/google";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { TiSocialFacebook } from "react-icons/ti";

import { VscTwitter } from "react-icons/vsc";
import { AiFillInstagram } from "react-icons/ai";
import { IoMdPerson } from "react-icons/io";
import { GrMail } from "react-icons/gr";
import { TbMessageCircleFilled } from "react-icons/tb";


const jsfont = Josefin_Sans({ subsets: ["latin"] });
const lato = Lato({ subsets: ["latin"], weight: ["400"] });

const SingleBlogPage = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState<Singleblog | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [featuredProducts, setfeaturedProducts] = useState<ProductType[]>([]);

  const [sellProducts, setsellProducts] = useState<ProductType[]>([]);
  const [specialproduct, setspecialproducts] = useState<ProductType[]>([]);
  const sliderRef = useRef<HTMLDivElement>(null);

  const [newComment, setNewComment] = useState({
    name: "",
    email: "",
    comment: "",
  });
  // const [comments, setComments] = useState(blog?.comments || []);
  const handleCommentChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewComment({ ...newComment, [e.target.name]: e.target.value });
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // const newCommentObj = {
    //   ...newComment,
    //   postedAt: new Date().toISOString(),
    // };
    // setComments((prev) => [...prev, newCommentObj]);
    setNewComment({ name: "", email: "", comment: "" });
    
    // Optionally, you can also submit this to your backend
  };

  // useEffect(() => {
  //   async function fetchBlog() {
  //     try {
  //       const res = await fetch(`/api/blogs/${slug}`);
  //       if (!res.ok) {
  //         throw new Error("Failed to fetch the blog data.");
  //       }
  //       const data = await res.json();
  //       setBlog(data);
  //       setComments(data.comments || []);
  //     } catch (error) {
  //       setError("Failed to load the blog.");
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   if (slug) {
  //     fetchBlog();
  //   }
  // }, [slug]);

  useEffect(() => {
    // Fetch products
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
    async function fetchBlog() {
      if (!slug) {
        setError("Invalid slug.");
        return;
      }

      try {
        const res = await fetch(`/api/blogs/${slug}`);
        console.log("API Response Status:", res.status); // Log response status
        if (!res.ok) {
          throw new Error("Failed to fetch the blog data.");
        }

        const data = await res.json();
        console.log("Fetched Blog Data:", data); // Log the data received

        if (data.error) {
          setError(data.error);
        } else {
          setBlog(data);
         
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
        setError("Failed to load the blog.");
      } finally {
        setLoading(false);
      }
    }

    fetchBlog();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  if (!blog) {
    return <div className="text-center text-gray-500">No blog found.</div>;
  }

  let imageIndex = 0;

  return (
    <div>
      {/* Upper haed */}
      <div className="sm:p-24 sm:pl-36 p-4 bg-[#F6F5FF]">
        <h1
          className={`${jsfont.className} sm:text-[36px] test-[18px] text-[#101750] font-bold`}
        >
          Single Page
        </h1>
        <p
          className={`${lato.className} text-[#101750] font-bold sm:text-[16px] text-[12px]`}
        >
          Home . Page <span className="text-[#FB2E86]">. Single Blog</span>
        </p>
      </div>

      <div className="flex md:flex-row flex-col lg:mx-32 md:mx-[7vw] mx-5 sm:gap-16">
        {/* // Left Sid */}
        <div className="mt-16 sm:w-[90%] w-full">
          {/* Featured Image */}
          {blog.featuredImage && (
            <div className="overflow-hidden h-[200px] w-full sm:h-[400px] rounded-md ">
              <Image
                src={`${blog.featuredImage}`}
                alt={blog.title}
                width={1000}
                height={1000}
                quality={100}
                className="object-cover h-full w-full rounded-md"
              />
            </div>
          )}

          {/* Author & Date */}
          <div className="text-[14px] text-[#151875] flex flex-row  gap-8 mt-4 ">
            <h3 className="flex items-center gap-1">
              <FaPenNib className="text-[#FB2E86]" />
              {blog.authorName}
            </h3>
            <h3 className="flex items-center gap-1">
              <SlCalender className="text-[#FFA454]" />
              {new Date(blog.publishingDate).toLocaleDateString()}
            </h3>
          </div>

          {/* Blog Title */}
          <h1 className="text-[32px] text-start font-bold text-[#151875] mt-6 ">
            {blog.title}
          </h1>

          {/* Blog Overview */}
          <p className="sm:text-[18px] text-[16px] font-medium text-[#72718F] mt-4 leading-wide ">
            {blog.overview}
          </p>

          {/* Blog Content */}
          <div className="blog-content space-y-6">
            <PortableText
              value={blog.content}
              components={{
                types: {
                  image: ({
                    value,
                  }: {
                    value: { asset: { url: string }; alt: string };
                  }) => {
                    imageIndex++; // Increment the index for each image
                    const isFirstTwoImages = imageIndex <= 4;

                    return (
                      <div
                        className={`my-4 ${
                          isFirstTwoImages
                            ? " inline-block h-[210px] w-[326px]" // First two images
                            : " inline-block h-[180px] w-[155px]" // Remaining four images
                        } mx-2 `}
                      >
                        <Image
                          src={value.asset.url}
                          width={1000}
                          height={1000}
                          quality={100}
                          alt={value.alt || "Image"}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    );
                  },
                  blockquote: ({
                    value,
                  }: {
                    value: { quote: string; author: string };
                  }) => (
                    <blockquote className="p-4 bg-gray-100 border-l-4 border-pink-500 italic">
                      <p>{value.quote}</p>
                      <footer className="mt-2">- {value.author}</footer>
                    </blockquote>
                  ),
                },
                block: {
                  h1: ({ children }) => (
                    <h1 className="text-4xl font-bold my-4">{children}</h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-3xl font-semibold my-4">{children}</h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-2xl font-medium my-4">{children}</h3>
                  ),
                  normal: ({ children }) => (
                    <p className="text-lg leading-relaxed my-2">{children}</p>
                  ),
                },
                marks: {
                  strong: ({ children }) => (
                    <strong className="font-bold">{children}</strong>
                  ),
                  em: ({ children }) => (
                    <em className="italic">{children}</em>
                  ),
                  link: ({ value, children }) => (
                    <a
                      href={value.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      {children}
                    </a>
                  ),
                },
              }}
            />
          </div>

          {/* Back Button */}
          <button
            className="my-10 text-white bg-[#151875] hover:bg-[#FB2E86] px-6 py-3 flex items-center justify-center m-auto w-44 rounded-md"
            onClick={() => window.history.back()}
          >
            Back to Blogs
          </button>

          {/* Comment section */}
          <div className="comments-section mt-10">
            {blog.comments?.map((comment, idx) => (
              <div key={idx} className="comment mb-6 p-4 shadow-lg">
                <div className="comment-header flex items-center  space-x-4">
                  {comment.pic && (
                    <div className=" w-24 h-24">
                      <Image
                        src={`${comment.pic}`}
                        height={1000}
                        width={1000}
                        quality={100}
                        alt={comment.name}
                        className="comment-pic h-full w-full  object-cover"
                      />
                    </div>
                  )}
                  <div className="comment-details flex flex-col w-auto">
                    <div className="flex justify-start items-center gap-6">
                      <p
                        className={`${jsfont.className} text-xl font-semibold text-[#363385]`}
                      >
                        {comment.name}
                      </p>
                      <p className={`${lato.className} text-sm text-[#A3A2B6]`}>
                        {new Date(comment.postedAt).toLocaleDateString()}
                      </p>
                    </div>

                    <p
                      className={`${lato.className} comment-text mt-2 text-sm text-[#A3A2B6]`}
                    >
                      {comment.comment}
                    </p>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Comment Form */}

          <div className="mt-32 text-[#8A8FB9]">
            <form onSubmit={handleCommentSubmit}>
              <div className="flex gap-3 space-x-2 mb-6">
                <div className="relative w-full">
                  {/* Input Field */}
                  <input
                    type="text"
                    name="name"
                    value={newComment.name}
                    onChange={handleCommentChange}
                    className="w-full pl-8 py-2 mb-4 border border-[#8A8FB9] text-[#8A8FB9] "
                    placeholder="Your Name*"
                    required
                  />
                  {/* Icon Positioned Inside the Input */}
                  <div className="absolute left-3 top-1/3 inline-block transform -translate-y-1/2 text-[#8A8FB9]">
                    <IoMdPerson />
                  </div>
                </div>
                <div className="w-full relative">
                  <input
                    type="email"
                    name="email"
                    value={newComment.email}
                    onChange={handleCommentChange}
                    placeholder="Write Your Email*"
                    className="w-full placeholder:text-[#8A8FB9] pl-8 p-2 mb-4 border border-[#8A8FB9] "
                  />
                  <div className="absolute left-3 top-1/3 inline-block transform -translate-y-1/2 text-[#8A8FB9]">
                    <GrMail />
                  </div>
                </div>
              </div>
              <div className="w-full relative">
                <textarea
                  name="comment"
                  value={newComment.comment}
                  onChange={handleCommentChange}
                  placeholder="Your Your Comment*"
                  className="w-full placeholder:text-[#8A8FB9] h-48 pl-8 pt-3 p-3 mb-4 border border-[#8A8FB9] "
                  required
                />
                <div className="absolute left-3 top-6 transform -translate-y-1/2 text-[#8A8FB9]">
                  <TbMessageCircleFilled />
                </div>
              </div>

              <button
                type="submit"
                className="bg-[#FB2E86] text-white w-full px-6 py-2 my-8 "
              >
                Continue Shipping
              </button>
            </form>
          </div>
        </div>
        {/* // Right Side */}
        <div className="my-16">
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
                  <p className="text-[12px] flex items-center justify-center text-[#8A8FB9]">
                    ${product.price}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Follow Icons */}
          <div className="mt-8 ">
            <h1
              className={`${jsfont.className} text-[#151875] text-[22px] mb-3`}
            >
              Follow
            </h1>
            <div className="flex gap-2">
              <p className=" p-2 bg-[#5625DF] rounded-full flex justify-center items-center ">
                {" "}
                <TiSocialFacebook className="text-white" />{" "}
              </p>
              <p className=" p-2 bg-[#FF27B7] rounded-full">
                {" "}
                <AiFillInstagram className="text-white" />{" "}
              </p>
              <p className=" p-2 bg-[#37DAF3] rounded-full">
                {" "}
                <VscTwitter className="text-white" />{" "}
              </p>
            </div>
          </div>
          {/* Tags */}
          <div></div>
        </div>
      </div>
      <div className="bg-white flex justify-center items-center my-20">
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

export default SingleBlogPage;
