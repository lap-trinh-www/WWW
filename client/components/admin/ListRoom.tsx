import { useEffect, useState } from "react"
import { AiOutlineEdit, AiOutlineGift } from "react-icons/ai"
import { BsBookmarkCheck, BsFillTrashFill } from "react-icons/bs"
import { useDispatch, useSelector } from "react-redux"
import { deleteRoom, getRooms } from "../../redux/actions/roomAction"
import { RootStore, TypedDispatch } from "../../utils/types"
import { listServices } from "../Services"

const ListRoom = () => {
  const [type, setType] = useState<boolean>(false)

  const dispatch = useDispatch<TypedDispatch>()
  useEffect(() => {
    dispatch(getRooms())
  }, [dispatch])

  const { rooms } = useSelector((state: RootStore) => state)

  return (
    <div className="space-y-4">
      {rooms.map((room) => {
        return (
          <div
            key={room.room_ID}
            className=" bg-white border-2 shadow-lg rounded-xl overflow-hidden flex"
          >
            <img
              src={room.images[0]}
              alt=""
              className="w-80 h-64 object-cover"
            />
            <div className="p-4 pl-12 w-[55rem]">
              <ul className="flex justify-between">
                <li className="relative group cursor-pointer mr-96">
                  <div className="hidden show">A</div>
                  <p className="text-xl font-semibold mb-2">{room.roomName}</p>
                  <div className="flex space-x-2">
                    <div className="bg-[#D2EEE1] text-green-500 flex items-center px-2 py-1 rounded-md font-bold text-xs">
                      <BsBookmarkCheck className="mr-1" /> Special Rate
                    </div>
                    <div className="bg-[#FCEBD1] text-orange-700 flex items-center px-2 py-1 rounded-md font-bold text-xs">
                      <AiOutlineGift className="mr-1" /> Loyalty Member
                    </div>
                  </div>
                </li>
                <li className="">
                  <p>
                    <span className="text-gray-400 line-through text-lg">
                      ${room.price + 100}
                    </span>
                    {"  "}
                    <span className="text-green-500 text-xl font-bold">
                      ${room.price}
                    </span>
                  </p>
                  <p className="text-gray-400 text-xs">
                    {room.limitQuantity} persons
                  </p>
                </li>
              </ul>
              <br />
              <p>{room.description}</p>
              <br />
              <ul className="flex space-x-6 text-2xl text-gray-600 items-center">
                {listServices.map((service) => {
                  return (
                    room.services?.find((item) => service.name === item) && (
                      <li className="relative group cursor-pointer">
                        <div className="hidden show">{service.name}</div>
                        {service.icon}
                      </li>
                    )
                  )
                })}
              </ul>
              <br />
              <div>
                <button
                  className="float-right mb-2 md:mb-0 text-white bg-[#01A3C7] hover:bg-[#028ead] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm p-2 flex items-center"
                  title="edit"
                  type="button"
                >
                  <AiOutlineEdit className="text-white mr-1" />
                  Edit
                </button>
                <button
                  className="float-right mb-2 md:mb-0 text-white bg-[#c70101] hover:bg-[#e20303] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm p-2 flex items-center mr-4"
                  title="edit"
                  type="button"
                  onClick={() => {
                    dispatch(deleteRoom(room.room_ID))
                  }}
                >
                  <BsFillTrashFill className="text-white mr-1" />
                  Remove
                </button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ListRoom
