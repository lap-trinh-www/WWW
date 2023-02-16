import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { AiTwotoneHome } from "react-icons/ai"
import { CgLogOff } from "react-icons/cg"
import { FaChevronDown, FaHotel, FaUserTie } from "react-icons/fa"
import { ImProfile } from "react-icons/im"
import { TbBrandBooking } from "react-icons/tb"

const Slidebar = () => {
  const { slug } = useRouter().query
  const { pathname } = useRouter()

  const [user, setUser] = useState(false)
  const [hotel, setHotel] = useState(false)
  const [booking, setBooking] = useState(false)
  const [profile, setProfile] = useState(false)

  useEffect(() => {
    if (slug === "users") {
      setUser(true)
    } else if (slug === "create-room" || slug === "list-room") {
      setHotel(true)
    } else if (slug === "bookings") {
      setBooking(true)
    } else if (
      slug === "profile" ||
      slug === "edit-profile" ||
      slug === "change-password"
    ) {
      setProfile(true)
    }
  }, [slug])

  return (
    <aside className="w-64 bg-black text-white h-[92vh] overflow-auto no-scrollbar pb-10 fixed top-[8%] z-20 xl:h-screen xl:top-14">
      <div className="py-4">
        <ul className="space-y-2">
          <li className={pathname === "/admin" ? "bg-[#FF0000]" : ""}>
            <Link
              href="/admin"
              className="pl-7 flex items-center p-2 text-xl font-normal group  hover:bg-[#FF0000] cursor-pointer]"
            >
              <AiTwotoneHome className="text-[#ff0000] group-hover:text-white" />
              <span className="ml-3">Dashboard</span>
            </Link>
          </li>
          <li className={slug === "users" ? "bg-[#FF0000]" : ""}>
            <button
              type="button"
              className="p-2 pl-0 w-full text-xl font-normal transition duration-7 hover:bg-[#FF0000] group"
            >
              <Link
                href="/admin/users"
                className="p-2 font-normal pl-7 flex items-center text-lg"
              >
                <FaUserTie className="text-[#ff0000] group-hover:text-white" />
                <span
                  className="flex-1 ml-3 text-left whitespace-nowrap"
                  sidebar-toggle-item="true"
                >
                  User
                </span>
              </Link>
            </button>
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
                <li className={slug === "create-room" ? "bg-[#FF0000]" : ""}>
                  <Link
                    href="/admin/create-room"
                    className="p-2 font-normal pl-7 flex items-center text-lg  hover:bg-[#FF0000] cursor-pointer"
                  >
                    <span>Create</span>
                  </Link>
                </li>
                <li className={slug === "list-room" ? "bg-[#FF0000]" : ""}>
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
                <li className={slug === "bookings" ? "bg-[#FF0000]" : ""}>
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
                <li className={slug === "profile" ? "bg-[#FF0000]" : ""}>
                  <Link
                    href="/admin/profile"
                    className="p-2 font-normal pl-7 flex items-center text-lg  hover:bg-[#FF0000] cursor-pointer"
                  >
                    <span>View profile</span>
                  </Link>
                </li>
                <li className={slug === "edit-profile" ? "bg-[#FF0000]" : ""}>
                  <Link
                    href="/admin/edit-profile"
                    className="p-2 font-normal pl-7 flex items-center text-lg  hover:bg-[#FF0000] cursor-pointer"
                  >
                    <span>Edit profile</span>
                  </Link>
                </li>
                <li
                  className={slug === "change-password" ? "bg-[#FF0000]" : ""}
                >
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
      <button
        className="bg-black z-30 absolute bottom-0 left-0 w-64 py-2 group text-[#ff0000]"
        title="logout"
        type="button"
      >
        <CgLogOff className="mx-auto group-hover:text-white text-xl  group-hover:animate-spin animate-un-spin" />
      </button>
    </aside>
  )
}

export default Slidebar
