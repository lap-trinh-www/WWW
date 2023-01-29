export const AUTH = "AUTH"

export interface IAuth {
  msg?: string
  accessToken?: string
  refreshToken?: string
  user?: any
}

export interface IAuthType {
  type: typeof AUTH
  payload: IAuth
}
