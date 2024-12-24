import Discount from "@/components/Discount";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Latest from "@/components/Latest";
import Latestblog from "@/components/Latestblog";
import MainSofa from "@/components/MainSofa";
import Offer from "@/components/Offer";
import Subscribe from "@/components/Subscribe";
import Topcategories from "@/components/Topcategories";
import Trending from "@/components/Trending";

export default function Home() {
  return (
    <div>
      <Hero />
      <Featured />
      <Latest/>
      <Offer/>
      <MainSofa/>
      <Trending/>
      <Discount/>
      <Topcategories/>
      <Subscribe/>
      <Latestblog/>
      <Footer/>
    </div>
  );
}
