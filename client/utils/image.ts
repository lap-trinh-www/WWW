import { IRoom } from "./types"
//init list image from assets
export const listImage = [
  require("../assets/images/room1.jpg"),
  require("../assets/images/room2.jpg"),
  require("../assets/images/room3.jpg")
]

export const bookingImage1 = [
  require("../assets/images/book1.jpg"),
  require("../assets/images/book1.jpg"),
  require("../assets/images/book1.jpg"),
  require("../assets/images/book1.jpg")
]

export const serviceImage = [
  require("../assets/images/service1.jpg"),
  require("../assets/images/service2.jpg")
]

export const BANNER_BOOKING = require("../assets/images/roomBooking/banner.jpg")

export const roomImage: IRoom[] = [
  {
    _id: 1,
    image: require("../assets/images/room/room1.jpg"),
    title: "Superior Room",
    price: 199,
    limited: "2 adults 1 children",
    description:
      "Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. ",
    acreage: 30,
    images: [
      require("../assets/images/roomBooking/room11.jpg"),
      require("../assets/images/roomBooking/room12.jpg"),
      require("../assets/images/roomBooking/room13.jpg"),
      require("../assets/images/roomBooking/room14.jpg"),
      require("../assets/images/roomBooking/room14.jpg")
    ],
    star: 5
  },
  {
    _id: 2,
    image: require("../assets/images/room/room2.jpg"),
    title: "Signature Room",
    price: 399,
    limited: "3 adults 2 children",
    description:
      "Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. ",
    acreage: 70,
    images: [
      require("../assets/images/roomBooking/room21.jpg"),
      require("../assets/images/roomBooking/room22.jpg"),
      require("../assets/images/roomBooking/room23.jpg"),
      require("../assets/images/roomBooking/room24.jpg"),
      require("../assets/images/roomBooking/room24.jpg")
    ],
    star: 4
  },
  {
    _id: 3,
    image: require("../assets/images/room/room3.jpg"),
    title: "Deluxe Room",
    price: 299,
    limited: "3 adults 1 children",
    description:
      "Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. ",
    acreage: 55,
    images: [
      require("../assets/images/roomBooking/room31.jpg"),
      require("../assets/images/roomBooking/room32.jpg"),
      require("../assets/images/roomBooking/room33.jpg"),
      require("../assets/images/roomBooking/room34.jpg"),
      require("../assets/images/roomBooking/room34.jpg")
    ],
    star: 4
  },
  {
    _id: 4,
    image: require("../assets/images/room/room1.jpg"),
    title: "Luxury Suite Room",
    price: 499,
    limited: "4 adults 2 children",
    description:
      "Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. ",
    acreage: 120,
    images: [
      require("../assets/images/roomBooking/room41.jpg"),
      require("../assets/images/roomBooking/room42.jpg"),
      require("../assets/images/roomBooking/room43.jpg"),
      require("../assets/images/roomBooking/room44.jpg"),
      require("../assets/images/roomBooking/room44.jpg")
    ],
    star: 2
  }
]
export const listExperience = [
  {
    _id: 1,
    image: require("../assets/images/experience/exp1.jpg"),
    title: "Spa & Massage",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
  {
    _id: 2,
    image: require("../assets/images/experience/exp2.jpg"),
    title: "Gourmet Trip",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
  {
    _id: 3,
    image: require("../assets/images/experience/exp3.jpg"),
    title: "Art break and relaxation",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
  {
    _id: 4,
    image: require("../assets/images/experience/exp4.jpg"),
    title: "Daily Clean Up",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
  {
    _id: 5,
    image: require("../assets/images/experience/exp5.jpg"),
    title: "Swimming Pool",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  }
]
