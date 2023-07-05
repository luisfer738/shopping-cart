import './App.css'
import Header from './components/Header'
import { products as initialProducts } from './mocks/products.json'
import Products from './components/Products'
import { useFilter } from './components/hooks/UseFilter'
import Footer from './components/Footer'
import Cars from './components/Cars'
import { CartProvider } from './context/CarsContext'
function App () {
  const { filterProduct } = useFilter()
  const filterProducts = filterProduct(initialProducts)
  return (
    <CartProvider>
      <div className='page'>
        <Header />
        <Cars />
        <Products products={filterProducts} />
        <Footer />
      </div>
    </CartProvider>
  )
}

export default App
