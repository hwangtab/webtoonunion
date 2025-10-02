# AGENTS.md (Architect Mode)

이 파일은 Architect 모드에서 아키텍처 작업 시 지침을 제공합니다.

## 아키텍처 규칙
- Atomic Design 유지: common (Button 등), layout (Header), sections (HeroSection)으로 컴포넌트 분리
- 모바일 우선: 모든 레이아웃 모바일부터 설계, Tailwind breakpoint sm:부터
- CMS 고려: 초기 정적 하드코딩, 향후 Headless CMS로 확장성 제한