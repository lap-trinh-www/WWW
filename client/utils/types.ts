import { ChangeEvent, FormEvent, MouseEventHandler } from "react"
import { useDispatch } from "react-redux"
import { AnyAction } from "redux"
import { ThunkDispatch } from "redux-thunk"
import rootReducer from "../redux/reducers"

export type RootStore = ReturnType<typeof rootReducer>

export type TypedDispatch = ThunkDispatch<RootStore, any, AnyAction>

export type Handler = MouseEventHandler<HTMLHeadingElement>

export type FormSubmit = FormEvent<HTMLFormElement>
export type InputChange = ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | HTMLSelectElement
>
export interface IAlert {
  loading?: boolean
  success?: string | string[]
  errors?: string | string[]
}

export interface IUserLogin {
  email: string
  password: string
}
export interface IUserRegister extends IUserLogin {
  name: string
  cf_password: string
}

export interface IUser extends IUserLogin {
  firstName: string
  lastName: string
  avatar: string
  phone: string
  status: boolean
  id: string
  role: string
}

export interface IRoom {
  room_ID: string
  roomName: string
  price: number
  limitQuantity: string
  description: string
  acreage: number
  images: string[]
  vote: number
  service?: IService[]
  services?: string[]
  type_ID?: string
  roomType?: IRoomType
}

export interface IService {
  id: string
  name: string
}
export interface IIMg {
  id: string
  author: string
  width: number
  height: number
  url: string
  download_url: string
}

export interface ICart extends IRoom {
  checkIn?: Date
  checkOut?: Date
  quantity: number
  user?: IUser
}

export interface IBill {
  id: string
  date: Date
  total: number
  user?: IUser
  billDetails?: ICart[]
}

export interface IRoomType {
  type_ID: string
  typeName: string
  type: string
}

interface INameTypeRoom {
  id: string
  name: string
}
export interface IRoomTypeConvert {
  id?: string
  type: string
  names: INameTypeRoom[]
}

export interface ICmt {
  email: string
  room_id: string
  comment: string
  createdAt: Date
}

export type StorageType = "session" | "local"
export type UseStorageReturnValue = {
  getItem: (key: string, type?: StorageType) => string
  setItem: (key: string, value: string, type?: StorageType) => boolean
  removeItem: (key: string, type?: StorageType) => void
}
