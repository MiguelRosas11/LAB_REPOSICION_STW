export const formatCurrency = (amount) =>
  new Intl.NumberFormat('es-GT', {
    style: 'currency',
    currency: 'GTQ',
  }).format(amount)
