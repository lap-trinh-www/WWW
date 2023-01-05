import Head from "next/head"
import { useRouter } from "next/router"
import React from "react"
import Navbar from "../components/admin/Navbar"
import Slidebar from "../components/admin/Slidebar"

const Admin = () => {
  const pathName = useRouter().pathname.split("/")[1]
  return (
    <>
      <Head>
        <title>{pathName}</title>
      </Head>
      <div>
        <Navbar />
        <Slidebar />
      </div>
    </>
  )
}

export default Admin
