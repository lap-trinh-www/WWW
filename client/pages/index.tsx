import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Banner from "../components/Banner"
import BookingNow from "../components/BookingNow"
import Footer from "../components/Footer"
import Header from "../components/Header"
import History from "../components/History"
import OurRoom from "../components/OurRoom"
import Services from "../components/Services"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Trang chủ</title>
      </Head>
      <main>
        <Header />
        <Banner />
        <History />
        <BookingNow />
        <Services />
        <OurRoom />
        <Footer />
      </main>
    </>
  )
}

export default Home
