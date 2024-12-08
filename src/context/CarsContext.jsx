import { createContext, useReducer } from 'react'
import { reducer, initialState } from '../../src/reducer/CartReducer'
export const cartContext = createContext()
function useReducerCart () {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addToCart = product => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  })
  const removeFromCart = product => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
  })
  const clearToCart = () => dispatch({
    type: 'CLEAR_CART'
  })
  return { state, addToCart, removeFromCart, clearToCart }
}

// eslint-disable-next-line react/prop-types
export function CartProvider ({ children }) {
  const { state, addToCart, removeFromCart, clearToCart } = useReducerCart()
  return (
    <cartContext.Provider value={{
      cart: state,
      addToCart,
      removeFromCart,
      clearToCart
    }}
    >{children}
    </cartContext.Provider>
  )
}
