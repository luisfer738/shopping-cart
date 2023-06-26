import Filters from './Filters'
import '../App.css'
// eslint-disable-next-line react/prop-types
export default function Header () {
  return (
    <div className='Header'><h1>Shopping Cart</h1>
      <Filters />
    </div>

  )
}
