import React, { useState } from 'react'
import propTypes from 'prop-types'

export const MainContext = React.createContext({})

export const MainProvider = ({ children }) => {
  const [cost, setCost] = useState(0)

  return <MainContext.Provider value={{ cost, setCost }}>{children}</MainContext.Provider>
}

MainProvider.propTypes = {
  children: propTypes.func,
}
