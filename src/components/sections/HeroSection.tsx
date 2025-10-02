'use client';

import Button from '../common/Button';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-[60vh] w-full overflow-hidden rounded-b-[2.5rem] bg-navy-900/90 shadow-card sm:min-h-[70vh] md:min-h-[78vh]"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 scale-105 bg-[url('/images/webtoonunion4.jpg')] bg-cover bg-center bg-no-repeat" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/88 via-navy-900/70 to-navy-900/90" />
        <div className="absolute inset-x-0 -bottom-40 h-80 bg-gradient-to-t from-[var(--color-surface)] to-transparent" />
      </div>
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-4 py-20 text-center text-white sm:px-8">
        <p className="mb-3 text-sm uppercase tracking-[0.28em] text-yellow-400/90">
          WEBTOON CREATOR UNION
        </p>
        <h1 className="mb-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          창작 환경을 지키는 가장 든든한 연대
        </h1>
        <p className="mb-10 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
          조합은 공정한 계약, 안정된 작업 환경, 그리고 서로를 지켜주는 정보
          공유로 웹툰 산업의 미래를 만들어 갑니다. 지금 함께하세요.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <Button href="#join" className="px-8">
            가입 절차 살펴보기
          </Button>
          <Button
            href="https://drive.google.com/file/d/1qhFB8bIosFaN7CKdWzqsW5XFE87HVIPn/view"
            target="_blank"
            className="bg-white text-navy-900 hover:bg-yellow-100"
          >
            신청서 바로 다운로드
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
