'use client';
// import useToDoContext from '@/contexts/ToDoContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default async function ToDoList({items}) {
    const router = useRouter();
    const todos  = items;

    const onDelete = async (id) => {
        const res = await fetch(
            `https://coding-fairy.com/api/mock-api-resources/1715945679/todos/${id}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                method: 'DELETE'
            }
        );
        if (!res.ok) {
            throw new Error('Failed to delete data')
        }
        router.refresh();
    }
    return (
    <div className='pt-5'>
        <table>
            <thead className='bg-gray-100'>
                <tr>
                    <th className='px-6 py-3 font-medium uppercase text-gray-700'>id</th>
                    <th className='px-6 font-medium uppercase text-gray-700'>Title</th>
                    <th className='px-6 font-medium uppercase text-gray-700'>Due-Date</th>
                    <th className='px-6 uppercase'>
                        <Link href="/todos/create"
                            type="button" 
                            className="px-4 py-2
                                bg-blue-500 
                                text-white text-sm 
                                font-medium rounded-l-md 
                                hover:bg-blue-700 
                                focus:outline-none 
                                focus:ring-2 
                                focus:ring-offset-2 
                                focus:ring-blue-500"> + New
                        </Link>
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    todos.map(item => (
                        <tr key={item.id}>
                            <td className='px-6 py-3 font-medium capitalize text-gray-500'>{item.id}</td>
                            <td className='px-6 py-3 font-medium capitalize text-gray-500'>{item.title}</td>
                            <td className='px-6 py-3 font-medium capitalize text-gray-500'>{item.dueDate}</td>
                            <td className='px-6 uppercase'>
                                <Link href={`/todos/${item.id}`}
                                    type="button" 
                                    className="px-4 py-2
                                        bg-yellow-500 
                                        text-white text-sm 
                                        font-medium rounded-l-md 
                                        hover:bg-yellow-700 
                                        focus:outline-none 
                                        focus:ring-2 
                                        focus:ring-offset-2 
                                        focus:ring-yellow-500"> Edit
                                </Link>
                                <button onClick={() => onDelete(item.id)}
                                    type="button" 
                                    className="px-4 py-2
                                        bg-red-500 
                                        text-white text-sm 
                                        font-medium rounded-r-md 
                                        hover:bg-red-700 
                                        focus:outline-none 
                                        focus:ring-2 
                                        focus:ring-offset-2 
                                        focus:ring-red-500"> Delete
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}
