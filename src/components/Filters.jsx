import { useId } from 'react'
import './Filters.css'
import { useFilter } from './hooks/UseFilter'
// eslint-disable-next-line react/prop-types
export default function Filters () {
  const minPriceFilterId = useId()
  const categoryFilterId = useId()
  const { filters, setFilter } = useFilter()
  const handleChangePrice = (e) => {
    setFilter(prevState => ({
      ...prevState,
      minprice: e.target.value
    }))
  }
  const handleChangeCategory = (e) => {
    setFilter(prevState => ({
      ...prevState,
      category: e.target.value
    }))
  }
  return (
    <section className='filters'>
      <div style={{ marginLeft: '2rem' }}>
        <label htmlFor={minPriceFilterId}>Price </label>
        <input
          type='range'
          id={minPriceFilterId}
          min='0'
          max='1000'
          onChange={handleChangePrice}
          value={filters.minprice}
        />
        <span>${filters.minprice}</span>
      </div>
      <div style={{ marginRight: '2rem' }}>
        <label htmlFor={categoryFilterId}>Categoria</label>
        <select
          name='category'
          id={categoryFilterId}
          onChange={handleChangeCategory}
        >
          <option value='all'>Todas</option>
          <option value='laptops'>Portatiles</option>
          <option value='smartphones'>Celulares</option>
        </select>
      </div>

    </section>
  )
}
