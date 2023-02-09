import { useEffect, useState } from "react"
import { AiOutlineEdit } from "react-icons/ai"
import { BsFillTrashFill } from "react-icons/bs"
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from "../../redux/actions/userAction"
import { getAPIFecth } from "../../utils/fecthData"
import { IUser, RootStore, TypedDispatch } from "../../utils/types"
import Modal from "../Modal"

const ListUser = () => {
  const [user, setUser] = useState<IUser>()

  const dispatch = useDispatch<TypedDispatch>()

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  const { users } = useSelector((state: RootStore) => state)

  const [showModal, setShowModal] = useState(false)
  const updateUser = async (id: any, body: any) => {
    console.log(id, body)
  }
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
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, index) => {
            return (
              <tr className="bg-white border-b text-center" key={user.id}>
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">
                  {user.firstName} {user.lastName}
                </td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.phone}</td>
                <td className="px-6 py-4">{user.role}</td>
                <td className="px-6 py-4">
                  {user.status ? "Hoạt động" : "Hết thời hạn"}
                </td>
                <td className="space-x-3 flex justify-center items-end pt-3">
                  <button
                    className="bg-red-700 rounded-full p-2 hover:bg-red-500"
                    type="button"
                    title="remove"
                  >
                    <BsFillTrashFill className="text-white" />
                  </button>
                  <button
                    className="bg-gray-700 rounded-full p-2
                    hover:bg-gray-500
                    "
                    type="button"
                    title="edit"
                    onClick={() => setShowModal(true)}
                  >
                    <AiOutlineEdit className="text-white" />
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <Modal
        callback={updateUser}
        showModal={showModal}
        setShowModal={setShowModal}
        body={user}
        setBody={setUser}
      />
    </div>
  )
}

export default ListUser
