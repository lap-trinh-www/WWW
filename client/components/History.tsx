import React from "react"
import Image from "next/image"

const History = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="h-96 p-16 relative pl-32">
        <div className="absolute top-24 left-10 w-14 h-2 bg-black"></div>
        <h1 className="font-bold text-6xl">OUR</h1>
        <h1 className="font-bold text-6xl">HISTORY</h1>
        <br />
        <p className="text-lg">
          Leather detail shoulder contrastic colour contour stunning silhouette
          working peplum. Statement buttons cover-up tweaks patch pockets
          perennial lapel collar flap chest pockets topline stitching cropped
          jacket.
        </p>
        <br />
        <p className="text-lg">
          Exercitation photo booth stumptown tote bag Banksy, elit small batch
          freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit
          kale chips proident chillwave deep v laborum. Aliquip veniam delectus,
          Marfa eiusmod Pinterest in do umami readymade swag. Selfies iPhone
          Kickstarter, drinking vinegar
        </p>
      </div>
      <div className="bg-[#f0f0f0] flex flex-col justify-center py-32 px-24">
        <Image
          src={`https://hotellerv5.b-cdn.net/modern/wp-content/uploads/sites/5/2021/08/two-laughing-guests-checking-in-together-at-a-hote-MUXSSNK.jpg`}
          alt="long"
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
  )
}

export default History
