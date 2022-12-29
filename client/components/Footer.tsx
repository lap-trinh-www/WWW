import React from "react"

const Footer = () => {
  return (
    <div className="pt-20 bg-black text-white">
      <div className="mx-44 grid grid-cols-4 pb-12">
        <ul>
          <li className="text-xl">
            <h1 className="font-bold ">KUGA</h1>
            <h1 className="font-extralight -tracking-tighter">HOTEL</h1>
          </li>
          <br />
          <li>
            <p>Via Serlas 546, 6700</p>
            <p>St. Moritz Switzerland</p>
          </li>
          <br />
          <li>
            <p>41 (0)54 2344 00</p>
            <p>revs@hoteller.com</p>
          </li>
        </ul>
        <ul>
          <li>The Hotel</li>
          <br />
          <li>Rooms & Suites</li>
          <br />
          <li>Experience</li>
          <br />
          <li>Contact Us</li>
        </ul>
        <ul>
          <li>Restaurant</li>
          <br />
          <li>Offers</li>
          <br />
          <li>Jobs</li>
          <br />
          <li>Seminars</li>
        </ul>
        <ul className="w-96">
          <li className="text-2xl font-semibold">
            <p>“Offer more than a gift</p>
            <p>voucher, offer an experience”</p>
          </li>
          <br />
          <br />
          <li>
            <button className="bg-transparent text-white text-sm font-semibold  py-[15px] px-[35px] border border-white hover:-translate-y-1 transition-transform duration-200 ease-linear">
              book now
            </button>
          </li>
        </ul>
      </div>
      <div className="flex mx-44 border-t-[1px] justify-between py-8">
        <p>© Copyright KUGA – Theme by KUGA</p>
        <div>
          <span>Term & Conditios</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
