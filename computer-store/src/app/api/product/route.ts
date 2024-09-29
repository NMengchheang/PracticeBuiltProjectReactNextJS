import { connectToMongoDB } from "@/lib/db";
import Product from "@/models/productModel";
import { NextResponse } from "next/server";

export async function GET() {
    await connectToMongoDB();

    try {
        const products = await Product.find();
        return NextResponse.json(products);
    } catch (err:any) {
        return NextResponse.json({ error: err.message });
    } 
}