import React from 'react';
import Button from '../common/Button';
import SectionTitle from '../common/SectionTitle';

const JoinUsSection = () => {
  return (
    <section id="join" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <SectionTitle className="text-3xl md:text-4xl font-bold text-navy-900 mb-8 text-center">
            가입 안내
          </SectionTitle>
        </div>
        <div className="max-w-4xl mx-auto space-y-6">
          <ol className="space-y-6 text-gray-700 text-base leading-relaxed">
            <li>
              <div className="flex flex-col items-start gap-2">
                <span className="font-semibold text-navy-900">
                  신청서 다운로드
                </span>
                <p className="text-gray-600">
                  가입 신청서 HWP 파일을 다운로드하세요.
                </p>
                <Button
                  href="https://drive.google.com/file/d/1qhFB8bIosFaN7CKdWzqsW5XFE87HVIPn/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  가입 신청서 다운로드
                </Button>
              </div>
            </li>
            <li>
              <div className="flex flex-col items-start gap-2">
                <span className="font-semibold text-navy-900">
                  작성 및 서명
                </span>
                <p className="text-gray-600">
                  다운로드한 HWP 파일을 작성하고 서명하세요.
                </p>
              </div>
            </li>
            <li>
              <div className="flex flex-col items-start gap-2">
                <span className="font-semibold text-navy-900">제출</span>
                <p className="text-gray-600">
                  작성된 신청서를 웹툰노조 이메일
                  (webtooncreatorunion@gmail.com)로 제출합니다.
                </p>
                <Button
                  as="a"
                  href="mailto:webtooncreatorunion@gmail.com?subject=웹툰노조 가입 신청서 제출&body=첨부: 가입신청서.hwp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  신청서 메일 보내기
                </Button>
              </div>
            </li>
            <li>
              <div className="flex flex-col items-start gap-2">
                <span className="font-semibold text-navy-900">
                  심사 및 승인
                </span>
                <p className="text-gray-600">
                  조합 사무국에서 신청서를 검토하고, 3영업일 이내에 승인 여부를
                  통보합니다.
                </p>
              </div>
            </li>
            <li>
              <div className="flex flex-col items-start gap-2">
                <span className="font-semibold text-navy-900">가입 완료</span>
                <p className="text-gray-600">
                  승인 후 조합비 납부와 함께 정식 조합원이 됩니다. 환영 이메일을
                  발송합니다.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;
