import './globals.css'

import { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/react'

import { Toaster } from '@/components/ui/toaster'
import Provider from '@/components/provider'
import ClientProvider from '@/components/provider-client'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: 'Context Builder',
  description: 'Generated by create next app',
}

export const viewport: Viewport = {
  themeColor: 'black',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Provider>
      <html lang="en" className="h-full" suppressHydrationWarning>
        <body className="h-full">
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <ClientProvider>{children}</ClientProvider>
            <Toaster />
            <Analytics />
          </ThemeProvider>
        </body>
      </html>
    </Provider>
  )
}
