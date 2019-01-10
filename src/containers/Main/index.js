import React, { lazy, Suspense, useContext } from 'react'

import { MainContext } from './Context'
import { CategoryContext } from 'containers/Category/Context'
import { DataContext } from 'containers/Data/Context'

const Categories = lazy(() => import('./Categories'))
const Counters = lazy(() => import('./Counters'))

const Main = () => {
  const { cost, setCost } = useContext(MainContext)
  const { categoryId } = useContext(CategoryContext)
  const { addCost } = useContext(DataContext)

  const _addCost = event => {
    event.preventDefault()

    addCost({ cost, categoryId })
    setCost(0)
  }

  return (
    <div className="main">
      <div className="content">
        <Suspense fallback={<div>Loading...</div>}>
          <Counters />
        </Suspense>
        <form className="form" onSubmit={_addCost}>
          <input
            className="input"
            onChange={({ target: { value } }) => setCost(value)}
            onFocus={() => setCost('')}
            type="number"
            value={cost}
          />
          <button className="btn" disabled={!cost || !categoryId}>
            Accept
          </button>
        </form>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Categories />
      </Suspense>
    </div>
  )
}

export default Main
