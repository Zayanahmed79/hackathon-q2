import React from "react";
import { Lato, Josefin_Sans } from "next/font/google";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import Footer from "@/components/Footer";

const jsfont = Josefin_Sans({ subsets: ["latin"] });
const lato = Lato({ subsets: ["latin"], weight: ["400"] });

const contact = () => {
  return (
    <div>
      {/* Heading */}
      <div className="p-24 pl-36 bg-[#F6F5FF]">
        <h1
          className={`${jsfont.className} text-[36px] text-[#101750] font-bold  `}
        >
          Contact Us
        </h1>
        <p className={`${lato.className} text-[#101750] font-bold text-[16px]`}>
          Home . Page <span className="text-[#FB2E86]">. Contact Us</span>
        </p>
      </div>
      {/* Main Content */}
      <div className="bg-white p-24 grid grid-cols-2 gap-8 pb-52">
        {/* Information */}
        <div>
          <h1
            className={`${jsfont.className} text-[36px] text-[#151875] font-bold pb-3`}
          >
            Information About us
          </h1>
          <p className={`${lato.className} text-[#8A8FB9] text-[16px]  `}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
            tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
            vitae lobortis quis bibendum quam.
          </p>
          <p className="flex text-[30px] pt-4">
            <span className="text-[#5625DF]">
              <GoDotFill />
            </span>
            <span className="text-[#FF27B7]">
              <GoDotFill />
            </span>
            <span className="text-[#37DAF3]">
              <GoDotFill />
            </span>
          </p>
        </div>
        {/* contact  */}
        <div>
          <h1
            className={`${jsfont.className} text-[36px] text-[#151875] font-bold pl-4 pb-2`}
          >
            Contact Way
          </h1>
          <div className="grid grid-cols-2 gap-4">
            <p className="flex items-center text-[#8A8FB9]">
              <span className="text-[#5726DF] text-[70px] ">
                <GoDotFill />
              </span>{" "}
              Tel: 877-67-88-99 <br />
              E-Mail: shop@store.com
            </p>
            <p className="flex items-center text-[#8A8FB9]">
              <span className="text-[#FB2E86] text-[70px] ">
                <GoDotFill />
              </span>{" "}
              Support Forum For over 24hr
            </p>
            <p className="flex items-center text-[#8A8FB9] ">
              <span className="text-[#FFB265] text-[70px]">
                <GoDotFill />
              </span>{" "}
              20 Margaret st, London <br /> Great britain, 3NM98-LK
            </p>
            <p className="flex items-center text-[#8A8FB9]">
              <span className="text-[#1BE982] text-[70px]">
                <GoDotFill />
              </span>{" "}
              Free standard shipping on all orders.{" "}
            </p>
          </div>
        </div>
        {/* Get In Touch */}
        <div>
          <h1
            className={`${jsfont.className} text-[36px] text-[#151875] font-bold pb-3`}
          >
            Get In Touch
          </h1>

          <p className={`${lato.className} text-[#8A8FB9] text-[15px] pb-6 `}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices tristique amet erat vitae eget dolor los vitae
            lobortis quis bibendum quam.
          </p>

          <input
            className="text-[#8A8FB9] border-solid border-[#A4B6C8] border-opacity-70 border-[1.5px] mr-5 rounded-sm mb-8 p-2 "
            type="text"
            placeholder="Your Name*"
          />
          <input
            className="text-[#8A8FB9] border-solid border-[#A4B6C8] border-[1.5px] border-opacity-70 p-2 rounded-sm mb-8 "
            type="email"
            placeholder="Your E-mail"
          />
          <input
            className="text-[#8A8FB9] border-solid border-[#A4B6C8] pr-60 mb-8 border-[1.5px] p-2 border-opacity-70 rounded-sm "
            type="text"
            placeholder="Subject*"
          />
          <input
            className="text-[#8A8FB9] border-solid border-[#A4B6C8] border-[1.5px] pr-60 pb-28 p-2 border-opacity-70 rounded-sm "
            type="text"
            placeholder="Type Your Message*"
          />

          <button className="bg-[#fb2e86] flex justify-center items-center text-[16px] text-[#FFFFFF] mt-8 py-2 px-7 rounded-sm">
            Send Mail
          </button>
        </div>
        {/* Image */}
        <div>
          <Image
            src={"/images/con1.png"}
            alt="photo"
            width={692}
            height={723}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default contact;
