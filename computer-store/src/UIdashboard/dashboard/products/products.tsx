import React from 'react';
import { MdSearch } from 'react-icons/md';
import Image from 'next/image';
import iconUser from '../../images/profile-user-icon.png';
import Link from 'next/link';

export default function Products() {
  return (
    <div className='bg-slate-800 rounded-lg'>
      <div className='flex justify-between items-center p-5'>
        <div className='flex items-center'>
          <span className='p-2 text-3xl'><MdSearch /></span>
          <input type="text" placeholder="Search..." className="rounded-full p-2 text-black bg-gray-400" />
        </div>
        <div>
          <Link href='/dashboard/products/add-new-products' className='bg-blue-500 rounded-lg py-2 px-3'>Add New</Link>
        </div>
      </div>
      <div>
      <table className='w-full border-separate table'>
        <thead className='m-9 text-xl font-medium bg-gray-800 text-center'>
          <tr>
            <td className='py-3'>Image</td>
            <td className='py-3'>Product Name</td>
            <td className='py-3'>Description</td>
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
          <tr className='text-lg'>
            <td className='py-3 flex justify-center items-center'>
              <Image src={iconUser} alt='' width={40} height={40} />
            </td>
            <td className='py-3 text-center'>
              Samsung
            </td>
            <td className='py-3 text-center'>
              Good Product
            </td>
            <td className='py-3 text-center'>
              $800
            </td>
            <td className='py-3 text-center'>
              23.01.2023
            </td>
            <td className='py-3 text-center'>
              72
            </td>
            <td className='text-center'>
              <div className='flex justify-center gap-2'>
                <button className='w-32 bg-green-500 rounded-lg p-1'> View </button>
                <button className='w-32 bg-red-500 rounded-lg p-1'> Delete </button>
              </div>
            </td>
          </tr>
          <tr className='text-lg items-center'>
            <td className='py-3 flex justify-center items-center'>
              <Image src={iconUser} alt='' width={40} height={40} />
            </td>
            <td className='py-3 text-center'>
              Samsung
            </td>
            <td className='py-3 text-center'>
              Good Product
            </td>
            <td className='py-3 text-center'>
              $800
            </td>
            <td className='py-3 text-center'>
              23.01.2023
            </td>
            <td className='py-3 text-center'>
              72
            </td>
            <td className='text-center'>
              <div className='flex justify-center gap-2'>
                <button className='w-32 bg-green-500 rounded-lg p-1'> View </button>
                <button className='w-32 bg-red-500 rounded-lg p-1'> Delete </button>
              </div>
            </td>
          </tr>
          <tr className='text-lg items-center'>
            <td className='py-3 flex justify-center items-center'>
              <Image src={iconUser} alt='' width={40} height={40} />
            </td>
            <td className='py-3 text-center'>
              Samsung
            </td>
            <td className='py-3 text-center'>
              Good Product
            </td>
            <td className='py-3 text-center'>
              $800
            </td>
            <td className='py-3 text-center'>
              23.01.2023
            </td>
            <td className='py-3 text-center'>
              72
            </td>
            <td className='text-center'>
              <div className='flex justify-center gap-2'>
                <button className='w-32 bg-green-500 rounded-lg p-1'> View </button>
                <button className='w-32 bg-red-500 rounded-lg p-1'> Delete </button>
              </div>
            </td>
          </tr>
          
        </tbody>
      </table>
      </div>
    </div>
  )
}
