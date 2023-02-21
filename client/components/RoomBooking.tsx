import Image from "next/image"
import Link from "next/link"
import { BiBed, BiWifi } from "react-icons/bi"
import { FaCity, FaShower } from "react-icons/fa"
import { ImDisplay } from "react-icons/im"
import { TfiHome } from "react-icons/tfi"
import { EffectCoverflow, Navigation } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Swiper, SwiperSlide } from "swiper/react"
import { IRoom } from "../utils/types"
import AOS from "aos"
import { useEffect } from "react"
import { listServices } from "./Services"
interface Props {
  room: IRoom
  position: number
}
const RoomBooking = ({ room, position }: Props) => {
  useEffect(() => {
    AOS.init()
  }, [])
  const Slide = () => (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      }}
      navigation={true}
      modules={[EffectCoverflow, Navigation]}
      className="mySwiper"
    >
      {room.images.map((item, index) => {
        if (index % 2 === 0) {
          return (
            <SwiperSlide key={index} style={{ width: "80%" }}>
              <img src={item} alt={item} />
            </SwiperSlide>
          )
        } else
          return (
            <SwiperSlide key={index} style={{ width: "40%" }}>
              <img src={item} alt={item} />
            </SwiperSlide>
          )
      })}
    </Swiper>
  )

  const Info = () => (
    <div className="pl-24 mt-4">
      <div className="absolute top-12 left-24 w-14 h-[6px] bg-black"></div>
      <h1 className="font-semibold text-[55px] leading-none">
        {room.roomName}
      </h1>
      <br />
      <br />
      <p className="w-[22rem] text-lg mr-96">{room.description}</p>
      <Link href={`room/${room.room_ID}`}>
        <button className="bg-black text-white font-semibold  py-4 px-16 mt-8 border  hover:-translate-y-2 transition-transform duration-200 ease-linear uppercase block mb-3">
          see details
        </button>
      </Link>
    </div>
  )
  return (
    <div className="bg-[#f0f0f0]">
      <div className="py-20 grid grid-cols-10" data-aos="fade-up">
        {position % 2 === 0 ? (
          <>
            <div className="col-span-4 relative pl-24">
              <Info />
            </div>
            <div className="col-span-6">
              <Slide />
            </div>
          </>
        ) : (
          <>
            <div className="col-span-6">
              <Slide />
            </div>
            <div className="col-span-4 relative pl-24">
              <Info />
            </div>
          </>
        )}
      </div>

      <ul className="flex flex-row space-x-28 justify-center pb-20">
        {listServices.map((service) => {
          if (room.services?.includes(service.name)) {
            return (
              <li className="flex flex-col items-center mb-6 ml-10">
                <span className="text-8xl text-gray-500">{service.icon}</span>
                <span className="text-sm font-semibold">{service.name}</span>
              </li>
            )
          }
        })}
      </ul>
    </div>
  )
}

export default RoomBooking
