import userEvent from '@testing-library/user-event'
import React from 'react'

function reducer(state, action) {
 switch(action.type){
  case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        loginError: { show: false, msg: '' },
      }
  case 'SET_INPUT_ERROR':
      return {...state, loginError: {show:true, msg: 'Invalid email or password'}, isAuthenticated:false}
    default:
    return state
 }
  
}

export default reducer