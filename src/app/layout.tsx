import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WebGen AI Demo Landing',
  description: 'Site web généré par WebGen AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}