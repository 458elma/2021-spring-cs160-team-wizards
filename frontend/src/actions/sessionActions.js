import axios from 'axios'
import {
  SESSION_LIST_REQUEST,
  SESSION_LIST_SUCCESS,
  SESSION_LIST_FAIL,
  SESSION_DETAILS_REQUEST,
  SESSION_DETAILS_SUCCESS,
  SESSION_DETAILS_FAIL,
  SESSION_DELETE_SUCCESS,
  SESSION_DELETE_REQUEST,
  SESSION_DELETE_FAIL,
  SESSION_CREATE_REQUEST,
  SESSION_CREATE_SUCCESS,
  SESSION_CREATE_FAIL,
  SESSION_UPDATE_REQUEST,
  SESSION_UPDATE_SUCCESS,
  SESSION_UPDATE_FAIL,
  SESSION_CREATE_REVIEW_REQUEST,
  SESSION_CREATE_REVIEW_SUCCESS,
  SESSION_CREATE_REVIEW_FAIL,
  SESSION_TOP_REQUEST,
  SESSION_TOP_SUCCESS,
  SESSION_TOP_FAIL,
} from '../constants/sessionConstants'
import { logout } from './userActions'

export const listSessions = (keyword = '', pageNumber = '') => async (
  dispatch
) => {
  try {
    dispatch({ type: SESSION_LIST_REQUEST })

    const { data } = await axios.get(
      `/sessions?keyword=${keyword}&pageNumber=${pageNumber}`
    )

    dispatch({
      type: SESSION_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: SESSION_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const listSessionDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: SESSION_DETAILS_REQUEST })

    const { data } = await axios.get(`/sessions/${id}`)

    dispatch({
      type: SESSION_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: SESSION_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const deleteSession = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SESSION_DELETE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    await axios.delete(`/sessions/${id}`, config)

    dispatch({
      type: SESSION_DELETE_SUCCESS,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: SESSION_DELETE_FAIL,
      payload: message,
    })
  }
}

export const createSession = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: SESSION_CREATE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post(`/sessions`, {}, config)

    dispatch({
      type: SESSION_CREATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: SESSION_CREATE_FAIL,
      payload: message,
    })
  }
}

export const updateSession = (session) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SESSION_UPDATE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.put(
      `/sessions/${session._id}`,
      session,
      config
    )

    dispatch({
      type: SESSION_UPDATE_SUCCESS,
      payload: data,
    })
    dispatch({ type: SESSION_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: SESSION_UPDATE_FAIL,
      payload: message,
    })
  }
}

export const createSessionReview = (sessionId, review) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: SESSION_CREATE_REVIEW_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    await axios.post(`/sessions/${sessionId}/reviews`, review, config)

    dispatch({
      type: SESSION_CREATE_REVIEW_SUCCESS,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: SESSION_CREATE_REVIEW_FAIL,
      payload: message,
    })
  }
}

export const listTopSessions = () => async (dispatch) => {
  try {
    dispatch({ type: SESSION_TOP_REQUEST })

    const { data } = await axios.get(`/sessions/top`)

    dispatch({
      type: SESSION_TOP_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: SESSION_TOP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
