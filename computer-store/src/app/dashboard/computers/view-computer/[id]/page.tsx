import { getComputerById } from '@/actions/computerAction';
import ComputerDetails from '@/components/computer/computerDetails'
import { notFound } from 'next/navigation';

export default async function page({ params }: { params: { id: string } }) {
    const computer = await getComputerById(params.id);

    // If product is not found, trigger 404 page
    if (!computer) {
        notFound();
    }
    return (
        <div className="container mx-auto p-4 bg-slate-800 text-white rounded-lg shadow-lg">
            <ComputerDetails computer={computer}/>
        </div>
    )
}
