import useSEO from "../hooks/useSEO";
import Hero from "../components/sections/Hero";
import AboutPreview from "../components/sections/AboutPreview";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import ManufacturingExcellence from "../components/sections/ManufacturingExcellence";
import DiamondsSection from "../components/sections/DiamondsSection";
import FeaturedJewellery from "../components/sections/FeaturedJewellery";
import Stats from "../components/sections/Stats";
import VisionMission from "../components/sections/VisionMission";
import CTA from "../components/sections/CTA";

export default function Home() {
  useSEO(
    "Manufacturers & Exporters of Fine Jewellery",
    "Misha Jewels Private Limited — manufacturers and exporters of premium diamond, gold and silver jewellery, handcrafted in Surat SEZ, Gujarat since 2023."
  );

  return (
    <>
      <Hero />
      <AboutPreview />
      <WhyChooseUs />
      <ManufacturingExcellence />
      <DiamondsSection />
      <FeaturedJewellery />
      <Stats />
      <VisionMission />
      <CTA />
    </>
  );
}
