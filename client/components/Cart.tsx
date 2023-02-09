/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios"
import Link from "next/link"
import React, { MouseEventHandler, useEffect, useState } from "react"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { useSelector } from "react-redux"
import { useStorage } from "../utils/hooks"
import { IUser, RootStore } from "../utils/types"

const API = "IklDGdI-QyOhnknSIY6w3ejoHuVBhNAWcqqHV9hmM2w"

interface IProps {
  open: boolean
  setOpen: (open: boolean) => void
}

const Cart = ({ open, setOpen }: IProps) => {
  const session = useStorage()

  const [user, setUser] = useState<IUser[]>([])

  useEffect(() => {
    if (session.getItem("users") !== null) {
      setUser(JSON.parse(session.getItem("users")!))
    }
  }, [session.getItem("users")])

  const { auth } = useSelector((state: RootStore) => state)

  const handleRemoveCartItemInSession = (id: string) => {
    const users = JSON.parse(session.getItem("users")!)
    const newUsers = users.filter((item: IUser) => item.id !== id)
    session.setItem("users", JSON.stringify(newUsers))
    setUser(newUsers)
  }
  return (
    <>
      <div
        className={`fixed z-50 outline-none focus:outline-none bg-white h-screen right-0 top-0 overflow-y-auto p-4 w-[25vw] ease-linear duration-300 ${
          open ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <div
          className={`flex ${
            auth.data?.accessToken ? "justify-end" : "justify-between"
          }`}
        >
          {!auth.data?.accessToken && (
            <Link
              href={`.login`}
              className="text-red-500 font-semibold italic underline"
            >
              You need to login to pay{" "}
            </Link>
          )}
          <p
            onClick={() => setOpen(false)}
            className=" pb-3 cursor-pointer mr-4 pl-4"
          >
            close
          </p>
        </div>
        {user.map((item, index) => {
          return (
            <div className="grid grid-cols-5 border-t-gray-400 border-solid border-t mb-2 ">
              <img
                src={item.avatar}
                alt=""
                className="w-10 h-10 rounded-full bg-contain col-span-1 my-auto"
              />
              <div className="col-span-3">
                <p>
                  {item.firstName} {item.lastName}
                </p>
                <p>{item.phone} x 3</p>
              </div>
              <button
                className="col-span-1 my-auto ml-4 cursor-pointer p-2"
                onClick={() => handleRemoveCartItemInSession(item.id)}
              >
                X
              </button>
            </div>
          )
        })}
        <div className="absolute bottom-4 w-[22rem]">
          <div className="flex justify-between border-t border-solid border-t-green-400 py-4 px-1">
            <span className="">Subtotal: </span>
            <p className="">
              $
              {user.reduce((acc, item) => {
                return acc + Number(item.phone)
              }, 0)}
            </p>
          </div>
          <button
            className={`text-white bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center ${
              auth.data?.accessToken
                ? "hover:bg-blue-800"
                : "cursor-not-allowed opacity-50"
            }`}
            type="button"
          >
            Checkout
          </button>
        </div>
      </div>
      {open && <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>}
    </>
  )
}

export default Cart
