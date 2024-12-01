"use client"
import { usePathname } from "next/navigation"
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from "react-icons/md";
import { useRouter } from 'next/navigation';
import { TiArrowBackOutline } from "react-icons/ti";

export default function Navbar() {

  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="p-5 flex items-center justify-between rounded-lg bg-slate-800 mb-5">
      <div className="">
        <button
          className='bg-blue-500 px-9 py-4 rounded-2xl flex items-center gap-2'
          onClick={() => router.back()}
          
        >
          <TiArrowBackOutline />Back
        </button>
      </div>
      <div className="text-2xl font-semibold">
        &emsp;{pathname.split('/').pop()?.toUpperCase()}
      </div>
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
