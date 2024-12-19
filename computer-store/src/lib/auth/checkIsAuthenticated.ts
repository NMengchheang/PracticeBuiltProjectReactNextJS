"use server";
import { auth } from "@/lib/auth/Authservices";
export const checkIsAuthenticated = async () => {
    const session = await auth();

    if (session) {
        return true;
    } else {
        return false;
    }
}