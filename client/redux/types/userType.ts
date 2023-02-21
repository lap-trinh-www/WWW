import { IUser } from "../../utils/types"

export const GET_USER = "GET_USER"
export const DELETE_USER = "DELETE_USER"
export const UPDATE_USER = "UPDATE_USER"
export interface IUserRe {
  massage?: string
  data?: IUser
  status?: string
}

export interface IGetUsers {
  type: typeof GET_USER
  payload: IUser[]
}

export interface IDeleteUSERType {
  type: typeof DELETE_USER
  payload: IUser
}

export interface IUpdateUSERType {
  type: typeof UPDATE_USER
  payload: IUser
}

export type IUserType = IGetUsers | IDeleteUSERType | IUpdateUSERType
