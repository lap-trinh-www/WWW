import { IRoom, IRoomType, IRoomTypeConvert } from "./types"
import { v4 as uuidv4 } from "uuid"
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
    room_ID: "1",
    roomName: "Superior room",
    price: 199,
    limitQuantity: "2 adults 1 children",
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
    services: [],
    roomType: {
      type_ID: uuidv4(),
      typeName: "Deluxe room",
      type: "Deluxe"
    }
  },
  {
    room_ID: "2",
    roomName: "Signature room",
    price: 399,
    limitQuantity: "3 adults 2 children",
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
    services: [],
    roomType: {
      type_ID: uuidv4(),
      typeName: "Deluxe room",
      type: "Deluxe"
    }
  },
  {
    room_ID: "3",
    roomName: "Deluxe room",
    price: 299,
    limitQuantity: "3 adults 1 children",
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
    services: [],
    roomType: {
      type_ID: uuidv4(),
      typeName: "Deluxe room",
      type: "Deluxe"
    }
  },
  {
    room_ID: "4",
    roomName: "Luxury Suite room",
    price: 499,
    limitQuantity: "4 adults 2 children",
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
    services: [],
    roomType: {
      type_ID: uuidv4(),
      typeName: "Deluxe room",
      type: "Deluxe"
    }
  }
]
export const listExperience = [
  {
    id: "1",
    image: require("../assets/images/experience/exp1.jpg"),
    title: "Spa & Massage",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
  {
    id: "2",
    image: require("../assets/images/experience/exp2.jpg"),
    title: "Gourmet Trip",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
  {
    id: "3",
    image: require("../assets/images/experience/exp3.jpg"),
    title: "Art break and relaxation",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
  {
    id: "4",
    image: require("../assets/images/experience/exp4.jpg"),
    title: "Daily Clean Up",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
  {
    id: "5",
    image: require("../assets/images/experience/exp5.jpg"),
    title: "Swimming Pool",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  }
]

export const listRoomType2: IRoomType[] = [
  {
    type_ID: "1",
    typeName: "Single room",
    type: "Occupancy"
  },
  {
    type_ID: "2",
    typeName: "Double room",
    type: "Occupancy"
  },

  {
    type_ID: "3",
    typeName: "King",

    type: "Bed"
  },

  {
    type_ID: "4",
    typeName: "Standard room",
    type: "Layout"
  },
  {
    type_ID: "5",
    typeName: "Deluxe room",

    type: "Layout"
  },

  {
    type_ID: "6",
    typeName: "Penhouse",
    type: "Amenities"
  }
]

export const output: IRoomTypeConvert[] = listRoomType2.reduce((acc, curr) => {
  const existingType = acc.find((x) => x.type === curr.type)
  if (existingType) {
    existingType.names.push({ id: curr.type_ID, name: curr.typeName })
  } else {
    acc.push({
      id: uuidv4(),
      type: curr.type,
      names: [{ id: curr.type_ID, name: curr.typeName }]
    })
  }
  return acc
}, [] as IRoomTypeConvert[])
