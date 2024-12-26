"use client";
import React from "react";
import { Josefin_Sans, Lato } from "next/font/google";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { RxDash } from "react-icons/rx";
import { GoDash } from "react-icons/go";
import Footer from "@/components/Footer";



const lato = Lato({ subsets: ["latin"], weight: ["400"] });
const jsfont = Josefin_Sans({ subsets: ["latin"] });

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: "ease",
      once: false,
    });
  }, []);
  return (
    <div>
      {/* Heading  */}
      <div className="p-24 pl-36 bg-[#F6F5FF]">
        <h1
          className={`${jsfont.className} text-[36px] text-[#101750] font-bold  `}
        >
          {" "}
          About Us
        </h1>
        <p className={`${lato.className} text-[#101750] font-bold text-[16px]`}>
          Home . Page <span className="text-[#FB2E86]">. About Us</span>
        </p>
      </div>
      {/* TEXT  */}
      <div className="flex bg-white p-32 pl-60">
        <div className="bg-white  flex  ">
          <div className="flex  ">
            <Image
              src="/images/ab1.png"
              alt="photo"
              width={555}
              height={390}
              className="relative z-20 ml-4"
            />
            <Image
              src="/images/ab2.png"
              alt="photo"
              width={552}
              height={409}
              className="absolute z--10"
            />
          </div>
          <div
            className={`${jsfont.className} flex-1 text-[36px] font-bold p-8 mr-44`}
          >
            <h1 className="text-[#151875] pb-6">
              Know About Our Ecomerce Business, History
            </h1>
            <p
              className={`${lato.className} text-[#8A8FB9] font-semibold text-[16px] pb-12`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
              tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
              vitae lobortis quis bibendum quam.
            </p>
            <button>
              <p
                className={`${lato.className} bg-[#FB2E86] text-white text-[18px] rounded-sm px-7 py-2 `}
              >
                Contact us
              </p>
            </button>
          </div>
        </div>
      </div>
      {/* Cards */}
      <div id="services" className={`${lato.className} bg-white py-10 pb-32`}>
        <h1
          className={`${jsfont} text-[42px] text-center font-bold py-12 text-[#000000]`}
        >
          Our Features
        </h1>
        <div className="flex flex-wrap justify-center gap-6">
          {/* 1 */}
          <div
            data-aos="flip-left"
            className="flex hover:scale-105 duration-150 flex-col gap-3 justify-center p-3 shadow-lg w-[270px] h-[320px] text-center items-center hover:border-b-2 hover:border-[#FF9100]"
          >
            <Image
              src={"/images/i1.png"}
              alt="icon one"
              width={60}
              height={60}
            />

            <h1 className="text-[20px] font-bold text-[#151875]">
              24/7 Support
            </h1>
            <p className="text-[16px] font-semibold text-slate-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </div>
          {/* 2 */}
          <div
            data-aos="flip-left"
            className="flex hover:scale-105 duration-150 flex-col gap-3 justify-center p-3 shadow-lg w-[270px] h-[320px] text-center items-center hover:border-b-2 hover:border-[#FF9100]"
          >
            <Image
              src={"/images/i2.png"}
              alt="icon one"
              width={60}
              height={60}
            />

            <h1 className="text-[20px] font-bold text-[#151875]">
              24/7 Support
            </h1>
            <p className="text-[16px] font-semibold text-slate-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </div>
          {/* 3 */}
          <div
            data-aos="flip-left"
            className="flex hover:scale-105 duration-150 flex-col gap-3 justify-center p-3 shadow-lg w-[270px] h-[320px] text-center items-center hover:border-b-2 hover:border-[#FF9100]"
          >
            <Image
              src={"/images/i3.png"}
              alt="icon one"
              width={60}
              height={60}
            />

            <h1 className="text-[20px] font-bold text-[#151875]">
              24/7 Support
            </h1>
            <p className="text-[16px] font-semibold text-slate-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </div>
          {/* 4 */}
          <div
            data-aos="flip-left"
            className="flex hover:scale-105 duration-150 flex-col gap-3 justify-center p-3 shadow-lg w-[270px] h-[320px] text-center items-center hover:border-b-2 hover:border-[#FF9100]"
          >
            <Image
              src={"/images/i4.png"}
              alt="icon one"
              width={60}
              height={60}
            />

            <h1 className="text-[20px] font-bold text-[#151875]">
              24/7 Support
            </h1>
            <p className="text-[16px] font-semibold text-slate-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </div>
        </div>
      </div>
      {/* Client say */}
      <div className="bg-[#FBFBFF]">
        <h1 className={`${jsfont.className} text-[42px] font-bold flex justify-center text-black p-12 pb-8 `}>Our Client Say!</h1>
      </div>
      <div className="bg-[#FBFBFF] flex justify-center flex-col  ">
        {/* images */}
        <div className="flex justify-center items-center gap-3 pb-4">
            <Image
                src={"/images/ab4.png"} alt="photo"
                height={59}
                width={55}
                className="mt-3 rounded-sm"
            />
            <Image
                src={"/images/ab3.png"} alt="photo"
                height={59}
                width={55}
                className="mt-0 rounded-sm"
            />
            <Image
                src={"/images/ab5.png"} alt="photo"
                height={59}
                width={55}
                className="mt-3 rounded-sm"
            />
        </div>
        <div className="flex flex-col justify-center items-center ">
          <h1 className={`${lato.className} text-[#151875] text-[22px]  `}>Selina Gomez</h1>
          <p className={`${lato.className} text-[10px] text-[#8A8FB9] pb-3 `}>Ceo At Webecy Digital</p>
          <p className={`${lato.className } font-bold text-[16px] text-[#8A8FB9] px-96 mx-28 flex justify-center items-center max-w-80% tracking-normal text-center `}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis
            ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim
            nunc, sed sapien egestas ac nam. Tristique ultrices dolor <br /> aliquam
            lacus volutpat praesent.
          </p>
          <p className="text-[#FF75B0] flex flex-row gap-0 text-[30px] py-4 pb-12"><RxDash/><GoDash /><RxDash/>
          </p>
        </div>
      </div>
      <div className="bg-white h-80">

      </div>
      <Footer/>
    </div>
    
  );
};

export default About;
