import { useState } from 'react'
import './Filters.css'
// eslint-disable-next-line react/prop-types
export default function Filters ({ onChange }) {
  const [minPrice, setMinPrice] = useState(0)
  const handleChangePrice = (e) => {
    setMinPrice(e.target.value)
    onChange(prevState => ({
      ...prevState,
      minprice: e.target.value
    }))
  }
  const handleChangeCategory = (e) => {
    onChange(prevState => ({
      ...prevState,
      category: e.target.value
    }))
  }
  return (
    <section className='filters'>
      <div style={{ marginLeft: '2rem' }}>
        <label htmlFor='price'>Price </label>
        <input
          type='range'
          id='price'
          min='0'
          max='1000'
          onChange={handleChangePrice}
        />
        <span>${minPrice}</span>
      </div>
      <div style={{ marginRight: '2rem' }}>
        <label htmlFor='category'>Categoria</label>
        <select
          name='category'
          id='category'
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
