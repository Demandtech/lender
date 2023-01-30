import userEvent from '@testing-library/user-event'
import React from 'react'
import pagination from './utils'

function reducer(state, action) {
 switch(action.type){
  case 'LOGIN':
     console.log(action.payload)
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.login,
        loginError: { show: false, msg: '' },
        users:action.payload.data
      }
  case 'SET_INPUT_ERROR':
      return {...state, loginError: {show:true, msg: 'Invalid email or password'}, isAuthenticated:false}
    default:
    return state
 }
  
}

export default reducer