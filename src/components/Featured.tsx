import React from "react";
import { Products } from "./ProductArray";
import Link from "next/link";
import Image from "next/image";
import { Josefin_Sans, Lato } from "next/font/google";
import { FiShoppingCart } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { GoSearch } from "react-icons/go";

const lato = Lato({ subsets: ["latin"], weight: ["400"] });
const jsfont = Josefin_Sans({ subsets: ["latin"] });

const Featured = () => {
    return (
        <div className={`${lato.className} bg-[#ffffff] py-10`}>

            <h1 className={`${jsfont} text-[42px] text-center font-bold py-12 text-[#151875]`}>Featured Products</h1>
            <div className="flex flex-wrap justify-center gap-6">
                {Products.map((product) => {
                    // Calculate discount percentage
                    const discountPercentage = product.price;
                    return (
                        <Link key={product.id} href={`/product/${product.slug}`} passHref>
                            <div
                                className="relative bg-white flex shadow-xl group flex-col justify-between md:w-[270px] md:h-[361px] h-[300px] group"
                            >
                                {/* New Arrival Badge */}
                                {product.newArrival && (
                                    <div className="absolute top-4 right-4 h-[48px] w-[48px] bg-[#2EC1AC] flex justify-center items-center text-white text-[16px] font-medium px-2 py-1 rounded-full">
                                        New
                                    </div>
                                )}

                                {/* Discount Percentage */}
                                {discountPercentage && (
                                    <div className="absolute top-4 left-4 h-[48px] w-[48px] bg-[#E97171] flex justify-center items-center text-white text-[16px] font-medium px-2 py-1 rounded-full">
                                        -{discountPercentage}%
                                    </div>
                                )}

                                {/* Product Image */}
                                <div className="md:w-[270px] h-[236px] flex justify-center items-center bg-[#f6f7fb] relative">
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        width={140}
                                        height={140}
                                        className="object-cover"
                                    />

                                    <div className="flex justify-center absolute bottom-4 left-1/4 opacity-0 group-hover:opacity-100 duration-200">
                                        <h1 className="bg-[#08d15f] text-white py-2 px-4 w-fit">View Details</h1>
                                    </div>
                                    <div className="flex justify-center  items-center gap-2 absolute top-3 left-3 opacity-0 group-hover:opacity-100 duration-200">
                                        <span className="p-2 bg-[#eeeffb] rounded-full text-black text-[16px]"><FiShoppingCart /></span>
                                        <span className="p-2 bg-[#eeeffb] rounded-full text-black text-[16px]"><CiHeart /></span>
                                        <span className="p-2 bg-[#eeeffb] rounded-full text-black text-[16px]"><GoSearch /></span>
                                    </div>
                                </div>


                                <div className=" py-3 text-center flex flex-col justify-center items-center px-4 duration-200 group-hover:bg-[#2f1ac4] text-white">
                                    {/* Product Title */}
                                    <h1 className="text-[#fb2e86] group-hover:text-white font-bold text-[18px]">
                                        {product.title}
                                    </h1>

                                    <h1 className="text-[24px] font-extrabold group-hover:text-white text-gray-400">_ _ _</h1>

                                    <h1 className={`${jsfont} text-[#151875] group-hover:text-white text-[16px]`}>
                                        {product.id}
                                    </h1>

                                    {/* Product Price */}
                                    <div className="flex items-center gap-2 mt-4">
                                        <span className="text-[#151875] group-hover:text-white  text-[16px]">
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
