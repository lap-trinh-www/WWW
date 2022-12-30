import Link from "next/link"
import React from "react"
import { AiOutlineSearch } from "react-icons/ai"
import { BiUserCircle } from "react-icons/bi"
const Header = () => {
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
      <div className="w-10 h-10 flex items-center justify-center">
        <Link href={`/login`} className="text-5xl cursor-pointer">
          <BiUserCircle />
        </Link>
      </div>
    </nav>
  )
}

export default Header
