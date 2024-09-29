import { MdSupervisedUserCircle } from "react-icons/md";

export default function Card() {
  return (
    <div className="flex rounded-lg gap-5 cursor-pointer w-full bg-slate-800 p-5">
      <MdSupervisedUserCircle size={24} />
      <div className="flex flex-col gap-5">
        <span className="">Total Users</span>
        <span className="text-2xl font-medium">10.273</span>
        <span className="text-sm font-light">
          <span className="text-[#00df9a]">12% </span>more than previous week
        </span>
      </div>
    </div>
  )
}
