import HomeBannerSlider from "@/Components/HomeBannerSlider";
import TrendingIdeas from "@/Components/TrendingIdeas";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <HomeBannerSlider/>
    <TrendingIdeas/>
   </div>
  );
}
