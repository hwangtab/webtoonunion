import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '웹툰작가노동조합 공식 사이트',
  description:
    '웹툰 창작 노동자들의 권익 보호를 위한 노동조합입니다. 가입하고 함께하세요.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
