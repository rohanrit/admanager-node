import { Poppins } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import AnimatedDots from '@/components/AnimatedDots'
import CursorTrail from '@/components/CursorTrail'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const clashDisplay = localFont({
  src: [
    { path: './fonts/ClashDisplay-Regular.woff2', weight: '400', style: 'normal' },
    { path: './fonts/ClashDisplay-Medium.woff2', weight: '500', style: 'normal' },
    { path: './fonts/ClashDisplay-Semibold.woff2', weight: '600', style: 'normal' },
    { path: './fonts/ClashDisplay-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-heading',
  display: 'swap',
})

export const metadata = {
  title: 'AdVantage — Precision Ads That Drive Real Business Growth',
  description:
    'Run high-performance campaigns across Video, OTT, and Connected TV — powered by data, optimized for ROI. Performance marketing, programmatic ads, and CTV advertising.',
  keywords:
    'performance marketing, video advertising, CTV ads, programmatic advertising, OTT ads, connected TV, digital advertising',
  openGraph: {
    title: 'AdVantage — Precision Ads That Drive Real Business Growth',
    description:
      'Run high-performance campaigns across Video, OTT, and Connected TV — powered by data, optimized for ROI.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${clashDisplay.variable}`}>
      <body>
        <CursorTrail />
        <AnimatedDots />
        <ThemeSwitcher />
        {children}
      </body>
    </html>
  )
}
