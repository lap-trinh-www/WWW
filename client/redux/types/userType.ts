import { IUser } from "../../utils/types"

export const GET_USER = "GET_USER"

export interface IUserRe {
  massage?: string
  data?: IUser
  status?: string
}

export interface IUserType {
  type: typeof GET_USER
  payload: IUser[]
}
