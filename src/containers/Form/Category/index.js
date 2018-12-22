import React from 'react'
import { Link } from 'react-router-dom'

import List from './List'

const Category = () => {
  return (
    <div className="categories">
      <div className="categories__header">Select category</div>
      <div className="categories__container">
        <List />
        <div className="category active">
          <Link to="/category">Add category</Link>
        </div>
      </div>
    </div>
  )
}

export default Category
