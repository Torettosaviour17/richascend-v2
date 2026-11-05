import HeroSection from "../components/market-components/HeroSection";
import ProductShowcase from "../components/market-components/ProductShowcase";
import TechSection from "../components/market-components/TechSection";
import VideoSection from "../components/market-components/VideoSection";

const MarketPage = () => {
  return (
    <div className="dark:bg-gray-900">
      <HeroSection />
      <div>
        <ProductShowcase />
        <TechSection />
        <VideoSection />
      </div>
    </div>
  );
};

export default MarketPage;
