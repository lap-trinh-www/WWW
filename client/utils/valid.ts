import { IUserRegister } from "./types"

export const validRegister = (user: IUserRegister) => {
  const { name, account, password, cf_password } = user

  const errors: string[] = []

  if (!name) errors.push("Please add your name.")
  else if (name.length > 20) errors.push("Your name is up to 20 chars long.")

  if (!account) errors.push("Pleas add your email.")
  else if (!vallidEmail(account)) errors.push("Email format is incorrect.")

  const msg = checkPass(password, cf_password)

  if (msg) errors.push(msg)

  return {
    errMsg: errors,
    errLength: errors.length
  }
}

export const checkPass = (password: string, cf_password: string) => {
  if (password.length < 6) return "Password must be at least 6 characters."
  else if (password !== cf_password) return "Password is not match"
}

export const vallidEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}
