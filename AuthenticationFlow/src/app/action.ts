"use server";

import {z} from "zod";
import { createSession, deleteSession } from "./lib/session";
import { redirect } from "next/navigation";

const testUser = {
    id: '1',
    email: "contact@condensolution.io",
    password: "123456",
};

const loginSchema = z.object({
    email: z.string().email({ message: "Invalid email address"}).trim(),
    password: z
        .string()
        .min(6, { message : "Password must be at least 8 characters"})
        .trim(),
});

export async function login(prevState: any, formData: FormData) {
    const result = loginSchema.safeParse(Object.fromEntries(formData));

    if (!result.success) {
        return {
            errors: result.error.flatten().fieldErrors,

        };
    }
    const { email, password } = result.data;

    if (email !== testUser.email || password !== testUser.password) {
        return {
            errors: {
                email: ["Invalid email or password"],
            },
        };
    }

    await createSession(testUser.id);

    redirect("/blog");
}

export async function logout() {
    await deleteSession();
    redirect("/signup");
}