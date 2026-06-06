import '@/styles/globals.css';

import { BASE_PATH } from '@/lib/config';
import type { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'FAQ・トラブルシューティング - ZEN Study プログラミングコース',
  description: '',
  icons: {
    icon: `${BASE_PATH}/images/favicon.svg`,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
}

// TODO: Next14 以降？こっちの書き方
// export const viewport: Viewport = {
//   width: 'device-width',
//   initialScale: 1,
// };

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