'use client';

import React from 'react';
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
  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center py-4">
          <div className="flex items-center space-x-4 mb-4 sm:mb-0">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="웹툰작가노동조합 로고"
                width={120}
                height={60}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-24 sm:w-32"
              />
            </Link>
          </div>
          <nav className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 w-full sm:w-auto">
            <ScrollLink
              to="hero"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-yellow-500 transition-colors text-navy-900 font-sans"
            >
              홈
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-yellow-500 transition-colors text-navy-900 font-sans"
            >
              소개
            </ScrollLink>
            <ScrollLink
              to="activities"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-yellow-500 transition-colors text-navy-900 font-sans"
            >
              주요 활동
            </ScrollLink>
            <ScrollLink
              to="join"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-yellow-500 transition-colors text-navy-900 font-sans"
            >
              가입 안내
            </ScrollLink>
            <ScrollLink
              to="faq"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-yellow-500 transition-colors text-navy-900 font-sans"
            >
              FAQ
            </ScrollLink>
          </nav>
          <div className="w-full sm:w-auto">
            <Button
              href="https://drive.google.com/file/d/1qhFB8bIosFaN7CKdWzqsW5XFE87HVIPn/view"
              target="_blank"
              className="w-full sm:ml-4"
            >
              조합 가입하기
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
