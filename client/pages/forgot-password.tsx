import Head from "next/head"
import Link from "next/link"
import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import RecaptchaExample from "../components/ReCaptcha"

const ForgotPassword = () => {
  return (
    <>
      <Head>
        <title>Forgot password</title>
      </Head>
      <Link href="/" className="flex items-center">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="h-6 mr-3 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center text-xl font-semibold whitespace-nowrap text-black">
          kuga
        </span>
      </Link>
      <div className="flex h-[34rem]">
        <div className="w-[28rem] h-[25rem] flex justify-center items-center flex-col mt-10 mx-auto">
          <div className="h-96 rounded-lg shadow-md shadow-black mt-10 p-2">
            <p>
              Enter your user account's verified email address and we will send
              you a password reset link.
            </p>
            <RecaptchaExample />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ForgotPassword
