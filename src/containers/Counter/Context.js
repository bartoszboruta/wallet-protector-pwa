import React, { useContext, useEffect, useState } from 'react'
import propTypes from 'prop-types'

import { DataContext } from 'containers/Data/Context'

export const CounterContext = React.createContext({})

export const CounterProvider = ({ children }) => {
  const { costs } = useContext(DataContext)
  const [currentDateCounter, setCurrentDateCounter] = useState(0)
  const [currentMonthCounter, setCurrentMonthCounter] = useState(0)
  const [currentYearCounter, setCurrentYearCounter] = useState(0)
  const [totalCounter, setTotalCounter] = useState(0)

  const _getSum = costs => costs.map(cost => cost.cost).reduce((prev, next) => prev + next, 0)

  const _setTotalCounter = () => {
    const _totalCounter = _getSum(costs)

    setTotalCounter(_totalCounter)
  }

  const _setCurrentDateCounter = () => {
    const today = new Date()
    const currentDateCosts = costs.filter(cost => {
      if (!cost.updatedAt) {
        return null
      }
      return today.setHours(0, 0, 0, 0) === cost.updatedAt.setHours(0, 0, 0, 0)
    })
    const _currendDateCounter = _getSum(currentDateCosts)

    setCurrentDateCounter(_currendDateCounter)
  }

  const _setCurrentMonthCounter = () => {
    const today = new Date(),
      y = today.getFullYear(),
      m = today.getMonth(),
      firstDay = new Date(y, m, 1),
      lastDay = new Date(y, m + 1, 0)
    const currentMonthCosts = costs.filter(cost => {
      if (!cost.updatedAt) {
        return null
      }
      const costDate = cost.updatedAt.setHours(0, 0, 0, 0)
      return costDate >= firstDay.setHours(0, 0, 0, 0) && costDate <= lastDay.setHours(0, 0, 0, 0)
    })
    const _currentMonthCounter = _getSum(currentMonthCosts)

    setCurrentMonthCounter(_currentMonthCounter)
  }
  const _setCurrentYearCounter = () => {
    const today = new Date(),
      y = today.getFullYear(),
      firstDay = new Date(y, 0, 1),
      lastDay = new Date(y, 12, 31)
    const currentYearCosts = costs.filter(cost => {
      if (!cost.updatedAt) {
        return null
      }
      const costDate = cost.updatedAt.setHours(0, 0, 0, 0)
      return costDate >= firstDay.setHours(0, 0, 0, 0) && costDate <= lastDay.setHours(0, 0, 0, 0)
    })
    const _currentYearCounter = _getSum(currentYearCosts)

    setCurrentYearCounter(_currentYearCounter)
  }

  useEffect(
    () => {
      _setTotalCounter()
      _setCurrentDateCounter()
      _setCurrentMonthCounter()
      _setCurrentYearCounter()
    },
    [costs.length],
  )

  return (
    <CounterContext.Provider
      value={{ currentDateCounter, currentMonthCounter, currentYearCounter, totalCounter }}
    >
      {children}
    </CounterContext.Provider>
  )
}

CounterProvider.propTypes = {
  children: propTypes.func,
}
