"use client";

import { useRouter } from "next/navigation";
import {useForm} from "react-hook-form";

export default function CreateToDo() {
  const route = useRouter();
  const {
      id,
      title,
      dueDate,
      register,
      handleSubmit,
      formState: {errors}
  } = useForm();
  const onSubmit = data => {
      console.log('data', data);
      route.push('/todos');
  }
    
  return (
      <div>
        <form  onSubmit={handleSubmit(onSubmit)}>
          <input {...register("id")} placeholder="Auto Generate"/>
          <label className="block text-gray-700 text-sm font-bold mb-2 mt-5" htmlFor="title">
            Title
          </label>
          <input id="title" {...register("title", {required: true})} className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            {errors.title && <span className="text-red-500 text-xs italic">This field is reequired!!</span>}
          <label className="block text-gray-700 text-sm font-bold mb-2 mt-5" htmlFor="dueDate">
            DueDate
          </label>
          <input type="date" id="dueDate" {...register("dueDate", {required: true})} className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            {errors.dueDate && <span className="text-red-500 text-xs italic">This field is reequired!!</span>}
          <div className="flex items-center justify-between mt-5">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Save</button>
          </div>
        </form>
      </div>
  )
}
