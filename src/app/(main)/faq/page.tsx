import React from "react";
import { Lato, Josefin_Sans } from "next/font/google";
import Image from "next/image";
import Footer from "@/components/Footer";

const jsfont = Josefin_Sans({ subsets: ["latin"] });
const lato = Lato({ subsets: ["latin"], weight: ["400"] });

const faq = () => {
  return (
    <div>
      {/* Haeding */}
      <div className="p-24 pl-36 bg-[#F6F5FF]">
        <h1
          className={`${jsfont.className} text-[36px] text-[#101750] font-bold  `}
        >
          FAQ
        </h1>
        <p className={`${lato.className} text-[#101750] font-bold text-[16px]`}>
          Home . Page <span className="text-[#FB2E86]">. Faq</span>
        </p>
      </div>
      {/* Content() */}
      <div className="bg-white flex flex-row ">
        {/* General Information */}
        <div className={`${jsfont.className} m-24 flex-1`}>
          <h1
            className={`${jsfont.className} text-[36px] text-[#1D3178] font-bold pb-10  `}
          >
            Genaral Information
          </h1>
          <h2
            className={`${jsfont.className} text-[17px] text-[#1D3178] font-bold pb-5 `}
          >
            Eu dictumst cum at sed euismood condimentum?
          </h2>
          <p className="pb-10 text-[#A1ABCC] leading-loose tracking-wide">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            sed tristique mollis vitae, consequat gravida sagittis.
          </p>
          <h2
            className={`${jsfont.className} text-[17px] text-[#1D3178] font-bold pb-5 `}
          >
            Magna bibendum est fermentum eros.
          </h2>
          <p className="pb-10 text-[#A1ABCC] leading-loose tracking-wide">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            sed tristique mollis vitae, consequat gravida sagittis.
          </p>
          <h2
            className={`${jsfont.className} text-[17px] text-[#1D3178] font-bold pb-5 `}
          >
            Odio muskana hak eris conseekin sceleton?
          </h2>
          <p className="pb-10 text-[#A1ABCC] leading-loose tracking-wide">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            sed tristique mollis vitae, consequat gravida sagittis.
          </p>
          <h2
            className={`${jsfont.className} text-[17px] text-[#1D3178] font-bold pb-5 `}
          >
            Elit id blandit sabara boi velit gua mara?
          </h2>
          <p className="pb-10 text-[#A1ABCC] leading-loose tracking-wide ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            sed tristique mollis vitae, consequat gravida sagittis.
          </p>
        </div>
        {/* Ask a Question */}
        <div className="bg-[#F8F8FD] flex-1 ml-0 m-24  ">
          <h1
            className={`${jsfont.className} text-[30px] text-[#1D3178] font-bold py-16 p-10`}
          >
            Ask a Question
          </h1>
          <input className="pl-2 py-2 text-[16px] border-[#CDCEDC] border-[1px] border-solid mt-10 pr-48 ml-10 rounded-sm  " type="text" placeholder="Your Name*" />
          <input className="pl-2 py-2 text-[16px] border-[#CDCEDC] border-[1px] border-solid mt-10 pr-48 ml-10 rounded-sm" type="text" placeholder="Subject*" />
          <input className="pl-2 py-2 text-[16px] border-[#CDCEDC] border-[1px] border-solid mt-10 pr-48 pb-36 ml-10 rounded-sm " type="text" placeholder="Type Your Message*" />

          <button className="bg-[#fb2e86] flex justify-center items-center text-[16px] text-[#FFFFFF] mt-10 py-2 px-7 rounded-sm ml-10">
           Send Mail
          </button>
        </div>
      </div>
      {/* Image */}
      <div className='bg-white flex justify-center items-center  pb-20' >
       <Image
          src={"/images/sub2.png"} alt='photo'
          height={93}
          width={904}
          className='bg-white'
        />
      </div>
      <Footer/>
    </div>
  );
};

export default faq;
