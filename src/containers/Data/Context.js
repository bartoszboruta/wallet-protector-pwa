import React, { useEffect, useState } from 'react'
import propTypes from 'prop-types'

import db from 'utils/db'

export const DataContext = React.createContext({})

export const DataProvider = ({ children }) => {
  const [costs, setCosts] = useState([{}])

  useEffect(() => {
    db.table('costs')
      .toArray()
      .then(costs => {
        setCosts(costs)
      })
  }, [])

  const addCost = ({ cost, categoryId }) => {
    const _date = new Date()
    const newCost = { cost: parseFloat(cost), categoryId, createdAt: _date, updatedAt: _date }

    db.table('costs')
      .add(newCost)
      .then(id => {
        setCosts([...costs, { ...newCost, id }])
      })
  }

  return <DataContext.Provider value={{ costs, addCost }}>{children}</DataContext.Provider>
}

DataProvider.propTypes = {
  children: propTypes.func,
}
