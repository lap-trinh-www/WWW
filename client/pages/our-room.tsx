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

import { useEffect } from "react"
import { BANNER_BOOKING, roomImage } from "../utils/image"
const OurRoom = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <Head>
        <title>room</title>
      </Head>
      <main>
        <div
          style={{ backgroundImage: `url('${BANNER_BOOKING.default.src}')` }}
          className="bg-red-500 h-screen bg-cover bg-center relative bg-fixed"
        >
          <div className="absolute text-white top-[247px] left-[170px]">
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
        <div
          className="flex justify-center relative mt-24 mb-20 items-center space-x-28"
          data-aos="fade-up"
        >
          <div className="pl-10 mt-4">
            <div className="absolute top-12 left-48 w-14 h-[6px] bg-black"></div>
            <h1 className="font-semibold text-[55px] leading-none">
              OUR ROOMS
            </h1>
            <h1 className="font-semibold text-[55px] leading-none">
              AND SUITES
            </h1>
            <br />
            <br />
            <p className="w-[25rem] text-lg">
              On the present site of our hotel feet in the water, there used to
              be an establishment composed of a restaurant and dormitories.
            </p>
          </div>
          <ul className="grid grid-cols-3  space-x-10">
            <li className="flex flex-col items-center mb-6 ml-10">
              <IoIosFitness className="text-4xl" />
              <span className="text-sm font-semibold">FINESS CENTE</span>
            </li>
            <li className="flex flex-col items-center mb-6">
              <MdChair className="text-4xl" />
              <span className="text-sm font-semibold">JACUZZI</span>
            </li>
            <li className="flex flex-col items-center mb-6">
              <FaSwimmer className="text-4xl" />
              <span className="text-sm font-semibold">SWIMMING POOL</span>
            </li>
            <li className="flex flex-col items-center mb-6">
              <TbMassage className="text-4xl" />
              <span className="text-sm font-semibold">SPA TREATMENT</span>
            </li>
            <li className="flex flex-col items-center mb-6">
              <MdOutlineYard className="text-4xl" />
              <span className="text-sm font-semibold">GARDEN</span>
            </li>
            <li className="flex flex-col items-center mb-6">
              <FaCity className="text-4xl" />
              <span className="text-sm font-semibold">CITY VIEW</span>
            </li>
          </ul>
        </div>
        {roomImage.map((room, index) => {
          return <RoomBooking key={index} room={room} position={index} />
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
