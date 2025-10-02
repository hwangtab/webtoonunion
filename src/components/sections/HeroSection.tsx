'use client';

import Button from '../common/Button';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative h-[60vh] sm:h-[70vh] md:h-screen w-full bg-[url('/images/webtoonunion4.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 bg-black/80" /> {/* 오버레이 */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          웹툰 작가 노동조합
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl drop-shadow-md">
          웹툰 작가들의 권익 보호와 창작 환경 개선을 위해 함께합니다.
        </p>
        <Button>가입하기</Button>
      </div>
    </section>
  );
};

export default HeroSection;
