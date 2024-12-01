import { getComputerById } from "@/app/actions/computerAction";
import ComputerFormEdit from "@/components/computer/computerFormEdit";
import { notFound } from "next/navigation";

export default async function page({ params }: { params: { id: string }}) {
  const existingComputerData = await getComputerById(params.id);

  // If product is not found, trigger 404 page
  if (!existingComputerData) {
    notFound();
  }
  
  return (
    <div>
      < ComputerFormEdit computer={existingComputerData} />
    </div>
  );
}
