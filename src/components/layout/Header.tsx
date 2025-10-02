'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Button from '@/components/common/Button';

const ScrollLink = dynamic(
  () => import('react-scroll').then((mod) => ({ default: mod.Link })),
  { ssr: false }
);

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const headerRef = useRef<HTMLElement | null>(null);
  const [scrollOffset, setScrollOffset] = useState(-128);

  useEffect(() => {
    const updateOffset = () => {
      const height = headerRef.current?.getBoundingClientRect().height ?? 0;
      setScrollOffset(-(height + 24));
    };

    updateOffset();
    window.addEventListener('resize', updateOffset);

    return () => {
      window.removeEventListener('resize', updateOffset);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-white/40 bg-white/85 backdrop-blur-md shadow-sm supports-[backdrop-filter]:bg-white/70"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-3 transition-all sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex items-center justify-between sm:justify-start">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="웹툰작가노동조합 로고"
              width={132}
              height={64}
              priority
              sizes="(max-width: 768px) 160px, 200px"
              className="h-auto w-28 transition-transform duration-200 sm:w-36"
            />
          </Link>
        </div>
        <nav className="flex w-full flex-col items-center gap-3 text-sm font-medium text-navy-900 sm:w-auto sm:flex-row sm:gap-6 sm:text-base">
          <ScrollLink
            to="hero"
            smooth={true}
            duration={500}
            offset={scrollOffset}
            className="cursor-pointer rounded-full px-4 py-2 transition-colors duration-200 hover:bg-navy-100 hover:text-primary"
          >
            홈
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            offset={scrollOffset}
            className="cursor-pointer rounded-full px-4 py-2 transition-colors duration-200 hover:bg-navy-100 hover:text-primary"
          >
            소개
          </ScrollLink>
          <ScrollLink
            to="activities"
            smooth={true}
            duration={500}
            offset={scrollOffset}
            className="cursor-pointer rounded-full px-4 py-2 transition-colors duration-200 hover:bg-navy-100 hover:text-primary"
          >
            주요 활동
          </ScrollLink>
          <ScrollLink
            to="join"
            smooth={true}
            duration={500}
            offset={scrollOffset}
            className="cursor-pointer rounded-full px-4 py-2 transition-colors duration-200 hover:bg-navy-100 hover:text-primary"
          >
            가입 안내
          </ScrollLink>
          <ScrollLink
            to="faq"
            smooth={true}
            duration={500}
            offset={scrollOffset}
            className="cursor-pointer rounded-full px-4 py-2 transition-colors duration-200 hover:bg-navy-100 hover:text-primary"
          >
            FAQ
          </ScrollLink>
        </nav>
        <div className="flex w-full items-center sm:w-auto">
          <Button
            href="https://drive.google.com/file/d/1qhFB8bIosFaN7CKdWzqsW5XFE87HVIPn/view"
            target="_blank"
            className="w-full sm:w-auto"
          >
            조합 가입하기
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
