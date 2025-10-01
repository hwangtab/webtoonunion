# AGENTS.md

이 파일은 이 저장소의 코드 작업 시 에이전트에게 지침을 제공합니다.

## 빌드/린트/테스트 명령어
- 개발 서버: `npm run dev` 또는 `yarn dev` (Next.js 표준, 포트 3000)
- 빌드: `npm run build` 또는 `yarn build` (프로덕션 빌드 생성)
- 시작: `npm start` 또는 `yarn start` (빌드된 앱 실행)
- 린트: `npm run lint` 또는 `yarn lint` (ESLint 실행, husky/lint-staged로 커밋 시 자동)
- 포맷: `npm run format` 또는 `yarn format` (Prettier 적용)
- 단일 테스트: 프로젝트에 테스트가 없으므로, Jest 추가 시 `npm test -- src/components/Button.test.tsx` (예시, 표준 Vitest/Jest 사용 가정)

## 코드 스타일 지침
- TypeScript 필수: 모든 컴포넌트 props에 타입 정의 (tsconfig.json에서 엄격 모드 활성화 가정)
- 포맷팅: Prettier 사용, Git 커밋 시 husky/lint-staged로 자동 포맷/린트
- 린팅: ESLint로 안티패턴 방지, Next.js 권장 규칙 따름
- 네이밍: 컴포넌트는 PascalCase (e.g., HeroSection.tsx), 파일은 kebab-case 피함
- 임포트: 절대 경로 사용 (@/components/...), Next.js Image 최적화 필수
- 에러 핸들링: 컴포넌트에서 try-catch 최소화, Next.js Error Boundary 사용
- 스타일링: Tailwind CSS utility-first, globals.css에 커스텀 클래스만 추가

## 프로젝트 특화 컨벤션 (계획서에서 발견)
- Atomic Design: common (Button 등), layout (Header), sections (HeroSection)으로 컴포넌트 분리
- 모바일 우선: 모든 레이아웃 모바일부터 설계, Tailwind breakpoint sm:부터
- 폰트: Pretendard 웹폰트 사용 (globals.css에 @import)
- 컬러: 네이비 (#1E3A8A) 주요, 노란색 (#FBBF24) CTA, 흰색 기반
- 배포: Vercel 자동, Git-Flow (main/develop/feature/* 브랜치), PR 시 프리뷰 URL 생성
- SEO: Next.js Head로 메타 태그, sitemap.xml 자동 생성

## 비표준 패턴
- 가입 CTA: 모든 '조합 가입하기' 버튼은 구글 설문 링크로 target="_blank"
- 내비게이션: react-scroll로 섹션 스크롤, 헤더 sticky
- CMS 제외: 초기 정적 사이트, 콘텐츠는 코드 내 하드코딩 (향후 Headless CMS 고려)

테스트는 계획에 없음; 추가 시 src/__tests__에 배치, Vitest 권장.