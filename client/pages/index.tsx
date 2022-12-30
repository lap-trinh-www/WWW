import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { CgShapeZigzag } from "react-icons/cg"
import { FaCity, FaSwimmer } from "react-icons/fa"
import { IoIosFitness } from "react-icons/io"
import { MdChair, MdOutlineYard } from "react-icons/md"
import { TbMassage } from "react-icons/tb"

import { Autoplay, EffectCoverflow, FreeMode, Navigation } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Swiper, SwiperSlide } from "swiper/react"

import AOS from "aos"

import { listImage, roomImage, serviceImage } from "../utils/image"
import { RootStore, TypedDispatch } from "../utils/types"

import Footer from "../components/Footer"
import Header from "../components/Header"
import SlideShow from "../components/SlideShow"

import { refreshToken } from "../redux/actions/authAction"
const Home: NextPage = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  const dispatch = useDispatch<TypedDispatch>()
  useEffect(() => {
    dispatch(refreshToken())
  }, [dispatch])
  const { auth } = useSelector((state: RootStore) => state)
  return (
    <>
      <Head>
        <title>Trang chủ</title>
      </Head>
      <main>
        <Header />
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
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
          }}
          navigation={true}
          modules={[Navigation, Autoplay, EffectCoverflow]}
          className="mySwiper"
          effect={"coverflow"}
          grabCursor={true}
          slidesPerView={"auto"}
        >
          {listImage.map((item, index) => {
            return (
              <SwiperSlide key={index} className="swiper-slide relative">
                <div className="absolute w-96 h-96 bg-red-200/40  top-12 right-64 rounded-full flex flex-col items-center justify-center">
                  <CgShapeZigzag className="rotate-180 text-5xl text-white" />
                  <h2 className="text-4xl font-bold text-white my-2">
                    package
                  </h2>
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
        <div className="grid grid-cols-2">
          <div className="h-96 p-16 relative pl-32" data-aos="fade-left">
            <div className="absolute top-24 left-10 w-14 h-2 bg-black"></div>
            <h1 className="font-bold text-6xl">OUR</h1>
            <h1 className="font-bold text-6xl">HISTORY</h1>
            <br />
            <p className="text-lg">
              Leather detail shoulder contrastic colour contour stunning
              silhouette working peplum. Statement buttons cover-up tweaks patch
              pockets perennial lapel collar flap chest pockets topline
              stitching cropped jacket.
            </p>
            <br />
            <p className="text-lg">
              Exercitation photo booth stumptown tote bag Banksy, elit small
              batch freegan sed. Craft beer elit seitan exercitation, photo
              booth et 8-bit kale chips proident chillwave deep v laborum.
              Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami
              readymade swag. Selfies iPhone Kickstarter, drinking vinegar
            </p>
          </div>
          <div
            className="bg-[#f0f0f0] flex flex-col justify-center py-32 px-24 z-10"
            data-aos="fade-right"
          >
            <Image
              src={`https://hotellerv5.b-cdn.net/modern/wp-content/uploads/sites/5/2021/08/two-laughing-guests-checking-in-together-at-a-hote-MUXSSNK.jpg`}
              alt=""
              width={900}
              height={1000}
              className="object-cover -mt-48 z-10 border-8 border-white"
            />
            <ul className="flex justify-evenly mt-4">
              <li className="mx-auto">
                <h1 className="text-6xl text-gray-400 font-extrabold text-center">
                  50
                </h1>
                <span className="font-semibold">HOTEL ROOMS</span>
              </li>
              <li className="mx-auto">
                <h1 className="text-6xl text-gray-400 font-extrabold text-center">
                  15
                </h1>
                <span className="font-semibold">ACTIVITIES</span>
              </li>
              <li className="mx-auto">
                <h1 className="text-6xl text-gray-400 font-extrabold text-center">
                  6
                </h1>
                <span className="font-semibold">RESTAURANTS</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-24 pb-14 grid grid-cols-9 bg-[#11171B]">
          <div
            className="col-span-5 flex flex-col relative"
            data-aos="fade-left"
          >
            <div className="pl-44 mb-16">
              <div className="absolute top-6 left-24 w-14 h-1 bg-white"></div>
              <h1 className="text-white text-5xl font-bold mb-2">THE GRAND</h1>
              <h1 className="text-white text-5xl font-bold">REGIONS</h1>
            </div>
            <SlideShow />
          </div>
          <div
            className="h-96 p-12 pt-8 relative pl-18 col-span-4 w-11/12"
            data-aos="fade-right"
          >
            <p className="text-white text-lg py-8">
              Leather detail shoulder contrastic colour contour stunning
              silhouette working peplum. Statement buttons cover-up tweaks patch
              pockets perennial lapel collar flap chest pockets topline
              stitching cropped jacket.
            </p>
            <br />
            <p className="text-white text-lg">
              Exercitation photo booth stumptown tote bag Banksy, elit small
              batch freegan sed. Craft beer elit seitan exercitation, photo
              booth et 8-bit kale chips proident chillwave deep v laborum.
              Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami
              readymade swag. Selfies iPhone Kickstarter, drinking vinegar
            </p>
            <button className="bg-transparent text-white font-semibold  py-4 px-8 mt-8 border border-white rounded hover:-translate-y-2 transition-transform duration-200 ease-linear uppercase block mb-3">
              book now
            </button>
            <span className="text-white font-bold text-base">
              CALL 41 (0)54 2344 00
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div
            className="py-16 relative bg-[#f0f0f0] pb-24"
            data-aos="fade-left"
          >
            <div className="pl-40 mb-48">
              <div className="absolute top-24 left-24 w-14 h-[6px] bg-black"></div>
              <h1 className="font-semibold text-[55px] leading-none">
                THE GRAND
              </h1>
              <h1 className="font-semibold text-[55px] leading-none">
                AMENITIES
              </h1>
            </div>
            <br />
            <br />
            <br />
            <div className="relative">
              <Image
                src={serviceImage[0]}
                alt=""
                width={900}
                height={1000}
                className="object-cover -mt-48 w-full"
              />
              <Image
                src={serviceImage[0]}
                alt=""
                width={300}
                height={400}
                className="object-cover absolute -bottom-10 right-24 border-4 animate-upto"
              />
            </div>
          </div>
          <div
            className="flex flex-col pt-[100px] pr-[80px] pl-[90px]"
            data-aos="fade-right"
          >
            <p className="text-lg">
              Leather detail shoulder contrastic colour contour stunning
              silhouette working peplum. Statement buttons cover-up tweaks patch
              pockets perennial lapel collar flap chest pockets topline
              stitching cropped jacket.
            </p>
            <br />
            <br />
            <p className="text-lg">
              Exercitation photo booth stumptown tote bag Banksy, elit small
              batch freegan sed. Craft beer elit seitan exercitation, photo
              booth et 8-bit kale chips proident chillwave deep v laborum.
              Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami
              readymade swag. Selfies iPhone Kickstarter, drinking vinegar
            </p>
            <ul className="grid grid-cols-3 mt-[70px]">
              <li className="flex flex-col items-center mb-6">
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
        </div>
        <div className="pt-[100px] pb-[50px] bg-[#f0f0f0]" data-aos="fade-up">
          <div className="flex justify-around relative">
            <div className="-ml-32">
              <div className="absolute top-8 left-28 w-14 h-[6px] bg-black"></div>
              <h1 className="font-semibold text-[55px] leading-none">
                OUR ROOMS
              </h1>
              <h1 className="font-semibold text-[55px] leading-none">
                AND SUITES
              </h1>
            </div>
            <Link href={`/our-room`}>
              <button className="bg-transparent text-black font-semibold  py-5 px-10 mt-8 border border-black hover:-translate-y-2 transition-transform duration-200 ease-linear block mb-3 -mr-32">
                VIEW ALL ROOMS
              </button>
            </Link>
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
                  key={room._id}
                  className="swiper-slide flex-col bg-[#f0f0f0]"
                >
                  <Image
                    src={room.image}
                    alt={room.description}
                    className="bg-fixed"
                  />
                  <ul className="flex justify-between w-[95%] mt-4">
                    <li className="text-left">
                      <h1 className="font-semibold text-4xl mb-1">
                        {room.title}
                      </h1>
                      <span>
                        {room.acreage} m2 / {room.limited}
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
        <Footer />
      </main>
    </>
  )
}

export default Home
