import { IRoom } from "../../utils/types"
import {
  CREATE_ROOM,
  DELETE_ROOM,
  GET_ROOM,
  IRoomType,
  UPDATE_ROOM
} from "./../types/roomType"

const roomReducer = (state: IRoom[] = [], action: IRoomType): IRoom[] => {
  switch (action.type) {
    case GET_ROOM:
      return action.payload
    case CREATE_ROOM:
      return [...state, action.payload]
    case UPDATE_ROOM:
      return state.map((room) =>
        room.room_ID === action.payload.room_ID
          ? {
              ...room,
              ...action.payload
            }
          : room
      )
    case DELETE_ROOM:
      return state.filter((room) => room.room_ID !== action.payload)
    default:
      return state
  }
}

export default roomReducer
