import Products from './pages/Products/Products'
import Orders from './pages/Orders'
import Cart from './pages/Cart/'
import NotFound from './pages/NotFound'

export const routes = [
  { isExact: true, component: Products, path: '/', label: 'Products' },
  { isExact: true, component: Orders, path: '/orders', label: 'Orders' },
  { isExact: true, component: NotFound, path: '/404', label: '' },
  { isExact: true, component: Cart, path: '/cart', label: 'Cart' }
]
