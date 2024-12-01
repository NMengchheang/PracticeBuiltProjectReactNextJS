import { connectToMongoDB } from "@/lib/db";
import Computer from "@/models/computerModel";
import { NextResponse } from "next/server";

// GET - Fetch all computers or a single computer by ID (if query param provided)
export async function GET(request: Request) {
    await connectToMongoDB();
    
    // Extract query params if any
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    try {
        if (id) {
            // Fetch a single computer by ID
            const computer = await Computer.findById(id).lean();
            if (!computer) {
                return NextResponse.json({ error: "Computer not found" }, { status: 404 });
            }
            return NextResponse.json(computer);
        } else {
            // Fetch all computers
            const computers = await Computer.find().lean();
            return NextResponse.json(computers);
        }
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}