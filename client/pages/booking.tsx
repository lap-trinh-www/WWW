import { useEffect, useState } from "react"
import { DayPicker } from "react-day-picker"
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import { BiBed } from "react-icons/bi"
import { FaTimes } from "react-icons/fa"
import { HiOutlineUsers } from "react-icons/hi2"
import { IoMdArrowDropdown } from "react-icons/io"
import { SlSizeActual } from "react-icons/sl"
import { useDispatch, useSelector } from "react-redux"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { getRooms } from "../redux/actions/roomAction"
import { useDate } from "../utils/hooks"
import { IRoom, RootStore, TypedDispatch } from "../utils/types"

import { motion, AnimatePresence } from "framer-motion"
import Head from "next/head"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Booking = () => {
  const [checkin, setCheckin] = useState<Date>()
  const [toggleCheckIn, setToggleCheckIn] = useState(false)
  const [checkOut, setCheckOut] = useState<Date>()
  const [toggleCheckOut, setToggleCheckOut] = useState(false)
  const [room, setRoom] = useState(1)
  const [adults, setAdults] = useState(1)
  const [children, setChildren] = useState(0)

  const [active, setActive] = useState(0)

  const [fillterRoom, setFillterRoom] = useState<IRoom[]>([])

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

  const dispatch = useDispatch<TypedDispatch>()
  useEffect(() => {
    dispatch(getRooms())
  }, [dispatch])
  const { rooms } = useSelector((state: RootStore) => state)
  useEffect(() => {
    setFillterRoom(rooms)
  }, [rooms])

  useEffect(() => {
    setFillterRoom(rooms.filter((room) => room.price === active))
  }, [active])
  return (
    <>
      <Head>
        <title>Booking</title>
      </Head>

      <Header />
      <div className="ml-40 mr-20 flex space-x-8 pt-24">
        <div className="space-y-5 w-1/4">
          <h1 className="text-2xl text-[#0c0c0c] font-medium">
            Check Availability
          </h1>

          <div className=" w-64 bg-[#F5F5F5] p-4 rounded-lg relative">
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
              <span className="font-semibold">Room</span>
              <div>
                <button
                  className={
                    "text-black px-[10px] pb-[1px] text-lg rounded-full border-cyan-400 border-2" +
                    (room === 1 ? " opacity-50 cursor-not-allowed" : "")
                  }
                  onClick={() => {
                    if (room > 1) {
                      setRoom(room - 1)
                    }
                  }}
                >
                  -
                </button>
                <span className="px-2 mx-2">{room}</span>
                <button
                  className="text-black px-[8px] pb-[1px] text-lg rounded-full border-cyan-400 border-2"
                  onClick={() => {
                    if (room < 5) {
                      setRoom(room + 1)
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
        <div className="w-3/4">
          <div className="flex">
            <h1>Fillter</h1>
            <ul className="flex space-x-4 ml-4">
              <li
                className="rounded-lg border border-gray-500 hover:bg-black transition-colors hover:text-white px-4 mb-6 cursor-pointer"
                onClick={() => setActive(100000)}
              >
                Sale
              </li>
              <li
                className="rounded-lg border border-gray-500 hover:bg-black transition-colors hover:text-white px-4 mb-6 cursor-pointer"
                onClick={() => setActive(3234)}
              >
                Expensive
              </li>
              <li
                className="rounded-lg border border-gray-500 hover:bg-black transition-colors hover:text-white px-4 mb-6 cursor-pointer"
                onClick={() => setActive(123)}
              >
                Cheap
              </li>
            </ul>
          </div>
          <motion.div layout className="grid grid-cols-2 h-fit gap-4">
            {fillterRoom.length !== 0 &&
              fillterRoom.map((item) => (
                <motion.div
                  layout
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  exit={{ opacity: 0 }}
                  className="rounded-lg flex shadow-md border pr-1 overflow-hidden"
                >
                  <img
                    src={item.images[0]}
                    alt={item.description}
                    className="h-full w-28 object-cover mr-3"
                  />
                  <div className="w-full">
                    <h1 className="font-medium ">{item.roomName}</h1>
                    {genarateStar(item.star)}
                    <span className="ml-2">{item.star} reviews</span>
                    <div className="mt-4 py-4 flex justify-between">
                      <button className="bg-transparent font-medium relative group">
                        BOOK NOW
                        <div
                          className="w-0 group-hover:w-full h-[2px] bg-gray-400 absolute top-full"
                          style={{ transition: "all 0.3s ease-in-out" }}
                        ></div>
                      </button>
                      <p className="">
                        <span className="line-through text-sm font-semibold">
                          ${item.price - 100}
                        </span>
                        {"  "}
                        <span className="font-medium ">${item.price}</span>
                        <span className="text-[#949494] text-base">
                          / night
                        </span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </>
  )
}

export default Booking
