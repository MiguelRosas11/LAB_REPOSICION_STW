import Link from 'next/link'
import { storeUrl } from '@/lib/site'

export function Navbar() {
  return (
    <header className="site-header">
      <Link className="brand" href="/">
        MiniMarket Web
      </Link>
      <nav className="site-nav" aria-label="Navegación principal">
        <Link href="/">Inicio</Link>
        <Link href="/about">Acerca</Link>
        <Link href="/categories">Categorías</Link>
        <a href={storeUrl}>Tienda</a>
      </nav>
    </header>
  )
}
