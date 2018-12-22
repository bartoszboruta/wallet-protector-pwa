import React, { lazy, Suspense, useContext } from 'react'

import { FormContext } from './Context'
import { CategoryContext } from 'containers/Category/Context'
import ImageRecognizer from './ImageRecognizer'
import db from 'utils/db'

const Category = lazy(() => import('./Category'))

const Form = () => {
  const { cost, setCost } = useContext(FormContext)
  const { categoryId } = useContext(CategoryContext)

  const addCost = () => {
    const _date = new Date()
    const _cost = parseFloat(cost)

    db.table('costs')
      .add({ cost: _cost, categoryId, createdAt: _date, updatedAt: _date })
      .then(() => setCost(0))
  }

  return (
    <div className="form">
      <ImageRecognizer />
      <div className="content">
        <input
          className="input"
          onChange={({ target: { value } }) => setCost(value)}
          type="number"
          value={cost}
        />
        <button className="btn" disabled={!cost || !categoryId} onClick={addCost}>
          Accept
        </button>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Category />
      </Suspense>
    </div>
  )
}

export default Form
