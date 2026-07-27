import '@/styles/globals.css';
import { Noto_Sans_JP } from 'next/font/google';

import { BASE_PATH } from '@/lib/config';
import type { Metadata, Viewport } from 'next';

const notoSansJp = Noto_Sans_JP({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['sans-serif'],
});

export const metadata: Metadata = {
  title: 'FAQ・トラブルシューティング - ZEN Study プログラミングコース',
  description: '',
  icons: {
    icon: `${BASE_PATH}/images/favicon.svg`,
  }
}
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={notoSansJp.className}>{children}</body>
    </html>
  )
}