"use client"

import { useFormStatus } from "react-dom";
import { login } from "../action";
import { useActionState } from "react";

export function SignUpForm() {
    
    // Use the initial state in the action state hook
    // The state it's connected to the actions and based on what login function returns
    const [state, loginAction, pending] = useActionState(login, undefined);

    return (
        <div className="mt-12 max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
            <form action={loginAction} className="space-y-4">

                {/* Email Field */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
                    />
                    {state?.errors?.email && (
                        <p className="mt-1 text-sm text-red-500">{state.errors.email}</p>
                    )}
                </div>

                {/* Password Field */}
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
                    />
                    {state?.errors?.password && (
                        <p className="mt-1 text-sm text-red-500">{state.errors.password}</p>
                    )}
                </div>
                <SubmitButton />

            </form>
        </div>
    )
}

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button disabled={pending} type="submit"
            className={`w-full px-4 py-2 text-white font-medium rounded-md ${
                pending
                ? "bg-indigo-300 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
        >
            Login
        </button>
    )
}