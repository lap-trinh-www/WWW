import Head from "next/head"
import React from "react"
import { useDispatch } from "react-redux"
import Header from "../../components/Header"
import { resetPassword } from "../../redux/actions/authAction"
import { useStorage } from "../../utils/hooks"
import { InputChange, TypedDispatch } from "../../utils/types"

const ChangePass = () => {
  const [password, setPassword] = React.useState("")
  const [cf_password, setCfPassword] = React.useState("")

  const dispatch = useDispatch<TypedDispatch>()

  const session = useStorage()
  const email = session.getItem("email", "local")
  if (email === undefined || email === null) {
    window.location.href = "/login"
    return null
  }
  return (
    <>
      <Head>
        <title>Booking</title>
      </Head>

      <Header />
      <section className="h-full gradient-form md:h-screen flex justify-center items-center relative text-white">
        <img
          src="https://c4.wallpaperflare.com/wallpaper/913/856/991/sea-luxury-homes-beach-swimming-pool-wallpaper-preview.jpg"
          alt=""
          className="absolute w-full h-full object-cover"
        />
        <form className="w-96 h-fit shadow-lg p-8 bg-gray-700 opacity-80 rounded-md">
          <div className="mb-4">
            <input
              type="password"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
              id="password"
              placeholder="password"
              value={password}
              autoComplete="off"
              onChange={(e: InputChange) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
              id="newPassword"
              placeholder="new password"
              autoComplete="off"
              value={cf_password}
              onChange={(e: InputChange) => setCfPassword(e.target.value)}
            />
          </div>
          <div className="text-center pt-1">
            <button
              className=" px-6 py-2.5 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:text-blue-600 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-1/2 mb-3 bg-white text-center mx-auto block"
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              onClick={() => {
                dispatch(resetPassword(password, cf_password))
              }}
            >
              Reset password
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default ChangePass
