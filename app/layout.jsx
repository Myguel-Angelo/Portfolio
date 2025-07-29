import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata = {
  title: 'Portfólio Myguel',
  description: 'Created by Ângelo - Full Stack Developer',
  generator: 'version 2.0',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <style>{`
          html {
            scroll-behavior: smooth;
            font-family: ${GeistSans.style.fontFamily};
            --font-sans: ${GeistSans.variable};
            --font-mono: ${GeistMono.variable};
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
