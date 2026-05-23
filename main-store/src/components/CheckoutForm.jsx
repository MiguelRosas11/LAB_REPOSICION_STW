import { useState } from 'react'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const EMPTY_FORM = {
  fullName: '',
  email: '',
  address: '',
  paymentMethod: '',
}

export function CheckoutForm({ cartItems, onCheckout }) {
  const [formData, setFormData] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState({})

  function updateField(event) {
    setFormData((currentData) => ({
      ...currentData,
      [event.target.name]: event.target.value,
    }))
  }

  function submitCheckout(event) {
    event.preventDefault()
    const nextErrors = {}

    if (cartItems.length === 0) {
      nextErrors.cart = 'Agrega al menos un producto antes de finalizar.'
    }

    if (!formData.fullName.trim()) {
      nextErrors.fullName = 'Ingresa tu nombre completo.'
    }

    if (!EMAIL_PATTERN.test(formData.email.trim())) {
      nextErrors.email = 'Ingresa un correo electrónico válido.'
    }

    if (!formData.address.trim()) {
      nextErrors.address = 'Ingresa una dirección.'
    }

    if (!formData.paymentMethod) {
      nextErrors.paymentMethod = 'Selecciona un método de pago.'
    }

    setErrors(nextErrors)

    if (Object.keys(nextErrors).length === 0) {
      onCheckout(formData)
      setFormData(EMPTY_FORM)
    }
  }

  return (
    <section className="panel">
      <div className="panel__header">
        <h2>Checkout</h2>
      </div>

      <form className="checkout-form" noValidate onSubmit={submitCheckout}>
        {errors.cart ? <p className="form-error">{errors.cart}</p> : null}

        <div className="field">
          <label htmlFor="fullName">Nombre completo</label>
          <input
            id="fullName"
            name="fullName"
            onChange={updateField}
            value={formData.fullName}
          />
          {errors.fullName ? <span className="field-error">{errors.fullName}</span> : null}
        </div>

        <div className="field">
          <label htmlFor="email">Correo electrónico</label>
          <input
            id="email"
            name="email"
            onChange={updateField}
            type="email"
            value={formData.email}
          />
          {errors.email ? <span className="field-error">{errors.email}</span> : null}
        </div>

        <div className="field">
          <label htmlFor="address">Dirección</label>
          <input id="address" name="address" onChange={updateField} value={formData.address} />
          {errors.address ? <span className="field-error">{errors.address}</span> : null}
        </div>

        <div className="field">
          <label htmlFor="paymentMethod">Método de pago</label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            onChange={updateField}
            value={formData.paymentMethod}
          >
            <option value="">Seleccionar</option>
            <option>Tarjeta</option>
            <option>Transferencia</option>
            <option>Contra entrega</option>
          </select>
          {errors.paymentMethod ? (
            <span className="field-error">{errors.paymentMethod}</span>
          ) : null}
        </div>

        <button type="submit">Finalizar compra</button>
      </form>
    </section>
  )
}
