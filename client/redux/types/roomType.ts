import { IRoom } from "../../utils/types"

export const GET_ROOM = "GET_ROOM"
export const CREATE_ROOM = "CREATE_ROOM"
export const DELETE_ROOM = "DELETE_ROOM"
export const UPDATE_ROOM = "UPDATE_ROOM"
export interface IRoomRe {
  massage?: string
  data?: IRoom
  status?: string
}

export interface ICreateRoom {
  type: typeof CREATE_ROOM
  payload: IRoom
}

export interface IGetRooms {
  type: typeof GET_ROOM
  payload: IRoom[]
}

export interface IDeleteRoomType {
  type: typeof DELETE_ROOM
  payload: string
}

export interface IUpdateRoomType {
  type: typeof UPDATE_ROOM
  payload: IRoom
}

export type IRoomType =
  | ICreateRoom
  | IGetRooms
  | IDeleteRoomType
  | IUpdateRoomType
