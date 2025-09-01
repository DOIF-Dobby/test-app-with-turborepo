import { twcn } from '@repo/ui/utils/twcn'
import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import './app.css'
import { AppProviders } from './providers'

const pretendard = localFont({
  src: '../../../../assets/fonts/PretendardVariable.woff2',
  display: 'auto',
  weight: '45 920',
  variable: '--font-pretendard',
  preload: true,
})

export const metadata: Metadata = {
  title: 'Swtichflow',
  description: 'Swtichflow',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ko"
      data-theme="switchui-light"
      className={`${pretendard.variable}`}
    >
      <body className={twcn(pretendard.className)}>
        <AppProviders>
          <div className="text-base-content bg-background mx-auto max-w-[100rem]">
            {children}
          </div>
        </AppProviders>
      </body>
    </html>
  )
}
