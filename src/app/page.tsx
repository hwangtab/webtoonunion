import type { Metadata } from 'next';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ActivitiesSection from '@/components/sections/ActivitiesSection';
import JoinUsSection from '@/components/sections/JoinUsSection';
import FAQSection from '@/components/sections/FAQSection';

export const metadata: Metadata = {
  title: '웹툰작가노동조합 공식 사이트',
  description:
    '웹툰 창작 노동자들의 권익 보호를 위한 노동조합입니다. 가입하고 함께하세요.',
  keywords: ['웹툰 노조', '웹툰 작가 노동', '조합 가입'],
  openGraph: {
    title: '웹툰작가노동조합 공식 사이트',
    description:
      '웹툰 창작 노동자들의 권익 보호를 위한 노동조합입니다. 가입하고 함께하세요.',
    images: '/images/logo.png',
    url: 'https://yourdomain.com',
  },
};

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Head>
        <title>웹툰작가노동조합 공식 사이트</title>
        <meta
          name="description"
          content="웹툰 창작 노동자들의 권익 보호를 위한 노동조합입니다. 가입하고 함께하세요."
        />
        <meta name="keywords" content="웹툰 노조, 웹툰 작가 노동, 조합 가입" />
        <meta property="og:title" content="웹툰작가노동조합 공식 사이트" />
        <meta
          property="og:description"
          content="웹툰 창작 노동자들의 권익 보호를 위한 노동조합입니다. 가입하고 함께하세요."
        />
        <meta property="og:image" content="/images/logo.png" />
        <meta property="og:url" content="https://yourdomain.com" />
      </Head>
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
    </>
  );
};

export default Home;
