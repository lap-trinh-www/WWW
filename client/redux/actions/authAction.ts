import { AUTH, IAuthType } from "./../types/authType"
import { Dispatch } from "react"
import { IUserLogin, IUserRegister } from "./../../utils/types"
import { getAPI, postAPI } from "../../utils/fecthData"
import { validRegister } from "../../utils/valid"
import { ALERT, IAlertType } from "../types/alertType"
export const login =
  (userLogin: IUserLogin) =>
  async (dispatch: Dispatch<IAuthType | IAlertType>) => {
    try {
      dispatch({ type: ALERT, payload: { loading: true } })

      const res = await postAPI("login", userLogin)

      dispatch({
        type: AUTH,
        payload: res.data
      })

      window.location.href = "/"
      localStorage.setItem("logged", "user")

      dispatch({ type: ALERT, payload: { success: res.data.msg } })
    } catch (error: any) {
      console.log(error)
    }
  }
export const refreshToken =
  () => async (dispatch: Dispatch<IAuthType | IAlertType>) => {
    const logged = localStorage.getItem("logged")

    if (logged !== "user") return

    try {
      const res = await getAPI("refresh_token")
      dispatch({ type: AUTH, payload: res.data })

      dispatch({ type: ALERT, payload: {} })
    } catch (err: any) {
      dispatch({ type: ALERT, payload: { errors: err.response.data.msg } })
      localStorage.removeItem("logged")
    }
  }
export const logout =
  (token: string) => async (dispatch: Dispatch<IAuthType>) => {
    try {
      localStorage.removeItem("logged")

      await getAPI("logout", token)
      window.location.href = "/"
    } catch (err: any) {
      console.log(err)
    }
  }
export const register =
  (user: IUserRegister) =>
  async (dispatch: Dispatch<IAuthType | IAlertType>) => {
    const checkRegisger = validRegister(user)
    if (checkRegisger.errLength > 0)
      dispatch({ type: ALERT, payload: { errors: checkRegisger.errMsg } })
    try {
      dispatch({ type: ALERT, payload: { loading: true } })

      const res = await postAPI("register", user)
      if (res.data.err) {
        dispatch({ type: ALERT, payload: { errors: res.data.msg } })
        return
      } else window.location.href = "/"

      dispatch({ type: ALERT, payload: { success: res.data.msg } })
    } catch (err: any) {
      dispatch({ type: ALERT, payload: { errors: err.response.data.msg } })
    }
  }
