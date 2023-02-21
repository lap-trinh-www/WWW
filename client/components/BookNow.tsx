import enLocale from "date-fns/locale/en-US"
import { useEffect, useState } from "react"
import { DateRange } from "react-date-range"

import { AiOutlineGift } from "react-icons/ai"
import { IBillDetail, ICart, IRoom } from "../utils/types"

import { BsBookmarkCheck } from "react-icons/bs"
import { ImWarning } from "react-icons/im"
import { listServices } from "./Services"
import { useStorage } from "../utils/hooks"

interface IProps {
  room: IRoom
  callback: (bill?: IBillDetail) => void
}

const BookNow = ({ room, callback }: IProps) => {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [billDetail, setBillDetail] = useState<IBillDetail>()

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection"
  }
  const [cart, setCart] = useState<ICart[]>([])

  const handleSelect = (ranges: any) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  const [quantity, setQuantity] = useState(1)

  const session = useStorage()

  useEffect(() => {
    if (session.getItem("carts") !== null) {
      const carts = JSON.parse(session.getItem("carts")!)
      setCart(carts)
    }
  }, [session.getItem("carts")])
  const handleAddCart = () => {
    cart.map((item) => {
      if (item.room_ID === room.room_ID) {
        item.quantity = item.quantity + quantity
      }
      return item
    })
    session.setItem("carts", JSON.stringify(cart))

    setBillDetail({
      ...billDetail,
      quantity: quantity,
      checkIn: startDate,
      checkOut: endDate
    })
  }

  return (
    <div className="grid grid-cols-10 space-x-11 p-12 bg-[#f0f0f0]">
      <div className="col-span-7">
        <div className="grid grid-cols-5 bg-white border-2 shadow-lg rounded-xl ">
          <img
            src={room.images[0]}
            alt={room.description}
            className="col-span-2 h-full object-cover"
          />
          <div className="col-span-3 p-4">
            <ul className="flex justify-between w-full">
              <li className="cursor-default">
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
            <ul className="flex text-2xl text-gray-600 items-center justify-start flex-wrap">
              {listServices.map((service) => {
                if (room.services?.includes(service.name)) {
                  return (
                    <li
                      key={service.id}
                      className="relative group cursor-pointer px-5 mb-4"
                    >
                      <div className="hidden show">{service.name}</div>

                      {service.icon}
                    </li>
                  )
                }
              })}
            </ul>
            <br />
          </div>
        </div>
        <br />

        <div className="calendarWrap">
          <DateRange
            ranges={[selectionRange]}
            minDate={new Date()}
            onChange={handleSelect}
            locale={enLocale}
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
      <div className="col-span-3 border-2 rounded-md shadow-lg bg-white h-fit pb-4">
        <h1 className="w-full py-4 px-4 font-semibold bg-[#f0f0f0]">
          Your Reservation
        </h1>
        <div className="px-4 pt-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold">{room.roomName}</p>
              <p className="flex items-center">$ {room.price}</p>
            </div>
            <div>
              <button
                className={
                  "text-black px-[10px] pb-[1px] text-lg rounded-full border-cyan-400 border-2" +
                  (quantity === 1 ? " opacity-50 cursor-not-allowed" : "")
                }
                onClick={() => {
                  if (quantity > 1) {
                    setQuantity(quantity - 1)
                  }
                }}
              >
                -
              </button>
              <span className="px-2 mx-2">{quantity}</span>
              <button
                className="text-black px-[8px] pb-[1px] text-lg rounded-full border-cyan-400 border-2"
                onClick={() => {
                  if (quantity < 5) {
                    setQuantity(quantity + 1)
                  }
                }}
              >
                +
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
        <br />
        <hr className="w-[calc(100%+70px)] -ml-10" />
        <div className="flex justify-between p-4">
          <div>
            <p className="font-bold text-3xl">Total</p>
          </div>
          <div className="text-right">
            <p className="font-bold text-3xl">$ {room.price * quantity}</p>
          </div>
        </div>
        <button
          className={`text-white bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-5/6 mx-auto px-5 py-2.5 text-center ml-8`}
          type="button"
          onClick={handleAddCart}
        >
          Add to your cart
        </button>
      </div>
    </div>
  )
}

export default BookNow
