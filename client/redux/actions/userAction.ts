import { Dispatch } from "react"
import { getAPI } from "../../utils/fecthData"
import { ALERT, IAlertType } from "../types/alertType"
import { IUser } from "./../../utils/types"
import {
  DELETE_USER,
  GET_USER,
  IUserType,
  UPDATE_USER
} from "./../types/userType"
export const getUsers =
  () => async (dispatch: Dispatch<IUserType | IAlertType>) => {
    try {
      // dispatch({ type: ALERT, payload: { loading: true } })

      const res = await getAPI("users")

      dispatch({
        type: GET_USER,
        payload: res.data.data
      })
      // dispatch({ type: ALERT, payload: {} })
    } catch (error: any) {
      console.log(error)
    }
  }

export const updateUser =
  (newUser: IUser) => async (dispatch: Dispatch<IUserType | IAlertType>) => {
    try {
      dispatch({ type: ALERT, payload: { loading: true } })

      // const res = await postAPI("auth/update", user)

      dispatch({
        type: UPDATE_USER,
        payload: newUser
      })

      dispatch({ type: ALERT, payload: { success: "Update successfully" } })
    } catch (err: any) {
      dispatch({ type: ALERT, payload: { errors: err.response.data.message } })
    }
  }

export const deleteUser =
  (user: IUser) => async (dispatch: Dispatch<IUserType | IAlertType>) => {
    try {
      dispatch({ type: ALERT, payload: { loading: true } })

      // const res = await postAPI("auth/update", user)

      dispatch({
        type: DELETE_USER,
        payload: user
      })

      dispatch({ type: ALERT, payload: { success: "Delete successfully" } })
    } catch (err: any) {
      dispatch({ type: ALERT, payload: { errors: err.response.data.message } })
    }
  }
