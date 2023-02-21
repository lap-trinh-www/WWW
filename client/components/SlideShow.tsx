import Image from "next/image"
import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"

import { Autoplay, FreeMode, Navigation, Thumbs, Zoom } from "swiper"
import { useDispatch, useSelector } from "react-redux"
import { IRoom, RootStore, TypedDispatch } from "../utils/types"
import { getRooms } from "../redux/actions/roomAction"

export default function SlideShow() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)
  const dispatch = useDispatch<TypedDispatch>()
  useEffect(() => {
    dispatch(getRooms())
  }, [dispatch])
  const { rooms } = useSelector((state: RootStore) => state)

  const [room, setRoom] = useState<IRoom>(rooms[2])

  return (
    <div>
      <Swiper
        loop={true}
        zoom={true}
        spaceBetween={10}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
        }}
        modules={[FreeMode, Navigation, Thumbs, Zoom, Autoplay]}
        className="mySwiper2-1"
      >
        {room.images.length !== 0 &&
          room.images?.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={item} alt={item} />
              </SwiperSlide>
            )
          })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper as any}
        loop={true}
        spaceBetween={10}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        slidesPerView={rooms.length}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper-1"
      >
        {room.images.length !== 0 &&
          room.images?.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={item} alt={item} />
              </SwiperSlide>
            )
          })}
      </Swiper>
    </div>
  )
}
