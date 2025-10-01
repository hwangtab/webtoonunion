import React from 'react';
import SectionTitle from '@/components/common/SectionTitle';
import Button from '@/components/common/Button';

const JoinUsSection: React.FC = () => {
  return (
    <section id="join" className="bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionTitle>가입 안내</SectionTitle>
        <div className="mb-8">
          <p className="text-lg text-gray-900 font-sans mb-6">
            누구나 가입할 수 있습니다. 웹툰 작가, 프리랜서, 관련 종사자라면
            누구나 환영합니다. 조합원은 정회원과 준회원으로 구분되며, 정회원은
            투표권과 단체 교섭 참여권을 가집니다.
          </p>
        </div>
        <div className="mb-8">
          <h3 className="text-navy-900 font-sans font-bold text-xl mb-4">
            가입 절차
          </h3>
          <ol className="space-y-4 text-gray-900 font-sans list-decimal pl-6">
            <li className="text-lg">
              <strong>신청서 작성:</strong> 온라인 가입 양식을 작성하여 기본
              정보를 제출합니다.
            </li>
            <li className="text-lg">
              <strong>심사 및 승인:</strong> 조합 사무국에서 신청서를 검토하고,
              3영업일 이내에 승인 여부를 통보합니다.
            </li>
            <li className="text-lg">
              <strong>가입 완료:</strong> 승인 후 조합비 납부와 함께 정식
              조합원이 됩니다. 환영 이메일을 발송합니다.
            </li>
          </ol>
        </div>
        <div className="text-center">
          <Button
            href="https://drive.google.com/file/d/1qhFB8bIosFaN7CKdWzqsW5XFE87HVIPn/view"
            target="_blank"
            className="text-lg py-4 px-8 mx-auto"
          >
            조합 가입하기
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;
