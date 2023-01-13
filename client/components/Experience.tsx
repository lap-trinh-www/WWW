import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"

import Link from "next/link"
import { listExperience } from "../utils/image"
import AOS from "aos"
import { useEffect } from "react"

export default function Experience() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div className="mx-4" data-aos="fade-up">
      <Swiper
        spaceBetween={50}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40
          }
        }}
        className="mySwiper"
      >
        {listExperience.map((exp, index) => {
          return (
            <SwiperSlide key={index} className="swiper-slide flex-col bg-black">
              <Link
                className="pb-12 relative overflow-hidden group"
                href={`experience/${exp._id}`}
              >
                <Image
                  src={exp.image}
                  alt={exp.content}
                  className="group-hover:scale-105 transition-all duration-500 ease-linear group-hover:opacity-[0.85]"
                  style={{
                    backgroundSize: "cover",
                    height: "100%"
                  }}
                />
                <br />
                <h1 className="text-left text-2xl mb-4 font-bold">
                  {exp.title}
                </h1>
                <p className="text-left text-lg">{exp.content}</p>
                <button
                  className="bg-white py-2 px-5 text-black absolute bottom-48 right-4 z-20 group-hover:text-white duration-500 ease-linear group-hover:bg-[100%] group-hover:bg-black"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #fff 0%, #fff 50%, transparent 50%)",
                    transition: "all 0.5s ease",
                    backgroundSize: "252%"
                  }}
                >
                  Read more
                </button>
              </Link>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
