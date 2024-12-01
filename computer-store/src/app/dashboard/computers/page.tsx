import ComputerTable from '@/components/computer/ComputerTable';
import { fetchComputers } from '@/app/actions/computerAction';

export default async function page() {
    const computers = await fetchComputers();

    return (
        <div>
            <ComputerTable computers={computers}/>
        </div>
    )
}