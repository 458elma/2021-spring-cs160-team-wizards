import axios from 'axios'
import {

  USER_LOG_FAIL,
  USER_LOG_REQUEST,
  USER_LOG_SUCCESS,
  USER_LOGOUT,
  USER_REG_FAIL,
  USER_REG_REQUEST,
  USER_REG_SUCCESS,
  
} from '../helper/userHelper'


export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOG_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    //making a request 
    const { data } = await axios.post(
      '/api/users/login',
      { email, password },
      config
    )
    //dispatch the user login success 
    dispatch({
      type: USER_LOG_SUCCESS,
      payload: data, // the data we give back from '/api/users/login'
    })

    localStorage.setItem('Info_user', JSON.stringify(data)) // we will get data back from teh backend
  } catch (error) {
    dispatch({
      type: USER_LOG_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const logout = () => (dispatch) => {
  localStorage.removeItem('Info_user') //removing the user info once the user logs out  
  dispatch({ type: USER_LOGOUT })

  document.location.href = '/login'
}

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REG_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      '/api/users',
      { name, email, password },
      config
    )

    dispatch({
      type: USER_REG_SUCCESS,
      payload: data,
    })
    // as soon as a valid user registers, we need to log them in 
    dispatch({
      type: USER_LOG_SUCCESS,
      payload: data,
    })

    localStorage.setItem('Info_user', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_REG_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}


   
  
