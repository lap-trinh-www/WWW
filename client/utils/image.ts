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
    name: "Superior Room",
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
    star: 5,
    services: []
  },
  {
    _id: 2,
    name: "Signature Room",
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
    star: 4,
    services: []
  },
  {
    _id: 3,
    name: "Deluxe Room",
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
    star: 4,
    services: []
  },
  {
    _id: 4,
    name: "Luxury Suite Room",
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
    star: 2,
    services: []
  }
]
export const listExperience = [
  {
    _id: 1,
    name: "Spa & Massage",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
  {
    _id: 2,
    name: "Gourmet Trip",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
  {
    _id: 3,
    name: "Art break and relaxation",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
  {
    _id: 4,
    name: "Daily Clean Up",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
  {
    _id: 5,
    name: "Swimming Pool",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  }
]

export const listService = [
  {
    _id: 1,
    name: "Spa & Massage",
    status: false
  },
  {
    _id: 2,
    name: "Gourmet Trip",
    status: false
  },
  {
    _id: 3,
    name: "Art break and relaxation",
    status: false
  },
  {
    _id: 4,
    name: "Daily Clean Up",
    status: false
  },
  {
    _id: 5,
    name: "Swimming Pool",
    status: false
  },
  {
    _id: 6,
    name: "Spa & Massage",
    status: false
  },
  {
    _id: 7,
    name: "Gourmet Trip",
    status: false
  },
  {
    _id: 8,
    name: "Art break and relaxation",
    status: false
  },
  {
    _id: 9,
    name: "Daily Clean Up",
    status: false
  },
  {
    _id: 10,
    name: "Swimming Pool",
    status: false
  },
  {
    _id: 11,
    name: "Spa & Massage",
    status: false
  },
  {
    _id: 12,
    name: "Gourmet Trip",
    status: false
  },
  {
    _id: 13,
    name: "Art break and relaxation",
    status: false
  },
  {
    _id: 14,
    name: "Daily Clean Up",
    status: false
  },
  {
    _id: 15,
    name: "Swimming Pool",
    status: false
  },
  {
    _id: 16,
    name: "Spa & Massage",
    status: false
  },
  {
    _id: 17,
    name: "Gourmet Trip",
    status: false
  },
  {
    _id: 18,
    name: "Art break and relaxation",
    status: false
  }
]
