import { Josefin_Sans, Lato } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { LatestPro } from "./ProductArray";
import { FiShoppingCart } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { GoSearch } from "react-icons/go";

const lato = Lato({ subsets: ["latin"], weight: ["400"] });
const jsfont = Josefin_Sans({ subsets: ["latin"] });

const Latest = () => {
    return (
        <div className={`${lato.className} bg-white`}>
            <div className='flex flex-col items-center gap-3 py-12'>
                <h1 className={`${jsfont} text-[42px] text-center font-bold text-[#151875]`}>Latest Products</h1>
                <div className="flex md:text-[18px] items-center md:gap-10 gap-3 text-[#151875]">
                    <h1 className="text-orange-500 underline">New Arrival</h1>
                    <h1>Best Seller</h1>
                    <h1>Featured</h1>
                    <h1>Special Offer</h1>
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
                {LatestPro.map((product) => {
                    // Calculate discount percentage
                    const discountPercentage = product.price;
                    return (
                        <Link key={product.id} href={`/product/${product.slug}`} passHref>
                            <div
                                className="relative bg-white flex   group flex-col justify-between md:w-[360px] md:h-[306px] group"
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
                                <div className="md:w-[360px] h-[270px] flex justify-center items-center bg-[#f6f7fb] relative overflow-hidden">
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        width={200}
                                        height={200}
                                        className="object-cover group-hover:scale-110 duration-500"
                                    />

            
                                    <div className="flex flex-col justify-center  items-center gap-2 absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 duration-200">
                                        <span className="p-2 bg-[#eeeffb] rounded-full text-black text-[16px]"><FiShoppingCart /></span>
                                        <span className="p-2 bg-[#eeeffb] rounded-full text-black text-[16px]"><CiHeart /></span>
                                        <span className="p-2 bg-[#eeeffb] rounded-full text-black text-[16px]"><GoSearch /></span>
                                    </div>
                                </div>


                                <div className="py-1 text-center flex justify-between px-1 items-center">
                                 
                                    <h1 className={`${jsfont.className} text-[#151875] underline group-hover:no-underline font-bold text-[16px]`}>
                                        {product.title}
                                    </h1>


                                    <div className="flex items-center gap-2">
                                        {product.salePrice > 0 ? (
                                            <>
                                                <span className="text-[#3A3A3A] font-semibold text-[12px]">
                                                    ${product.salePrice.toFixed(2)}
                                                </span>
                                                <span className="line-through text-[#B0B0B0] text-[12px] md:block hidden">
                                                    ${product.price.toFixed(2)}
                                                </span>
                                            </>
                                        ) : (
                                            <span className="text-[#3A3A3A] font-semibold text-[12px]">
                                                ${product.price.toFixed(2)}
                                            </span>
                                        )}
                                    </div>

                                </div>
                            </div>


                        </Link>
                    );
                })}
            </div>
        </div >
    )
}

export default Latest