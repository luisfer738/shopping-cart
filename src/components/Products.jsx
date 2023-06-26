/* eslint-disable react/prop-types */
import { AddToCartIcon } from './Icons'
import '../App.css'
export default function Products ({ products }) {
  return (
    <main className='main'>
      <ul className='products'>
        {products.map(product => (
          <li key={product.id} className='product'>
            <img src={product.thumbnail} alt={product.title} />
            <div>
              <strong>{product.title}</strong>
              <span style={{ paddingLeft: '1rem' }}>{product.price}</span>
            </div>
            <div>
              <button>
                <AddToCartIcon />
              </button>
            </div>
          </li>

        ))}
      </ul>
    </main>
  )
}
