"use server";

import { signIn } from "./Authservices";

export const handlerGoogleSignIn = async () => {
    try {
        await signIn("google", { redirectTo: "/" });
    } catch (error){
        throw error;
    }
}