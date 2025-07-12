import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import HostingPlansSection from '@/components/sections/HostingPlansSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16 lg:pt-20">
        <HeroSection />
        <HostingPlansSection />
        <FeaturesSection />
        <TestimonialsSection />
      </div>
      <Footer />
    </main>
  );
}
