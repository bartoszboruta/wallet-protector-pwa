import React, { useContext, useEffect } from 'react'
import classnames from 'classnames'

import { CategoryContext } from 'containers/Category/Context'
import db from 'utils/db'

const List = () => {
  const { categories, categoryId, setCategories, setCategoryId } = useContext(CategoryContext)

  useEffect(() => {
    db.table('categories')
      .toArray()
      .then(categories => {
        setCategories(categories)
      })
  }, [])

  return categories.map(({ id, name }) => {
    const categoryClass = classnames('category', {
      active: categoryId === id,
    })

    return (
      <div className={categoryClass} key={id} onClick={() => setCategoryId(id)}>
        {name}
        {id}
      </div>
    )
  })
}

export default List
