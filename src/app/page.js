import HomeBannerSlider from "@/Components/HomeBannerSlider";
import HowItWorks from "@/Components/HowItWorks";
import TrendingIdeas from "@/Components/TrendingIdeas";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <HomeBannerSlider/>
    <TrendingIdeas/>
    <HowItWorks/>
   </div>
  );
}
