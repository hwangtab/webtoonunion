import React from 'react';
import Button from '../common/Button';
import SectionTitle from '../common/SectionTitle';

const steps = [
  {
    title: '신청서 다운로드',
    description: '공식 양식(HWP)을 내려받아 개인 정보를 작성할 준비를 합니다.',
    action: {
      label: '가입 신청서 다운로드',
      href: 'https://drive.google.com/file/d/1qhFB8bIosFaN7CKdWzqsW5XFE87HVIPn/view',
      target: '_blank',
    },
  },
  {
    title: '작성 및 서명',
    description:
      '다운로드한 양식을 작성하고, 마지막 페이지에 자필 서명을 추가합니다.',
  },
  {
    title: '제출',
    description: '완료된 신청서를 웹툰노조 이메일로 첨부해 전송합니다.',
    email: 'webtooncreatorunion@gmail.com',
    action: {
      label: '신청서 메일 보내기',
      href: 'mailto:webtooncreatorunion@gmail.com?subject=웹툰노조 가입 신청서 제출&body=첨부: 가입신청서.hwp',
      target: '_blank',
    },
  },
  {
    title: '심사 및 승인',
    description:
      '사무국에서 신청서를 검토하고, 3영업일 이내에 결과를 이메일로 안내합니다.',
  },
  {
    title: '가입 완료',
    description:
      '조합비 납부와 환영 안내 수신 후 정식 조합원으로 활동을 시작합니다.',
  },
];

const JoinUsSection = () => {
  return (
    <section id="join" className="relative py-20">
      <div className="absolute inset-x-0 top-0 h-[60%] bg-gradient-to-b from-primary/5 via-white/40 to-transparent" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionTitle className="text-3xl sm:text-4xl" eyebrow="Join union">
          가입은 이렇게 진행됩니다
        </SectionTitle>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-pretty text-gray-600 sm:text-base">
          모든 단계는 온라인으로 진행됩니다. 조합 가입 신청서는 구글 폼과 같은
          공개 플랫폼 대신 이메일로 접수되어 개인정보가 안전하게 관리됩니다.
        </p>
        <ol className="relative mx-auto mt-12 max-w-3xl list-none border-l border-navy-100 pl-10">
          {steps.map((step, index) => (
            <li key={step.title} className="relative mb-10 last:mb-0">
              <span className="absolute -left-6 flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-white font-semibold text-primary shadow-card">
                {index + 1}
              </span>
              <div className="rounded-3xl bg-white/90 p-6 shadow-card">
                <h3 className="text-lg font-bold text-navy-900 sm:text-xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-pretty text-gray-600 sm:text-base">
                  {step.description}
                </p>
                {step.email && (
                  <div className="mt-4 flex flex-wrap items-center gap-2 rounded-2xl bg-primary/5 px-4 py-3 text-sm text-primary">
                    <span className="font-semibold uppercase tracking-[0.2em] text-primary/70">
                      EMAIL
                    </span>
                    <a
                      href={`mailto:${step.email}`}
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      {step.email}
                    </a>
                  </div>
                )}
                {step.action && (
                  <div className="mt-4">
                    <Button href={step.action.href} target={step.action.target}>
                      {step.action.label}
                    </Button>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default JoinUsSection;
