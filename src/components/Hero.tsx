import { Josefin_Sans, Lato } from "next/font/google";
import Image from "next/image";

const lato = Lato({ subsets: ["latin"], weight: ["400"] });
const jsfont = Josefin_Sans({ subsets: ["latin"] });

const Hero = () => {
    return (
        <div className={`${lato.className} lg:h-[90vh] h-[100vh] relative bg-[#f2f0ff] flex md:flex-row flex-col items-center md:justify-evenly md:p-36 overflow-hidden`}>
            <div className="md:space-y-1 md:flex-1 ml-10 pt-24 md:pt-0 md:mb-0 mb-28">
                <p className="text-[16px] text-[#fb2e86]">Best Furniture For Your Castle....</p>
                <h1 className={`${jsfont.className} text-black md:text-[4vw] text-[40px] font-bold`}>New Furniture Collection
                    Trends in 2020</h1>
                <p className="text-[16px] font-bold text-[#8a8fb9]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                    in phasellus non in justo.</p>

                <button className="text-[17px] font-semibold text-white bg-[#fb2e86] py-[10px] px-[24px] rounded-sm mt-5">Shop Now</button>
            </div>
            <div>
                <div className="relative md:w-[400px] w-[280px] h-[200px] mx-auto flex-1">
                    {/* Main Image */}
                    <Image
                        src="/images/main.png"
                        alt="Main"
                        width={400}
                        height={300}
                        className="z-10 mx-auto absolute md:top-[-90px] top-[-50px]"
                    />

                    {/* el.png (Behind Main) */}
                    <Image
                        src="/images/el.png"
                        alt="Background Element"
                        width={456}
                        height={489}
                        className="absolute md:w-[456px] w-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
                    />

                    {/* el.png (Behind Main) */}
                    <Image
                        src="/images/el.png"
                        alt="Background Element"
                        width={456}
                        height={489}
                        className="absolute md:w-[456px] w-[300px] top-[40%] left-[60%] -translate-x-1/2 -translate-y-1/2 z-0"
                    />

                    {/* gr.png (Top-Right Corner) */}
                    <Image
                        src="/images/gr.png"
                        alt="Top Right Element"
                        width={100}
                        height={100}
                        className="absolute md:w-[100px] w-[60px] md:top-[-110px] top-[-60px] md:right-[-40px] right-[-26px]"
                    />

                </div>
            </div>

            <Image
                src="/images/lamp.png"
                alt="Top Right Element"
                width={220}
                height={220}
                className="absolute top-0 md:left-[-10px] left-[-2px] md:w-[220px] w-[100px]"
            />

        </div>
    )
}

export default Hero