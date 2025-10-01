import React from 'react';
import SectionTitle from '@/components/common/SectionTitle';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-white py-12 px-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <SectionTitle>조합 소개</SectionTitle>
        <div className="prose prose-lg max-w-none text-gray-900 font-sans">
          <p className="text-lg mb-6 font-sans">
            웹툰작가노동조합은 웹툰 산업의 창작자들의 권익을 보호하고, 공정한
            노동 환경을 조성하기 위해 2023년에 설립되었습니다. 플랫폼의 불공정한
            계약 구조와 저작권 문제, 과도한 노동 착취 등 웹툰 작가들이 직면한
            다양한 문제를 해결하기 위해 단결된 힘을 발휘합니다.
          </p>
          <p className="text-lg mb-6 font-sans">
            우리의 미션은 작가들의 창작권을 존중받는 산업 생태계를 만들고,
            안정적인 소득과 복지 혜택을 보장하는 것입니다. 단체 교섭, 제도 개선,
            교육 프로그램 등을 통해 작가들의 목소리를 대변합니다.
          </p>
          <p className="text-lg font-sans">
            함께하는 모든 작가 여러분, 우리의 권리를 지키기 위해 조합에
            참여해주세요.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
