import { Dispatch } from "react"
import { getAPI, postAPI } from "../../utils/fecthData"
import { ALERT, IAlertType } from "../types/alertType"
import { IUser } from "./../../utils/types"
import { IAuthType } from "./../types/authType"
import { IUserType, GET_USER } from "./../types/userType"
export const getUsers =
  () => async (dispatch: Dispatch<IUserType | IAlertType>) => {
    try {
      const res = await getAPI("users")
      dispatch({
        type: GET_USER,
        payload: res.data.data
      })
    } catch (error: any) {
      console.log(error)
    }
  }

export const updateUser =
  (user: IUser) => async (dispatch: Dispatch<IAuthType | IAlertType>) => {
    try {
      dispatch({ type: ALERT, payload: { loading: true } })

      const res = await postAPI("auth/update", user)
      dispatch({ type: ALERT, payload: { success: res.data.message } })
    } catch (err: any) {
      dispatch({ type: ALERT, payload: { errors: err.response.data.message } })
    }
  }
