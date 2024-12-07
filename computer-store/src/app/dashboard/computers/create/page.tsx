"use client";

import React, { useRef, useState } from 'react';
import { createComputers } from '@/actions/computerAction';
import { CldImage, CldUploadWidget } from 'next-cloudinary';
import SubmitButton from '@/components/computer/SubmitButton';

export default function AddProductPage() {
  // we are using useRef to reset the form after submission
  const ref = useRef<HTMLFormElement>(null);
  const [signature, setSignature] = useState("");
  const [publicId, setPublicId] = useState("");
  const [version, setVersion] = useState("");

  const handleUploadSuccess = (result: any) => {
    // Extracting public_id from the uploaded image data
    if (result?.event === "success") {
      setSignature(result.info.signature);
      setPublicId(result.info.public_id);
      setVersion(result.info.version);
    }
  }
  return (
    <div className="p-5 rounded-lg bg-slate-800">
      <h2 className="text-3xl font-bold text-center mb-6">Add New Computer</h2>
      <form 
        ref={ref}
        action={async (formData) => {
          ref.current?.reset();
          await createComputers(formData);
        }}
      >
        <h2 className='text-xl mb-3 font-semibold'>Core Information:</h2>
        <div className='flex flex-wrap justify-between'>
          <input name='productName' id='productName' className='mb-5 text-xl py-2 px-7 w-[45%] rounded-lg bg-transparent text-[var(--text)] border-2 border-gray-500' type="text" placeholder='Product name...'/>
          <select 
            name="brand" 
            id="brand" 
            className="mb-5 text-xl py-2 px-7 w-[45%] rounded-lg bg-transparent border-2 border-gray-500 text-gray-500 appearance-none"
            onChange={(e) => {
              if(e.target.value === "") {
                // If the default value (empty) is selected, keep text gray
                e.target.classList.remove("text-white"); 
                e.target.classList.add("text-gray-500");
              } else {
                // If any other option is selected, change text to white
                e.target.classList.remove("text-gray-500");
                e.target.classList.add("text-white"); //Change the color to white on selection
              }
            }}
          >
            <option className="bg-gray-800" value="">Choose a Brand</option>
            <option className="bg-gray-800" value="Dell">Dell</option>
            <option className="bg-gray-800" value="Asus">Asus</option>
            <option className="bg-gray-800" value="Mac">Mac</option>
            <option className="bg-gray-800" value="Lenovo">Lenovo</option>
            <option className="bg-gray-800" value="Samsung">Samsung</option>
          </select>
          <select
            name="categoryComputer"
            id='categoryComputer'
            className='mb-5 text-xl py-2 px-7 w-[45%] rounded-lg bg-transparent border-2 border-gray-500 appearance-none text-gray-500'
            onChange={(e) => {
              if(e.target.value === "") {
                // If the default value (empty) is selected, keep text gray
                e.target.classList.remove("text-white"); 
                e.target.classList.add("text-gray-500");
              } else {
                // If any other option is selected, change text to white
                e.target.classList.remove("text-gray-500");
                e.target.classList.add("text-white"); //Change the color to white on selection
              }
            }}
          >
            <option className='bg-gray-800' value="">Category of computer</option>
            <option className='bg-gray-800' value="Laptop">Laptop</option>
            <option className='bg-gray-800' value="Desktop">Desktop</option>
          </select>
          <input name='price' id='price' className='mb-5 text-xl py-2 px-7 w-[45%] rounded-lg bg-transparent border-2 border-gray-500' type="number" placeholder='price...' />
          <input name='stock' id='stock' className='mb-5 text-xl py-2 px-7 w-[45%] rounded-lg bg-transparent border-2 border-gray-500' type="number" placeholder='Quantity in Stock...' />
          <h2 className='w-full text-xl mb-3 font-semibold'>Technical Specifications:</h2>
          <input name='screenSize' id='screenSize' className='mb-5 text-xl py-2 px-7 w-[45%] rounded-lg bg-transparent border-2 border-gray-500' type="text" placeholder='Screen Size...' />
          <input name='processor' id='processor' className='mb-5 text-xl py-2 px-7 w-[45%] rounded-lg bg-transparent border-2 border-gray-500' type="text" placeholder='Processor...' />
          <input name='ram'  id='ram' className='mb-5 text-xl py-2 px-7 w-[45%] rounded-lg bg-transparent border-2 border-gray-500' type="text" placeholder='Ram...' />
          <input name='storage' id='storage' className='mb-5 text-xl py-2 px-7 w-[45%] rounded-lg bg-transparent border-2 border-gray-500' type="text" placeholder='Storage...' />
          <input name='graphicCard' id='graphicCard' className='mb-5 text-xl py-2 px-7 w-[45%] rounded-lg bg-transparent border-2 border-gray-500' type="text" placeholder='Graphics Card...' />
          <input name='operationSystem' id='operationSystem' className='mb-5 text-xl py-2 px-7 w-[45%] rounded-lg bg-transparent border-2 border-gray-500' type="text" placeholder='Operating System...' />
          <input name='battery' id='battery' className='mb-5 text-xl py-2 px-7 w-[45%] rounded-lg bg-transparent border-2 border-gray-500' type="text" placeholder='Battery Info...' />

          <textarea
            className='mb-5 text-xl py-2 px-7 w-full rounded-lg bg-transparent border-2 border-gray-500'
            name="description" 
            id="description"
            placeholder='Description...'
          ></textarea>
          {/* Cloudinary Image Upload */}
            <CldUploadWidget
              onSuccess={handleUploadSuccess}
              onQueuesEnd={(result, {widget}) => {
                widget.close();
              }}
              signatureEndpoint="/api/widget-signature"
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
          <input type='hidden' name="publicId" value={publicId}></input>
          <input type='hidden' name="version" value={version}></input>
          <input type='hidden' name="signature" value={signature}></input>
        </div>
        <div className='flex justify-end my-5'>
          <SubmitButton />
        </div>

        {/* Preview Image */}
        {
          publicId && (
          <CldImage
            width="300"
            height="330"
            src={publicId}
            sizes="100vw"
            alt="Description of my image"
          />
          )
        }
      </form>
    </div>
  )
}
