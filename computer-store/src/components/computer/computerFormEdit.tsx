"use client"

import { CldUploadWidget, CldImage } from 'next-cloudinary';
import SubmitButton from './SubmitButton';
import { useCallback, useState, useTransition } from 'react';
import { ComputerDocument, PartialComputer } from '@/models/computerModel';
import { updateComputer } from '@/actions/computerAction';
import { useRouter } from 'next/navigation';

export default function ComputerFormEdit({ computer }: { computer?: ComputerDocument }) {
  const router = useRouter();
  const [formData, setFormData] = useState<PartialComputer>(() => {
    if (computer) {
      return {
        productName: computer.productName,
        brand: computer.brand,
        categoryComputer: computer.categoryComputer,
        price: computer.price,
        stock: computer.stock,
        screenSize: computer.screenSize,
        processor: computer.processor,
        ram: computer.ram,
        storage: computer.storage,
        graphicCard: computer.graphicCard,
        operationSystem: computer.operationSystem,
        battery: computer.battery,
        description: computer.description,
        publicId: computer.publicId,
        signature: computer.signature,
        version: computer.version,
      };
    }
    return {};
  });

  const [isPending, startTransition] = useTransition();

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (computer && computer._id) {
      const formDataToSubmit = new FormData();

      // Append each formData entry to FormData object
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          formDataToSubmit.append(key, value.toString());
        }
      });

      try {
        // 1. Await the update operation
        await updateComputer(computer._id, formDataToSubmit);

        // 2. Redirect after successful update
        router.push("/dashboard/computers");
      } catch (error) {
        console.error("Error updating computer:", error);
        alert("Failed to update computer. Please try again.");
      }

    } else {
      console.error('Cannot update: computer ID is missing');
    }
  }, [computer, formData]);

  return (
    <div className="p-5 rounded-lg bg-slate-800">
      <h2 className="text-3xl font-bold text-center mb-6">Add New Computer</h2>
      <form onSubmit={handleSubmit}>
        <h2 className='text-xl mb-3 font-semibold'>Core Information:</h2>
        <div className='flex flex-wrap justify-between'>
          <input name='productName' value={formData.productName} onChange={handleChange } type="text" placeholder='Product name...' className='mb-5 text-xl py-2 px-7 w-[45%] rounded-lg bg-transparent text-[var(--text)] border-2 border-gray-500' />
          <select
            value={formData.brand}
            name="brand"
            onChange={ handleChange } // Update to use handleChange
            className="mb-5 text-xl py-2 px-7 w-[45%] rounded-lg bg-transparent border-2 border-gray-500 text-gray-500 appearance-none"
          >
            <option className="bg-gray-800" value="">Choose a Brand</option>
            <option className="bg-gray-800" value="Dell">Dell</option>
            <option className="bg-gray-800" value="Asus">Asus</option>
            <option className="bg-gray-800" value="Mac">Mac</option>
            <option className="bg-gray-800" value="Lenovo">Lenovo</option>
            <option className="bg-gray-800" value="Samsung">Samsung</option>
          </select>
          <select
            value={formData.categoryComputer}
            name="categoryComputer"
            onChange={ handleChange } // Update to use handleChange
            className='mb-5 text-xl py-2 px-7 w-[45%] rounded-lg bg-transparent border-2 border-gray-500 appearance-none text-gray-500'
          >
            <option className='bg-gray-800' value="">Category of computer</option>
            <option className='bg-gray-800' value="Laptop">Laptop</option>
            <option className='bg-gray-800' value="Desktop">Desktop</option>
          </select>
          <input name='price' value={formData.price} onChange={handleChange } className='mb-5 text-xl py-2 px-7 w-[45%] rounded-lg bg-transparent border-2 border-gray-500' type="number" placeholder='price...' />
          <input name='stock' value={formData.stock} onChange={handleChange } className='mb-5 text-xl py-2 px-7 w-[45%] rounded-lg bg-transparent border-2 border-gray-500' type="number" placeholder='Quantity in Stock...' />
          <h2 className='w-full text-xl mb-3 font-semibold'>Technical Specifications:</h2>
          <input name='screenSize' value={formData.screenSize} onChange={handleChange } className='mb-5 text-xl py-2 px-7 w-[45%] rounded-lg bg-transparent border-2 border-gray-500' type="text" placeholder='Screen Size...' />
          <input name='processor' value={formData.processor} onChange={handleChange } className='mb-5 text-xl py-2 px-7 w-[45%] rounded-lg bg-transparent border-2 border-gray-500' type="text" placeholder='Processor...' />
          <input name='ram' value={formData.ram} onChange={handleChange } className='mb-5 text-xl py-2 px-7 w-[45%] rounded-lg bg-transparent border-2 border-gray-500' type="text" placeholder='Ram...' />
          <input name='storage' value={formData.storage} onChange={handleChange } className='mb-5 text-xl py-2 px-7 w-[45%] rounded-lg bg-transparent border-2 border-gray-500' type="text" placeholder='Storage...' />
          <input name='graphicCard' value={formData.graphicCard} onChange={handleChange } className='mb-5 text-xl py-2 px-7 w-[45%] rounded-lg bg-transparent border-2 border-gray-500' type="text" placeholder='Graphics Card...' />
          <input name='operationSystem' value={formData.operationSystem} onChange={handleChange } className='mb-5 text-xl py-2 px-7 w-[45%] rounded-lg bg-transparent border-2 border-gray-500' type="text" placeholder='Operating System...' />
          <input name='battery' value={formData.battery} onChange={handleChange } className='mb-5 text-xl py-2 px-7 w-[45%] rounded-lg bg-transparent border-2 border-gray-500' type="text" placeholder='Battery Info...' />

          <textarea
            value = {formData.description} onChange={handleChange }
            className='mb-5 text-xl py-2 px-7 w-full rounded-lg bg-transparent border-2 border-gray-500'
            name="description"
            placeholder='Description...'
          ></textarea>

            {/* Cloudinary Upload Widget */}
            {/* Cloudinary Image Upload */}
            <CldUploadWidget

              signatureEndpoint="/api/widget-signature"
              options={{ sources: ['local', 'unsplash'] }}
              
              onQueuesEnd={(result, {widget}) => {
                widget.close();
              }}
            >
              {({ open }) => {
                function handleClick(e: any) {
                  e.preventDefault()
                  open()
                }
                return (
                  <button className='bg-gray-400 px-9 py-4 rounded-2xl text-black' onClick={handleClick}>
                    Upload an Image
                  </button>
                );
              }}
            </CldUploadWidget>

          {/* Hidden fields for image metadata */}
          <input type="hidden" name="publicId" value={formData.publicId}  onChange={handleChange }/>
          <input type="hidden" name="signature" value={formData.signature}  onChange={handleChange }/>
        </div>
        <div className='flex justify-end my-5'>
          <SubmitButton />
        </div>

        {/* Preview Image */}
        {
          <CldImage
            width="300"
            height="330"
            sizes="100vw"
            alt="Description of my image"
            src={formData.publicId || ""}
          />
        }
      </form>
    </div>
  )
}
