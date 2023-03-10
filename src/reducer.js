function reducer(state, action) {
  switch (action.type) {
    case 'SET_LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        loginError: { show: false, msg: '' },
      }
    case 'SET_INPUT_ERROR':
      return {
        ...state,
        loginError: { show: true, msg: 'Invalid email or password' },
        isAuthenticated: false,
      }
    case 'OPEN_FILTER':
      return { ...state, filter: true }
    case 'OPEN_MENU':
      return {...state, isMenuOpen: true}
    case 'CLOSE_MENU':
      return {...state, isMenuOpen:false}
    case 'CLOSE_FILTER':
      return { ...state, filter: false }
    case 'START_USERS_FETCHING':
      return {...state, loading:true}
    case 'GET_USER':
      return {...state, loading:false, users:action.payload}
    case 'SET_ERROR':
      return {...state, loading:false, userError:true}
    default:
    case 'START_SINGLE_USER_FETCHING':
      return{...state, loading: true}
    case 'GET_SINGLE_USER':
    return { ...state, loading: false, singleUser:action.payload }
      throw Error('Unknown action: ' + action.type)
  }
 return state
   
}

export default reducer
