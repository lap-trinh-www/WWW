export const AUTH = "AUTH"

export interface IAuth {
  msg?: string
  access_token?: string
  user?: any
}

export interface IAuthType {
  type: typeof AUTH
  payload: IAuth
}
