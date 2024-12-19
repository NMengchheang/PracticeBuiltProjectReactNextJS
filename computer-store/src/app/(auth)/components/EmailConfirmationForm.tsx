import { subscribe } from "@/actions/subscribe";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useFormStatus } from "react-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai"; // Import spinner icon
import { toast } from "react-hot-toast";

export default function EmailConfirmationForm() {
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    const { pending } = useFormStatus();
    
    const handleSubmit = async (formData: FormData) => {

        setError(null);
        
        const { error, data } = await subscribe(formData);

        if (error) {
            setError(error);
            toast.error(error);
        } else {
            toast.success(data as string);
            console.log(data);
            router.push('/subscriber/pending')
            // alert("Check your email to confirm.");
        }
    }

    return (
        <>
            <div className="text-center mt-4 mb-4">
                <h1 className="font-semibold text-3xl">Login Form</h1>
            </div>

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
                        disabled={pending}
                        className={`w-full bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ${
                            pending ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                    >
                        {pending ? (
                            <div className="flex items-center justify-center space-x-2">
                                <AiOutlineLoading3Quarters className="animate-spin" />
                                <span>Submitting...</span>
                            </div>
                        ) : (
                            "Submit"
                        )}
                    </button>
                </div>
                <a
                    className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 mt-2 text-center"
                    href="#"
                >
                    Forgot Password?
                </a>
                </div>
            </form>
        </>
    );
}
