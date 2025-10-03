import type { Metadata } from 'next';
import './globals.css';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://webtoonunion.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: '웹툰작가노동조합 공식 사이트',
  description:
    '웹툰 창작 노동자들의 권익 보호를 위한 노동조합입니다. 가입하고 함께하세요.',
  keywords: ['웹툰 노조', '웹툰 작가 노동', '조합 가입'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    title: '웹툰작가노동조합 공식 사이트',
    description:
      '웹툰 창작 노동자들의 권익 보호를 위한 노동조합입니다. 가입하고 함께하세요.',
    url: siteUrl,
    siteName: '웹툰작가노동조합',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '웹툰작가노동조합 기자회견 현장',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '웹툰작가노동조합 공식 사이트',
    description:
      '웹툰 창작 노동자들의 권익 보호를 위한 노동조합입니다. 가입하고 함께하세요.',
    images: ['/images/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
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
