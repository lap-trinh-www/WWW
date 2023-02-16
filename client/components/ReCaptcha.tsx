import React, { useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"

interface Props {}

const RecaptchaExample: React.FC<Props> = () => {
  const [response, setResponse] = useState<string | null>(null)

  const onChange = (value: string | null) => {
    setResponse(value)
  }

  return (
    <div className="mt-2">
      <input
        type="text"
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        placeholder="John"
        required
      />
      <br />
      <div className="flex justify-center">
        <div className="ml-16 h-4"></div>
        <ReCAPTCHA
          sitekey="6LcIxnwkAAAAAOM8PMM3HKD97NVdD8tAQJFEWgcP"
          onChange={onChange}
          className="w-full mr-10"
        />
      </div>
      <br />
      <button
        className={`text-white bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center ${
          response === null ? "cursor-not-allowed opacity-50" : ""
        }`}
        type="button"
      >
        Send password reset email
      </button>
    </div>
  )
}

export default RecaptchaExample
