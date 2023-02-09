import { FaSwimmer } from "react-icons/fa"
import { IoIosFitness } from "react-icons/io"
import { MdChair, MdOutlineYard } from "react-icons/md"
import { TbMassage } from "react-icons/tb"

export const listServices = [
  {
    id: "1",
    name: "Spa & Massage",
    status: false,
    icon: <IoIosFitness className="text-3xl" />
  },
  {
    id: "2",
    name: "Gourmet Trip",
    status: false,
    icon: <MdChair className="text-3xl" />
  },
  {
    id: "3",
    name: "Art break and relaxation",
    status: false,
    icon: <FaSwimmer className="text-3xl" />
  },
  {
    id: "4",
    name: "Daily Clean Up",
    status: false,
    icon: <TbMassage className="text-3xl" />
  },
  {
    id: "5",
    name: "Swimming Pool",
    status: false,
    icon: <MdOutlineYard className="text-3xl" />
  }
]
