import React, { useContext, useState } from 'react'

import { CategoryContext } from 'containers/Category/Context'
import db from 'utils/db'

const New = () => {
  const { categories, setCategories } = useContext(CategoryContext)
  const [name, setName] = useState('')

  const addCategory = () => {
    const _date = new Date()
    const category = { name, createdAt: _date, updatedAt: _date }

    db.table('categories')
      .add(category)
      .then(id => {
        const _categories = [...categories, { ...category, id }]

        setName('')
        setCategories(_categories)
      })
  }

  return (
    <div>
      <input
        name="name"
        onChange={({ target: { value } }) => {
          setName(value)
        }}
        value={name}
      />
      <button disabled={!name} onClick={addCategory}>
        Add
      </button>
    </div>
  )
}

export default New
