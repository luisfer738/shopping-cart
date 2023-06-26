import { createContext, useState } from 'react'
export const FiltersContext = createContext()
// eslint-disable-next-line react/prop-types
export function FiltersProvider ({ children }) {
  const [filters, setFilter] = useState({
    category: 'all',
    minprice: 0
  })
  return (
    <FiltersContext.Provider value={{
      filters,
      setFilter
    }}
    > {children}
    </FiltersContext.Provider>
  )
}
