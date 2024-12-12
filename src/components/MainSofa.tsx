import { Josefin_Sans, Lato } from 'next/font/google';
import Image from 'next/image'
import React from 'react'
import { GoDotFill } from 'react-icons/go';


const lato = Lato({ subsets: ["latin"], weight: ["400"] });
const jsfont = Josefin_Sans({ subsets: ["latin"] });
const MainSofa = () => {
  return (
    <div className={`${lato.className} bg-[#f1f0ff] flex items-center justify-center  p-5 md:p-0`}>
      <div className='flex md:flex-row flex-col justify-center gap-10 items-center py-10'>
        <div className="relative z-auto">
          <Image
            src="/images/sofa.png"
            alt="main"
            width={400}
            height={400}
            className="z-20 relative"
          />
          <Image
            src="/images/sofael.png"
            alt="main"
            width={400}
            height={400}
            className="absolute top-2 z-10"
          />
        </div>


        <div className='flex flex-col gap-4 md:p-3'>
          <h1 className={`${jsfont.className} text-[35px] font-bold text-[#151875]`}>Unique Features Of leatest & <br />
            Trending Poducts</h1>
          <p className='text-[16px] font-medium text-[#acabc3] flex items-center gap-3'><span><GoDotFill className='text-[#f52b70] text-[16px]' /></span>All frames constructed with hardwood solids and laminates</p>
          <p className='text-[16px] font-medium text-[#acabc3] flex items-center gap-3'><span><GoDotFill className='text-blue-600 text-[16px]' /></span>Reinforced with double wood dowel, glue, screw - nails corner
            blocks and machine nails</p>
          <p className='text-[16px] font-medium text-[#acabc3] flex items-center gap-3'><span><GoDotFill className='text-[#bf899b] text-[16px]' /></span>All Arms, backs and seats are structurally reinforced</p>

          <div className='flex gap-4 items-center'>
            <button className={`${jsfont.className} text-[17px] font-semibold text-white bg-[#fb2e86] rounded-[2px] px-5 py-2`}>Add to Cart</button>

            <div className={`${jsfont.className} flex flex-col text-[#151875] font-semibold`}>
              <h1>B&B Italian Sofa</h1>
              <h1 className={`${lato.className} font-normal`  }>$32.00</h1>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainSofa