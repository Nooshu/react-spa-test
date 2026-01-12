import type { Metadata } from 'next'
import { Layout } from '@/components/Layout'
import { GovukInit } from '@/components/GovukInit'
import '@/styles/main.scss'

export const metadata: Metadata = {
  title: 'React Single-page Application (SPA) Proof of Concept - GOV.UK Design System',
  description: 'A React-based Single Page Application built with GOV.UK and MoJ Design Systems to demonstrate accessibility and performance best practices.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <link rel="stylesheet" href="/assets/govuk-frontend.min.css" />
        <link rel="preload" href="/assets/fonts/light-94a07e06a1-v2.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/fonts/bold-b542beb274-v2.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className="govuk-frontend-supported">
        <Layout>{children}</Layout>
        <GovukInit />
      </body>
    </html>
  )
}
