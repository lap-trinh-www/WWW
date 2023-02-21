import React from "react"

const LoginAdmin = () => {
  return (
    <section className="h-full gradient-form md:h-screen flex justify-center items-center relative text-white">
      <img
        src="https://c4.wallpaperflare.com/wallpaper/913/856/991/sea-luxury-homes-beach-swimming-pool-wallpaper-preview.jpg"
        alt=""
        className="absolute w-full h-full object-cover"
      />
      <form className="w-96 h-fit shadow-lg p-8 bg-gray-700 opacity-80 rounded-md">
        <div className="mb-4">
          <input
            type="text"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
            id="userName"
            placeholder="Username"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
            id="passWord"
            placeholder="Password"
          />
        </div>
        <div className="text-center pt-1">
          <button
            className=" px-6 py-2.5 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:text-blue-600 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-1/2 mb-3 bg-white text-center mx-auto block"
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            Log in
          </button>
          <a className="text-white" href="#!">
            Forgot password?
          </a>
        </div>
      </form>
    </section>
  )
}

export default LoginAdmin
