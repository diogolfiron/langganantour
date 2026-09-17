import HeroSection from "@/components/HeroSection";
import PackagesGrid from "@/components/PackagesGrid";
import WhyUsSection from "@/components/WhyUsSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactCTA from "@/components/ContactCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PackagesGrid />
      <WhyUsSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactCTA />
    </>
  );
}
