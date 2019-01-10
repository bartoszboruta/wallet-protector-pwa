import React, { useContext, useState } from 'react'

import { CategoryContext } from 'containers/Category/Context'
import db from 'utils/db'

const New = () => {
  const { categories, setCategories } = useContext(CategoryContext)
  const [name, setName] = useState('')

  const addCategory = event => {
    event.preventDefault()
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
    <div className="category__new">
      <h4>New category</h4>
      <form className="form" onSubmit={addCategory}>
        <input
          className="input"
          name="name"
          onChange={({ target: { value } }) => {
            setName(value)
          }}
          value={name}
        />
        <button className="btn" disabled={!name}>
          Add
        </button>
      </form>
    </div>
  )
}

export default New
