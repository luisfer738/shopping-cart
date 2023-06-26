import './App.css'
import Header from './components/Header'
import { products as initialProducts } from './mocks/products.json'
import Products from './components/Products'
import { useState } from 'react'
function App () {
  const [products] = useState(initialProducts)
  const [filters, setFilter] = useState({
    category: 'all',
    minprice: '0'
  })
  const filterProduct = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minprice && (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }
  const filterProducts = filterProduct(products)
  return (

    <div className='page'>
      <Header changeFilters={setFilter} />
      <Products products={filterProducts} />
    </div>

  )
}

export default App
