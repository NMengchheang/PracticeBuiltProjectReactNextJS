"use client"
import { CldImage } from 'next-cloudinary'
import { useRouter } from 'next/navigation';

export default function ComputerDetails({computer} : {computer: any}) {
    const router = useRouter();
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 rounded-lg shadow-lg">
                {/* Image Section */}
                <div className="flex justify-center">
                    <CldImage 
                        src={computer.publicId} 
                        width="300"
                        height="208" 
                        alt={computer.name || 'Product image'} 
                        className="w-full h-96 object-cover rounded-md shadow-md border border-gray-200" 
                    />
                </div>

                {/* Detail Section */}
                <div className="space-y-4">
                    <h1 className='text-2xl font-semibold text-gray-300'>
                        Detail info.
                    </h1>
                    <div className="space-y-2">
                        <h1 className="mt-3">
                            <span className='text-xl text-gray-300'>Name:</span>
                            <span className='text-xl text-gray-400'> {computer.productName}</span>
                        </h1>
                        <h1 className="mb-4 mt-3">
                            <span className='text-xl text-gray-300'>Brand:</span>
                            <span className='text-xl text-gray-400'> {computer.brand} ({computer.categoryComputer})</span>
                        </h1>
                        <p className="text-xl mb-2">
                            <span className="font-semibold text-gray-300">Price:</span>
                            <span className='text-green-500'> {computer.price}$</span>
                        </p>
                        <p className="text-xl mb-4">
                            <span className="font-semibold text-gray-300">Stock:</span>
                            <span className={computer.stock > 0 ? 'text-green-500' : 'text-red-500'} > {computer.stock > 0 ? `In Stock  *[Unit ${computer.stock}]` : 'Out of Stock'}</span>
                        </p>
                    </div>


                    {/* Technical Specifications */}
                    <h2 className='text-2xl font-semibold mt-6 text-gray-300'>
                        Technical Specifications.
                    </h2>
                    <div className="space-y-2">
                        <p className="text-xl mb-2 mt-2">
                            <span className="font-semibold text-gray-300">Screen Size:</span>
                            <span className='text-gray-400'> {computer.screenSize} </span>
                        </p>
                        <p className="text-xl mb-2 mt-2">
                            <span className="font-semibold text-gray-300">Processor:</span>
                            <span className='text-gray-400'> {computer.processor} </span>
                        </p>
                        <p className="text-xl mb-2 mt-2">
                            <span className="font-semibold text-gray-300">Ram:</span>
                            <span className='text-gray-400'> {computer.ram} </span>
                        </p>
                        <p className="text-xl mb-2 mt-2">
                            <span className="font-semibold text-gray-300">Storage:</span>
                            <span className='text-gray-400'> {computer.storage} </span>
                        </p>
                        <p className="text-xl mb-2 mt-2">
                            <span className="font-semibold text-gray-300">Graphics Card:</span>
                            <span className='text-gray-400'> {computer.graphicCard} </span>
                        </p>
                        <p className="text-xl mb-2 mt-2">
                            <span className="font-semibold text-gray-300">Operation System:</span>
                            <span className='text-gray-400'> {computer.operationSystem} </span>
                        </p>
                        <p className="text-xl mb-2 mt-2">
                            <span className="font-semibold text-gray-300">Battery Info:</span>
                            <span className='text-gray-400'> {computer.battery} </span>
                        </p>
                    </div>
                    {/* Description */}
                    <p className="mb-4">
                        <span className='font-semibold text-xl text-gray-300'>Description:</span>
                        <span className='text-gray-400'> {computer.description} </span>
                    </p>

                    {/* Timestamp */}
                    <p className="text-sm  text-gray-300">
                        Created At: {new Date(computer.createdAt).toLocaleDateString()}
                    </p>
                </div>
            </div>

            {/* Back Button */}
            <div className="flex justify-center mt-6">
                <button
                    className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md transition-all duration-300"
                    onClick={() => router.back()}
                    >
                    Back
                </button>
            </div>
        </>
    )
}
