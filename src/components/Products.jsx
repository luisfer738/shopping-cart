/* eslint-disable react/prop-types */
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import '../App.css'
import { useCart } from './hooks/UseCart'
export default function Products ({ products }) {
  const { addToCart, cart, removeFromCart } = useCart()
  const checkProductIncart = product => {
    return cart.some(item => item.id === product.id)
  }
  return (
    <main className='main'>
      <ul className='products'>
        {products.slice(0, 10).map(product => {
          const isProductInCart = checkProductIncart(product)
          return (
            <li key={product.id} className='product'>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong>
                <span style={{ paddingLeft: '1rem' }}>{product.price}</span>
              </div>
              <div>
                <button
                  style={{ backgroundColor: isProductInCart ? 'red' : '#09f' }}
                  onClick={() => {
                    isProductInCart
                      ? removeFromCart(product)
                      : addToCart(product)
                  }}
                >
                  {
                  isProductInCart
                    ? <RemoveFromCartIcon />
                    : <AddToCartIcon />
                 }
                </button>
              </div>
            </li>

          )
        })}
      </ul>
    </main>
  )
}
