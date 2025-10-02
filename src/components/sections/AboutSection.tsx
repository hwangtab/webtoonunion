import Image from 'next/image';
import SectionTitle from '../common/SectionTitle';

const AboutSection = () => {
  return (
    <section id="about" className="relative py-20">
      <div
        className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/70 via-white/30 to-transparent"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-stretch gap-8 lg:grid-cols-2 xl:gap-16">
          <div className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-white/90 p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover sm:p-10">
            <div className="absolute -top-16 -right-20 h-40 w-40 rounded-full bg-yellow-500/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-20 h-48 w-48 rounded-full bg-primary/15 blur-3xl" />
            <div className="relative flex h-full flex-col space-y-6">
              <SectionTitle
                eyebrow="About us"
                align="left"
                className="text-3xl sm:text-4xl"
              >
                웹툰 작가가 안전하게 창작할 수 있는 기반
              </SectionTitle>
              <p className="text-base leading-relaxed text-pretty text-gray-700 sm:text-lg">
                웹툰 작가 노동조합은 창작자들의 권익을 지키고 건강한 산업
                생태계를 만들기 위해 2019년부터 목소리를 모으고 있습니다. 불공정
                계약, 열악한 작업 환경, 정보 비대칭을 해소하며 서로의 경험을
                연결합니다.
              </p>
              <ul className="space-y-3 text-sm text-gray-600 sm:text-base">
                <li className="flex items-start gap-3 text-pretty">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-yellow-500" />
                  단체 교섭과 정책 제안을 통해 공정한 계약 기준을 만듭니다.
                </li>
                <li className="flex items-start gap-3 text-pretty">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-yellow-500" />
                  법률·세무·복지 지원으로 작가가 창작에 집중할 수 있도록
                  돕습니다.
                </li>
                <li className="flex items-start gap-3 text-pretty">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-yellow-500" />
                  국내외 창작자 단체와 연대하여 산업 전반의 변화를 끌어냅니다.
                </li>
              </ul>
            </div>
          </div>
          <div className="relative grid h-full grid-rows-2 gap-6">
            <div className="relative overflow-hidden rounded-3xl bg-white/70 p-3 shadow-card backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
              <div className="absolute inset-0 rounded-2xl border border-white/50" />
              <Image
                src="/images/webtoonunion3.jpg"
                alt="웹툰 작가 노동조합 정책 기자회견"
                fill
                className="relative z-10 rounded-2xl object-cover"
                sizes="(max-width: 768px) 100vw, 600px"
                priority
              />
              <div className="absolute bottom-4 left-4 rounded-full bg-white/92 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
                policy action
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl bg-white/70 p-3 shadow-card backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
              <div className="absolute inset-0 rounded-2xl border border-white/50" />
              <Image
                src="/images/webtoonunion5.jpg"
                alt="표준계약서 개정안을 요구하는 기자회견 현장"
                fill
                className="relative z-10 rounded-2xl object-cover"
                sizes="(max-width: 768px) 100vw, 600px"
                priority={false}
              />
              <div className="absolute bottom-4 left-4 rounded-full bg-white/92 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
                solidarity
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
