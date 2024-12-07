import { subscribe } from "@/actions/subscribe";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EmailConfirmationForm() {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    
    const handleSubmit = async (formData: FormData) => {

        setError(null);
        setLoading(true);
        
        const { error, data } = await subscribe(formData);

        setLoading(false);

        if (error) {
            setError(error);
        } else {
            console.log(data);
            router.push('/subscriber/pending')
            // alert("Check your email to confirm.");
        }
    }

    return (
        <>
            <form action={handleSubmit}>
                {
                    error && (
                        <div className="text-red-600 text-sm bg-red-200 p-2 rounded mb-2 text-center">
                            { error }
                        </div>
                    )
                }
                <div className="mb-5">
                    <label className="text-gray-700 mb-2 text-xl hidden" htmlFor="email">
                        Email :
                    </label>
                    <input
                        id="email" 
                        type="text"
                        name="email"
                        className="shadow appearance-none border border-sky-300 rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            disabled={loading}
                            className= { `w-full bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ${loading ? "opacity-50" : ""}`}
                        >
                            {loading ? "Submitting..." : "Sign In"}
                        </button>
                    </div>
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        Forgot Password?
                    </a>
                </div>
            </form>
        </>
    );
}
