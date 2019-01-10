import React, { useContext } from 'react'

import { CounterContext } from 'containers/Counter/Context'

const Counters = () => {
  const { currentDateCounter, currentMonthCounter, currentYearCounter, totalCounter } = useContext(
    CounterContext,
  )

  return (
    <div className="counters">
      <div className="counter">
        <div className="counter__value">{currentDateCounter}</div>
        <div className="counter__label">Today</div>
      </div>
      <div className="counter">
        <div className="counter__value">{currentMonthCounter}</div>
        <div className="counter__label">This month</div>
      </div>
      <div className="counter">
        <div className="counter__value">{currentYearCounter}</div>
        <div className="counter__label">This year</div>
      </div>
      <div className="counter">
        <div className="counter__value">{totalCounter}</div>
        <div className="counter__label">Total</div>
      </div>
    </div>
  )
}

export default Counters
