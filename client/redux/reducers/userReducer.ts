import { IUser } from "../../utils/types"
import { GET_USER, IUserType } from "../types/userType"
import { DELETE_USER, UPDATE_USER } from "./../types/userType"

const userReducer = (state: IUser[] = [], action: IUserType): IUser[] => {
  switch (action.type) {
    case GET_USER:
      return action.payload

    case UPDATE_USER:
      return state.map((user) =>
        user.id === action.payload.id
          ? {
              ...user,
              ...action.payload
            }
          : user
      )
    case DELETE_USER:
      return state.filter((user) => user.id !== action.payload.id)
    default:
      return state
  }
}

export default userReducer
