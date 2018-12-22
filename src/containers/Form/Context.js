import React, { useState } from 'react'
import propTypes from 'prop-types'

export const FormContext = React.createContext({})

export const FormProvider = ({ children }) => {
  const [cost, setCost] = useState(0)

  return <FormContext.Provider value={{ cost, setCost }}>{children}</FormContext.Provider>
}

FormProvider.propTypes = {
  children: propTypes.func,
}
