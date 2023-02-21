/* eslint-disable react-hooks/exhaustive-deps */
import Link from "next/link"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { postAPI } from "../utils/fecthData"
import { useStorage } from "../utils/hooks"
import { ICart, IRoom, RootStore } from "../utils/types"

const API = "IklDGdI-QyOhnknSIY6w3ejoHuVBhNAWcqqHV9hmM2w"

interface IProps {
  open: boolean
  setOpen: (open: boolean) => void
}

const Cart = ({ open, setOpen }: IProps) => {
  const session = useStorage()

  const [cart, setCart] = useState<ICart[]>([])

  useEffect(() => {
    if (session.getItem("carts") !== null) {
      const carts = JSON.parse(session.getItem("carts")!)
      setCart(carts)
    }
  }, [open])

  const { auth } = useSelector((state: RootStore) => state)

  const handleRemoveCartItemInSession = (id: string) => {
    const newCart = cart.map((item) => {
      if (item.room_ID === id) {
        item.quantity = item.quantity - 1
      }
      return item
    })

    const cartSave = newCart.filter((item) => item.quantity > 0)

    session.setItem("carts", JSON.stringify(cartSave))
    setCart(cartSave)
  }

  const checkout = async () => {
    // const carts = JSON.parse(session.getItem("carts")!)
    // const res = await postAPI("order", { carts }, auth.data?.accessToken)
    // if (res.data) {
    //   session.removeItem("carts")
    //   setCart([])
    // }
    session.removeItem("carts")
    setCart([])
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
        <div className="h-[74%] overflow-y-auto p-4 pt-0 z-20">
          {cart.map((item, index) => {
            return (
              <div className="grid grid-cols-5 border-t-gray-400 border-solid border-t mb-2 ">
                <img
                  src={item.images[0]}
                  alt=""
                  className="w-10 h-10 rounded-full bg-contain col-span-1 my-auto"
                />
                <div className="col-span-3">
                  <p>{item.roomName}</p>
                  <p>
                    {item.price} x {item.quantity}
                  </p>
                </div>
                <button
                  className="col-span-1 my-auto ml-4 cursor-pointer p-2"
                  onClick={() => handleRemoveCartItemInSession(item.room_ID)}
                >
                  X
                </button>
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
              auth.data?.accessToken
                ? "hover:bg-blue-800"
                : "cursor-not-allowed opacity-50"
            }`}
            type="button"
            onClick={checkout}
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
