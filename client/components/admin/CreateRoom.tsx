import { useState } from "react"
import { AiOutlineCloudUpload } from "react-icons/ai"
import { FaCity, FaSwimmer } from "react-icons/fa"
import { IoIosFitness } from "react-icons/io"
import { MdChair, MdOutlineYard } from "react-icons/md"
import { TbMassage } from "react-icons/tb"
import { listService } from "../../utils/image"
import { imageUpload } from "../../utils/ImageUpload"
import { FormSubmit, InputChange, IRoom } from "../../utils/types"

const CreateRoom = () => {
  const initialState: IRoom = {
    _id: 0,
    name: "",
    price: 0,
    limited: "",
    description: "",
    acreage: 0,
    images: [],
    services: []
  }
  const handleAddService = (id: number) => {
    const s = listService.find((item) => item._id === id)

    if (s) {
      setRoom({ ...room, services: [...room.services, s] })
    }
  }

  const handleChangeInput = (e: InputChange) => {
    const { name, value } = e.target
    setRoom({ ...room, [name]: value })
  }
  const handleChangeThumbnail = (e: InputChange) => {
    const target = e.target as HTMLInputElement
    const files = target.files as FileList
    const file = files[0]
    imageUpload(file).then((res) => {
      setRoom({ ...room, images: [...room.images, res.url] })
    })
  }
  const handleSumit = (e: FormSubmit) => {
    e.preventDefault()
    console.log(room)
  }

  const [room, setRoom] = useState<IRoom>(initialState)
  return (
    <form onSubmit={handleSumit}>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 pt-4 w-full mb-6 group">
          <input
            type="text"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            name="name"
            value={room.name}
            onChange={handleChangeInput}
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Room name
          </label>
        </div>
        <div className="relative z-0 pt-4 w-full mb-6 group">
          <input
            type="text"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            name="price"
            value={room.price}
            onChange={handleChangeInput}
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Price
          </label>
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 pt-4 w-full mb-6 group">
          <input
            type="text"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            name="limited"
            value={room.limited}
            onChange={handleChangeInput}
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Maximum number of people
          </label>
        </div>

        <div className="relative z-0 pt-4 w-full mb-6 group">
          <input
            type="text"
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            name="acreage"
            value={room.acreage}
            onChange={handleChangeInput}
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Areage
          </label>
        </div>
      </div>
      <div className="relative z-0 pt-4 w-full mb-6 group">
        <label className="block mb-2 text-sm font-medium">Your message</label>
        <textarea
          id="message"
          rows={4}
          maxLength={500}
          className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Write your thoughts here..."
          name="description"
          value={room.description}
          onChange={handleChangeInput}
        ></textarea>
      </div>
      <div className="flex mt-4 w-[76rem]">
        <span className="text-lg font-semibold">Default service</span>
        <ul className="space-x-6 text-gray-600 ml-16 grid grid-cols-6 space-y-4">
          {listService.map((service) => {
            return (
              <li
                key={service._id}
                className={
                  "cursor-pointer flex flex-col items-center justify-center border-solid border-2 border-sky-500 rounded-xl p-2 ml-6 mt-4 text-center" +
                  (room.services.find((item) => item._id == service._id)
                    ? " bg-sky-500 text-white"
                    : "")
                }
                onClick={() => handleAddService(service._id)}
              >
                {service._id % 6 === 0 ? (
                  <IoIosFitness className="text-3xl" />
                ) : service._id % 5 === 0 ? (
                  <MdChair className="text-3xl" />
                ) : service._id % 4 === 0 ? (
                  <FaSwimmer className="text-3xl" />
                ) : service._id % 3 === 0 ? (
                  <TbMassage className="text-3xl" />
                ) : service._id % 2 === 0 ? (
                  <MdOutlineYard className="text-3xl" />
                ) : service._id % 1 === 0 ? (
                  <FaCity className="text-3xl" />
                ) : null}
                <span className="text-base">{service.name}</span>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="w-[76rem] flex mt-4">
        <div className="flex items-center justify-start">
          <label className="flex flex-col items-center justify-center h-48 border-dashed border-2 border-sky-500 rounded-xl  cursor-pointer bg-gray-50 px-4">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <AiOutlineCloudUpload className="text-black text-9xl mx-auto" />
              <p className="mb-2 text-sm text-gray-500">
                <span className="font-semibold">Click to upload</span>
              </p>
              <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF</p>
            </div>
            <input
              type="file"
              className="hidden"
              onChange={handleChangeThumbnail}
            />
          </label>
        </div>
        <div className="space-x-4 ml-4 flex overflow-x-auto">
          {room.images?.map((image, index) => {
            return (
              <img
                src={image}
                alt=""
                key={index}
                className="h-full w-56 bg-cover"
              />
            )
          })}
        </div>
      </div>

      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-10 flex mx-auto">
        Submit
      </button>
      <br />
    </form>
  )
}

export default CreateRoom
