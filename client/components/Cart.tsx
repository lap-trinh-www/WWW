/* eslint-disable react-hooks/exhaustive-deps */
import Link from "next/link"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAPI, postAPI } from "../utils/fecthData"
import { useStorage } from "../utils/hooks"

import { v4 as uuidv4 } from "uuid"

import {
  ICart,
  IRoom,
  IRoomType,
  IUser,
  RootStore,
  TypedDispatch
} from "../utils/types"

const API = "IklDGdI-QyOhnknSIY6w3ejoHuVBhNAWcqqHV9hmM2w"

interface IProps {
  open: boolean
  setOpen: (open: boolean) => void
}

const Cart = ({ open, setOpen }: IProps) => {
  const session = useStorage()
  const dispatch = useDispatch<TypedDispatch>()

  const [roomTypes, setRoomTypes] = useState<IRoomType[]>([])

  useEffect(() => {
    getAPI("roomTypes")
      .then((res) => {
        setRoomTypes(res.data.data)
      })
      .catch((err) => console.log(err))
  }, [dispatch])
  const [cart, setCart] = useState<ICart[]>([])
  useEffect(() => {
    if (session.getItem("carts", "local") !== undefined) {
      const carts = JSON.parse(session.getItem("carts", "local"))
      setCart(carts)
    }
  }, [open])

  const { auth, users } = useSelector((state: RootStore) => state)

  const handleRemoveCartItemInSession = (id: string, type: string) => {
    const newCart = cart.map((item) => {
      if (item.room_ID === id) {
        type === "decrease" ? item.quantity-- : item.quantity++
      }
      return item
    })

    const cartSave = newCart.filter((item) => item.quantity > 0)

    session.setItem("carts", JSON.stringify(cartSave), "local")
    setCart(cartSave)
  }

  const checkout = async () => {
    let total = cart.reduce((prev, item) => {
      return prev + item.price * item.quantity
    }, 0)

    const checkoutCart = {
      bill_ID: uuidv4(),
      date: new Date(),
      total,
      user: users.find((user) => user.email === auth.data?.email && user),
      billDetails: cart
    }

    const res = await postAPI(
      "bills/checkout",
      checkoutCart,
      auth.data?.accessToken
    )
    // session.removeItem("carts")
    // setCart([])
  }

  return (
    <>
      <div
        className={`fixed z-50 outline-none focus:outline-none bg-white h-screen right-0 top-0 overflow-y-auto w-[25vw] ease-linear duration-300 ${
          open ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <div
          className={`flex p-4 ${
            auth.data?.accessToken ? "justify-end" : "justify-between"
          }`}
        >
          {!auth.data?.accessToken && (
            <Link
              href={`/login`}
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
        <div className="h-[74%] overflow-y-auto p-4 pt-0 z-20">
          {cart.map((item, index) => {
            return (
              <div className="grid grid-cols-5 border-t-gray-400 border-solid border-t mb-2 ">
                <img
                  src={item.images[0]}
                  alt=""
                  className="w-10 h-10 rounded-full bg-contain col-span-1 my-auto"
                />
                <div className="col-span-2">
                  <p>{item.roomName}</p>
                  <p>{item.price}</p>
                </div>
                <div className="col-span-2 flex items-center">
                  <button
                    className={
                      "text-black px-[10px] pb-[1px] text-lg rounded-full border-cyan-400 border-2 " +
                      (item.quantity === 1
                        ? " opacity-50 cursor-not-allowed"
                        : "")
                    }
                    onClick={() =>
                      handleRemoveCartItemInSession(item.room_ID, "decrease")
                    }
                  >
                    -
                  </button>
                  <span className="px-2 mx-2">{item.quantity}</span>
                  <button
                    className="text-black px-[8px] pb-[1px] text-lg rounded-full border-cyan-400 border-2"
                    onClick={() =>
                      handleRemoveCartItemInSession(item.room_ID, "increase")
                    }
                  >
                    +
                  </button>
                  <button
                    className="ml-4 cursor-pointer p-2"
                    onClick={() => {
                      const newCart = cart.filter(
                        (a) => a.room_ID !== item.room_ID
                      )
                      session.setItem("carts", JSON.stringify(newCart), "local")
                      setCart(newCart)
                    }}
                  >
                    X
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        <div className="absolute bottom-4 w-full px-2 z-40 shadow-cart">
          <div className="flex justify-between py-4 px-1">
            <span className="">Subtotal: </span>
            <p className="">
              $
              {cart.reduce((acc, item) => {
                return acc + Number(item.price) * Number(item.quantity)
              }, 0)}
            </p>
          </div>
          <button
            className={`text-white bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center ${
              auth.data?.accessToken ? "hover:bg-blue-800" : "opacity-50"
            }`}
            type="button"
            onClick={checkout}
          >
            Checkout
          </button>
        </div>
      </div>
      {open && (
        <div
          className="opacity-25 fixed inset-0 z-40 bg-black"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </>
  )
}

export default Cart
