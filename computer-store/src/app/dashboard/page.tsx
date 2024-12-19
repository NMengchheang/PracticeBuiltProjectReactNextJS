import { redirect } from "next/navigation";
import Card from "./components/card/card";
import Chart from "./components/chart/chart";
import Transaction from "./components/transactions/transaction";
import { checkIsAuthenticated } from "@/lib/auth/checkIsAuthenticated";

export default async function page() {
  const isAuthenticated = await checkIsAuthenticated();
  if (!isAuthenticated) {
    redirect("/signin");
  } else {
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
  
}
