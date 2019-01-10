import React, { useContext } from 'react'
import classnames from 'classnames'

import { Link } from 'react-router-dom'

import List from './List'
import { CategoryContext } from 'containers/Category/Context'

const Categories = () => {
  const { categoryId } = useContext(CategoryContext)
  const headerClassname = classnames('categories__header', {
    '--inactive': !categoryId,
  })

  return (
    <div className="categories">
      <div className={headerClassname}>Select category</div>
      <div className="categories__container">
        <List />
        <div className="category active">
          <Link to="/category">Add category</Link>
        </div>
      </div>
    </div>
  )
}

export default Categories
