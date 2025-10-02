import React from 'react';
import Link from 'next/link';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="relative mt-20 bg-gradient-to-b from-primary via-[#1b2f6b] to-[#162758] text-white">
      <div className="absolute inset-x-0 -top-10 h-10 bg-gradient-to-b from-transparent via-primary/20 to-primary/60" />
      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.9fr_0.9fr]">
          <div>
            <h3 className="text-lg font-bold">웹툰작가노동조합</h3>
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              우리는 창작 노동이 존중받는 산업을 위해 연대합니다. 공정 계약과
              건강한 작업 환경, 그리고 작가의 권리를 지키는 제도를 만들기 위해
              목소리를 모읍니다.
            </p>
            <p className="mt-6 text-sm font-medium text-white/90">
              이메일{' '}
              <Link
                href="mailto:webtooncreatorunion@gmail.com"
                className="underline decoration-yellow-400/60 underline-offset-4 transition-colors hover:text-yellow-300"
              >
                webtooncreatorunion@gmail.com
              </Link>
            </p>
          </div>
          <div className="text-sm">
            <h4 className="text-base font-semibold">빠른 링크</h4>
            <ul className="mt-4 space-y-3 text-white/80">
              <li>
                <Link
                  href="#about"
                  className="transition-colors hover:text-yellow-300"
                >
                  조합 소개
                </Link>
              </li>
              <li>
                <Link
                  href="#activities"
                  className="transition-colors hover:text-yellow-300"
                >
                  주요 활동
                </Link>
              </li>
              <li>
                <Link
                  href="#join"
                  className="transition-colors hover:text-yellow-300"
                >
                  가입 안내
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="transition-colors hover:text-yellow-300"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-sm">
            <h4 className="text-base font-semibold">소셜 채널</h4>
            <ul className="mt-4 space-y-3 text-white/80">
              <li>
                <Link
                  href="https://www.facebook.com/webtooncreatorunion/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-yellow-300"
                >
                  Facebook
                </Link>
              </li>
            </ul>
            <p className="mt-6 text-xs uppercase tracking-[0.28em] text-white/50">
              함께 목소리를 나누세요
            </p>
          </div>
        </div>
        <div className="mt-12 border-t border-white/20 pt-6 text-center text-xs text-white/60">
          &copy; 2025 웹툰작가노동조합. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
