import Image from 'next/image';
import SectionTitle from '../common/SectionTitle';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
          <div className="flex flex-col items-center md:items-start space-y-6 min-h-[400px] justify-center">
            <div className="text-center md:text-left">
              <SectionTitle>조합 소개</SectionTitle>
            </div>
            <Image
              src="/images/webtoonunion3.jpg"
              alt="웹툰 작가 노동조합 소개 이미지"
              width={400}
              height={300}
              className="w-full max-w-md h-auto rounded-lg shadow-lg mx-auto md:mx-0 object-contain"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
          <div className="flex flex-col justify-center space-y-4 text-left min-h-[400px]">
            <p className="text-gray-700 leading-relaxed text-base">
              웹툰 작가 노동조합은 웹툰 작가들의 권익 보호와 창작 환경 개선을
              위해 설립되었습니다.
            </p>
            <p className="text-gray-700 leading-relaxed text-base">
              단체 교섭, 제도 개선, 권익 보호 활동 등을 통해 작가들의 목소리를
              대변합니다.
            </p>
            <p className="text-gray-700 leading-relaxed text-base">
              함께하는 작가 여러분의 참여를 기다립니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
