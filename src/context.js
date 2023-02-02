import React, { useContext, useReducer } from 'react'

import reducer from './reducer'
// import pagination from './utils'
import data from './mockdata'

const AppContext = React.createContext()

const url = 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users'

const initialState = {
  loading: false,
  loginError: { show: false, msg: '' },
  isAuthenticated: false,
  user: { email: '1', password: '1' },
  correctDetail: { email: '1', password: '1' },
  users: data
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

 

  const handleSubmit = async (inputEmail, inputPassword) => {
    if (
      state.correctDetail.email === inputEmail &&
      state.correctDetail.password === inputPassword
    ) {
      try{
       const response = await fetch(url)
       const data  = await response.json()
        dispatch({
          type: 'LOGIN',
          payload: {users:data, login:{email: inputEmail, password: inputPassword} },
        })

      }catch(err){
        console.log(err)
      }
     
     
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
