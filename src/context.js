import React, { useContext, useEffect, useReducer, useState } from 'react'
import reducer from './reducer'

let url = 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users'
const AppContext = React.createContext()

const initialState = {
  loading: false,
  isLogin: false,
  user: { email: '', password: '' },
  data: [],
  inputType: 'password' 
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <AppContext.Provider value={{...state}}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
