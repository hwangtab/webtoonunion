import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ActivitiesSection from '@/components/sections/ActivitiesSection';
import JoinUsSection from '@/components/sections/JoinUsSection';
import FAQSection from '@/components/sections/FAQSection';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <main className="flex flex-col min-h-screen">
        <HeroSection />
        <AboutSection />
        <ActivitiesSection />
        <JoinUsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
