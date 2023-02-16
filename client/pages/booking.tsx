import Image from "next/image"
import { useState } from "react"
import { DayPicker } from "react-day-picker"
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import { BiBed } from "react-icons/bi"
import { FaTimes } from "react-icons/fa"
import { HiOutlineUsers } from "react-icons/hi2"
import { IoMdArrowDropdown } from "react-icons/io"
import { SlSizeActual } from "react-icons/sl"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { useDate } from "../utils/hooks"
import { roomImage } from "../utils/image"

const Booking = () => {
  const [checkin, setCheckin] = useState<Date>()
  const [toggleCheckIn, setToggleCheckIn] = useState(false)
  const [checkOut, setCheckOut] = useState<Date>()
  const [toggleCheckOut, setToggleCheckOut] = useState(false)
  const [rooms, setRooms] = useState(1)
  const [adults, setAdults] = useState(1)
  const [children, setChildren] = useState(0)

  const genarateStar = (star: number) => {
    const stars = []
    for (let i = 0; i < star; i++) {
      stars.push(
        <AiFillStar className="text-yellow-400 inline-block" key={i} />
      )
    }
    if (star < 5)
      for (let i = 0; i < 5 - star; i++) {
        stars.push(
          <AiOutlineStar className="text-yellow-400 inline-block" key={5 - i} />
        )
      }
    return stars
  }

  return (
    <div className="mx-52 grid grid-cols-4 h-32 space-x-4">
      <div className="col-span-1 space-y-5">
        <h1 className="text-2xl text-[#0c0c0c] font-medium">
          Check Availability
        </h1>

        <div className="h-[86x] w-64 bg-[#F5F5F5] p-4 rounded-lg relative">
          <span>Check In</span>
          <div
            className="flex justify-between items-center cursor-pointer relative"
            onClick={() => {
              setToggleCheckIn(!toggleCheckIn)
              setToggleCheckOut(false)
            }}
          >
            <p className="font-bold">
              {checkin ? useDate(checkin) : "Select date"}
            </p>
            <IoMdArrowDropdown />
          </div>
          {toggleCheckIn && (
            <div className="bg-[#f5f5f5] absolute  top-[calc(100%+20px)] -left-7 w-[calc(100%+70px)] rounded-lg shadow-2xl picker z-50">
              <FaTimes
                className="float-right my-2 mr-2 font-bold text-base cursor-pointer"
                onClick={() => {
                  setToggleCheckIn(!toggleCheckIn)
                  setToggleCheckOut(false)
                }}
              />
              <DayPicker
                mode="single"
                selected={checkin}
                onSelect={setCheckin}
                className="mx-10"
              />
            </div>
          )}
        </div>
        <div className="h-[86x] w-64 bg-[#F5F5F5] p-4 rounded-lg relative">
          <span>Check Out</span>
          <div
            className="flex justify-between items-center cursor-pointer relative"
            onClick={() => {
              setToggleCheckOut(!toggleCheckOut)
              setToggleCheckIn(false)
            }}
          >
            <p className="font-bold">
              {checkOut ? useDate(checkOut) : "Select date"}
            </p>
            <IoMdArrowDropdown />
          </div>
          {toggleCheckOut && (
            <div className="bg-[#f5f5f5] absolute  top-[calc(100%+20px)] -left-7 w-[calc(100%+70px)] rounded-lg shadow-2xl picker z-50">
              <FaTimes
                className="float-right my-2 mr-2 font-bold text-base cursor-pointer"
                onClick={() => {
                  setToggleCheckOut(!toggleCheckOut)
                  setToggleCheckIn(false)
                }}
              />
              <DayPicker
                mode="single"
                selected={checkOut}
                onSelect={setCheckOut}
                className="mx-10"
              />
            </div>
          )}
        </div>
        <ul className="h-[86x] w-64 bg-[#F5F5F5] p-4 rounded-lg space-y-4">
          <li className="flex justify-between items-center">
            <span className="font-semibold">Rooms</span>
            <div>
              <button
                className={
                  "text-black px-[10px] pb-[1px] text-lg rounded-full border-cyan-400 border-2" +
                  (rooms === 1 ? " opacity-50 cursor-not-allowed" : "")
                }
                onClick={() => {
                  if (rooms > 1) {
                    setRooms(rooms - 1)
                  }
                }}
              >
                -
              </button>
              <span className="px-2 mx-2">{rooms}</span>
              <button
                className="text-black px-[8px] pb-[1px] text-lg rounded-full border-cyan-400 border-2"
                onClick={() => {
                  if (rooms < 5) {
                    setRooms(rooms + 1)
                  }
                }}
              >
                +
              </button>
            </div>
          </li>
          <li className="flex justify-between items-center">
            <span className="font-semibold">Adults</span>
            <div>
              <button
                className={
                  "text-black px-[10px] pb-[1px] text-lg rounded-full border-cyan-400 border-2" +
                  (adults === 1 ? " opacity-50 cursor-not-allowed" : "")
                }
                onClick={() => {
                  if (adults > 1) {
                    setAdults(adults - 1)
                  }
                }}
              >
                -
              </button>
              <span className="px-2 mx-2">{adults}</span>
              <button
                className="text-black px-[8px] pb-[1px] text-lg rounded-full border-cyan-400 border-2"
                onClick={() => {
                  if (adults < 5) {
                    setAdults(adults + 1)
                  }
                }}
              >
                +
              </button>
            </div>
          </li>
          <li className="flex justify-between items-center pb-4">
            <span className="font-semibold">Children</span>
            <div>
              <button
                className={
                  "text-black px-[10px] pb-[1px] text-lg rounded-full border-cyan-400 border-2" +
                  (children === 0 ? " opacity-50 cursor-not-allowed" : "")
                }
                onClick={() => {
                  if (children > 0) {
                    setChildren(children - 1)
                  }
                }}
              >
                -
              </button>
              <span className="px-2 mx-2">{children}</span>
              <button
                className="text-black px-[8px] pb-[1px] text-lg rounded-full border-cyan-400 border-2"
                onClick={() => {
                  if (children < 5) {
                    setChildren(children + 1)
                  }
                }}
              >
                +
              </button>
            </div>
          </li>
        </ul>
        <button className="bg-transparent font-bold py-2 px-4 mt-8 border-black rounded w-64 border-2">
          SEARCH ROOM
        </button>
      </div>
      <div className="col-span-3 space-y-16 ">
        {roomImage.map((item, index) => (
          <div className="grid grid-cols-3" key={item.room_ID}>
            <Image
              src={item.images[0]}
              alt={item.description}
              className="col-span-1 h-full w-full object-cover"
            />
            <div className="col-span-2 p-8">
              <h1 className="font-medium text-3xl">{item.roomName}</h1>
              <br />
              <ul className="flex flex-row space-x-6">
                <li className="flex items-center text-[#848484] text-lg">
                  <BiBed className="text-2xl mr-2" />
                  <span className="text-sm font-semibold">1 King Bed</span>
                </li>
                <li className="flex items-center text-[#848484] text-lg">
                  <HiOutlineUsers className="text-2xl mr-2" />
                  <span className="text-sm font-semibold">
                    {item.limitQuantity} Guest
                  </span>
                </li>
                <li className="flex items-center text-[#848484] text-lg">
                  <SlSizeActual className="text-2xl mr-2" />
                  <span className="text-sm font-semibold">
                    {item.acreage} Sqm
                  </span>
                </li>
              </ul>
              <br />
              <p>{item.description}</p>
              <br />
              {genarateStar(item.star)}
              <span className="ml-2">{item.star} reviews</span>
              <div className="mt-4 py-4 flex justify-between">
                <button className="bg-transparent font-medium relative group">
                  BOOK NOW {">"}{" "}
                  <div
                    className="w-0 group-hover:w-full h-[2px] bg-gray-400 absolute top-full"
                    style={{ transition: "all 0.3s ease-in-out" }}
                  ></div>
                </button>
                <p>
                  <span className="font-medium text-2xl">From</span>{" "}
                  <span className="line-through text-sm font-semibold">
                    ${item.price - 100}
                  </span>{" "}
                  <span className="font-medium text-2xl">${item.price}</span>{" "}
                  <span className="text-[#949494] text-base">/ night</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Booking
