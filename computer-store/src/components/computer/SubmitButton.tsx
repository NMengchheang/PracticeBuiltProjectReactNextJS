import React from "react";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button
            type="submit"
            { ...(pending && {disabled: true })}
            className='bg-blue-500 px-9 py-4 rounded-2xl'
        >
            {pending ? "Adding..." : "Add Todo"}
        </button>
    )
}