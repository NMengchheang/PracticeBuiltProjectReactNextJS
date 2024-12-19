"use client";

import { useRouter } from "next/navigation";
import { handlerSignOut } from "@/lib/auth/signOutServerAction";

export default function LogoutForm() {

    const router = useRouter();
    return (
        <div className="max-w-[1280px] ps-4 pe-4 pt-4 pb-4 w-full bg-zinc-800 rounded-lg space-y-6">
            <h2 className="text-xl font-semibold text-center text-white">Are you sure you want to logout ?</h2>
            <div className="flex gap-4">
                <button 
                    className="flex-1 border-zinc-700 text-white hover:bg-zinc-800 rounded-lg p-2" 
                    onClick={() => router.back()}
                >
                    Cancel
                </button>
                <button 
                    className="flex-1 bg-blue-500 hover:bg-blue-600 rounded-lg p-2"
                    onClick={() => handlerSignOut()}
                >
                    Sign Out
                </button>
            </div>
        </div>
    )
}