import Card from "@/UIdashboard/dashboard/card/card";
import Chart from "@/UIdashboard/dashboard/chart/chart";
import Rightbar from "@/UIdashboard/dashboard/rightbar/rightbar";
import Transaction from "@/UIdashboard/dashboard/transactions/transaction";

export default function page() {
  return (
    <div className="flex">
      <div className="flex flex-grow-3 flex-col gap-5">
        <div className="flex justify-between gap-5">
          <Card />
          <Card />
          <Card />
        </div>
        <Transaction />
        <Chart />
      </div>
    </div>
  )
}
