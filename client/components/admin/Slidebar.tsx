import Link from "next/link"
import { useState } from "react"
import { AiTwotoneHome } from "react-icons/ai"
import { CgLogOff } from "react-icons/cg"
import { FaChevronDown, FaHotel, FaUserTie } from "react-icons/fa"
import { ImProfile } from "react-icons/im"
import { TbBrandBooking } from "react-icons/tb"

const Slidebar = () => {
  const [user, setUser] = useState(false)
  const [hotel, setHotel] = useState(false)
  const [booking, setBooking] = useState(false)
  const [profile, setProfile] = useState(false)
  return (
    <aside className="w-64 bg-black text-white h-[92vh] overflow-auto no-scrollbar pb-10 fixed top-[8%] z-20 xl:h-screen xl:top-14">
      <div className="py-4">
        <ul className="space-y-2">
          <li>
            <Link
              href="/admin"
              className="pl-7 flex items-center p-2 text-xl font-normal group hover:bg-[#FF0000 hover:bg-[#FF0000] cursor-pointer]"
            >
              <AiTwotoneHome className="text-[#ff0000] group-hover:text-white" />
              <span className="ml-3">Dashboard</span>
            </Link>
          </li>
          <li
            onClick={() => {
              setUser(!user)
            }}
          >
            <button
              type="button"
              className="pl-7 flex items-center p-2 w-full text-xl font-normal transition duration-7 hover:bg-[#FF0000] group"
              aria-controls="dropdown-example"
              data-collapse-toggle="dropdown-example"
            >
              <FaUserTie className="text-[#ff0000] group-hover:text-white" />
              <span
                className="flex-1 ml-3 text-left whitespace-nowrap"
                sidebar-toggle-item="true"
              >
                User
              </span>
              <FaChevronDown />
            </button>
            {user && (
              <ul
                className="flex flex-col w-full h-0"
                style={{
                  height: "fit-content",
                  transition: "all 2s linear"
                }}
              >
                <li>
                  <Link
                    href="/admin/create-user"
                    className="p-2 font-normal pl-7 flex items-center text-lg  hover:bg-[#FF0000] cursor-pointer"
                  >
                    <span>Create</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin/users"
                    className="p-2 font-normal pl-7 flex items-center text-lg  hover:bg-[#FF0000] cursor-pointer"
                  >
                    <span>List</span>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li
            onClick={() => {
              setHotel(!hotel)
            }}
          >
            <button
              type="button"
              className="pl-7 flex items-center p-2 w-full text-xl font-normal transition duration-7 group hover:bg-[#FF0000]"
              aria-controls="dropdown-example"
              data-collapse-toggle="dropdown-example"
            >
              <FaHotel className="text-[#ff0000] group-hover:text-white" />
              <span
                className="flex-1 ml-3 text-left whitespace-nowrap"
                sidebar-toggle-item="true"
              >
                Room
              </span>
              <FaChevronDown />
            </button>
            {hotel && (
              <ul
                className="flex flex-col w-full h-0"
                style={{
                  height: "fit-content",
                  transition: "all 2s linear"
                }}
              >
                <li>
                  <Link
                    href="/admin/create-room"
                    className="p-2 font-normal pl-7 flex items-center text-lg  hover:bg-[#FF0000] cursor-pointer"
                  >
                    <span>Create</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin/list-room"
                    className="p-2 font-normal pl-7 flex items-center text-lg  hover:bg-[#FF0000] cursor-pointer"
                  >
                    <span>List</span>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li
            onClick={() => {
              setBooking(!booking)
            }}
          >
            <button
              type="button"
              className="pl-7 flex items-center p-2 w-full text-xl font-normal transition duration-7 hover:bg-[#FF0000] group"
              aria-controls="dropdown-example"
              data-collapse-toggle="dropdown-example"
            >
              <TbBrandBooking className="text-[#ff0000] group-hover:text-white" />
              <span
                className="flex-1 ml-3 text-left whitespace-nowrap"
                sidebar-toggle-item="true"
              >
                Bookings
              </span>
              <FaChevronDown />
            </button>
            {booking && (
              <ul
                className="flex flex-col w-full h-0"
                style={{
                  height: "fit-content",
                  transition: "all 2s linear"
                }}
              >
                <li>
                  <Link
                    href="/admin/bookings"
                    className="p-2 font-normal pl-7 flex items-center text-lg  hover:bg-[#FF0000] cursor-pointer"
                  >
                    <span>All</span>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li
            onClick={() => {
              setProfile(!profile)
            }}
          >
            <button
              type="button"
              className="pl-7 flex items-center p-2 w-full text-xl font-normal transition duration-7 hover:bg-[#FF0000] group"
              aria-controls="dropdown-example"
              data-collapse-toggle="dropdown-example"
            >
              <ImProfile className="text-[#ff0000] group-hover:text-white" />
              <span
                className="flex-1 ml-3 text-left whitespace-nowrap"
                sidebar-toggle-item="true"
              >
                Profile
              </span>
              <FaChevronDown />
            </button>
            {profile && (
              <ul
                className="flex flex-col w-full h-0"
                style={{
                  height: "fit-content",
                  transition: "all 2s linear"
                }}
              >
                <li>
                  <Link
                    href="/admin/profile"
                    className="p-2 font-normal pl-7 flex items-center text-lg  hover:bg-[#FF0000] cursor-pointer"
                  >
                    <span>View profile</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin/edit-profile"
                    className="p-2 font-normal pl-7 flex items-center text-lg  hover:bg-[#FF0000] cursor-pointer"
                  >
                    <span>Edit profile</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin/change-password"
                    className="p-2 font-normal pl-7 flex items-center text-lg  hover:bg-[#FF0000] cursor-pointer"
                  >
                    <span>Change password</span>
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
      <button className="bg-black z-30 absolute bottom-0 left-0 w-64 py-2 group text-[#ff0000]">
        <CgLogOff className="mx-auto group-hover:text-white text-xl  group-hover:animate-spin animate-un-spin" />
      </button>
    </aside>
  )
}

export default Slidebar
