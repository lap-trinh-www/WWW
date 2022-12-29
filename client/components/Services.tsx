import React from "react"
import Image from "next/image"
import { serviceImage } from "../utils/image"
import { IoIosFitness } from "react-icons/io"
import { FaSwimmer, FaCity } from "react-icons/fa"
import { TbMassage } from "react-icons/tb"
import { MdOutlineYard, MdChair } from "react-icons/md"
const Services = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="py-16 relative bg-[#f0f0f0] pb-24">
        <div className="pl-40 mb-48">
          <div className="absolute top-24 left-24 w-14 h-[6px] bg-black"></div>
          <h1 className="font-semibold text-[55px] leading-none">THE GRAND</h1>
          <h1 className="font-semibold text-[55px] leading-none">AMENITIES</h1>
        </div>
        <br />
        <br />
        <br />
        <div className="relative">
          <Image
            src={serviceImage[0]}
            alt="long"
            width={900}
            height={1000}
            className="object-cover -mt-48 w-full"
          />
          <Image
            src={serviceImage[0]}
            alt="long"
            width={300}
            height={400}
            className="object-cover absolute -bottom-10 right-24 border-4 animate-upto"
          />
        </div>
      </div>
      <div className="flex flex-col pt-[100px] pr-[80px] pl-[90px]">
        <p className="text-lg">
          Leather detail shoulder contrastic colour contour stunning silhouette
          working peplum. Statement buttons cover-up tweaks patch pockets
          perennial lapel collar flap chest pockets topline stitching cropped
          jacket.
        </p>
        <br />
        <br />
        <p className="text-lg">
          Exercitation photo booth stumptown tote bag Banksy, elit small batch
          freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit
          kale chips proident chillwave deep v laborum. Aliquip veniam delectus,
          Marfa eiusmod Pinterest in do umami readymade swag. Selfies iPhone
          Kickstarter, drinking vinegar
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
  )
}

export default Services
