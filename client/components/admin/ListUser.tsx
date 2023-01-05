import { useEffect, useState } from "react"
import { AiOutlineEdit } from "react-icons/ai"
import { BsFillTrashFill } from "react-icons/bs"
import { getAPIFecth } from "../../utils/fecthData"
import { IUser2 } from "../../utils/types"

const ListUser = () => {
  const [user, setUser] = useState<IUser2[]>([])

  useEffect(() => {
    getAPIFecth("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUser(res.data)
      })
      .catch((res) => {
        // console.log(res)
      })
  }, [])
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left">
        <thead className="text-xs uppercase">
          <tr>
            <th scope="col" className="px-6 py-3">
              id
            </th>
            <th scope="col" className="px-6 py-3">
              name
            </th>
            <th scope="col" className="px-6 py-3">
              username
            </th>
            <th scope="col" className="px-6 py-3">
              email
            </th>
            <th scope="col" className="px-6 py-3">
              phone
            </th>
            <th scope="col" className="px-6 py-3">
              website
            </th>
            <th scope="col" className="px-6 py-3">
              action
            </th>
          </tr>
        </thead>
        <tbody>
          {user?.map((user, index) => {
            return (
              <tr className="bg-white border-b">
                <td className="px-6 py-4">{user.id}</td>
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.username}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.phone}</td>
                <td className="px-6 py-4">{user.website}</td>
                <td className="space-x-3 flex justify-center items-end pt-3">
                  <button className="bg-red-700 rounded-full p-2">
                    <BsFillTrashFill className="text-white" />
                  </button>
                  <button className="bg-gray-500 rounded-full p-2">
                    <AiOutlineEdit />
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ListUser
