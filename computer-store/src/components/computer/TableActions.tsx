import Link from "next/link";
import DeleteComputerButton from "./DeleteComputerButton";

export default function TableActions({ id }: { id: string }) {
    return (
        <div className='flex justify-center gap-2'>
            <Link href={`/dashboard/computers/view-computer/${id}`} className='w-24 bg-green-500 rounded-lg p-1'> View </Link>
            <Link href={`/dashboard/computers/edit-computer/${id}`} className='w-24 bg-blue-500 rounded-lg p-1'> Edit </Link>
            <DeleteComputerButton id={id} />
        </div>
    )
}