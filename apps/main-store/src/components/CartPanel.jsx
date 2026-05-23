import { formatCurrency } from '../utils/currency'

export function CartPanel({ items, onEmptyCart, onRemove, onUpdateQuantity }) {
  const total = items.reduce((amount, item) => amount + item.price * item.quantity, 0)

  return (
    <section className="panel">
      <div className="panel__header">
        <h2>Carrito</h2>
        <button
          className="button-muted"
          disabled={items.length === 0}
          onClick={onEmptyCart}
          type="button"
        >
          Vaciar
        </button>
      </div>

      {items.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <ul className="cart-list">
          {items.map((item) => (
            <li className="cart-item" key={item.id}>
              <img alt="" src={item.image} />
              <div>
                <div className="cart-line">
                  <h3>{item.name}</h3>
                  <button className="remove-button" onClick={() => onRemove(item.id)} type="button">
                    Quitar
                  </button>
                </div>
                <div className="cart-line">
                  <div className="quantity-controls" aria-label={`Cantidad de ${item.name}`}>
                    <button
                      aria-label={`Disminuir ${item.name}`}
                      className="icon-button"
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      type="button"
                    >
                      -
                    </button>
                    <strong>{item.quantity}</strong>
                    <button
                      aria-label={`Aumentar ${item.name}`}
                      className="icon-button"
                      disabled={item.quantity >= item.stock}
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      type="button"
                    >
                      +
                    </button>
                  </div>
                  <strong>{formatCurrency(item.price * item.quantity)}</strong>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="cart-total">
        <span>Total</span>
        <strong>{formatCurrency(total)}</strong>
      </div>
    </section>
  )
}
