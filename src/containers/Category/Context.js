import React, { useState } from 'react'
import propTypes from 'prop-types'

export const CategoryContext = React.createContext({})

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([])
  const [categoryId, setCategoryId] = useState(parseInt(localStorage.getItem('categoryId')) || 0)

  const _setCategoryId = categoryId => {
    setCategoryId(categoryId)
    localStorage.setItem('categoryId', categoryId)
  }

  return (
    <CategoryContext.Provider
      value={{ categories, setCategories, categoryId, setCategoryId: _setCategoryId }}
    >
      {children}
    </CategoryContext.Provider>
  )
}

CategoryProvider.propTypes = {
  children: propTypes.func,
}
