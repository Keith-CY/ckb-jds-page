import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import localFont from 'next/font/local'
import './globals.css'
import DotPattern from '@/components/ui/dot-pattern'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Opportunities in CKB Ecosystem',
  description:
    'Explore a wide range of job opportunities across various teams and projects within the Nervos CKB ecosystem. Whether you’re passionate about blockchain development, research, or community building, this page brings together roles that offer a chance to contribute to the growth of decentralized systems. Join a vibrant and innovative ecosystem that empowers developers and fosters cutting-edge solutions in the Web3 space.',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen w-full flex-col bg-muted pb-8`}
      >
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className="[mask-image:linear-gradient(to_bottom_right,white,transparent)] z-0"
        />
        <header className="sticky top-0 flex h-16 mb-4 justify-center items-center gap-4 border-b bg-background px-4 bg-white z-50 md:px-6">
          <Link href="/" className="absolute left-4 top-4">
            <Image src="/favicon.svg" alt="CKB" width="32" height="32" />
          </Link>
          <nav className="text-2xl font-semibold text-muted-foreground">
            Opportunities in
            <Link
              href="https://ckb.world"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-[0.8ch] text-black font-bold underline"
            >
              CKB
            </Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
