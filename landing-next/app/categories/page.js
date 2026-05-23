const categories = [
  ['Tecnología', 'Audífonos, teclado y accesorios.'],
  ['Hogar', 'Lámpara, taza y artículos prácticos.'],
  ['Ropa', 'Prendas cómodas para el día.'],
  ['Accesorios', 'Mochila, reloj y básicos personales.'],
  ['Papelería', 'Cuaderno y marcadores.'],
  ['Deportes', 'Balón y botella para entrenar.'],
]

export const metadata = {
  title: 'Categorías',
}

export default function CategoriesPage() {
  return (
    <section className="content-page">
      <div className="content-page__intro">
        <p className="kicker">Categorías</p>
        <h1>Todo en secciones simples.</h1>
        <p className="lead">El catálogo está organizado para encontrar productos rápido.</p>
      </div>

      <div className="category-list">
        {categories.map(([name, description]) => (
          <article className="info-card" key={name}>
            <span>{name}</span>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
