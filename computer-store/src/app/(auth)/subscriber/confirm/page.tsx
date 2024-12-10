import { MdVerifiedUser } from "react-icons/md";
import { getSubscriberByToken, updateSubscriberToVerified } from "@/lib/queries";

interface ConfirmPageProps {
    searchParams: {
        token: string;
    };
}

export default async function ConfirmPage({searchParams} : ConfirmPageProps) {
    const {token} = searchParams;
    const existingSubscriber = await getSubscriberByToken(token);
    if (!existingSubscriber) {
        throw new Error("Invalid token");
    }
    await updateSubscriberToVerified(existingSubscriber.xata_id);
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
            <div className="max-w-md w-full p-8 bg-white rounded-xl shadow-lg text-center">
                <h1 className="mb-6 text-xl font-semibold text-gray-800 break-words">
                    {existingSubscriber.email}
                </h1>
                <div className="flex items-center justify-center space-x-2 mb-8">
                    <h2 className="text-3xl font-bold text-green-600">Verified!</h2>
                    <MdVerifiedUser className="text-green-600 text-4xl" />
                </div>
                <p className="text-gray-600">
                    Your email has been successfully verified. Thank you for confirming your subscription!
                </p>
            </div>
        </div>
    )
}
