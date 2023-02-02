
function reducer(state, action) {
 switch(action.type){
  case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.login,
        loginError: { show: false, msg: '' },
        users:action.payload.users
      }
  case 'SET_INPUT_ERROR':
      return {...state, loginError: {show:true, msg: 'Invalid email or password'}, isAuthenticated:false}
  case 'OPEN_FILTER':
      return {...state, filter:true}
    default:
    return state
 }
  
}

export default reducer