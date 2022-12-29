import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"

import { Autoplay, Navigation, Pagination, EffectFade } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { listImage } from "../utils/image"

import { CgShapeZigzag } from "react-icons/cg"

export default function Banner() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: false
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {listImage.map((item, index) => {
          return (
            <SwiperSlide key={index} className="swiper-slide relative ">
              <div className="absolute w-96 h-96 bg-red-200/40  top-12 right-64 rounded-full flex flex-col items-center justify-center">
                <CgShapeZigzag className="rotate-180 text-5xl text-white" />
                <h2 className="text-4xl font-bold text-white my-2">package</h2>
                <h2 className="text-4xl font-bold text-white my-2">sale</h2>
                <h2 className="text-4xl font-bold text-white my-2">-50%</h2>
                <button className="bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 mt-8 border border-white hover:border-transparent rounded animate-bounce">
                  book now
                </button>
              </div>
              <div className="w-32 h-32 rounded-full bg-white absolute top-12 right-56 animate-ping shadow-lg shadow-black/50 flex items-center">
                ONLY UNTIL 10.01.18
              </div>
              <Image src={item} alt="banner" className="bg-fixed" />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}
