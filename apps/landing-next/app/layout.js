import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import './globals.css'

export const metadata = {
  title: {
    default: 'MiniMarket Web',
    template: '%s | MiniMarket Web',
  },
  description: 'Landing page for MiniMarket Web.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
