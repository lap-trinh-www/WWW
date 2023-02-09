import { useState } from "react"
import { FcStackOfPhotos } from "react-icons/fc"
import { useSelector } from "react-redux"
import {
  FormSubmit,
  IModal,
  InputChange,
  IUser,
  RootStore
} from "../utils/types"
import { Tooltip } from "./ToolTip"
interface IProps {
  body?: IUser
  setBody: (body: IUser) => void
  showModal: boolean
  setShowModal: (showModal: boolean) => void
  callback: (id: string, body: IUser) => void
}
export default function Modal({
  callback,
  showModal,
  setShowModal,
  body,
  setBody
}: IProps) {
  const [active, setActive] = useState(body?.status)

  const initalize: IUser = {
    firstName: "",
    lastName: "",
    avatar: "",
    email: "",
    phone: "",
    status: false,
    bills: [],
    enabled: false,
    id: "",
    role: ""
  }

  const handleSubmit = (e: FormSubmit) => {
    e.preventDefault()
    console.log(body)
    if (!body) return
    callback(body.id, body)
    setShowModal(!showModal)
  }
  const handleChange = (e: InputChange) => {
    // if (!body) {
    //   console.log("body is null")
    // }
    const { name, value } = e.target

    setBody({ ...body, [name]: value })
  }

  const handleCancel = () => {
    setShowModal(!showModal)
    if (!body) return

    setBody(initalize)
  }
  return (
    <>
      {showModal ? (
        <>
          <div className="ml-64 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto my-6 mx-auto max-w-6xl">
              <form
                className="border-0 rounded-lg shadow-lg relative flex flex-col w-[60rem] bg-white outline-none focus:outline-none flex-1 p-4"
                onSubmit={handleSubmit}
              >
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 pt-4 w-full mb-6 group">
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                      value={body?.firstName}
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="firstName"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      First name
                    </label>
                  </div>
                  <div className="relative z-0 pt-4 w-full mb-6 group">
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                      value={body?.lastName}
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="lastName"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Last name
                    </label>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 pt-4 w-full mb-6 group">
                    <input
                      type="tel"
                      // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      name="phone"
                      id="phone"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                      value={body?.phone}
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="phone"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Phone number (0123456789)
                    </label>
                  </div>
                  <div className="relative z-0 pt-4 w-full mb-6 group">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                      value={body?.email}
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="email"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Email
                    </label>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="bg-orange-400 text-white  font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setActive(!active)
                    }}
                  >
                    Add 1 year
                  </button>
                  <div className="rounded-b">
                    <button
                      className="text-red-700 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                    <button
                      className="bg-emerald-500 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit"
                    >
                      update
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}
