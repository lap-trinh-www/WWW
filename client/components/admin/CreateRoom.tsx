import { useState } from "react"
import { AiOutlineCloseCircle, AiOutlineCloudUpload } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { createRoom } from "../../redux/actions/roomAction"
import { useStorage } from "../../utils/hooks"
import { output } from "../../utils/image"
import { imageUpload } from "../../utils/ImageUpload"
import {
  FormSubmit,
  InputChange,
  IRoom,
  IRoomType,
  TypedDispatch
} from "../../utils/types"
import LoadingSpin from "../alter/LoadingSpin"
import { listServices } from "../Services"

const CreateRoom = () => {
  const dispatch = useDispatch<TypedDispatch>()
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [roomType, setRoomType] = useState<string>("")
  const [nameRoomType, setNameRoomType] = useState<string>("")

  const [newNameOfRoomType, setNewNameOfRoomType] = useState<string>("")
  const [newRoomType, setNewRoomType] = useState<string>("")
  const [newListNameOfRoomType, setNewListNameOfRoomType] = useState<string[]>(
    []
  )
  const initialState: IRoom = {
    room_ID: "",
    roomName: "",
    price: 0,
    limitQuantity: "",
    description: "",
    acreage: 0,
    star: 0,
    images: [],
    service: [],

    roomType: {
      type_ID: "",
      typeName: "",
      type: ""
    }
  }
  const [room, setRoom] = useState<IRoom>(initialState)
  const handleAddService = (id: string) => {
    const service = listServices.find((item) => item.id === id)
    service!.status = !service!.status

    if (room.service) {
      if (service!.status) {
        setRoom({ ...room, service: [...room?.service, service!] })
      } else {
        setRoom({
          ...room,
          service: room.service.filter((item) => item.id !== id)
        })
      }
    }
  }
  const handleChangeRoomType = (event: InputChange) => {
    if (event.target.value === "addtype") setShowModal(true)
    else {
      setShowModal(false)
      setRoomType(event.target.value)
      output.map((item) => {
        if (item.type === event.target.value) {
          setNameRoomType(item.names[0].id + "-" + item.names[0].name)
        }
      })
    }
  }

  const handleChangeNameRoomType = (event: InputChange) => {
    setNameRoomType(event.target.value)
    const roomTypeObj: IRoomType = {
      type_ID: event.target.value.split("-")[0],
      typeName: event.target.value.split("-")[1],
      type: roomType
    }
    setRoom({ ...room, roomType: roomTypeObj })
  }

  const handleChangeInput = (e: InputChange) => {
    const { name, value } = e.target
    setRoom({ ...room, [name]: value })
  }
  const handleChangeThumbnail = (e: InputChange) => {
    const target = e.target as HTMLInputElement
    const files = target.files as FileList
    const file = files[0]
    if (file) setLoading(false)
    imageUpload(file)
      .then((res) => {
        setRoom({ ...room, images: [...room.images, res.url] })
        setLoading(true)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }
  const { setItem, getItem } = useStorage()

  const handleSubmit = () => {
    const roomTypeObj: IRoomType = {
      type_ID: nameRoomType.split("-")[0],
      typeName: nameRoomType.split("-")[1],
      type: roomType
    }
    room.roomType = roomTypeObj

    setRoom(room)
    if (room) {
      dispatch(createRoom(room))
      setRoom(initialState)
    }
  }

  return (
    <>
      <form>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 pt-4 w-full mb-6 group">
            <input
              type="text"
              className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              name="roomName"
              value={room.roomName}
              onChange={handleChangeInput}
              id="roomName"
            />
            <label
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              htmlFor="roomName"
            >
              Room name
            </label>
          </div>
          <div className="relative z-0 pt-4 w-full mb-6 group">
            <input
              type="text"
              className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              name="price"
              value={room.price == 0 ? "" : room.price}
              onChange={handleChangeInput}
              id="room_price"
            />
            <label
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              htmlFor="room_price"
            >
              Price ($)
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 pt-4 w-full mb-6 group">
            <input
              type="text"
              className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              name="limitQuantity"
              value={room.limitQuantity}
              onChange={handleChangeInput}
              id="room_limitQuantity"
            />
            <label
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              htmlFor="room_limitQuantity"
            >
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
              value={room.acreage == 0 ? "" : room.acreage}
              onChange={handleChangeInput}
              id="room_acreage"
            />
            <label
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              htmlFor="room_acreage"
            >
              Areage (m<sup>2</sup>)
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative pt-2 z-0 w-full mb-6 group">
            <select
              title="Select an option"
              id="typeRoom"
              className="border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-4 outline-none"
              onChange={handleChangeRoomType}
              value={roomType}
            >
              <option selected>Choose room type</option>
              {output.map((item) => {
                return (
                  <option key={item.id} value={item.type} selected>
                    {item.type}
                  </option>
                )
              })}
              <option value="addtype">Add another room type </option>
            </select>
          </div>
          <div className="relative pt-2 z-0 w-full mb-6 group">
            <select
              title="Select an option"
              id="quantityBed"
              className="border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-4 outline-none"
              onChange={handleChangeNameRoomType}
              value={nameRoomType}
            >
              {output.map((item) => {
                if (item.type === roomType) {
                  return item.names.map((name) => {
                    return (
                      <option
                        key={name.id}
                        value={name.id + "-" + name.name}
                        selected
                      >
                        {name.name}
                      </option>
                    )
                  })
                }
              })}
            </select>
          </div>
        </div>

        <div className="relative z-0 pt-4 w-full mb-6 group">
          <label className="block mb-2 text-sm font-medium">Your message</label>
          <textarea
            id="message"
            rows={4}
            maxLength={500}
            className="block p-2.5 w-full text-sm rounded-lg border border-gray-300"
            placeholder="Write your thoughts here..."
            name="description"
            value={room.description}
            onChange={handleChangeInput}
          ></textarea>
        </div>
        <div className="flex mt-4 w-[76rem]">
          <span className="text-lg font-semibold">Default service</span>
          <ul className="space-x-6 text-gray-600 ml-16 grid grid-cols-6 space-y-4">
            {listServices.map((service) => {
              return (
                <li
                  key={service.id}
                  className={
                    "cursor-pointer flex flex-col items-center justify-center border-solid border-2 border-sky-500 rounded-xl p-2 ml-6 mt-4 text-center" +
                    (room.service?.find((item) => item.id == service.id)
                      ? " bg-sky-500 text-white"
                      : "")
                  }
                  onClick={() => handleAddService(service.id)}
                >
                  {service.icon}

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
          {!loading && <LoadingSpin />}
        </div>

        <br />
      </form>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-10 flex mx-auto"
        type="button"
        onClick={handleSubmit}
      >
        Submit
      </button>
      <br />
      {showModal ? (
        <>
          <div className="ml-64 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto my-6 mx-auto max-w-6xl">
              <form
                className="border-0 rounded-lg shadow-lg relative flex flex-col w-[60rem] bg-white outline-none focus:outline-none flex-1 p-4"
                onSubmit={(e: FormSubmit) => e.preventDefault()}
              >
                <div className="flex justify-between space-x-4 items-center">
                  <div className="relative z-0 pt-4 w-full mb-6 group">
                    <input
                      type="text"
                      name="roomType"
                      id="roomType"
                      className="input-text focus:ring-0 peer"
                      placeholder=" "
                      required
                      value={newRoomType}
                      onChange={(e: InputChange) =>
                        setNewRoomType(e.target.value)
                      }
                    />
                    <label
                      htmlFor="roomType"
                      className="peer-focus:font-medium label-text peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Room type
                    </label>
                  </div>
                  <div className="relative z-0 pt-4 w-full mb-6 group">
                    <input
                      type="text"
                      name="nameRoomType"
                      id="nameRoomType"
                      className="input-text peer"
                      placeholder=" "
                      value={newNameOfRoomType}
                      onChange={(e: InputChange) => {
                        setNewNameOfRoomType(e.target.value)
                        e.preventDefault()
                      }}
                      onKeyDown={(
                        event: React.KeyboardEvent<HTMLInputElement>
                      ) => {
                        if (event.key === "Enter") {
                          event.preventDefault()
                          setNewListNameOfRoomType([
                            ...newListNameOfRoomType,
                            newNameOfRoomType
                          ])
                          setShowModal(true)
                          setNewNameOfRoomType("")
                        }
                      }}
                    />
                    <label
                      htmlFor="nameRoomType"
                      className="peer-focus:font-medium label-text peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Name of room type
                    </label>
                  </div>
                </div>
                <div className="flex flex-wrap">
                  {newListNameOfRoomType.map((item, index) => {
                    return (
                      <div className="relative m-2 p-3 py-1 border border-gray-300 text-lg rounded-xl cursor-not-allowed">
                        <AiOutlineCloseCircle
                          className="absolute -right-2 -top-2 text-xl bg-white rounded-full cursor-pointer"
                          onClick={() => {
                            setNewListNameOfRoomType(
                              newListNameOfRoomType.filter(
                                (name, i) => i !== index
                              )
                            )
                          }}
                        />
                        <span>{item}</span>
                      </div>
                    )
                  })}
                </div>
                <br />
                <div className="rounded-b">
                  <button
                    className="text-red-700 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(!showModal)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-emerald-500 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    onClick={() => {
                      setShowModal(!showModal)
                    }}
                    title="Add new type room"
                    type="button"
                  >
                    Add new type room
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}

export default CreateRoom
