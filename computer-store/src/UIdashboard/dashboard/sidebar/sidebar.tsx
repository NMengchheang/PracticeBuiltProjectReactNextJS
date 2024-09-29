import { MdDashboard, MdLogout, MdShoppingBag } from "react-icons/md";
import MenuLink from "./menuLink/menulink";
import Image from "next/image";
import userIcon from "../../images/none-user.png"

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />
      }
    ]
  }
]
export default function Sidebar() {
  return (
    <div className="sticky top-[40px]">
      <div className="flex gap-5 items-center mb-5">
        <Image className="rounded-full object-cover mr-4" src={userIcon} alt="" width="50" height="50"/>
        <div className="flex flex-col mx-4">
          <span className="font-medium">John Joe</span>
          <span className="text-[12px]">Administrator</span>
        </div>
      </div>
      <ul className="list-none">
        {menuItems.map((cat)=>(
          <li key={cat.title}>
            <span className="font-bold mt-5 text-2xl">{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <button className="w-full gap-5 flex items-center p-5 text-xl hover:bg-custom-gray hover:scale-105 duration-300 rounded-lg">
        <MdLogout />Logout
      </button>
      
    </div>
  )
}
