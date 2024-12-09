import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import Latest from "@/components/Latest";
import MainSofa from "@/components/MainSofa";
import Offer from "@/components/Offer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Featured />
      <Latest/>
      <Offer/>
      <MainSofa/>
    </div>
  );
}
