'use client';

import { useCallback, type MouseEvent } from 'react';
import Button from '../common/Button';

const HeroSection = () => {
  const handleScrollToJoin = useCallback(
    (event?: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
      event?.preventDefault();
      const target = document.getElementById('join');
      if (!target) return;
      const header = document.querySelector<HTMLElement>(
        '[data-scroll-anchor]'
      );
      const offset = (header?.getBoundingClientRect().height ?? 0) + 24;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    },
    []
  );

  return (
    <section
      id="hero"
      className="relative flex min-h-[60vh] w-full overflow-hidden rounded-b-[2.5rem] bg-navy-900/90 shadow-card sm:min-h-[70vh] md:min-h-[78vh]"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 scale-105 bg-[url('/images/webtoonunion4.jpg')] bg-cover bg-center bg-no-repeat" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.25)_0%,rgba(15,23,42,0.6)_45%,rgba(15,23,42,0.82)_70%,rgba(14,21,38,0.94)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060e21]/92 via-[#0b1736]/88 to-[#0d1a3a]/95" />
        <div className="absolute inset-x-0 -bottom-40 h-80 bg-gradient-to-t from-[var(--color-surface)]/85 to-transparent" />
      </div>
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-4 py-20 text-center text-white sm:px-8">
        <p className="mb-3 text-sm uppercase tracking-[0.28em] text-yellow-400/90 text-pretty">
          WEBTOON CREATOR UNION
        </p>
        <h1 className="mb-4 max-w-3xl text-4xl font-bold leading-tight text-balance sm:text-5xl md:text-6xl">
          창작 환경을 지키는 가장 든든한 연대
        </h1>
        <p className="mb-10 max-w-2xl text-base leading-relaxed text-pretty text-white/85 sm:text-lg">
          조합은 공정한 계약, 안정된 작업 환경, 그리고 서로를 지켜주는 정보
          공유로 웹툰 산업의 미래를 만들어 갑니다. 지금 함께하세요.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <Button href="#join" className="px-8" onClick={handleScrollToJoin}>
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
