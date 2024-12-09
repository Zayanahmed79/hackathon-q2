"use client"
import { useState } from "react";
import { Josefin_Sans, Lato } from "next/font/google";
import CustomDropdown from "./CustomDropdown";
import { CiSearch } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { CgMenuRightAlt } from "react-icons/cg";

const jsfont = Josefin_Sans({ subsets: ["latin"] });
const lato = Lato({ subsets: ["latin"], weight: ["400"] });

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className={`${jsfont.className} md:h-[80px] bg-white flex items-center justify-around w-full mx-auto`}>
            <div className="flex items-center justify-between w-full px-5 md:px-10 lg:ml-28">
                {/* Logo */}
                <h1 className="text-[34px] text-[#0D0E43] font-bold">Hekto</h1>

                {/* Dropdown & Menu (Visible on larger screens) */}
                <div
                    className={`${lato.className} hidden md:flex text-[16px] text-[#0D0E43] items-center gap-5`}
                >
                    <CustomDropdown />
                    <ul className="flex items-center gap-5">
                        <li>Pages</li>
                        <li>Products</li>
                        <li>Blog</li>
                        <li>Shop</li>
                        <li>Contact</li>
                    </ul>
                </div>



                {/* Search Input */}
                <div className="md:flex hidden">
                    <input
                        type="text"
                        className="h-[10px] border border-gray-400 py-5 px-5"
                    />
                    <button className="bg-[#fb2e86] flex justify-center items-center text-[26px] text-white font-semibold p-2">
                        <CiSearch />
                    </button>
                </div>
                <div className="flex gap-3">
                    <CiSearch className="md:hidden block  text-[30px] text-[#0D0E43]" />

                    {/* Hamburger Menu (Visible on medium screens and smaller) */}
                    <button
                        className="md:hidden text-[30px] text-[#0D0E43]"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <AiOutlineClose /> : <CgMenuRightAlt />}
                    </button>
                </div>
            </div>



            {/* Menu Sheet for Medium Screens and Below */}
            {isMenuOpen && (
                <div className="absolute top-[90px] right-3  bg-white shadow-md md:hidden z-50 flex w-[60%] rounded-2xl">
                    <ul
                        className={`${lato.className} text-[18px] text-[#0D0E43] flex flex-col px-5 gap-3 py-5`}
                    >
                        <CustomDropdown />
                        <li>Pages</li>
                        <li>Products</li>
                        <li>Blog</li>
                        <li>Shop</li>
                        <li>Contact</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Nav;
