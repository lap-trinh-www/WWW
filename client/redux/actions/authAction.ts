import { AUTH, IAuthType } from "./../types/authType"
import { Dispatch } from "react"
import { IUserLogin, IUserRegister } from "./../../utils/types"
import { getAPI, postAPI, putAPI } from "../../utils/fecthData"
import { validRegister } from "../../utils/valid"
import { ALERT, IAlertType } from "../types/alertType"
export const login =
  (userLogin: IUserLogin) =>
  async (dispatch: Dispatch<IAuthType | IAlertType>) => {
    try {
      dispatch({ type: ALERT, payload: { loading: true } })

      const res = await postAPI("auth/login", userLogin)
      dispatch({
        type: AUTH,
        payload: res.data
      })

      window.location.href = "/"
      localStorage.setItem("logged", `user-${res.data.data.refreshToken}`)

      dispatch({ type: ALERT, payload: { success: res.data.message } })
    } catch (error: any) {
      console.log(error)
    }
  }
export const refreshToken =
  () => async (dispatch: Dispatch<IAuthType | IAlertType>) => {
    const logged = localStorage.getItem("logged")

    if (logged?.substring(0, 4) !== "user") return
    try {
      const res = await getAPI("auth/refresh", `${logged.substring(5)}`)
      dispatch({ type: AUTH, payload: res.data })

      localStorage.setItem("logged", `user-${res.data.data.refreshToken}`)
      dispatch({ type: ALERT, payload: {} })
    } catch (err: any) {
      console.log(err)
      // localStorage.removeItem("logged")
    }
  }
export const logout =
  (accessToken: string) => async (dispatch: Dispatch<IAuthType>) => {
    try {
      localStorage.removeItem("logged")

      await getAPI("logout", accessToken)
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

      const res = await postAPI("auth/register", user)
      if (res.data.err) {
        dispatch({ type: ALERT, payload: { errors: res.data.message } })
        return
      } else window.location.href = "/"

      dispatch({ type: ALERT, payload: { success: res.data.message } })
    } catch (err: any) {
      dispatch({ type: ALERT, payload: { errors: err.response.data.message } })
    }
  }

export const forgotPassword =
  (email: string) => async (dispatch: Dispatch<IAlertType>) => {
    try {
      dispatch({ type: ALERT, payload: { loading: true } })

      const res = await postAPI("auth/forgot-password", { email })
      dispatch({ type: ALERT, payload: { success: "Please check your email" } })
    } catch (err: any) {
      dispatch({ type: ALERT, payload: { errors: err.response.data.message } })
    }
  }

export const resetPassword =
  (password: string, cfPassword: string) =>
  async (dispatch: Dispatch<IAlertType>) => {
    try {
      const email = localStorage.getItem("email")

      dispatch({ type: ALERT, payload: { loading: true } })

      const res = await putAPI("auth/forgot-password", {
        password,
        cfPassword,
        email
      })
      if (res) {
        localStorage.removeItem("email")
        window.location.href = "/login"
      }
      dispatch({ type: ALERT, payload: { success: "Password changed" } })
    } catch (err: any) {
      dispatch({ type: ALERT, payload: { errors: err.response.data.message } })
    }
  }
