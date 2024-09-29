import Image from 'next/image'
import iconUser from '../../images/profile-user-icon.png'

export default function Transaction() {
  return (
    <div className='p-5 rounded-lg bg-slate-800'>
      <h2 className='mb-5 font-extralight'>Latest Transactions</h2>
      <table className='w-full'>
        <thead className='m-9 text-xl font-medium bg-gray-800 text-center'>
          <tr>
            <td className='py-3'>Name</td>
            <td className='py-3'>Status</td>
            <td className='py-3'>Date</td>
            <td className='py-3'>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr className='text-lg'>
            {/* 
             + justify-center : to center the content horizontally.
             + item-center : to center the content vertically.
            */}
            <td className='py-3 flex justify-center items-center'> 
              <Image className='mr-3' src={iconUser} alt='' width={40} height={40} />
              <span className=''>John Doe</span>
            </td>
            <td className='py-3 text-center justify-center'>
              <button className='w-32 bg-blue-500 rounded-lg p-2'>Pending</button>
            </td>
            <td className='py-3 text-center'>
              14.02.2024
            </td>
            <td className='py-3 text-center'>
              $3.200
            </td>
          </tr>
          <tr className='text-lg'>
            <td className='py-3 flex justify-center items-center'>
              <Image className='mr-3' src={iconUser} alt='' width={40} height={40} />
              <span className=''>John Doe</span>
            </td>
            <td className='py-3 text-center justify-center'>
              <button className='w-32 bg-green-500 rounded-lg p-2'>
                Done
              </button>
            </td>
            <td className='py-3 text-center'>
              14.02.2024
            </td>
            <td className='py-3 text-center'>
              $3.200
            </td>
          </tr>
          <tr className='text-lg'>
            <td className='py-3 flex justify-center items-center'>
              <Image className='mr-3' src={iconUser} alt='' width={40} height={40} />
              <span className=''>John Doe</span>
            </td>
            <td className='py-3 text-center justify-center'>
              <button className='w-32 bg-red-500 rounded-lg p-2'>Cancelled</button>
            </td>
            <td className='py-3 text-center'>
              14.02.2024
            </td>
            <td className='py-3 text-center'>
              $3.200
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
