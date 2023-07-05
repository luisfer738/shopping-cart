import { createContext, useState } from 'react'
export const cartContext = createContext()
// eslint-disable-next-line react/prop-types
export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])
  const addToCart = product => {
    // setCart([...cart, product])
    const productInCartIndex = cart.findIndex(item => item.id === product.id)
    if (productInCartIndex >= 0) {
    // una forma usando structedClone
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity += 1
      return setCart(newCart)
    }
    // producto esta en el carrito
    setCart(prevState => ([
      ...prevState,
      {
        ...product,
        quantity: 1
      }
    ]))
  }
  const removeFromCart = product => {
    setCart(prevState => prevState.filter(item => item.id !== product.id))
  }

  const clearToCart = () => {
    setCart([])
  }
  return (
    <cartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      clearToCart
    }}
    >{children}
    </cartContext.Provider>
  )
}
