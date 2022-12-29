import React from "react"
import SlideShow from "./SlideShow"

const BookingNow = () => {
  return (
    <div className="py-24 pb-14 grid grid-cols-9 bg-[#11171B]">
      <div className="col-span-5 flex flex-col relative">
        <div className="pl-44 mb-16">
          <div className="absolute top-6 left-24 w-14 h-1 bg-white"></div>
          <h1 className="text-white text-5xl font-bold mb-2">THE GRAND</h1>
          <h1 className="text-white text-5xl font-bold">REGIONS</h1>
        </div>
        <SlideShow />
      </div>
      <div className="h-96 p-12 pt-8 relative pl-18 col-span-4 w-11/12">
        <p className="text-white text-lg py-8">
          Leather detail shoulder contrastic colour contour stunning silhouette
          working peplum. Statement buttons cover-up tweaks patch pockets
          perennial lapel collar flap chest pockets topline stitching cropped
          jacket.
        </p>
        <br />
        <p className="text-white text-lg">
          Exercitation photo booth stumptown tote bag Banksy, elit small batch
          freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit
          kale chips proident chillwave deep v laborum. Aliquip veniam delectus,
          Marfa eiusmod Pinterest in do umami readymade swag. Selfies iPhone
          Kickstarter, drinking vinegar
        </p>
        <button className="bg-transparent text-white font-semibold  py-4 px-8 mt-8 border border-white rounded hover:-translate-y-2 transition-transform duration-200 ease-linear uppercase block mb-3">
          book now
        </button>
        <span className="text-white font-bold text-base">
          CALL 41 (0)54 2344 00
        </span>
      </div>
    </div>
  )
}

export default BookingNow
