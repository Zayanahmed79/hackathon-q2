import React from 'react'
import { Lato, Josefin_Sans } from 'next/font/google'
import Image from 'next/image'
import { FaPenNib } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";



const lato = Lato({ subsets: ["latin"], weight: ["400"] })
const jsfont = Josefin_Sans({ subsets: ["latin"] })

const Latestblog = () => {
  return (
    <div className='bg-white pb-24'>
      <div >
        <h1 className={`${jsfont.className} flex justify-center text-center text-[44px] text-[#151875] font-bold p-20`}>
          Latest Blog
        </h1>
      </div>
      {/* Cards */}
      <div className='flex md:flex-row flex-col gap-10 justify-center items-center'>
        {/* Card one */}
        <div className='w-[370px] h-[493px] rounded-md shadow-xl group'>
          <div className='overflow-hidden rounded-md'>
            <Image
              src={"/images/lb1.png"} alt='photo'
              height={255}
              width={370}
              className='group-hover:scale-105 duration-500 '
            />
          </div>
          
          <div className={`text-[14px] text-[#151875] flex flex-row gap-8 p-4`}>
            <h3 className={`${jsfont.className} flex flex-row items-center justify-center gap-1`}> <FaPenNib className='text-[#FB2E86]' />SaberAli</h3>
            <h3 className={`${jsfont.className} flex flex-row items-center gap-1`}> <SlCalender  className='text-[#FFA454]'/>
            21 August,2020</h3>
          </div>
          <h1 className={`${jsfont.className} text-[18px] font-bold text-[#151875] pt-2 p-4 group-hover:text-[#FB2E86] duration-300 `}>Top esssential Trends in 2021</h1>
          <p className={`${lato.className} text-[16px] text-[#72718F] p-4 pt-2 leading-loose`}>
            More off this less hello samlande lied much
            over tightly circa horse taped mightly
          </p>
          <button className='text-[#151875] underline underline-offset-4 pt-2 p-4 group-hover:text-[#FB2E86] duration-300'>
            Read More
          </button>
          
        </div>
        {/* Card two */}
        <div className='w-[370px] h-[493px] rounded-md shadow-xl group'>
          <div className='overflow-hidden rounded-md'>
            <Image
              src={"/images/lb2.png"} alt='photo'
              height={255}
              width={370}
              className='group-hover:scale-105 duration-500 '
            />
          </div>
          
          <div className={`text-[14px] text-[#151875] flex flex-row gap-8 p-4`}>
            <h3 className={`${jsfont.className} flex flex-row items-center justify-center gap-1`}> <FaPenNib className='text-[#FB2E86]' />SaberAli</h3>
            <h3 className={`${jsfont.className} flex flex-row items-center gap-1`}> <SlCalender  className='text-[#FFA454]'/>
            21 August,2020</h3>
          </div>
          <h1 className={`${jsfont.className} text-[18px] font-bold text-[#151875] pt-2 p-4 group-hover:text-[#FB2E86] duration-300 `}>Top esssential Trends in 2021</h1>
          <p className={`${lato.className} text-[16px] text-[#72718F] p-4 pt-2 leading-loose`}>
            More off this less hello samlande lied much
            over tightly circa horse taped mightly
          </p>
          <button className='text-[#151875] underline underline-offset-4 pt-2 p-4 group-hover:text-[#FB2E86] duration-300'>
            Read More
          </button>
          
        </div>
        {/* Card three */}
        <div className='w-[370px] h-[493px] rounded-md shadow-xl group'>
          <div className='overflow-hidden rounded-md'>
            <Image
              src={"/images/lb3.png"} alt='photo'
              height={255}
              width={370}
              className='group-hover:scale-105 duration-500 '
            />
          </div>
          
          <div className={`text-[14px] text-[#151875] flex flex-row gap-8 p-4`}>
            <h3 className={`${jsfont.className} flex flex-row items-center justify-center gap-1`}> <FaPenNib className='text-[#FB2E86]' />SaberAli</h3>
            <h3 className={`${jsfont.className} flex flex-row items-center gap-1`}> <SlCalender  className='text-[#FFA454]'/>
            21 August,2020</h3>
          </div>
          <h1 className={`${jsfont.className} text-[18px] font-bold text-[#151875] pt-2 p-4 group-hover:text-[#FB2E86] duration-300 `}>Top esssential Trends in 2021</h1>
          <p className={`${lato.className} text-[16px] text-[#72718F] p-4 pt-2 leading-loose`}>
            More off this less hello samlande lied much
            over tightly circa horse taped mightly
          </p>
          <button className='text-[#151875] underline underline-offset-4 pt-2 p-4 group-hover:text-[#FB2E86] duration-300'>
            Read More
          </button>
          
        </div>
      </div>
    </div>
  )
}

export default Latestblog