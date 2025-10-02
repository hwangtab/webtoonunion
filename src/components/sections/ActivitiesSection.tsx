import React from 'react';
import SectionTitle from '@/components/common/SectionTitle';
import Card from '@/components/common/Card';
import Image from 'next/image';

const ActivitiesSection: React.FC = () => {
  const activities = [
    {
      title: '단체 교섭',
      description:
        '플랫폼 사업자와의 단체 교섭을 통해 공정한 계약 조건과 로열티 분배를 보장합니다. 작가들의 목소리를 모아 더 나은 조건을 협상합니다.',
      icon: '/images/icon.png',
    },
    {
      title: '제도 개선',
      description:
        '웹툰 산업 관련 법제화와 정책 개선을 위해 정부 및 관련 기관에 건의합니다. 저작권 보호와 노동권 강화를 위한 활동을 펼칩니다.',
      icon: '/images/icon.png',
    },
    {
      title: '권익 보호',
      description:
        '개별 작가들의 권익 침해 사례에 대해 법적 지원과 상담을 제공합니다. 분쟁 해결을 위한 전문가 네트워크를 운영합니다.',
      icon: '/images/icon.png',
    },
    {
      title: '연대 활동',
      description:
        '국내외 창작자 단체와의 연대 활동을 통해 산업 전반의 변화를 이끕니다. 교육 세미나와 워크숍을 통해 지식을 공유합니다.',
      icon: '/images/icon.png',
    },
  ];

  return (
    <section id="activities" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <SectionTitle eyebrow="What we do" className="sm:text-4xl">
            조합이 만드는 변화들
          </SectionTitle>
          <p className="mt-4 text-sm leading-relaxed text-pretty text-gray-600 sm:text-base">
            조합은 현장의 목소리를 모아 제도화하고, 작가 개인이 겪는 어려움을
            함께 해결합니다. 각 활동은 서로 연결되어 지속 가능한 생태계를
            지향합니다.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {activities.map((activity, index) => (
            <Card
              key={index}
              title={activity.title}
              description={activity.description}
              icon={activity.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
