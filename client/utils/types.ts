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
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>
export interface IAlert {
  loading?: boolean
  success?: string | string[]
  errors?: string | string[]
}

export interface IUserLogin {
  email: string
  password?: string
}
export interface IUserRegister extends IUserLogin {
  name: string
  cf_password: string
}

export interface IUser extends IUserLogin {
  firstName: string
  lastName: string
  avatar: string
  email: string
  phone: string
  status: boolean
}

export interface IRoom {
  _id: number
  name: string
  price: number
  limited: string
  description: string
  acreage: number
  images: string[]
  star: number
  services: IService[]
}
export interface IUser2 extends IUserLogin {
  id: number
  name: string
  username: string
  email: string
  address?: object
  phone: string
  website: string
  company?: object
}

export interface IService {
  _id: number
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

export interface IBillDetail {
  childNum?: number
  adultNum?: number
  checkIn?: Date
  checkOut?: Date
  roomNum?: number
  bedNum?: number
  user?: IUser
}

export interface IBill {
  _id: number
  date: Date
  total: number
}

export type StorageType = "session" | "local"
export type UseStorageReturnValue = {
  getItem: (key: string, type?: StorageType) => string
  setItem: (key: string, value: string, type?: StorageType) => boolean
  removeItem: (key: string, type?: StorageType) => void
}
