import '@/styles/globals.css';

import { BASE_PATH } from '@/lib/config';
import type { Metadata, Viewport } from 'next';

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
      <body>{children}</body>
    </html>
  )
}