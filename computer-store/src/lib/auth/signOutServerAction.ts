"use server";

import { signOut } from "./Authservices";

export const handlerSignOut = async () => {
    try {
        await signOut();
    } catch (error){
        throw error;
    }
}