import { useContext } from 'react'
import { FiltersContext } from '../../context/filters'
export function useFilter () {
  const { filters, setFilter } = useContext(FiltersContext)
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
  return { filters, filterProduct, setFilter }
}
