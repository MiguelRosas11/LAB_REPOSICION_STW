import { storeUrl } from '@/lib/site'

export function Footer() {
  return (
    <footer className="site-footer">
      <p>MiniMarket Web.</p>
      <a href={storeUrl}>Visitar tienda</a>
    </footer>
  )
}
