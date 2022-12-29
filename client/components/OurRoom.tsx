import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { roomImage } from "../utils/image"

import { Autoplay, FreeMode, Pagination } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const OurRoom = () => {
  return (
    <div className="pt-[100px] pb-[50px] bg-[#f0f0f0]">
      <div className="flex justify-around relative">
        <div className="-ml-32">
          <div className="absolute top-8 left-28 w-14 h-[6px] bg-black"></div>
          <h1 className="font-semibold text-[55px] leading-none">OUR ROOMS</h1>
          <h1 className="font-semibold text-[55px] leading-none">AND SUITES</h1>
        </div>
        <button className="bg-transparent text-black font-semibold  py-5 px-10 mt-8 border border-black hover:-translate-y-2 transition-transform duration-200 ease-linear block mb-3 -mr-32">
          VIEW ALL ROOMS
        </button>
      </div>
      <Swiper
        slidesPerView={2}
        spaceBetween={50}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper mt-16"
      >
        {roomImage.map((room) => {
          return (
            <SwiperSlide
              key={room.id}
              className="swiper-slide flex-col bg-[#f0f0f0]"
            >
              <Image
                src={room.image}
                alt={room.description}
                className="bg-fixed"
              />
              <ul className="flex justify-between w-[95%] mt-4">
                <li className="text-left">
                  <h1 className="font-semibold text-4xl mb-1">{room.title}</h1>
                  <span>
                    {room.acreage} m2 / {room.description}
                  </span>
                </li>
                <li className="text-right">
                  <span>from</span>
                  <h1 className="font-bold text-4xl">$ {room.price}</h1>
                </li>
              </ul>
            </SwiperSlide>
          )
        })}
      </Swiper>
      <br />
      <br />
    </div>
  )
}

export default OurRoom
