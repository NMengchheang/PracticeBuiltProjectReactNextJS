"use client"
import { CldImage } from 'next-cloudinary';
import Link from 'next/link';
import { MdSearch } from 'react-icons/md';
import TableActions from './TableActions';
export default function ComputerTable({ computers }: { computers: any[] }) {
    return (
        <div className='bg-slate-800 rounded-lg'>
            <div className='flex justify-between items-center p-5'>
                <div className='flex items-center'>
                    <span className='p-2 text-3xl'><MdSearch /></span>
                    <input type="text" placeholder="Search..." className="rounded-full p-2 text-black bg-gray-400" />
                </div>
                <div>
                    <Link href='/dashboard/computers/create' className='bg-blue-500 rounded-lg py-2 px-3'>Add New</Link>
                </div>
            </div>
            <table className='w-full border-separate table'>
                <thead className='m-9 text-xl font-medium bg-gray-800 text-center'>
                    <tr>
                        <td className='py-3'>Image</td>
                        <td className='py-3'>Product Name</td>
                        <td className='py-3'>Price</td>
                        <td className='py-3'>Created At</td>
                        <td className='py-3'>Stock</td>
                        <td className='py-3'>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {/* 
                    + justify-center : to center the content horizontally.
                    + item-center : to center the content vertically.
                    */}
                    {
                        computers.length > 0 ? (
                            computers.map((computer: any) => (
                                <tr key={computer._id} className='text-lg hover:bg-gray-50 dark:hover:bg-gray-600'>
                                    <td className='py-3 flex justify-center items-center'>
                                        <CldImage src={computer.publicId} alt='' width={40} height={40} />
                                    </td>
                                    <td className='py-3 pl-4'>
                                        {computer.productName}
                                    </td>
                                    <td className='py-3 pl-4'>
                                        {computer.price}$
                                    </td>
                                    <td className='py-3 pl-6'>
                                        {new Date(computer.createdAt).toLocaleString()}
                                    </td>
                                    <td className='py-3 text-center'>
                                        {computer.stock}
                                    </td>
                                    <td className='text-center'>
                                        <TableActions 
                                            id={computer._id}
                                        />
                                    </td>
                                </tr>
                            ))
                        ): (
                            <p>No products available</p>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
