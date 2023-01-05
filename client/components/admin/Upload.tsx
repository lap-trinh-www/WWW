import type { NextPage } from "next"
import Head from "next/head"
import { useCallback, useEffect, useState } from "react"
import { useDropzone } from "react-dropzone"
import { AiOutlineCloudUpload } from "react-icons/ai"
import Swiper, { FreeMode, Navigation, Thumbs } from "swiper"
import { SwiperSlide } from "swiper/react"
import { getAPIFecth } from "../../utils/fecthData"
import { imageUpload } from "../../utils/ImageUpload"
import { IIMg } from "../../utils/types"
import Show from "../Show"
import _ from "lodash"

const Upload = () => {
  const [loading, setLoading] = useState(false)

  const [success, setSuccess] = useState(true)
  const [img, setImg] = useState<string[]>([])

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles
    file.map(async (file) => {
      const photo = await imageUpload(file)
      setImg([...img, photo.url])
    })
  }, [])

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    noClick: true,
    noKeyboard: true,
    onDrop
  })

  return (
    <div className="w-[76rem]">
      {_.isEmpty(img) ? (
        <button
          className="border-2 rounded-xl border-dashed border-black w-full"
          onClick={open}
          type="button"
        >
          <div className="flex justify-center my-2">
            <div>
              <AiOutlineCloudUpload className="text-black text-9xl mx-auto" />
              <div {...getRootProps()} className="drag_drop_wrapper">
                <input hidden {...getInputProps()} />
                {isDragActive ? (
                  <p className="text-2xl font-semibold">
                    Drop the photo here...
                  </p>
                ) : (
                  <p className="text-2xl font-semibold">
                    Drop file here or click to upload
                  </p>
                )}
              </div>
            </div>
          </div>
        </button>
      ) : (
        <Show listImage={img} />
      )}
    </div>
  )
}

export default Upload
