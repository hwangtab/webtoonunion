# AGENTS.md

This file provides guidance to agents when working with code in this repository.

## 프로젝트 특화 컨벤션
- Atomic Design: common (Button 등), layout (Header), sections (HeroSection)으로 컴포넌트 분리
- 모바일 우선: 모든 레이아웃 모바일부터 설계, Tailwind breakpoint sm:부터
- 폰트: Pretendard 웹폰트 사용 (globals.css에 @import)
- 컬러: 네이비 (#1E3A8A) 주요, 노란색 (#FBBF24) CTA, 흰색 기반
- 배포: Vercel 자동, Git-Flow (main/develop/feature/* 브랜치), PR 시 프리뷰 URL 생성
- SEO: Next.js Head로 메타 태그, next-sitemap으로 sitemap.xml 자동 생성 (postbuild 스크립트)

## 비표준 패턴
- 가입 CTA: 모든 '조합 가입하기' 버튼은 구글 설문 링크로 target="_blank"
- 내비게이션: react-scroll로 섹션 스크롤, 헤더 sticky
- CMS 제외: 초기 정적 사이트, 콘텐츠는 코드 내 하드코딩 (업데이트 시 다중 파일 수정 필요, 향후 Headless CMS 고려)

## 코드 스타일 세부
- 포맷팅: Prettier (.prettierrc: singleQuote true, tabWidth 2, semi false 등 커스텀)
- 스타일링: Tailwind CSS utility-first, globals.css에 커스텀 클래스만 추가 (네이비/노란색 팔레트 사용)
- 테스트: 없음, 추가 시 src/__tests__에 배치, Vitest 권장 (Jest 대신 Vitest 사용)