import React from 'react'
import { Lato, Josefin_Sans } from 'next/font/google'
import Image from 'next/image'
import { TiTick } from "react-icons/ti";



const lato = Lato({ subsets: ["latin"], weight: ["400"] })
const jsfont = Josefin_Sans({ subsets: ["latin"] })

const Discount = () => {
    return (
        <div className='bg-white'>
            <div>
                <div className={`${jsfont.className} flex justify-center text-center text-[44px] text-[#151875] font-bold pt-12 `}>
                    <h1>Discount Item</h1>
                </div>
                <div className={`${lato.className} flex flex-row justify-center text-[#151875] gap-5  `}>
                    <h3 className="hover:text-[#FB2E86] transition-colors duration-300  group">
                        <span className='hover:underline'>Wood Chair</span>
                        <span className='text-[39px] opacity-0 transition-opacity duration-300 group-hover:opacity-100'>.</span>
                    </h3>
                    <h3 className="hover:text-[#FB2E86] transition-colors duration-300  group">
                        <span className='hover:underline'>Plastic Chair</span> 
                        <span className='text-[39px] opacity-0 transition-opacity duration-390 group-hover:opacity-100'>.</span>
                    </h3>
                    <h3 className="hover:text-[#FB2E86] transition-colors duration-300  group"> 
                        <span className='hover:underline'>Sofa Collection</span> 
                        <span className='text-[39px] opacity-0 transition-opacity duration-300 group-hover:opacity-100'>.</span>
                        </h3>

                </div>
            </div>

            <div className='flex items-center gap-10'>
                <div className='flex-1 justify-center items-center ml-32 ' >
                    <h1 className={`${jsfont.className} text-[35px] text-[#151875] font-bold`}>
                        20% Discount Of All Products
                    </h1>
                    <h2 className='text-[#FB2E86] text-[21px] py-2' >Eams Sofa Compact</h2>
                    <div>
                        <p className={`${lato.className} text-[#B7BACB] py-2 text-[17px] `}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil error impedit explicabo autem quibusdam,
                        </p>
                    </div>
                    <div className={`${lato.className} text-[#B8B8DC] text-[16px] grid grid-cols-2 gap-4`}>
                        <h1 className='flex items-center'><TiTick className='text-[#151875]' /> Material expose like metals</h1>
                        <h1 className='flex items-center'><TiTick className='text-[#151875]' /> Clear lines and geomatric figures</h1>
                        <h1 className='flex items-center'><TiTick className='text-[#151875]' />Simple neutral colours.</h1>
                        <h1 className='flex items-center'><TiTick className='text-[#151875]' />Material expose like metals</h1>
                    </div>
                    <div>
                        <button className={`${jsfont.className} bg-[#FB2E86] text-[#FFFFFF] text-[21px] h-[57px] w-[200px] gap-4 mt-5`}>
                            Shop Now
                        </button>
                    </div>
                </div>

                <div className='flex flex-col flex-1 justify-center items-center relative '>

                    <Image
                        src="/images/dis1.png"
                        alt="photo"
                        width={750}
                        height={620}
                        className='z-10'
                    />


                    <Image
                        src="/images/dis2.png"
                        alt="photo"
                        width={500}
                        height={400}
                        className='absolute z-0'

                    />

                </div>

            </div>


        </div>
    )
}

export default Discount