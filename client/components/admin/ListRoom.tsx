import Image from "next/image"
import { useState, useEffect } from "react"
import { AiOutlineGift } from "react-icons/ai"
import { BsBookmarkCheck } from "react-icons/bs"
import { FaCity, FaSwimmer } from "react-icons/fa"
import { IoIosFitness } from "react-icons/io"
import { MdChair, MdOutlineYard } from "react-icons/md"
import { TbMassage } from "react-icons/tb"
import { useDispatch, useSelector } from "react-redux"
import { getRooms } from "../../redux/actions/roomAction"
import { getUsers } from "../../redux/actions/userAction"
import { roomImage } from "../../utils/image"
import { IRoom, RootStore, TypedDispatch } from "../../utils/types"

const ListRoom = () => {
  // const [room, setRoom] = useState<IRoom>()
  const [type, setType] = useState<boolean>(false)

  const dispatch = useDispatch<TypedDispatch>()
  useEffect(() => {
    dispatch(getRooms())
  }, [dispatch])

  const { rooms } = useSelector((state: RootStore) => state)

  return (
    <div className="space-y-4">
      {rooms.map((room, index) => {
        return (
          <div
            key={index}
            className="col-span-4 grid grid-cols-5 bg-white border-2 shadow-lg rounded-xl overflow-hidden"
          >
            {/* <Image
              src={room.images[0]}
              alt={room.description}
              className="bg-cover col-span-2 h-full w-10"
            />
             */}
            <img src={room.images[0]} alt="" className="w-64 h-64 bg-cover" />
            <div className="col-span-3 p-4">
              <ul className="flex justify-between w-full">
                <li className="relative group cursor-pointer">
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
                <li className="text-right">
                  <p>
                    <span className="text-gray-400 line-through text-lg">
                      ${room.price + 100}
                    </span>
                    {"  "}
                    <span className="text-green-500 text-xl font-bold">
                      ${room.price}
                    </span>
                  </p>
                  <p className="text-gray-400 text-xs">1 Night, 2 Persons</p>
                </li>
              </ul>
              <br />
              <p>{room.description}</p>
              <br />
              <ul className="flex space-x-6 text-2xl text-gray-600 items-center">
                <li className="relative group cursor-pointer">
                  <div className="hidden show">A</div>
                  <IoIosFitness />
                </li>
                <li className="relative group cursor-pointer">
                  <div className="hidden show">A</div>
                  <MdChair />
                </li>
                <li className="relative group cursor-pointer">
                  <div className="hidden show">A</div>
                  <FaSwimmer />
                </li>
                <li className="relative group cursor-pointer">
                  <div className="hidden show">A</div>
                  <TbMassage />
                </li>
                <li className="relative group cursor-pointer">
                  <div className="hidden show">A</div>
                  <MdOutlineYard />
                </li>
                <li className="relative group cursor-pointer">
                  <div className="hidden show">A</div>
                  <FaCity />
                </li>
                <li className="text-xs">+11 Amenities</li>
              </ul>
              <br />
              <button className="float-right mb-2 md:mb-0 text-white bg-[#01A3C7] hover:bg-[#028ead] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-8 py-3 text-center">
                RESERVE
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ListRoom
