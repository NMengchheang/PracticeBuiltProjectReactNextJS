import LaptopsClient from './ServerConponent/laptopsClient';
import { fetchComputers } from '@/actions/computerAction';

export default async function LaptopsServer() {
    const computers = await fetchComputers();
    
    return <LaptopsClient computers={computers}/>
}