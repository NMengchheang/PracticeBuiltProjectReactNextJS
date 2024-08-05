"use server";

import { signIn, signOut } from "@/service/Authservices";

export const signOutUser = async () => {
    await signOut();
}

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
}