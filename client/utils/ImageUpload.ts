export const checkImage = (file: File) => {
  const types = ["image/png", "image/jpeg"]
  let err = ""
  if (!file) err = "File does not exist"
  if (file.size > 1024 * 1024 * 4) err = "Image size should be less than 4MB"

  if (!types.includes(file.type))
    err = "Image type should be either png or jpeg"
  return err
}
export const imageUpload = async (files: File[]) => {
  const images: string[] = []

  for (const file of files) {
    const formData = new FormData()
    formData.append("file", file)
    formData.append("upload_preset", "lectmgy1")
    formData.append("cloud_name", "dkh1ozkvt")

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dkh1ozkvt/upload",
      {
        method: "POST",
        body: formData
      }
    )
    const data = await res.json()
    images.push(data.secure_url)
  }
  return images
}
