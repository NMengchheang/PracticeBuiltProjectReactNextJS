"use client";
import { CldImage } from 'next-cloudinary';

export default function LaptopsClient({ computers }: { computers: any[] }) {
    
    return (
        <>
            <div className='md:text-3xl sm:text-2xl text-xl font-bold text-white'>
                <h1>Laptops & computers</h1>
            </div>
            <div className='md:text-2xl sm:text-1xl grid lg:grid-cols-3 sm:grid-cols-2 gap-5 my-10'>
                <div className='text-white border rounded-lg'>
                    Sort By: Laptop
                </div>
                <div className='text-white'>
                    Quantity of goods
                </div>
                <div className='text-white'>
                    
                </div>
            </div>
            <div className='text-white md:text-2xl sm:text-1xl grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
                {
                    computers.length > 0 ? (
                        computers.map((computer: any) => (
                            <div key={computer._id} className='shadow-2xl rounded-lg hover:bg-custom-gray hover:shadow-custom-green hover:scale-105 duration-300'>
                                <CldImage className='p-2' width="300" height="208" src={computer.publicId} alt="" />
                                <h2> {computer.productName} </h2>
                                <p> {computer.price}$</p>
                                <div>
                                    <button className='bg-blue-600 rounded-lg px-3 py-1 mb-5 text-lg'>Add to cart</button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No products available</p>
                    )
                }
            </div>
        </>
    )
}
