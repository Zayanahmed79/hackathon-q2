import React from 'react'
import { Josefin_Sans } from 'next/font/google'
import Image from 'next/image';


const jsfont = Josefin_Sans({ subsets: ["latin"] })


const Topcategories = () => {
    return (
        <div className='bg-white pt-10'>
            <div>
                <h1 className={`${jsfont.className} flex justify-center text-center text-[44px] text-[#151875] font-bold py-12`}>Top Categories</h1>
            </div>
            <div className='flex flex-row justify-center items-center gap-4'>
                <div>
                    <div className='h-[270px] relative w-[270px] rounded-full bg-[#F6F7FB] flex flex-col justify-center items-center drop-shadow-xl group '>
                        <Image
                            src="/images/tc1.png" alt='photo'
                            height={100}
                            width={100}
                            className='h-[150px] w-[150px]'
                        />
                        <div className="bg-[#08D15F] absolute bottom-7 rounded-sm text-[15px] px-4 py-2 opacity-0 group-hover:opacity-100 duration-200 ">
                            <button>
                                View Shop
                            </button>
                        </div>
                    </div>
                    <div className={`${jsfont.className} text-[20px] text-[#151875] flex justify-center flex-col items-center py-4`}>
                        <p >
                            Mini LCW Chair
                        </p>
                        <p className='text-[16px]'>
                            $56.00
                        </p>
                    </div>
                </div>
                <div>
                    <div className='h-[270px] w-[270px] relative rounded-full bg-[#F6F7FB] flex justify-center items-center drop-shadow-xl group '>
                        <Image
                            src="/images/tc2.png" alt='photo'
                            height={100}
                            width={100}
                            className='h-[150px] w-[150px]'
                        />
                        <div className="bg-[#08D15F] absolute bottom-7 rounded-sm text-[15px] px-4 py-2 opacity-0 group-hover:opacity-100 duration-200 ">
                        <button>
                            View Shop
                        </button>
                    </div>
                    </div>
                    
                    <div className={`${jsfont.className} text-[20px] text-[#151875] flex justify-center flex-col items-center py-4 `}>
                        <p>
                            Mini LCW Chair
                        </p>
                        <p className='text-[16px]'>
                            $56.00
                        </p>
                    </div>
                </div>
                <div>
                    <div className='h-[270px] w-[270px] relative group rounded-full bg-[#F6F7FB] flex justify-center items-center drop-shadow-xl '>
                        <Image
                            src="/images/tc3.png" alt='photo'
                            height={100}
                            width={100}
                            className='h-[150px] w-[150px]'
                        />
                        <div className="bg-[#08D15F] absolute bottom-7 rounded-sm text-[15px] px-4 py-2 opacity-0 group-hover:opacity-100 duration-200 ">
                        <button>
                            View Shop
                        </button>
                    </div>
                    </div>
                    
                    <div className={`${jsfont.className} text-[20px] text-[#151875] flex justify-center flex-col items-center py-4 `}>
                        <p>
                            Mini LCW Chair
                        </p>
                        <p className='text-[16px]'>
                            $56.00
                        </p>

                    </div>
                </div>
                <div>
                    <div className='h-[270px] w-[270px] relative flex-col bg-[#F6F7FB] flex justify-center items-center drop-shadow-xl rounded-full group'>
                        <Image
                            src="/images/tc1.png" alt='photo'
                            height={100}
                            width={100}
                            className='h-[150px] w-[150px]'
                        />
                        <div className="bg-[#08D15F] absolute bottom-7 rounded-sm text-[15px] px-4 py-2 opacity-0 group-hover:opacity-100 duration-200 ">
                            <button>
                                View Shop
                            </button>
                        </div>
                    </div>

                    <div className={`${jsfont.className} text-[20px] text-[#151875] flex justify-center flex-col items-center py-4 `}>
                        <p>
                            Mini LCW Chair
                        </p>
                        <p className='text-[16px]'>
                            $56.00
                        </p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Topcategories