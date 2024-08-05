"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { signInByCredencails } from "@/app/actions";
import { useRouter } from "next/navigation";

export default function SigninForm() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const onGoogleSignIn = () => {
        signIn('google');
    }

    const onCredentialsSignIn = async () => {
        const res = await signInByCredencails(email, password);
        setError(res.message);
        if (res.ok) {
            router.push('/');
        }

    }

    return (
        <>
            <h2>{error}</h2>
            <form action={onCredentialsSignIn} method="POST" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className="text-center text-2xl font-bold mb-6">Login</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Email
                    </label>
                    <input onChange={(e:any) => setEmail(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="example@example.com" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input onChange={(e:any) => setPassword(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                </div>
                <div className="flex items-center justify-between">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Sign In
                    </button>
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        Forgot Password?
                    </a>
                </div>
            </form>
            
            
            
            <div className='border p-4 rounded bg-slate-200 text-center btn'>
                <button onClick={onGoogleSignIn} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                    Sign in with Google
                </button>
            </div>
        </>
    )
}
