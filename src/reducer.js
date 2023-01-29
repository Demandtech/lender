import userEvent from '@testing-library/user-event'
import React from 'react'

function reducer(state, action) {
 switch(action.type){
  case 'LOGIN':
      return {...state,isAuthenticated:true, user:action.payload}
  case 'SET_INPUT_ERROR':
      return {...state, loginError: {show:true, msg: 'Invalid email or password'}}
    default:
    return state
 }
  
}

export default reducer