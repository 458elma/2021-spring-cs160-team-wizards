import {

    USER_LOG_FAIL,
    USER_LOG_REQUEST,
    USER_LOG_SUCCESS,
    USER_LOGOUT,
    USER_REG_FAIL,
    USER_REG_REQUEST,
    USER_REG_SUCCESS,
    
  } from '../helper/userHelper'
  
  export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_LOG_REQUEST:
        return { loading: true }
      case USER_LOG_SUCCESS:
        return { loading: false, userInfo: action.payload }
      case USER_LOG_FAIL:
        return { loading: false, error: action.payload }
      case USER_LOGOUT:
        return {}
      default:
        return state
    }
  }
  
  export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_REG_REQUEST:
        return { loading: true }
      case USER_REG_SUCCESS:
        return { loading: false, userInfo: action.payload }
      case USER_REG_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  
  
  
  
  