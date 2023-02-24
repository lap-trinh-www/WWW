import React, { useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import { useDispatch } from "react-redux"
import { forgotPassword } from "../redux/actions/authAction"
import { useStorage } from "../utils/hooks"
import { InputChange, TypedDispatch } from "../utils/types"

interface Props {}

const RecaptchaExample: React.FC<Props> = () => {
  const [response, setResponse] = useState<string | null>(null)
  const [email, setEmail] = useState<string>("")
  const onChange = (value: string | null) => {
    setResponse(value)
  }

  const dispatch = useDispatch<TypedDispatch>()
  const session = useStorage()

  return (
    <div className="mt-2">
      <input
        type="email"
        id="email"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        placeholder="abc@gmail.com"
        required
        value={email}
        onChange={(e: InputChange) => setEmail(e.target.value)}
      />
      <br />
      <div className="flex justify-center">
        <div className="ml-16 h-4"></div>
        <ReCAPTCHA
          sitekey="6LcIxnwkAAAAAOM8PMM3HKD97NVdD8tAQJFEWgcP"
          onChange={(value: string | null) => onChange(value)}
          className="w-full mr-10"
        />
      </div>
      <br />
      <button
        className={`text-white bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center ${
          response === null ? "cursor-not-allowed opacity-50" : ""
        }`}
        type="button"
        onClick={() => {
          if (response !== null) {
            session.setItem("email", email, "local")
            dispatch(forgotPassword(email))
          }
        }}
      >
        Send password reset email
      </button>
    </div>
  )
}

export default RecaptchaExample
