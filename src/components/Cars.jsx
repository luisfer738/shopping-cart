import { useId } from 'react'
import { ClearCartIcon, CartIcon } from './Icons'
import '../components/Cars.css'
import { useCart } from './hooks/UseCart'
// eslint-disable-next-line react/prop-types
function CartItems ({ thumbnail, price, title, quantity, addToCart }) {
  return (
    <li>
      <img
        src={thumbnail}
        alt={title}
      />
      <div>
        <strong>{title}</strong> - ${price}
      </div>
      <footer>
        <small>
          Qty: {quantity}
        </small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  )
}
export default function Cars () {
  const cartCheckBox = useId()
  const { cart, clearToCart, addToCart } = useCart()
  return (
    <div>
      <label className='cart-button' htmlFor={cartCheckBox}>
        <CartIcon />
      </label>
      <input id={cartCheckBox} type='checkbox' hidden />
      <aside className='cart'>
        <ul>
          {cart.map(product => (
            <CartItems
              key={product.id}
              addToCart={() => addToCart(product)}
              {...product}
            />

          ))}
        </ul>
        <button onClick={clearToCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </div>
  )
}
