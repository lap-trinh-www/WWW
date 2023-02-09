import Head from "next/head"
import Link from "next/link"
import { useState } from "react"
import { BsFacebook } from "react-icons/bs"
import { FcGoogle } from "react-icons/fc"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../redux/actions/authAction"
import { useStorage } from "../utils/hooks"
import {
  FormSubmit,
  InputChange,
  RootStore,
  TypedDispatch
} from "../utils/types"

const Login = () => {
  const initalState = { email: "", password: "" }
  const [userLogin, setUserLogin] = useState(initalState)
  const { email, password } = userLogin

  const [checked, setChecked] = useState(false)

  const dispatch = useDispatch<TypedDispatch>()

  const handleChangeInput = (e: InputChange) => {
    const { value, name } = e.target
    setUserLogin({ ...userLogin, [name]: value })
  }

  const handleSubmit = (e: FormSubmit) => {
    e.preventDefault()

    // dispatch(login(userLogin))
    if (checked) {
      storage.setItem("userLogin", JSON.stringify(userLogin), "local")
    }
  }
  const { auth } = useSelector((state: RootStore) => state)
  const storage = useStorage()

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <section className="h-screen">
        <div className="px-6 h-full text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="w-full"
                alt=""
              />
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-row items-center justify-center lg:justify-start">
                  <p className="text-lg mb-0 mr-4">Sign in with</p>
                  <button type="button" title="button">
                    <BsFacebook className="text-2xl text-blue-600 mr-2" />
                  </button>
                  <button type="button" title="button">
                    <FcGoogle className="text-2xl" />
                  </button>
                </div>

                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <p className="text-center font-semibold mx-4 mb-0">Or</p>
                </div>

                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Email address"
                    name="email"
                    value={email}
                    onChange={handleChangeInput}
                    autoComplete="email"
                  />
                </div>

                <div className="mb-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={handleChangeInput}
                    autoComplete="current-password"
                  />
                </div>

                <div className="flex justify-between items-center mb-6">
                  <div className="form-group form-check">
                    <div className="p-4">
                      <div className="flex items-center mr-4 mb-2">
                        <input
                          type="checkbox"
                          id="A3-yes"
                          name="A3-confirmation"
                          value="yes"
                          className="opacity-0 absolute h-8 w-8"
                          checked={checked}
                          onChange={() => setChecked(!checked)}
                        />
                        <div className="bg-white border-2 rounded-md border-blue-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
                          <svg
                            className="fill-current hidden w-3 h-3 text-blue-600 pointer-events-none"
                            version="1.1"
                            viewBox="0 0 17 12"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g fill="none" fill-rule="evenodd">
                              <g
                                transform="translate(-9 -11)"
                                fill="#1F73F1"
                                fill-rule="nonzero"
                              >
                                <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                              </g>
                            </g>
                          </svg>
                        </div>
                        <label htmlFor="A3-yes" className="select-none">
                          Remeber me
                        </label>
                      </div>
                    </div>
                  </div>
                  <Link href={`/forgot-password`}>Forgot password?</Link>
                </div>

                <div className="text-center lg:text-left">
                  <button
                    type="submit"
                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Login
                  </button>
                  <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                    Don't have an account?
                    <Link
                      href="/sign-up"
                      className="ml-1 text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                    >
                      Register
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login
