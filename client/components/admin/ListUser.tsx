import { useEffect, useState } from "react"
import { AiOutlineEdit } from "react-icons/ai"
import { BsFillTrashFill } from "react-icons/bs"
import { CgDetailsMore } from "react-icons/cg"
import { useDispatch, useSelector } from "react-redux"
import {
  deleteUser,
  getUsers,
  updateUser
} from "../../redux/actions/userAction"
import { IUser, RootStore, TypedDispatch } from "../../utils/types"
import LoadingSpin from "../alter/LoadingSpin"
import Modal from "../Modal"

const ListUser = () => {
  const [user, setUser] = useState<IUser>()
  const [type, setType] = useState<boolean>(false)

  const dispatch = useDispatch<TypedDispatch>()

  useEffect(() => {
    setTimeout(() => {
      dispatch(getUsers())
    }, 5000)
  }, [dispatch])

  const { users } = useSelector((state: RootStore) => state)

  const [showModal, setShowModal] = useState(false)
  const handleUpdateUser = (user: IUser) => {
    dispatch(updateUser(user))
  }
  if (!users.length) return <LoadingSpin />

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left">
        <thead className="text-xs uppercase">
          <tr className="text-center">
            <th scope="col" className="px-6 py-3"></th>
            <th scope="col" className="px-6 py-3">
              name
            </th>
            <th scope="col" className="px-6 py-3">
              email
            </th>
            <th scope="col" className="px-6 py-3">
              phone
            </th>
            <th scope="col" className="px-6 py-3">
              role
            </th>
            <th scope="col" className="px-6 py-3">
              status
            </th>
            <th scope="col" className="px-6 py-3">
              action
            </th>
          </tr>
        </thead>
        <tbody>
          {users?.map((item, index) => {
            return (
              <tr className="bg-white border-b text-center" key={item.id}>
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">
                  {item.firstName} {item.lastName}
                </td>
                <td className="px-6 py-4">{item.email}</td>
                <td className="px-6 py-4">{item.phone}</td>
                <td className="px-6 py-4">{item.role}</td>
                <td className="px-6 py-4">
                  {item.status ? "Hoạt động" : "Hết thời hạn"}
                </td>
                <td className="space-x-3 flex justify-center items-end pt-3">
                  <button
                    className="bg-red-700 rounded-full p-2 hover:bg-red-500"
                    type="button"
                    title="remove"
                    onClick={() => {
                      dispatch(deleteUser(item))
                    }}
                  >
                    <BsFillTrashFill className="text-white" />
                  </button>
                  <button
                    className="bg-gray-700 rounded-full p-2 hover:bg-gray-500"
                    type="button"
                    title="edit"
                    onClick={() => {
                      setShowModal(true)
                      setType(true)
                      setUser(item)
                    }}
                  >
                    <AiOutlineEdit className="text-white" />
                  </button>
                  <button
                    className="bg-[#829c57] rounded-full p-2 hover:bg-[#AACB73]"
                    type="button"
                    title="details"
                    onClick={() => {
                      setShowModal(true)
                      setType(false)
                      setUser(item)
                    }}
                  >
                    <CgDetailsMore className="text-white" />
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      {user && (
        <Modal
          type={type}
          callback={handleUpdateUser}
          showModal={showModal}
          setShowModal={setShowModal}
          body={user}
        />
      )}
    </div>
  )
}

export default ListUser
