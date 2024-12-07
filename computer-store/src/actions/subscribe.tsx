"use server";

import { z } from "zod"; 
import { v4 as uuidv4 } from 'uuid';
import { createSubscriber } from "@/lib/queries";
import { sendConfirmationEmail } from "@/lib/email";

interface RetVal<T> {
    error? : string;
    data? : T;
}

const subscribeSchema = z.object({
    email: z.string().email(),
})

export const subscribe = async (formData: FormData): Promise<RetVal<string>> => {
    const email = formData.get("email");

    if (!email || typeof email !== "string") {
        return { error: "Email is required" };
    }
    
    const parsed = subscribeSchema.safeParse( { email });

    if (!parsed.success) {
        return { error: "Invalid email format!"};
    }

    const validatedEmail = parsed.data.email.toLowerCase();
    const token = uuidv4();

    try {
        const newSubscriber = await createSubscriber(validatedEmail, token);
        // return { data: newSubscriber };
    } catch (error: any) {
        console.error(error);
        if(error?.code === 'P2002') {
            return { error: "This email is already subscribed!"};
        }
        return { error: 'Failed to process subscription'};
    }
    
    const link = `${process.env.NEXT_PUBLIC_BASE_URL}/confirm?token/${token}`;
    const res = await sendConfirmationEmail(validatedEmail, link);
    
    if (res?.error) {
        return { error: "Failed to send confirmation email"};
    }
    
    return {data: "Check your email to confirm."};
}