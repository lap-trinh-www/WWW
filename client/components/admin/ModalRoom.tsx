import { useEffect, useState } from "react"
import { FormSubmit, InputChange, IUser } from "../../utils/types"
import { GrClose } from "react-icons/gr"
interface IProps {
  type: boolean
  body: IUser
  showModal: boolean
  setShowModal: (showModal: boolean) => void
  callback: (body: IUser) => void
}

export default function ModalRoom({
  type,
  callback,
  showModal,
  setShowModal,
  body
}: IProps) {
  const [active, setActive] = useState(body?.status)

  const [user, setUser] = useState<IUser>()
  useEffect(() => {
    setUser(body)
  }, [body])
  if (!user) return null
  const { email, firstName, lastName, phone } = user
  const handleSubmit = (e: FormSubmit) => {
    e.preventDefault()
    if (!user) return
    callback(user)
    setShowModal(!showModal)
  }
  const handleChange = (e: InputChange) => {
    if (!user) return
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const handleCancel = () => {
    setShowModal(!showModal)
    if (!user) return
  }
  const CardInfo = ({ user }: { user: IUser }) => (
    <div className="flex items-center h-screen w-full justify-center">
      <div className="max-w-xs">
        <div className="bg-white shadow-xl rounded-lg py-3 px-8 relative w-fit">
          <GrClose
            className="absolute right-3 text-2xl hover:bg-red-600 rounded-full cursor-pointer p-1"
            onClick={() => {
              setShowModal(!showModal)
            }}
          />
          <div className="photo-wrapper p-2">
            {user.avatar.split(".")[1] === undefined ? (
              <div className="w-32 h-32 rounded-full mx-auto bg-red-400 flex items-center justify-center">
                <span className="text-8xl font-black ">
                  {user.firstName.substring(0, 1)}
                </span>
              </div>
            ) : (
              <img
                className="w-32 h-32 rounded-full mx-auto"
                src={user.avatar}
                alt="John Doe"
              />
            )}
          </div>
          <div className="p-2">
            <h3 className="text-center text-2xl text-gray-900 font-medium leading-8">
              {user.firstName} {user.lastName}
            </h3>
            <div className="text-center text-gray-400 text-base font-semibold">
              <p>{user.role}</p>
            </div>
            <table className="text-lg my-3">
              <tbody>
                <tr>
                  <td className="p-2 pr-4 text-gray-500 font-semibold">
                    Phone
                  </td>
                  <td className="p-2">{user.phone}</td>
                </tr>
                <tr>
                  <td className="p-2 pr-4 text-gray-500 font-semibold">
                    Email
                  </td>
                  <td className="p-2">{user.email}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {showModal && (
        <>
          <div className="ml-64 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            {type ? (
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
                        value={firstName}
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
                        value={lastName}
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
                        value={phone}
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
                        value={email}
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
            ) : (
              <CardInfo user={user} />
            )}
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  )
}
