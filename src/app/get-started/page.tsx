import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import GetStartedHero from '@/components/sections/GetStartedHero';
import PlanSelection from '@/components/sections/PlanSelection';
import SetupGuide from '@/components/sections/SetupGuide';

export const metadata: Metadata = {
  title: 'Get Started - Dot Web Hosting',
  description: 'Start your web hosting journey with Dot Web Hosting. Choose from our range of hosting plans and get your website online in minutes.',
};

export default function GetStartedPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16 lg:pt-20">
        <GetStartedHero />
        <PlanSelection />
        <SetupGuide />
      </div>
      <Footer />
    </main>
  );
} 