"use client"
import { usePathname } from "next/navigation"
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from "react-icons/md";

export default function Navbar() {

  const pathname = usePathname();

  return (
    <div className="p-5 flex items-center justify-between rounded-lg bg-slate-800 mb-5">
      <div className=""> {pathname.split('/').pop()?.toUpperCase()} </div>
      <div className="flex items-center">

        <div className="items-center flex">
          <span className="p-2 text-3xl"><MdSearch /></span>
          <input type="text" placeholder="Search..." className="rounded-full p-2 text-black bg-gray-400" />
        </div>

        <div className="flex px-6 gap-5">
          <MdOutlineChat size={25} />
          <MdNotifications size={25} />
          <MdPublic size={25} />
        </div>

      </div>
    </div>
  )
}
