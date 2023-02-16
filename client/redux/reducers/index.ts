import { combineReducers } from "redux"
import auth from "./authReducer"
import alert from "./alertReducer"
import users from "./userReducer"
import rooms from "./roomReducer"

export default combineReducers({
  auth,
  alert,
  users,
  rooms
})
