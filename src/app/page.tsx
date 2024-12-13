import Discount from "@/components/Discount";
import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import Latest from "@/components/Latest";
import MainSofa from "@/components/MainSofa";
import Offer from "@/components/Offer";
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
    </div>
  );
}
