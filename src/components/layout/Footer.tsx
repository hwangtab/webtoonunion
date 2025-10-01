import React from 'react';
import Link from 'next/link';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-navy-900 text-white p-6 text-center sm:text-left">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-sans font-bold mb-4">
              웹툰작가노동조합
            </h3>
            <p className="text-sm mb-4 font-sans">
              웹툰 창작자들의 권익 보호와 공정한 산업 환경 조성을 위해
              노력합니다.
            </p>
            <p className="text-sm font-sans">
              이메일:{' '}
              <Link
                href="mailto:webtooncreatorunion@gmail.com"
                className="hover:text-yellow-500 transition-colors"
              >
                webtooncreatorunion@gmail.com
              </Link>
            </p>
          </div>
          <div className="text-center">
            <h4 className="text-lg font-sans font-bold mb-4">빠른 링크</h4>
            <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8 text-sm justify-center">
              <li>
                <Link
                  href="#about"
                  className="hover:text-yellow-500 transition-colors font-sans"
                >
                  소개
                </Link>
              </li>
              <li>
                <Link
                  href="#activities"
                  className="hover:text-yellow-500 transition-colors font-sans"
                >
                  주요 활동
                </Link>
              </li>
              <li>
                <Link
                  href="#join"
                  className="hover:text-yellow-500 transition-colors font-sans"
                >
                  가입 안내
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-right">
            <h4 className="text-lg font-sans font-bold mb-4">SNS</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="https://www.facebook.com/webtooncreatorunion/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-500 transition-colors font-sans"
                >
                  Facebook
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-navy-500/30 pt-4 text-center text-sm">
          <p className="font-sans">
            &copy; 2025 웹툰작가노동조합. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
