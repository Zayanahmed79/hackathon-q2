
import { Josefin_Sans } from 'next/font/google'
import { CiHeart } from 'react-icons/ci'
import { IoPersonOutline } from 'react-icons/io5'
import { LuShoppingCart } from 'react-icons/lu'
import { MdOutlineEmail, MdPhoneInTalk } from 'react-icons/md'


const jsfont = Josefin_Sans({ subsets: ['latin'] })

const Head = () => {
    return (
        <div className={`${jsfont.className} h-[44px]  bg-[#7e33e0] flex justify-around items-center`}>
            <div className='flex md:flex-row flex-col md:items-center md:gap-10 md:text-[16px] text-[12px] text-[#f1f1f1] font-semibold'>
                <h1 className='flex gap-3 items-center'><span><MdOutlineEmail /></span> mhhasanul@gmail.com</h1>
                <h1 className='flex gap-3 items-center'><span><MdPhoneInTalk /></span> (12345)67890</h1>

            </div>
            <div className='flex items-center md:gap-4 gap-1'>

                <form className='bg-transparent'>

                    <select
                        className='bg-transparent ring-offset-0 md:text-[16px] text-[12px]'
                        id="language"
                    >
                        <option className='bg-[#7e33e0] ' value="en">English</option>
                        <option className='bg-[#7e33e0] ' value="ur">Urdu</option>
                        <option className='bg-[#7e33e0] ' value="es">Spanish</option>
                        <option className='bg-[#7e33e0] ' value="fr">French</option>
                        <option className='bg-[#7e33e0] ' value="de">German</option>
                    </select>
                    <select
                        className='bg-transparent md:text-[16px] text-[12px]'
                        id="currency"
                    >
                        <option className='bg-[#7e33e0] ' value="usd">USD</option>
                        <option className='bg-[#7e33e0] ' value="eur">EUR</option>
                        <option className='bg-[#7e33e0] ' value="gbp">GBP</option>
                        <option className='bg-[#7e33e0] ' value="inr">INR</option>
                        <option className='bg-[#7e33e0] ' value="jpy">JPY</option>
                    </select>
                </form>
                <h1 className='flex gap-1 items-center'>Login<span><IoPersonOutline /></span></h1>
                <h1 className=' gap-1 items-center md:flex hidden'>Wishlist<span><CiHeart /></span></h1>
                <LuShoppingCart className='md:block hidden'/>
            </div>
        </div>
    )
}

export default Head