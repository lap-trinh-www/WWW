import Head from "next/head"
import { useRouter } from "next/router"
import React from "react"
import Navbar from "../../components//admin/Navbar"
import Slidebar from "../../components//admin/Slidebar"
import CreateRoom from "../../components/admin/CreateRoom"
import CreateUser from "../../components/admin/CreateUser"
import ListRoom from "../../components/admin/ListRoom"
import ListUser from "../../components/admin/ListUser"
const routes = [
  {
    path: "",
    component: "Dashboard"
  },
  {
    path: "create-user",
    component: <CreateUser />
  },
  {
    path: "users",
    component: <ListUser />
  },
  {
    path: "create-room",
    component: <CreateRoom />
  },
  {
    path: "list-room",
    component: <ListRoom />
  },
  {
    path: "bookings",
    component: "List Booking"
  },
  {
    path: "profile",
    component: "Profile"
  },
  {
    path: "edit-profile",
    component: "Edit Profile"
  },
  {
    path: "change-password",
    component: "Change Password"
  }
]
const Detail = () => {
  const { slug } = useRouter().query
  return (
    <>
      {routes.map((route, index) => {
        if (route.path === `${slug}`) {
          return (
            <>
              <Head>
                <title>{route.path}</title>
              </Head>
              <div key={index}>
                <Navbar />
                <div className="flex">
                  <Slidebar />
                  <div className="ml-64 mt-16 flex-1">
                    <div className="p-4 h-[91vh]">{route.component}</div>
                  </div>
                </div>
              </div>
            </>
          )
        }
      })}
    </>
  )
}

export default Detail
