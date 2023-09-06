import { type Metadata } from 'next'
import AuthProvider from './AuthProvider'
import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'


export const metadata: Metadata = {
  title: {
    template: '%s - Studio',
    default: 'Studio - Award winning developer studio based in Charlotte',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
          <RootLayout>{children}</RootLayout>
      </body>
    </html>
    </AuthProvider>
  )
}
