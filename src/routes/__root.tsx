import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { useEffect } from 'react'
import { initTheme } from '@/lib/theme'

import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'MINDVANCCI — A Method for Overwhelmed Minds' },
      {
        name: 'description',
        content:
          'MINDVANCCI is a science-inspired method that helps overwhelmed women, founders and mothers reduce mental saturation, recover focus and build a calmer life.',
      },
      { property: 'og:title', content: 'MINDVANCCI — Your mind isn’t broken. It’s overloaded.' },
      {
        property: 'og:description',
        content: 'A transformational method for overwhelmed women to reduce mental saturation and regain focus.',
      },
      { property: 'og:type', content: 'website' },
      { name: 'theme-color', content: '#4b3b4f' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initTheme()
  }, [])

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..600;1,9..144,400..500&family=Inter:wght@300;400;500;600&display=swap"
        />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
