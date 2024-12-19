"use client";

import { useRouter } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoChevronBackOutline } from "react-icons/io5";
import EmailConfirmationForm from "./EmailConfirmationForm";
import { signIn } from "next-auth/react";
import { handlerGoogleSignIn } from "@/lib/auth/googleSignInServerAction";

export default function SigninForm() {
    const router = useRouter();

    const handlerGitHubSignIn = () => {
        signIn('github', { redirectTo: '/' });
    }
    
    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">

            <EmailConfirmationForm />

            <div className="relative flex items-center justify-center my-6">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-700"></div>
                </div>
                <span className="relative px-2 bg-black text-gray-400 text-sm font-medium rounded-lg">
                    OR
                </span>
            </div>
            
            <div>
                <button
                    onClick={() => handlerGoogleSignIn()}
                    className="w-full flex items-center justify-center gap-2 bg-white text-gray-700 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-100 transition duration-300 border border-gray-300"
                >
                    <FcGoogle />
                    Continue with Google
                </button>
                <button
                    onClick={handlerGitHubSignIn}
                    className="mt-4 w-full flex items-center justify-center gap-2 bg-white text-gray-700 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-100 transition duration-300 border border-gray-300"
                >
                    <FaGithub />
                    Continue with GitHub
                </button>
            </div>

            <div className="flex justify-center mt-4">
                <button
                    className="bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 border"
                    onClick={() => router.back()}
                >
                    <span><IoChevronBackOutline /></span>Back
                </button>
            </div>
        </div>
    )
}


    // const onCredentialsSignIn = async () => {
    //     const res = await signInByCredencails(email, password);
    //     setError(res.message);
    //     if (res.ok) {
    //         router.push('/');
    //     }
    // }

{/* <form action={onCredentialsSignIn} method="POST" >
        <h2 className="text-2xl font-semibold text-center">Sign In</h2>
        <p className="text-center text-gray-500 mb-4">Welcome back! Please log in to your account.</p>
        <div className="mb-5">
            <label className="text-gray-700 mb-2 text-xl" htmlFor="username">
                Email :
            </label>
            <input 
                onChange={(e:any) => setEmail(e.target.value)}
                className="shadow appearance-none border border-sky-300 rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" 
                placeholder="example@example.com"
            />
        </div>
        <div className="mb-6">
            <label className="text-gray-700 mb-2 text-xl" htmlFor="password">
                Password :
            </label>
            <input 
                onChange={(e:any) => setPassword(e.target.value)} 
                className="shadow appearance-none  border border-sky-300 rounded-xl w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" 
                placeholder="-- -- -- -- -- --"
            />
        </div>
        <div className="flex items-center justify-between">
            <div className="flex items-center justify-between">
                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                >
                    Sign In
                </button>
            </div>
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                Forgot Password?
            </a>
        </div>
    </form> */}