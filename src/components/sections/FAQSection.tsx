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
        '정회원 기준 월 10,000원입니다. 준회원은 5,000원으로 부담을 최소화하였습니다. 조합비는 단체 교섭, 법적 지원, 교육 프로그램 등 조합 활동에 전액 사용되며, 매년 투명하게 공개합니다. 첫 가입 시 연회비로 납부 가능합니다.',
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
    <section id="faq" className="py-12 px-4 max-w-4xl mx-auto">
      <div className="max-w-4xl mx-auto">
        <SectionTitle>자주 묻는 질문</SectionTitle>
        <Accordion questions={faqQuestions} />
      </div>
    </section>
  );
};

export default FAQSection;
