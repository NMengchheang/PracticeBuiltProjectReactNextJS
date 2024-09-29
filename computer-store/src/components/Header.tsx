import { auth } from '@/service/Authservices';
import HeaderClient from './ClientHeader';

async function HeaderServer() {
    const session = await auth(); // Fetch session data from the server
    
    return (
        <HeaderClient sessionuser= { session } />
    );
}

export default HeaderServer;
