import './App.css'
import Header from './components/Header'
import { products as initialProducts } from './mocks/products.json'
import Products from './components/Products'
import { useFilter } from './components/hooks/UseFilter'
import Footer from './components/Footer'
function App () {
  const { filterProduct } = useFilter()
  const filterProducts = filterProduct(initialProducts)
  return (

    <div className='page'>
      <Header />
      <Products products={filterProducts} />
      <Footer />
    </div>

  )
}

export default App
