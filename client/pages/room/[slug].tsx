import { useRouter } from "next/dist/client/router"
import Link from "next/link"
import { useEffect, useState } from "react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import Loading from "../../components/alter/Loading"
import BookNow from "../../components/BookNow"
import Experience from "../../components/Experience"
import Footer from "../../components/Footer"
import {
  IBill,
  IBillDetail,
  ICmt,
  InputChange,
  RootStore,
  TypedDispatch
} from "../../utils/types"
import { useStorage } from "../../utils/hooks"
import { useDispatch, useSelector } from "react-redux"
import { getRooms } from "../../redux/actions/roomAction"
import Head from "next/head"

const RoomDetail = () => {
  const { slug } = useRouter().query

  let scroll = 0

  const [review, setReview] = useState("")

  const initialBillState: IBill = {
    id: "",
    date: new Date(),
    total: 0
  }

  const [comment, setComment] = useState<ICmt>()

  const { setItem, getItem } = useStorage()

  const [billDetail, setBillDetail] = useState<IBillDetail>()

  const [billDetails, setBillDetails] = useState<IBillDetail[]>([])

  const [scrollPosition, setScrollPosition] = useState(0)
  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  const handleChangeInput = (e: InputChange) => {
    setReview(e.target.value)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  scroll = scrollPosition / 400
  let opc = 1 - scroll < 0 ? 0 : 1 - scroll
  setTimeout(() => {
    return <Loading />
  }, 3000)

  const handleCallback = (childData?: IBillDetail) => {
    if (childData) {
      setBillDetails([...billDetails, childData])
    }
    if (billDetails.length > 0) {
      setItem("billDetails", JSON.stringify(billDetails))
    }
  }
  const dispatch = useDispatch<TypedDispatch>()

  const { rooms } = useSelector((state: RootStore) => state)
  return (
    <div>
      {rooms.map((item, index) => {
        if (item.room_ID.toString() === slug) {
          return (
            <div key={index}>
              <div className="h-screen bg-cover bg-center relative bg-fixed">
                <img
                  src={item.images[0]}
                  alt=""
                  className="absolute w-full h-full object-cover"
                />
                <div
                  className={`absolute text-white top-[247px] left-[170px]`}
                  style={{
                    opacity: `${opc}`
                  }}
                >
                  <h1 className="text-lg font-bold">EXCLUSIVE ENVIRONMENT</h1>
                  <p className="font-bold text-7xl w-[450px]">
                    DISCOVER OUR ROOMS AND SUITES
                  </p>
                </div>
                <Link
                  href="/"
                  className="flex items-center absolute top-4 left-4"
                >
                  <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="h-10 mr-3 sm:h-9"
                    alt="Flowbite Logo"
                  />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                    kuga
                  </span>
                </Link>
                <Link
                  href="/booking"
                  className="flex items-center absolute top-4 right-4"
                >
                  <button className="bg-white px-6 py-2 rounded-3xl font-bold">
                    BOOK NOW
                  </button>
                </Link>
              </div>
              <BookNow room={item} callback={handleCallback} />

              <div className="relative py-[100px] bg-black text-white border-b border-white">
                <div className="pl-44 mt-4">
                  <div className="absolute top-36 left-24 w-14 h-[6px] bg-white"></div>
                  <h1 className="font-semibold text-[50px] leading-tight">
                    DISCOVER
                  </h1>
                  <h1 className="font-semibold text-[50px] leading-tight">
                    EXPRERIENCE
                  </h1>
                  <br />
                  <br />
                </div>
                <Experience />
              </div>
              <Footer />
            </div>
          )
        }
      })}
    </div>
  )
}

export default RoomDetail
