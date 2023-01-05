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
  account: string
  password: string
}
export interface IUserRegister extends IUserLogin {
  name: string
  cf_password: string
}

export interface IUser extends IUserLogin {
  _id: string
  name: string
  avatar: string
  type: string
  updatedAt: string
  createdAt: string
}

export interface IRoom {
  _id: number
  name: string
  price: number
  limited: string
  description: string
  acreage: number
  images: string[]
  star?: number
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