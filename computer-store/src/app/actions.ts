"use server";
import Product from "@/models/productModel";
import { revalidatePath } from "next/cache";
import { connectToMongoDB } from "@/lib/db";

import { signIn, signOut } from "@/service/Authservices";

export const signOutUser = async () => {
    await signOut();
};

export const signInByCredencails = async (email: string, password: string, redirect: boolean=false) => {
    try {
        const res = await signIn('credentials', {
            email,
            password,
            redirect
        });
        return {
            ok: true,
            message: ''
        }
    } catch (error: any) {
        return {
            ok: false,
            message: 'Invalid credencials!!'
        }
    }
};

export const createProducts = async (formData: FormData) => {

    console.log(formData.get('publicId'));

    await connectToMongoDB();
    // Extracting product content and time from formData
    const productName = formData.get('productName');
    const category = formData.get('category');
    const price = formData.get('price');
    const colorProduct = formData.get('colorProduct');
    const stock = formData.get('stock');
    const screenSize = formData.get('screenSize');
    const description = formData.get('description');
    const publicId = formData.get('publicId');
    try {
        // Creating a new product using Todo model
        const newProduct = await Product.create({
            productName,
            category,
            price,
            colorProduct,
            stock,
            screenSize,
            description,
            publicId
        });
        // Saving the new todo
        newProduct.save();

        // Triggering revalidation of the specified path ("/")
        revalidatePath("/");
        // Returning the string representation of the new todo
        return newProduct.toString();
    } catch (error) {
        console.log(error);
        return {message: 'error creating todo'};
    }
};