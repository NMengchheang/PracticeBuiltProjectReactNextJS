"use client";

import GoogleSignInImage from "@/images/google-sign-in.jpg";
import Image from "next/image";
import { signIn } from "next-auth/react";

export default function LoginForm() {
    
    const onGoogleSignIn = () => {
        signIn('google');
    }

    return (
        <div>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className="text-center text-2xl font-bold mb-6">Login</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Sign In
                    </button>
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        Forgot Password?
                    </a>
                </div>
            </form>
            <div className="mt-10 text-center text-sm text-gray-500">
                <button onClick={onGoogleSignIn}>
                    <Image src={GoogleSignInImage} width={200} height={200} alt="Sign in with Google"/>
                </button>
            </div>
        </div>
    )
}
