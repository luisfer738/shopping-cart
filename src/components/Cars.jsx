import { useId } from 'react'
import { ClearCartIcon, CartIcon } from './Icons'
import '../components/Cars.css'
export default function Cars () {
  const cartCheckBox = useId()
  return (
    <div>
      <label className='cart-button' htmlFor={cartCheckBox}>
        <CartIcon />
      </label>
      <input id={cartCheckBox} type='checkbox' hidden />
      <aside className='cart'>
        <ul>
          <li>
            <img src='https://i.dummyjson.com/data/products/2/thumbnail.jpg' alt='iphone' />
            <div>
              <strong>Iphone</strong> - $1049
            </div>
            <footer>
              <small>
                Qty: 1
              </small>
              <button>+</button>
            </footer>
          </li>
        </ul>
        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </div>
  )
}
