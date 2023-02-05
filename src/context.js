import React, { useContext, useEffect, useReducer } from 'react'
import reducer from './reducer'
import data from './mockdata'

const AppContext = React.createContext()

const url = 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users'

const initialState = {
  loading: false,
  filter: false,
  isMenuOpen:false,
  loginError: { show: false, msg: '' },
  userError: false,
  isAuthenticated: true,
  user: { email: '1', password: '1' },
  correctDetail: { email: '1', password: '1' },
  users:[],
  singleUser: {},
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleSubmit = (inputEmail, inputPassword) => {
     if(state.correctDetail.email === inputEmail && state.correctDetail.password === inputPassword){
      dispatch({type: 'SET_LOGIN'})
     }
  }

  const openFilter = () => {
    if (state.filter === false) {
      dispatch({ type: 'OPEN_FILTER' })
    }
    if (state.filter === true) {
      dispatch({ type: 'CLOSE_FILTER' })
    }
  }

  const fetchUsers = async (url)=> {
    dispatch({type:'START_USERS_FETCHING'})
    try{
      const response =  await fetch(url);
      const users = await response.json()
      dispatch({type:"GET_USER", payload:users})
    }catch(err){
       dispatch({type: 'SET_ERROR'})
    }
  }

  const FetchSingleUser = async (url) => {
    dispatch({ type: 'START_SINGLE_USER_FETCHING' })
    try {
      const response = await fetch(`${url}`)
      const user = await response.json()
      dispatch({ type: 'GET_SINGLE_USER', payload:user })
    } catch (err) {
      console.log(err)
      dispatch({ type: 'SET_ERROR' })
    }
  }

  const handleMenu = ()=> {
    if(state.isMenuOpen === false){
      dispatch({type: 'OPEN_MENU'})
    }else{
      dispatch({type:'CLOSE_MENU'})
    }
  }

  useEffect(()=>{
    fetchUsers(url)
  }, [state.isAuthenticated])

  return (
    <AppContext.Provider
      value={{
        ...state,
        handleSubmit,
        openFilter,
        FetchSingleUser,
        handleMenu
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
