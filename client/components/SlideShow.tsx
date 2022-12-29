import Image from "next/image"
import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"

import { Autoplay, FreeMode, Navigation, Thumbs, Zoom } from "swiper"
import { listImage } from "../utils/image"

export default function SlideShow() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)

  return (
    <div>
      <Swiper
        loop={true}
        zoom={true}
        spaceBetween={10}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
        }}
        modules={[FreeMode, Navigation, Thumbs, Zoom]}
        className="mySwiper2-1"
      >
        {listImage.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <Image src={item} alt={item} />
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
        slidesPerView={listImage.length}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper-1"
      >
        {listImage.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <Image src={item} alt={item} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
