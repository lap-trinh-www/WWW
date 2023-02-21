import AOS from "aos"
import Head from "next/head"
import Link from "next/link"
import { FaCity, FaSwimmer } from "react-icons/fa"
import { IoIosFitness } from "react-icons/io"
import { MdChair, MdOutlineYard } from "react-icons/md"
import { TbMassage } from "react-icons/tb"
import Experience from "../components/Experience"
import Footer from "../components/Footer"
import RoomBooking from "../components/RoomBooking"

import BANNER_BOOKING from "../assets/images/roomBooking/banner.jpg"

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootStore, TypedDispatch } from "../utils/types"
import { getRooms } from "../redux/actions/roomAction"
import { getUsers } from "../redux/actions/userAction"
const OurRoom = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  const dispatch = useDispatch<TypedDispatch>()
  useEffect(() => {
    dispatch(getRooms())
  }, [dispatch])

  const { rooms } = useSelector((state: RootStore) => state)
  const [scrollPosition, setScrollPosition] = useState(0)

  let scroll = 0
  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  scroll = scrollPosition / 400
  let opc = 1 - scroll < 0 ? 0 : 1 - scroll
  return (
    <>
      <Head>
        <title>room</title>
      </Head>
      <main>
        <div className="h-screen bg-cover bg-center relative bg-fixed">
          <img
            src={BANNER_BOOKING.src}
            alt=""
            className="absolute w-full h-full object-cover"
          />
          <div
            className="absolute text-white top-[247px] left-[170px]"
            style={{
              opacity: `${opc}`
            }}
          >
            <h1 className="text-lg font-bold">EXCLUSIVE ENVIRONMENT</h1>
            <p className="font-bold text-7xl w-[450px]">
              DISCOVER OUR ROOMS AND SUITES
            </p>
          </div>
          <Link href="/" className="flex items-center absolute top-4 left-4">
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

        {rooms.map((room, index) => {
          return <RoomBooking key={room.room_ID} room={room} position={index} />
        })}
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
      </main>
      <Footer />
    </>
  )
}

export default OurRoom
