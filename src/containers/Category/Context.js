import React, { useState } from 'react'
import propTypes from 'prop-types'

export const CategoryContext = React.createContext({})

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([])
  const [categoryId, setCategoryId] = useState(0)

  return (
    <CategoryContext.Provider value={{ categories, setCategories, categoryId, setCategoryId }}>
      {children}
    </CategoryContext.Provider>
  )
}

CategoryProvider.propTypes = {
  children: propTypes.func,
}
