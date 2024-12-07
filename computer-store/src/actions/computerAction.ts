"use server";
import { connectToMongoDB } from "@/lib/db";
import Computer, { ComputerDocument, PartialComputer } from "@/models/computerModel";
import { revalidatePath } from "next/cache";

export const createComputers = async (formData: FormData) => {

    console.log(formData.get('publicId'));

    await connectToMongoDB();
    // Extracting product content and time from formData
    const productName = formData.get('productName');
    const brand = formData.get('brand');
    const categoryComputer = formData.get('categoryComputer');
    const price = formData.get('price');
    const stock = formData.get('stock');
    const screenSize = formData.get('screenSize');
    const processor = formData.get('processor');
    const ram = formData.get('ram');
    const storage = formData.get('storage');
    const graphicCard = formData.get('graphicCard');
    const operationSystem  = formData.get('operationSystem');
    const battery   = formData.get('battery');
    const description = formData.get('description');
    
    // Extracting Cloudinary metadata
    const publicId = formData.get('publicId');
    const signature = formData.get('signature');
    const version = formData.get('version');
    
    try {
        // Creating a new product using Todo model
        const newProduct = await Computer.create({
            productName,
            brand,
            categoryComputer,
            price,
            stock,
            screenSize,
            processor,
            ram,
            storage,
            graphicCard,
            operationSystem,
            battery,
            description,
            publicId, // Image upload public_id
            signature, // Image upload signature
            version,   // Image version from Cloudinary
        });
        // Saving the new product
        newProduct.save();

        // Triggering revalidation of the specified path ("/")
        revalidatePath("/");

        // Returning the string representation of the new todo
        return newProduct.toString();
    } catch (error) {
        console.log("Error creating product:", error);
        return { message: 'Error creating product' };
    }
};

export async function fetchComputers() {
    const res = await fetch("http://localhost:3000/api/computers", { cache: "no-store"});
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

// Function to fetch a computer by ID from the API route
export async function getComputerById(id: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/computers?id=${id}`, {
        cache: 'no-store' // Ensure latest data is fetched on each request
    });
    
    if (!res.ok) {
        return null;
    }

    const computer = await res.json();
    return computer;
}

// Update computer data
export async function updateComputer(id:string, formData: FormData) {
    
    try {
        await connectToMongoDB()

        const data: PartialComputer = {
            productName: formData.get('productName') as string || undefined,
            brand: formData.get('brand') as string || undefined,
            categoryComputer: formData.get('categoryComputer') as string || undefined,
            price: formData.get('price') as string || undefined,
            stock: formData.get('stock') as string || undefined,
            screenSize: formData.get('screenSize') as string || undefined,
            processor: formData.get('processor') as string || undefined,
            ram: formData.get('ram') as string || undefined,
            storage: formData.get('storage') as string || undefined,
            graphicCard: formData.get('graphicCard') as string || undefined,
            operationSystem: formData.get('operationSystem') as string || undefined,
            battery: formData.get('battery') as string || undefined,
            description: formData.get('description') as string || undefined,
            publicId: formData.get('publicId') as string || undefined,
            signature: formData.get('signature') as string || undefined,
            version: formData.get('version') as string || undefined,
        }
        // Remove undefined values
        Object.keys(data).forEach(key => data[key as keyof PartialComputer] === undefined && delete data[key as keyof PartialComputer])
    
        const updatedComputer = await Computer.findByIdAndUpdate(
            id,
            data,
            { new: true, runValidators: true }
        ) as ComputerDocument | null;
      
        if (!updatedComputer) {
            throw new Error('Computer not found')
        }

        // Convert the MongoDB document to a plain JavaScript object
        const plainComputerObject = JSON.parse(JSON.stringify(updatedComputer));

        // Revalidate the cache for the computers page
        revalidatePath('/computers')

        return { success: true, message: 'Computer updated successfully', computer: plainComputerObject }
    } catch (error) {
        console.error('Error updating computer:', error)
        return { success: false, message: 'Error updating computer', error: (error as Error).message }
    }
    
}

// Delete computer data
export async function deleteComputer(id: string) {
    try {
        await connectToMongoDB();

        const deletedComputer = await Computer.findByIdAndDelete(id);

        if (!deletedComputer) {
            return { success: false, message: 'Computer not found'};
        }

        // Revalidate the cache for the computers page
        revalidatePath('/computers');

        return { success: true, message: 'Computer deleted successfully'};
    } catch (error) {
        console.error('Error deleting computer:', error);
        return { success: false, message: 'Error deleting computer', error: (error as Error).message };
    }
}