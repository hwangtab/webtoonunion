import React from 'react';
import SectionTitle from '@/components/common/SectionTitle';
import Accordion from '@/components/common/Accordion';

const FAQSection: React.FC = () => {
  const faqQuestions = [
    {
      question: '조합 활동 시 신분이 노출되나요?',
      answer:
        '아니요, 조합 활동은 대부분 비공개로 진행되며, 작가님의 신분 보호를 최우선으로 합니다. 공개 활동은 작가님의 동의 하에 선택적으로 참여할 수 있습니다. 플랫폼이나 업계 관계자에게 신분이 노출되지 않도록 철저히 관리합니다.',
    },
    {
      question: '조합비는 얼마인가요?',
      answer:
        '조합비는 월 5,000원입니다. 모든 조합원이 똑같은 권리를 가지며, 조합비는 단체 교섭, 법적 지원, 교육 프로그램 등 조합 활동에 전액 사용되며, 매년 투명하게 공개합니다. 첫 가입 시 연회비로 납부 가능합니다.',
    },
    {
      question: '프리랜서도 가입할 수 있나요?',
      answer:
        '네, 프리랜서 웹툰 작가도 적극적으로 환영합니다. 고용 형태와 관계없이 웹툰 창작 활동을 하는 모든 분이 가입 자격이 있습니다. 프리랜서 특성상 불안정한 소득과 계약 문제를 중점적으로 지원합니다.',
    },
    {
      question: '어떤 도움을 받을 수 있나요?',
      answer:
        '단체 교섭을 통한 계약 개선, 법적 상담 및 소송 지원, 저작권 교육 프로그램, 네트워킹 이벤트, 복지 혜택(의료/상담) 등을 제공합니다. 개별 작가의 권익 침해 시 즉각 대응하며, 산업 전반의 제도 개선 활동에도 참여할 수 있습니다.',
    },
  ];

  return (
    <section id="faq" className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="FAQ" className="sm:text-4xl">
          자주 묻는 질문
        </SectionTitle>
        <p className="mt-4 text-center text-sm leading-relaxed text-pretty text-gray-600 sm:text-base">
          더 궁금한 점은 언제든{' '}
          <a
            href="mailto:webtooncreatorunion@gmail.com"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            webtooncreatorunion@gmail.com
          </a>
          으로 문의해주세요.
        </p>
        <div className="mt-10">
          <Accordion questions={faqQuestions} />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
