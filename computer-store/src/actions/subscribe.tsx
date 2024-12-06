"use server";

import { z } from "zod"; 
import { v4 as uuidv4 } from 'uuid';
import { createSubscriber } from "@/lib/queries";

interface RetVal<T> {
    error? : string;
    data? : T;
}

const subscribeSchema = z.object({
    email: z.string().email(),
})

export const subscribe = async (formData: FormData): Promise<RetVal<any>> => {
    const email = formData.get("email");
    const parsed = subscribeSchema.safeParse( { email });

    if (!parsed.success) {
        return { error: "Invalid email"};
    }

    const validatedEmail = parsed.data.email.toLowerCase();

    const token = uuidv4();
    const newSubscriber = await createSubscriber(validatedEmail, token);

    return {data: newSubscriber};
}