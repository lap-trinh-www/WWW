import { IUser } from "../../utils/types"
import { IUserType, GET_USER } from "../types/userType"

const userReducer = (state: IUser[] = [], action: IUserType): IUser[] => {
  switch (action.type) {
    case GET_USER:
      return action.payload
    default:
      return state
  }
}

export default userReducer
