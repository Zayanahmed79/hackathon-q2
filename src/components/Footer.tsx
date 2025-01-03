import React from "react";
import { Josefin_Sans, Lato } from "next/font/google";
import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const jsfont = Josefin_Sans({ subsets: ["latin"] });
const lato = Lato({ subsets: ["latin"], weight: ["400"] });

const Footer = () => {
  return (
    <div className=" bg-[#EEEFFB] pt-12">
      <div>
        <div className="flex md:flex-row flex-col bg-[#EEEFFB] gap-16 sm:p-8 p-4 justify-center">
          <div className="text-[#8A8FB9] leading-10">
            <h1
              className={`${jsfont.className} font-bold text-[38px] text-black pb-4 `}
            >
              Hekto
            </h1>
            <div className="flex items-center pt-6 pb-5">
              <input
                placeholder="Enter Email Address"
                type="text"
                className="h-[10px] border border-gray-400 py-5 px-6"
              />
              <button className="bg-[#fb2e86] flex justify-center items-center text-[16px] text-white  px-4 ">
                Sign Up
              </button>
            </div>
            <p>Contact Info</p>
            <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
          </div>
          <div className="text-[#8A8FB9] leading-10 md:block hidden">
            <h1
              className={`${jsfont.className} font-bold text-[22px] text-black pb-4`}
            >
              Categories
            </h1>
            <p>Laptops & Computers</p>
            <p>Cameras & Photography</p>
            <p>Smart Phones & Tablets</p>
            <p>Video Games & Consoles</p>
            <p>Waterproof Headphones</p>
          </div>
          <div className="text-[#8A8FB9] leading-10 md:block hidden">
            <h1
              className={`${jsfont.className} font-bold text-[22px] text-black pb-4`}
            >
              Customer Core
            </h1>
            <p>My Account</p>
            <p>Discount</p>
            <p>Returns</p>
            <p>Orders History</p>
            <p>Order Tracking</p>
          </div>
          <div className="text-[#8A8FB9] leading-10 md:block hidden">
            <h1
              className={`${jsfont.className} font-bold text-[22px] text-black pb-4`}
            >
              Pages
            </h1>
            <p>Blog</p>
            <p>Browse the Shop</p>
            <p>Category</p>
            <p>Pre-Built Pages</p>
            <p>Visual Composer Elements</p>
            <p>WooCommerce Pages</p>
          </div>

          <div className="md:hidden block text-[#8A8FB9]">
            {/* category */}
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-black"> Categories</AccordionTrigger>
                <AccordionContent>
                  <p>Laptops & Computers</p>
                  <p>Cameras & Photography</p>
                  <p>Smart Phones & Tablets</p>
                  <p>Video Games & Consoles</p>
                  <p>Waterproof Headphones</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            {/*   Customer Core */}
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Customer Core</AccordionTrigger>
                <AccordionContent>
                  <p>My Account</p>
                  <p>Discount</p>
                  <p>Returns</p>
                  <p>Orders History</p>
                  <p>Order Tracking</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            {/* Pages */}
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Pages</AccordionTrigger>
                <AccordionContent>
                  <p>Blog</p>
                  <p>Browse the Shop</p>
                  <p>Category</p>
                  <p>Pre-Built Pages</p>
                  <p>Visual Composer Elements</p>
                  <p>WooCommerce Pages</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      <div
        className={`${lato.className} text-[#9DA0AE] bg-[#E7E4F8] p-4 flex `}
      >
        <p className=" flex flex-1 justify-center">
          ©Webecy - All Rights Reserved
        </p>
        <p className="flex flex-1 justify-center gap-2 text-[#151875] text-2xl">
          <FaFacebook />
          <AiFillInstagram />
          <AiFillTwitterCircle />
        </p>
      </div>
    </div>
  );
};

export default Footer;
