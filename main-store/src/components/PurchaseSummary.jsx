import { formatCurrency } from '../utils/currency'

export function PurchaseSummary({ summary }) {
  return (
    <section className="panel summary" aria-live="polite">
      <div className="panel__header">
        <h2>Resumen de compra</h2>
      </div>
      <p>
        Pedido {summary.orderCode} para <strong>{summary.customer.fullName}</strong>.
      </p>
      <p>
        Pago: {summary.customer.paymentMethod}. Confirmación enviada a {summary.customer.email}.
      </p>
      <ul className="summary-list">
        {summary.items.map((item) => (
          <li className="summary-total" key={item.id}>
            <span>
              {item.quantity} x {item.name}
            </span>
            <strong>{formatCurrency(item.subtotal)}</strong>
          </li>
        ))}
      </ul>
      <div className="summary-total">
        <span>Total pagado</span>
        <strong>{formatCurrency(summary.total)}</strong>
      </div>
    </section>
  )
}
