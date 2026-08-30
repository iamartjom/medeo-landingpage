import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import FeaturedCampaign from "@/components/FeaturedCampaign";
import SeasonalMenu from "@/components/SeasonalMenu";
import About from "@/components/About";
import LocationCTA from "@/components/LocationCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111111] text-[#FAF8F5] flex flex-col justify-between overflow-x-hidden selection:bg-[#FFC700] selection:text-[#111111]">
      <Header />
      <Hero />
      <MenuSection />
      <FeaturedCampaign />
      <SeasonalMenu />
      <About />
      <LocationCTA />
      <Footer />
    </main>
  );
}
