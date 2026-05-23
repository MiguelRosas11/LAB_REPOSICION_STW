import Link from 'next/link'
import { storeUrl } from '@/lib/site'

const featureCards = [
  'Busca productos por nombre.',
  'Filtra por categoría y etiqueta.',
  'Compra desde el carrito.',
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero__content">
          <p className="kicker">Tienda online</p>
          <h1>MiniMarket Web</h1>
          <p>Productos sencillos para comprar rápido.</p>
          <div className="action-row">
            <a className="button" href={storeUrl}>
              Abrir tienda
            </a>
            <Link className="button button--quiet" href="/categories">
              Ver categorías
            </Link>
          </div>
        </div>
      </section>

      <section className="page-section split-section">
        <div>
          <p className="kicker">Catálogo</p>
          <h2>Productos para uso diario.</h2>
        </div>
        <p>Tecnología, hogar, ropa, accesorios, papelería y deportes.</p>
      </section>

      <section className="page-section card-grid" aria-label="Funciones principales">
        {featureCards.map((feature, index) => (
          <article className="info-card" key={feature}>
            <span>0{index + 1}</span>
            <p>{feature}</p>
          </article>
        ))}
      </section>
    </>
  )
}
