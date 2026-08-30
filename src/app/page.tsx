import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import YandexDelivery from "@/components/YandexDelivery";
import PopularSection from "@/components/PopularSection";
import About from "@/components/About";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#111111] flex flex-col justify-between overflow-x-hidden selection:bg-[#FFC700] selection:text-[#111111]">
      <Header />
      <Hero />
      <MenuSection />
      <YandexDelivery />
      <PopularSection />
      <About />
      <LocationSection />
      <Footer />
    </main>
  );
}
