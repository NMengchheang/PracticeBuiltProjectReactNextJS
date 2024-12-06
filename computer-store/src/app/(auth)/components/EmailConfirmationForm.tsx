
import { subscribe } from "@/actions/subscribe";
import { useRouter } from "next/navigation";

export default function EmailConfirmationForm() {
    const router = useRouter();
    const handleSubmit = async (formData: FormData) => {
        const { error, data } = await subscribe(formData);
        if (error) {
            console.error(error);
        } else {
            console.log(data);
            router.push('/subscriber/pending')
        }

    }

    return (
        <>
            <form action={handleSubmit}>
                <div className="mb-5">
                    <label className="text-gray-700 mb-2 text-xl hidden" htmlFor="email">
                        Email :
                    </label>
                    <input
                        id="email" 
                        type="text"
                        name="email" 
                        className="shadow appearance-none border border-sky-300 rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="example@example.com"
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
            </form>
        </>
    );
}
