import {
  IRoomType,
  GET_ROOM,
  UPDATE_ROOM,
  DELETE_ROOM,
  CREATE_ROOM
} from "./../types/roomType"
import { IRoom, IUser } from "../../utils/types"
import { GET_USER, IUserType } from "../types/userType"
import { DELETE_USER, UPDATE_USER } from "./../types/userType"

const roomReducer = (state: IRoom[] = [], action: IRoomType): IRoom[] => {
  switch (action.type) {
    case GET_ROOM:
      return action.payload
    case CREATE_ROOM:
      return [...state, action.payload]
    case UPDATE_ROOM:
      return state.map((room) =>
        room.id === action.payload.id
          ? {
              ...room,
              ...action.payload
            }
          : room
      )
    case DELETE_ROOM:
      return state.filter((user) => user.id !== action.payload.id)
    default:
      return state
  }
}

export default roomReducer
