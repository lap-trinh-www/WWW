import { StorageType, UseStorageReturnValue } from "./types"
// import type { TypedUseSelectorHook } from "react-redux"
// import { AppDispatch, RootState } from "./types"

// // Use throughout your app instead of plain `useDispatch` and `useSelector`
// export const useAppDispatch: () => AppDispatch = useDispatch
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useDate = (date: Date) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
  const dateString = `${
    monthNames[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()}`
  return dateString
}

export const useStorage = (): UseStorageReturnValue => {
  const storageType = (type?: StorageType): "localStorage" | "sessionStorage" =>
    `${type ?? "session"}Storage`

  const isBrowser: boolean = ((): boolean => typeof window !== "undefined")()

  const getItem = (key: string, type?: StorageType): string => {
    return isBrowser ? window[storageType(type)][key] : ""
  }

  const setItem = (key: string, value: string, type?: StorageType): boolean => {
    if (isBrowser) {
      window[storageType(type)].setItem(key, value)
      return true
    }

    return false
  }

  const removeItem = (key: string, type?: StorageType): void => {
    window[storageType(type)].removeItem(key)
  }

  return {
    getItem,
    setItem,
    removeItem
  }
}
