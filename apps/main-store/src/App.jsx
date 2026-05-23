import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { CartPanel } from './components/CartPanel'
import { CheckoutForm } from './components/CheckoutForm'
import { FilterBar } from './components/FilterBar'
import { ProductCard } from './components/ProductCard'
import { PurchaseSummary } from './components/PurchaseSummary'
import { products } from './data/products'

const CART_STORAGE_KEY = 'minimarket-web-cart-v1'
const LANDING_URL = import.meta.env.DEV
  ? 'http://127.0.0.1:3000/'
  : '/LAB_REPOSICION_STW/'
const DEFAULT_FILTERS = {
  search: '',
  category: 'Todas',
  tag: 'Todas',
  sort: 'default',
}

function loadSavedCart() {
  try {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY)
    return savedCart ? JSON.parse(savedCart) : []
  } catch {
    return []
  }
}

function App() {
  const [cartItems, setCartItems] = useState(loadSavedCart)
  const [filters, setFilters] = useState(DEFAULT_FILTERS)
  const [purchaseSummary, setPurchaseSummary] = useState(null)

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  const categories = useMemo(
    () => ['Todas', ...new Set(products.map((product) => product.category))],
    [],
  )
  const tags = useMemo(
    () => ['Todas', ...new Set(products.flatMap((product) => product.tag || []))],
    [],
  )

  const filteredProducts = useMemo(() => {
    const normalizedSearch = filters.search.trim().toLowerCase()
    const visibleProducts = products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(normalizedSearch)
      const matchesCategory =
        filters.category === 'Todas' || product.category === filters.category
      const matchesTag = filters.tag === 'Todas' || product.tag === filters.tag

      return matchesSearch && matchesCategory && matchesTag
    })

    if (filters.sort === 'ascending') {
      return [...visibleProducts].sort((first, second) => first.price - second.price)
    }

    if (filters.sort === 'descending') {
      return [...visibleProducts].sort((first, second) => second.price - first.price)
    }

    return visibleProducts
  }, [filters])

  function addToCart(product) {
    setPurchaseSummary(null)
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id)

      if (!existingItem) {
        return [...currentItems, { ...product, quantity: 1 }]
      }

      return currentItems.map((item) =>
        item.id === product.id && item.quantity < item.stock
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      )
    })
  }

  function updateQuantity(productId, nextQuantity) {
    setCartItems((currentItems) =>
      currentItems
        .map((item) => {
          if (item.id !== productId) {
            return item
          }

          return { ...item, quantity: Math.min(nextQuantity, item.stock) }
        })
        .filter((item) => item.quantity > 0),
    )
  }

  function removeFromCart(productId) {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== productId),
    )
  }

  function emptyCart() {
    setCartItems([])
  }

  function completeCheckout(customer) {
    const summaryItems = cartItems.map((item) => ({
      id: item.id,
      name: item.name,
      quantity: item.quantity,
      subtotal: item.price * item.quantity,
    }))
    const total = summaryItems.reduce((amount, item) => amount + item.subtotal, 0)

    setPurchaseSummary({
      customer,
      items: summaryItems,
      total,
      orderCode: `MMW-${Date.now().toString().slice(-6)}`,
    })
    setCartItems([])
  }

  return (
    <main className="store-shell">
      <header className="store-hero">
        <div className="store-hero__copy">
          <h1>Tienda</h1>
          <a className="button-link store-hero__link" href={LANDING_URL}>
            Volver a inicio
          </a>
        </div>
        <div className="store-hero__shelf" aria-hidden="true">
          <span>Tecnología</span>
          <span>Hogar</span>
          <span>Papelería</span>
        </div>
      </header>

      <section className="store-grid" aria-label="Tienda MiniMarket Web">
        <div className="catalog-area">
          <FilterBar
            categories={categories}
            filters={filters}
            onFiltersChange={setFilters}
            tags={tags}
          />

          <div className="catalog-heading">
            <h2>Productos disponibles</h2>
            <p>{filteredProducts.length} resultados</p>
          </div>

          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} onAddToCart={addToCart} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 ? (
            <p className="empty-state">No hay productos para esos filtros.</p>
          ) : null}
        </div>

        <aside className="checkout-column" aria-label="Carrito y compra">
          <CartPanel
            items={cartItems}
            onEmptyCart={emptyCart}
            onRemove={removeFromCart}
            onUpdateQuantity={updateQuantity}
          />
          <CheckoutForm cartItems={cartItems} onCheckout={completeCheckout} />
          {purchaseSummary ? <PurchaseSummary summary={purchaseSummary} /> : null}
        </aside>
      </section>
    </main>
  )
}

export default App
