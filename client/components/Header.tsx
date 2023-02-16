import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { AiOutlineSearch } from "react-icons/ai"
import { BiUserCircle } from "react-icons/bi"
import { BsCart3 } from "react-icons/bs"
import { useSelector } from "react-redux"
import { RootStore } from "../utils/types"
import Cart from "./Cart"
const Header = () => {
  const { auth } = useSelector((state: RootStore) => state)

  const [openSlidebar, setOpenSlidebar] = useState(false)
  useEffect(() => {
    if (openSlidebar) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [openSlidebar])

  return (
    <nav className="flex justify-between bg-white items-center border-gray-200 px-10 py-2.5 shadow-md">
      <Link href="/" className="flex items-center">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="h-6 mr-3 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center text-xl font-semibold whitespace-nowrap text-black">
          kuga
        </span>
      </Link>
      <div>
        <div className="relative flex items-center p-2 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50 w-max">
          <div className="bg-orange-400 p-2 w-8 rounded-full mr-4">
            <AiOutlineSearch className="text-lg font-extrabold cursor-pointer" />
          </div>
          <input
            type="text"
            id="search-navbar"
            className="block w-full outline-none"
            placeholder="Search..."
          />
        </div>
      </div>
      {auth.data?.accessToken ? (
        <div className="w-10 h-10 flex items-center justify-center  relative group cursor-pointer">
          <img
            src={auth.data.avatar}
            alt={auth.data.firstName}
            className="w-10 h-10 rounded-full bg-contain sm:h-9"
          />
          <ul className="mb-8 space-y-4 group-hover:text-black hidden show group-hover:w-48 group-hover:h-fit group-hover:bg-white group-hover:-left-32 group-hover:before:left-36 group-hover:shadow-[0_0_30px_-15px_rgb(0,0,0)] group-hover:before:border-b-white group-hover:after:h-8 group-hover:after:w-28 group-hover:after:absolute group-hover:after:-top-5 group-hover:after:left-20">
            <li className="text-lg text-gray-500 hover:text-black">
              <span>Tài khoản của tôi</span>
            </li>
            <li className="text-lg text-gray-500 hover:text-black">
              <span>Đơn đặt</span>
            </li>
            <li className="text-lg text-gray-500 hover:text-black">
              <span>Đăng xuất</span>
            </li>
          </ul>
          <BsCart3 className="text-3xl cursor-pointer" />
        </div>
      ) : (
        <div className="flex items-center space-x-4 relative">
          <Link href={`/login`} className="text-5xl cursor-pointer">
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center flex mx-auto"
              type="button"
            >
              Đăng nhập
            </button>
          </Link>

          <BsCart3
            className="text-3xl cursor-pointer"
            onClick={() => {
              setOpenSlidebar(true)
            }}
          />
        </div>
      )}
      <Cart open={openSlidebar} setOpen={setOpenSlidebar} />
    </nav>
  )
}

export default Header
