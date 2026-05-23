export const metadata = {
  title: 'Acerca',
}

export default function AboutPage() {
  return (
    <section className="content-page">
      <div className="content-page__intro">
        <p className="kicker">Acerca</p>
        <h1>Tienda simple y rápida.</h1>
        <p className="lead">
          MiniMarket Web muestra productos, filtros, carrito y checkout en una
          experiencia clara.
        </p>
      </div>

      <div className="detail-grid">
        <article className="detail-panel">
          <h2>Tienda</h2>
          <p>Permite buscar productos, agregarlos al carrito y finalizar una compra.</p>
        </article>
        <article className="detail-panel">
          <h2>Landing</h2>
          <p>Presenta la tienda y dirige al usuario al catálogo principal.</p>
        </article>
      </div>
    </section>
  )
}
