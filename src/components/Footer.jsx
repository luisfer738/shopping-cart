import './Footer.css'
import { useFilter } from './hooks/UseFilter'
export default function Footer () {
  const { filters } = useFilter()
  return (
    <footer className='footer'>
      <h4>prueba tecnica de React *
        <span>@lufedev</span>
      </h4>
      <h5>Shopping Cart con useContext & useReducer</h5>
      <h5>Filters <span style={{ paddingLeft: '1rem' }}>{filters.category}</span><span>{filters.minprice}</span></h5>

    </footer>
  )
}
