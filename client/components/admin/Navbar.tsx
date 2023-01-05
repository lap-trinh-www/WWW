import Link from "next/link"
import React from "react"
import { AiOutlineSearch } from "react-icons/ai"
import { BsList } from "react-icons/bs"
import { FaHotel } from "react-icons/fa"

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-black px-4 py-3 fixed w-full z-10 shadow-md shadow-gray-400">
      <Link href={"/"}>
        <div className="font-bold text-3xl text-[#FF0000] flex items-center">
          <FaHotel className="font-bold mr-4" />
          Hotel
        </div>
      </Link>
      <form>
        <div className="relative mr-10">
          <input
            className="block w-96 text-sm text-white border border-transparent rounded-full bg-[#4D4D4D] placeholder:text-gray-500 focus:border-[#028ead] focus:outline-none h-8 outline-none pl-4"
            placeholder="Search"
            required
          />
          <button
            type="submit"
            className="text-black absolute top-1/2 -translate-y-1/2 right-2 text-xl rounded-lg px-4 py"
          >
            <AiOutlineSearch />
          </button>
        </div>
      </form>
    </div>
  )
}

export default Navbar
