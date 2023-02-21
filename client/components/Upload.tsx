import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"
import { AiOutlineCloudUpload } from "react-icons/ai"
import { imageUpload } from "../utils/ImageUpload"
import { IRoom } from "../utils/types"

interface Props {
  room: IRoom
  setRoom: (room: IRoom) => void
}

const Upload = ({ room, setRoom }: Props) => {
  const [loading, setLoading] = useState(false)

  const [success, setSuccess] = useState(true)
  const [img, setImg] = useState<string[]>([])

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const files = acceptedFiles
    // files.map(async (item) => {
    //   imageUpload(item)
    //     .then((res) => {
    //       setRoom({ ...room, images: [...room.images, res.url] })

    //       setLoading(true)
    //     })
    //     .catch((err) => {
    //       console.log(err)
    //       setLoading(false)
    //     })
    // })
  }, [])

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    noClick: true,
    noKeyboard: true,
    onDrop
  })

  return (
    <div className="w-[76rem]">
      <button
        title="Upload"
        className="border-2 rounded-xl border-dashed border-black w-full drag_drop_wrapper"
        onClick={open}
        type="button"
        {...getRootProps()}
      >
        <div className="flex justify-center my-2">
          <div>
            <AiOutlineCloudUpload className="text-black text-9xl mx-auto" />
            <div>
              <input {...getInputProps()} />
              {isDragActive ? (
                <p className="text-2xl font-semibold">Drop the photo here...</p>
              ) : (
                <p className="text-2xl font-semibold">
                  Drop file here or click to upload
                </p>
              )}
            </div>
          </div>
        </div>
      </button>
    </div>
  )
}

export default Upload
