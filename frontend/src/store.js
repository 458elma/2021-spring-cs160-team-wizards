import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  sessionListReducer,
  sessionDetailsReducer,
  sessionDeleteReducer,
  sessionCreateReducer,
  sessionUpdateReducer,
  sessionReviewCreateReducer,
  sessionTopRatedReducer,
} from './reducers/sessionReducers'
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  userListReducer,
  userDeleteReducer,
  userUpdateReducer,
} from './reducers/userReducers'


const reducer = combineReducers({
  sessionList: sessionListReducer,
  sessionDetails: sessionDetailsReducer,
  sessionDelete: sessionDeleteReducer,
  sessionCreate: sessionCreateReducer,
  sessionUpdate: sessionUpdateReducer,
  sessionReviewCreate: sessionReviewCreateReducer,
  sessionTopRated: sessionTopRatedReducer,

  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,

})



const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null



const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
