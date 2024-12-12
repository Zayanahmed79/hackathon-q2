import React from 'react';
import { Lato, Josefin_Sans } from 'next/font/google';
import Image from 'next/image';


const lato = Lato({ subsets: ["latin"], weight: ["400"] })
const jsfont = Josefin_Sans({ subsets: ["latin"] })

// array with image sources, titles, descriptions
const cardsData = [
    { img: "/images/t1.png", title: "Cantilever chair", description: "$26.00 " },
    { img: "/images/t2.png", title: "Cantilever chair", description: "$26.00 " },
    { img: "/images/t3.png", title: "Cantilever chair", description: "$26.00 " },
    { img: "/images/t4.png", title: "Cantilever chair", description: "$26.00 " },
];


const Trending = () => {
    return (
        <div className='bg-white gap-4'>

            <h1 className={`${jsfont.className} flex justify-center text-center text-[44px] text-[#151875] font-bold py-12`}>Trending Products</h1>

            <div className="flex flex-wrap flex-row gap-4 justify-center">
                {cardsData.map((card, index) => (
                    <div
                        key={index}
                        className="p-4 bg-white shadow-xl group w-[270px] h-[350px]"
                         // Fixed size for the div
                    >
                        <div className='w-[250px] h-[250px] flex justify-center items-center bg-[#F5F6F8] overflow-hidden'>
                            <Image
                                src={card.img}
                                alt={card.title}
                                width={150}
                                height={150}
                                className=" object-cover  mb-4 mx-auto group-hover:scale-110 duration-500" 
                            />
                        </div>
                        <h3 className="font-semibold text-lg text-[#151875] text-center">{card.title}</h3>
                        <p className={`${jsfont.className} text-[#151875] text-center`}>{card.description}</p>
                    </div>
                ))}
            </div>

            <div className='bg-white flex flex-wrap gap-4 py-10 justify-center' >

                <div className='h-[270px] w-[420px] bg-[#FFF6FB] p-8 '>
                    <h2 className={`${jsfont.className} text-[#151875] text-[26px] `}>
                    23% off in all products
                    </h2>
                    <p className={`${lato.className} text-[16px] text-[#FB2E86] font-semibold underline `}>
                    Shop Now
                    </p>
                    <div className='w-40 h-40 flex justify-end float-end'>
                    <Image
                    src="/images/t5.png" alt="photo" 
                    width={190}
                    height={40}
                    />
                    </div>
                </div>
                <div className='h-[270px] w-[420px] bg-[#EEEFFB] p-8 '>
                    <h2 className={`${jsfont.className} text-[#151875] text-[26px] `}>
                    23% off in all products
                    </h2>
                    <p className={`${lato.className} text-[16px] text-[#FB2E86] font-semibold underline  `}>
                     View Collection
                    </p>
                    <div className='w-70 h-40 flex  justify-end'>
                    <Image
                    src="/images/t6.png" alt="photo" 
                    width={270}
                    height={40}
                    />
                    </div>
                </div>
                <div className={`${lato.className} h-[268p2] w-[267px] flex flex-col gap-8 text-[#151875] text-[16px]`}>
                    <div className='w-[267px] h-[74] flex flex-row gap-3 '>
                        <div className='bg-[#F5F6F8] w-[90px] flex justify-center '>
                        <Image
                        src="/images/t7.png" alt="photo" 
                        width={60}
                        height={50}
                        />
                        </div>
                        <p className='flex flex-col justify-center items-center text-[16px] font-semibold'>Executive Seat chair <br />  <span className='text-[12px] line-through'>$32.00</span></p>
                    </div>
                    <div className='w-[267px] h-[74] flex flex-row gap-3 '>
                        <div className='bg-[#F5F6F8] w-[90px] flex justify-center'>
                        <Image
                        src="/images/t8.png" alt="photo" 
                        width={70}
                        height={50}
                        />
                        </div>
                        <p className='flex flex-col justify-center items-center text-[16px] font-semibold'>Executive Seat chair <br />  <span className='text-[12px] line-through'>$32.00</span></p>
                    </div>
                    <div className='w-[267px] h-[74] flex flex-row gap-3' >
                        <div className='bg-[#F5F6F8] w-[90px] flex justify-center'>
                        <Image
                        src="/images/t9.png" alt="photo" 
                        width={70}
                        height={50}
                        />
                        </div>
                        <p className='flex flex-col justify-center items-center text-[16px] font-semibold'>Executive Seat chair <br />  <span className='text-[12px] line-through'>$32.00</span></p>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Trending;
