export const checkImage = (file: File) => {
  const types = ["image/png", "image/jpeg"]
  let err = ""
  if (!file) err = "File does not exist"
  if (file.size > 1024 * 1024 * 4) err = "Image size should be less than 4MB"

  if (!types.includes(file.type))
    err = "Image type should be either png or jpeg"
  return err
}

export const imageUpload = async (file: File) => {
  const formData = new FormData()
  formData.append("file", file)
  formData.append("upload_preset", "o8jh14k9")
  formData.append("cloud_name", "kuga")

  const res = await fetch("https://api.cloudinary.com/v1_1/kuga/upload", {
    method: "POST",
    body: formData
  })
  const data = await res.json()
  return { public_id: data.public_id, url: data.secure_url }
}
