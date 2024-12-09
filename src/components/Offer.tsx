import { Josefin_Sans, Lato } from "next/font/google";
import Image from "next/image";

const lato = Lato({ subsets: ["latin"], weight: ["400"] });
const jsfont = Josefin_Sans({ subsets: ["latin"] });

const Offer = () => {
    return (
        <div className={`${lato.className} bg-white py-10`}>
            <h1 className={`${jsfont} text-[42px] text-center font-bold py-12 text-[#151875]`}>What Shopex Offer!</h1>
            <div className="flex flex-wrap justify-center gap-6">
                {/* 1 */}
                <div className="flex hover:scale-105 duration-150 flex-col gap-3 justify-center p-3 shadow-lg w-[270px] h-[320px] text-center items-center">
                    <Image src={"/images/i1.png"} alt="icon one" width={60} height={60}/>

                    <h1 className="text-[20px] font-bold text-[#151875]">24/7 Support</h1>
                    <p className="text-[16px] font-semibold text-slate-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                </div>
                {/* 2 */}
                <div className="flex hover:scale-105 duration-150 flex-col gap-3 justify-center p-3 shadow-lg w-[270px] h-[320px] text-center items-center">
                    <Image src={"/images/i2.png"} alt="icon one" width={60} height={60}/>

                    <h1 className="text-[20px] font-bold text-[#151875]">24/7 Support</h1>
                    <p className="text-[16px] font-semibold text-slate-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                </div>
                {/* 3 */}
                <div className="flex hover:scale-105 duration-150 flex-col gap-3 justify-center p-3 shadow-lg w-[270px] h-[320px] text-center items-center">
                    <Image src={"/images/i3.png"} alt="icon one" width={60} height={60}/>

                    <h1 className="text-[20px] font-bold text-[#151875]">24/7 Support</h1>
                    <p className="text-[16px] font-semibold text-slate-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                </div>
                {/* 4 */}
                <div className="flex hover:scale-105 duration-150 flex-col gap-3 justify-center p-3 shadow-lg w-[270px] h-[320px] text-center items-center">
                    <Image src={"/images/i4.png"} alt="icon one" width={60} height={60}/>

                    <h1 className="text-[20px] font-bold text-[#151875]">24/7 Support</h1>
                    <p className="text-[16px] font-semibold text-slate-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                </div>
            </div>
        </div>
    )
}

export default Offer