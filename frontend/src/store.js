import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {userLoginReducer,userRegisterReducer} from './reducers/userReducer'


const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,

})


const userInfoFromStorage = localStorage.getItem('Info_user')
  ? JSON.parse(localStorage.getItem('Info_user'))
  : null

const initialState = {
  
  userLogin: { nfo_user: userInfoFromStorage },//data will come from teh local storage
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store