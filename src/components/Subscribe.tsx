import React from 'react'
import Image from 'next/image'
import { Josefin_Sans } from 'next/font/google'


const jsfont = Josefin_Sans({ subsets: ["latin"] })

const Subscribe = () => {

  return (
    <div>
  <div className="relative h-[400px] md:h-[463px] bg-[url('/images/group1.png')] bg-cover bg-center">
  {/* Overlay Content */}
  <div className={`${jsfont.className} absolute inset-0 flex flex-col items-center justify-center gap-6`}>
    <h1 className="text-[#151875] font-bold text-[35px] text-center">
      Get Latest Update By Subscribe <br /> Our Newsletter
    </h1>
    <button className="bg-[#FB2E86] text-white px-12 py-3">
      Shop Now
    </button>
  </div>
</div>

      <div className='bg-white flex justify-center items-center pt-20' >
        <Image
          src={"/images/sub2.png"} alt='photo'
          height={93}
          width={904}
          className='bg-white'
        />
      </div>

    </div>
  )
}

export default Subscribe