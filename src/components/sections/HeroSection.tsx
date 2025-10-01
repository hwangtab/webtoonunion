import React from 'react';
import Image from 'next/image';
import Button from '@/components/common/Button';

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="full-width bg-gradient-to-r from-navy-500 to-blue-600 text-white py-20 text-center"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-sans font-bold mb-6 leading-tight">
          우리의 권리, 우리가 함께 만들고 지킵니다.
        </h1>
        <p className="text-base md:text-lg text-white mb-8 max-w-2xl mx-auto font-sans">
          웹툰 작가 노동조합은 창작자들의 권익을 보호하고, 공정한 산업 환경을
          조성하기 위해 설립되었습니다. 함께 힘을 모아 더 나은 미래를
          만들어갑시다.
        </p>
        <Button
          href="https://drive.google.com/file/d/1qhFB8bIosFaN7CKdWzqsW5XFE87HVIPn/view"
          target="_blank"
          className="text-lg py-4 px-8"
        >
          조합 가입하기
        </Button>
        <div className="mt-12">
          <Image
            src="/images/icon.png"
            alt="웹툰 작가 연대 일러스트"
            width={300}
            height={200}
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="lazy"
            className="mx-auto opacity-50"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
