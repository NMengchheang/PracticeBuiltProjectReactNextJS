"use client";

import React, { useRef, useState } from 'react';
import { createProducts } from '@/app/actions';
import SubmitButton from './SubmitButton';
import { CldImage } from 'next-cloudinary';
import { CldUploadWidget } from 'next-cloudinary';

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
      <form 
        ref={ref}
        action={async (formData) => {
          ref.current?.reset();
          await createProducts(formData);
        }}
      >
        <div className='flex flex-wrap justify-between'>
          <input name='productName' id='productName' className='mb-5 text-xl py-2 px-7 w-[45%] rounded-lg bg-transparent text-[var(--text)] border-2 border-gray-500' type="text" placeholder='Product name...'/>
          <select name="category" id="category" className='mb-5 text-xl py-2 px-7 w-[45%] rounded-lg bg-transparent border-2 border-gray-500'>
            <option className='text-black' value="general">Choose a Category</option>
            <option className='text-black' value="kitchen">Kitchen</option>
            <option className='text-black' value="phone">Phone</option>
            <option className='text-black' value="computer">Computer</option>
          </select>
          <input name='price' id='price' className='mb-5 text-xl py-2 px-7 w-[45%] rounded-lg bg-transparent border-2 border-gray-500' type="number" placeholder='price' />
          <input name='stock' id='stock' className='mb-5 text-xl py-2 px-7 w-[45%] rounded-lg bg-transparent border-2 border-gray-500' type="number" placeholder='stock' />
          <input name='color' id='color' className='mb-5 text-xl py-2 px-7 w-[45%] rounded-lg bg-transparent border-2 border-gray-500' type="text" placeholder='color' />
          <input name='screenSize'  id='screenSize' className='mb-5 text-xl py-2 px-7 w-[45%] rounded-lg bg-transparent border-2 border-gray-500' type="text" placeholder='Screen Size' />
          <textarea
            className='mb-5 text-xl py-2 px-7 w-full rounded-lg bg-transparent border-2 border-gray-500'
            name="description" 
            id="description"
            placeholder='Description'
          ></textarea>
            <CldUploadWidget
              onSuccess={handleUploadSuccess}
              onQueuesEnd={(result, {widget}) => {
                widget.close();
              }}
              signatureEndpoint="/api/widget-signature">
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
          <input type='hidden' name="publicId" value={publicId}></input>
          <input type='hidden' name="version" value={version}></input>
          <input type='hidden' name="signature" value={signature}></input>
        </div>
        <div className='flex justify-end my-5'>
          <SubmitButton />
        </div>
        {/* {
          imageId && (
          <CldImage
            width="600"
            height="960"
            src={imageId}
            sizes="100vw"
            alt="Description of my image"
          />
          )
        } */}
      </form>
    </div>
  )
}
