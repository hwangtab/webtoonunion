# AGENTS.md (Code Mode)

이 파일은 Code 모드에서 코드 작업 시 지침을 제공합니다.

## 코딩 규칙
- 콘텐츠 하드코딩: 업데이트 시 다중 파일(components/sections 등) 수정 필요, CMS 없음으로 인한 gotcha
- 스타일링: Tailwind CSS utility-first 강제, globals.css에만 네이비(#1E3A8A)/노란색(#FBBF24) 커스텀 클래스 추가
- 임포트: 절대 경로 사용 (@/components/...), Next.js Image 최적화 필수
- 포맷팅: Prettier 커스텀 (.prettierrc: singleQuote true, tabWidth 2, semi false)
- 테스트 추가 시: src/__tests__에 배치, Vitest 사용 (Jest 피함)