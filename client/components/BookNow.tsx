import viLocale from "date-fns/locale/vi"
import Image from "next/image"
import { useState } from "react"
import { DateRange } from "react-date-range"
// import "react-date-range/dist/styles.css" // main style file
// import "react-date-range/dist/theme/default.css" // theme css file
import { AiOutlineGift } from "react-icons/ai"
import { FaCity, FaSwimmer } from "react-icons/fa"
import { IoIosFitness } from "react-icons/io"
import {
  MdChair,
  MdOutlineArrowForwardIos,
  MdOutlineYard
} from "react-icons/md"
import { TbMassage } from "react-icons/tb"
import { IRoom } from "../utils/types"

import { BsBookmarkCheck, BsGiftFill } from "react-icons/bs"
import { ImWarning } from "react-icons/im"

interface IProps {
  room: IRoom
}

const BookNow = ({ room }: IProps) => {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [numOfGuests, setNumOfGuests] = useState("1")

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection"
  }

  const handleSelect = (ranges: any) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  const [adults, setAdults] = useState(1)
  const [rooms, setRooms] = useState(1)
  const [bed, setBed] = useState(1)
  const [children, setChildren] = useState(0)
  console.log(room)
  return (
    <div className="grid grid-cols-10 space-x-11 p-12 bg-[#f0f0f0]">
      <div className="col-span-7">
        <div className="grid grid-cols-6 space-x-10">
          <div className="col-span-4 grid grid-cols-5 bg-white border-2 shadow-lg rounded-xl overflow-hidden">
            <Image
              src={room.image}
              alt={room.description}
              className="bg-cover col-span-2 h-full"
            />
            <div className="col-span-3 p-4">
              <ul className="flex justify-between w-full">
                <li className="relative group cursor-pointer">
                  <div className="hidden show">A</div>
                  <p className="text-xl font-semibold mb-2">{room.title}</p>
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
          <div className="col-span-2 bg-white border-2 shadow-lg px-2 py-6 overflow-hidden">
            <ul className="space-y-3">
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
              <hr className="w-[calc(100%+70px)] -ml-10" />
              <li className="flex justify-between items-center pt-2">
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
                <span className="font-semibold">Beds</span>
                <div>
                  <button
                    className={
                      "text-black px-[10px] pb-[1px] text-lg rounded-full border-cyan-400 border-2" +
                      (bed === 1 ? " opacity-50 cursor-not-allowed" : "")
                    }
                    onClick={() => {
                      if (bed > 1) {
                        setBed(bed - 1)
                      }
                    }}
                  >
                    -
                  </button>
                  <span className="px-2 mx-2">{bed}</span>
                  <button
                    className="text-black px-[8px] pb-[1px] text-lg rounded-full border-cyan-400 border-2"
                    onClick={() => {
                      if (bed < 5) {
                        setBed(bed + 1)
                      }
                    }}
                  >
                    +
                  </button>
                </div>
              </li>
            </ul>
            <button
              className="mx-8 mt-[38px] w-4/5 bg-transparent hover:bg-[#028ead] text-[#028ead] font-semibold hover:text-white py-2 px-4 border border-[#028ead] hover:border-transparent rounded"
              onClick={() => {
                console.log(adults, children, rooms, bed)
              }}
            >
              CONFIRM
            </button>
          </div>
        </div>
        <br />
        <div className="w-full bg-[#ffefd5] px-4 py-2 border-2 border-[#f7b242] text-[#e3971d] flex justify-between">
          <p className="flex items-center">
            <BsGiftFill className="mr-1 text-lg" />
            Become a Loyalty Member and unlock exclusive discounts and private
            offers!
          </p>
          <p className="flex items-center">
            <span className="font-bold">SIGN UP NOW</span>
            <span className="bg-white p-1 ml-2 rounded-full">
              <MdOutlineArrowForwardIos />
            </span>
          </p>
        </div>
        <br />
        <div className="grid grid-cols-6 space-x-10">
          <div className="col-span-4">
            <div className="calendarWrap">
              <DateRange
                ranges={[selectionRange]}
                minDate={new Date()}
                onChange={handleSelect}
                locale={viLocale}
                rangeColors={["#028ead"]}
                dateDisplayFormat="dd/MM/yyyy"
                showDateDisplay={false}
                editableDateInputs={true}
                moveRangeOnFirstSelection={false}
                months={2}
                direction="horizontal"
                className="calendarElement"
              />
            </div>
          </div>
          <div className="col-span-2 bg-white border-2 shadow-lg px-2 pt-6 overflow-hidden h-60">
            <form>
              <div className="relative">
                <label className="absolute bg-white z-30 top-[-10px] left-1 text-[10px] px-2">
                  Code Type
                </label>
                <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline z-10">
                  <option value="1">tuyen 1</option>
                  <option value="2">tuyen 2</option>
                  <option value="3">tuyen 3</option>
                  <option value="4">tuyen 4</option>
                </select>
              </div>
              <br />
              <div className="relative">
                <label className="absolute bg-white z-30 top-[-10px] left-1 text-[10px] px-2">
                  Code Type
                </label>
                <input
                  className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline z-10"
                  id="inline-full-name"
                  type="text"
                  placeholder="Enter your code here"
                />
              </div>
            </form>
            <button
              className="mx-8 mt-[38px] w-4/5 bg-transparent hover:bg-[#028ead] text-[#028ead] font-semibold hover:text-white py-2 px-4 border border-[#028ead] hover:border-transparent rounded"
              onClick={() => {
                console.log(startDate.toLocaleString())
                console.log(endDate.toLocaleString())
              }}
            >
              CONFIRM
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-3 border-2 rounded-md shadow-lg bg-white h-fit pb-4">
        <h1 className="w-full py-4 px-4 font-semibold bg-[#f0f0f0]">
          Your Reservation
        </h1>
        <div className="px-4 pt-4">
          <div>
            <p className="font-bold">Room 1</p>
            <div className="flex justify-between">
              <div>
                <p className="flex items-center">
                  {room.title} <ImWarning className="ml-1 text-cyan-400" />
                </p>
                <span>{room.limited}</span>
              </div>
              <div className="text-right">
                <p>$ 1,462.93</p>
                <button className="text-cyan-500 bg-transparent font-bold">
                  REMOVE
                </button>
              </div>
            </div>
            <br />
            <p className="text-gray-400 text-sm">Add-Ons Costs</p>
            <div className="flex justify-between">
              <div>
                <p>Crib</p>
                <p>Extra Water</p>
              </div>
              <div className="text-right">
                <p>$ 35.00</p>
                <p>FREE</p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <hr className="w-[calc(100%+70px)] -ml-10" />
        <div className="flex justify-between p-4">
          <div>
            <p>Sub total</p>
            <p>Tax</p>
            <br />
            <p className="font-bold text-3xl">Total</p>
          </div>
          <div className="text-right">
            <p>$ 35.00</p>
            <p>$ 35.00</p>
            <br />
            <p className="font-bold text-3xl">$ 35.00</p>
          </div>
        </div>
        <button
          className="mx-8 mt-[38px] w-10/12 bg-[#028ead] text-white hover:bg-transparent font-semibold hover:text-[#028ead] py-2 px-4 border hover:border-[#028ead] rounded"
          onClick={() => {
            //add new reservation
            const newReservation = {
              id: Math.floor(Math.random() * 100000000),
              room: room
            }
          }}
        >
          PAY & CONFIRM RESERVATION
        </button>
      </div>
    </div>
  )
}

export default BookNow
