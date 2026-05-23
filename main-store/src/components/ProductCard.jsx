import { formatCurrency } from '../utils/currency'

export function ProductCard({ onAddToCart, product }) {
  return (
    <article className="product-card">
      <div className="product-card__media">
        <img alt={product.name} loading="lazy" src={product.image} />
        {product.tag ? <span className="tag">{product.tag}</span> : null}
      </div>

      <div className="product-card__body">
        <div className="product-card__topline">
          <p className="category">{product.category}</p>
          <p className="stock">Stock: {product.stock}</p>
        </div>
        <h3>{product.name}</h3>
        <p className="description">{product.description}</p>
        <div className="price-row">
          <p className="price">{formatCurrency(product.price)}</p>
        </div>
        <button type="button" onClick={() => onAddToCart(product)}>
          Agregar al carrito
        </button>
      </div>
    </article>
  )
}
