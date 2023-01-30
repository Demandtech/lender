import React, { useContext, useReducer } from 'react'

import reducer from './reducer'
import mockData from './mockdata'

const AppContext = React.createContext()

const initialState = {
  loading: false,
  loginError: { show: false, msg: '' },
  isAuthenticated: true,
  user: { email: '', password: '' },
  correctDetail: { email: 'demandwork@gmail.com', password: 'computer' },
  users: mockData
}

console.log(mockData[1])

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

 

  const handleSubmit = (inputEmail, inputPassword) => {
    if (
      state.correctDetail.email === inputEmail &&
      state.correctDetail.password === inputPassword
    ) {
      dispatch({
        type: 'LOGIN',
        payload: { email: inputEmail, password: inputPassword },
      })
     
    } else {
      dispatch({ type: 'SET_INPUT_ERROR' })
    }
  }

  return (
    <AppContext.Provider value={{ ...state, handleSubmit }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
